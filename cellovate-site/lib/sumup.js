// Card payments through SumUp (Payment Widget + Checkouts API).
//
// Vercel environment variables:
//   SUMUP_API_KEY        secret API key (sup_sk_...) from the SumUp dashboard
//   SUMUP_MERCHANT_CODE  merchant code of the SumUp account (e.g. MXXXXXXX)
//   SUMUP_CURRENCY       currency of the SumUp account, default EUR
//   SUMUP_FX_RATE        optional fallback USD -> account currency rate, used
//                        only if the daily ECB rate cannot be fetched
//
// Card payments stay hidden on the checkout until the key and merchant code
// are set. Catalog prices are in USD; when the SumUp account is in another
// currency the amount is converted at the daily ECB rate and shown to the
// shopper before paying.
import nodemailer from "nodemailer";
import { getOrder, updateOrder, claimOnce, storeEnabled } from "./orderStore";
import { shipUrl } from "./adminAuth";
import { placedOrder, paidForOrder, safely } from "./omnisend";

const API = `${String(process.env.SUMUP_API_BASE || "https://api.sumup.com").replace(/\/+$/, "")}/v0.1`;
export const SITE_URL = "https://www.cellovateadvancedpeptides.com";

export function sumupConfig() {
  return {
    apiKey: String(process.env.SUMUP_API_KEY || "").trim(),
    merchantCode: String(process.env.SUMUP_MERCHANT_CODE || "").trim(),
    currency: String(process.env.SUMUP_CURRENCY || "EUR").trim().toUpperCase(),
  };
}

// The order list (Redis) holds the shipping details until the payment is
// confirmed, so card payments need it too.
export function sumupEnabled() {
  const { apiKey, merchantCode } = sumupConfig();
  return Boolean(apiKey && merchantCode && storeEnabled());
}

let fxCache = null; // { currency, rate, at }

// USD -> account currency. Cached for an hour.
export async function usdRate(currency) {
  if (currency === "USD") return 1;
  if (fxCache && fxCache.currency === currency && Date.now() - fxCache.at < 3600e3) {
    return fxCache.rate;
  }
  try {
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currency}`
    );
    const data = await res.json();
    const rate = Number(data?.rates?.[currency]);
    if (!res.ok || !rate) throw new Error(`no rate (${res.status})`);
    fxCache = { currency, rate, at: Date.now() };
    return rate;
  } catch (err) {
    const fallback = Number(process.env.SUMUP_FX_RATE || 0);
    if (fallback > 0) return fallback;
    throw new Error(`Exchange rate unavailable: ${err.message}`);
  }
}

async function api(path, init = {}) {
  const { apiKey } = sumupConfig();
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    const msg = data?.message || data?.error_message || JSON.stringify(data)?.slice(0, 200);
    throw new Error(`SumUp ${res.status}: ${msg}`);
  }
  return data;
}

export async function createCheckout({ reference, amount, currency, description }) {
  const { merchantCode } = sumupConfig();
  return api("/checkouts", {
    method: "POST",
    body: JSON.stringify({
      checkout_reference: reference,
      amount,
      currency,
      merchant_code: merchantCode,
      description,
      return_url: `${SITE_URL}/api/sumup-webhook`,
    }),
  });
}

export async function getCheckout(id) {
  return api(`/checkouts/${encodeURIComponent(id)}`);
}

// "CEL-123456.k3j9x" -> "CEL-123456"
export function orderIdFromReference(ref) {
  return String(ref || "").split(".")[0];
}

function smtp() {
  const user = String(process.env.ZOHO_SMTP_USER || "").trim();
  const pass = String(process.env.ZOHO_SMTP_PASS || "").trim();
  const owner = String(process.env.OWNER_NOTIFICATION_EMAIL || "").trim() || user;
  if (!user || !pass) return null;
  return {
    user,
    owner,
    transporter: nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    }),
  };
}

// Called by the widget confirmation and by the SumUp webhook. Always
// re-reads the checkout from SumUp (never trusts the caller), and does the
// paid-order work once: order list, owner + customer emails, Omnisend.
export async function finalizeCheckout(checkoutId) {
  const checkout = await getCheckout(checkoutId);
  const orderId = orderIdFromReference(checkout.checkout_reference);
  // Only checkouts opened by this site (CEL-… with a saved order).
  if (!/^CEL-\d+$/.test(orderId) || !(await getOrder(orderId))) {
    return { status: "IGNORED", orderId };
  }
  if (checkout.status !== "PAID") {
    if (["FAILED", "EXPIRED"].includes(checkout.status)) {
      await updateOrder(orderId, (cur) =>
        cur.status === "awaiting_payment" ? { paymentStatus: checkout.status.toLowerCase() } : {}
      );
    }
    return { status: checkout.status, orderId };
  }

  if (!(await claimOnce(`sumup-paid:${checkout.id}`))) {
    return { status: "PAID", orderId, already: true };
  }

  const order = await updateOrder(orderId, (cur) => ({
    status: cur.status === "shipped" ? "shipped" : "paid",
    paidAt: Date.now(),
    paymentStatus: "paid",
    paymentId: checkout.transaction_code || checkout.id,
    chargeAmount: checkout.amount,
    chargeCurrency: checkout.currency,
  }));
  if (!order) return { status: "PAID", orderId };

  const mail = smtp();
  if (mail) {
    const charged = `${Number(checkout.amount).toFixed(2)} ${checkout.currency}`;
    const link = shipUrl(orderId, order.email);
    try {
      await mail.transporter.sendMail({
        from: mail.user,
        to: mail.owner,
        replyTo: order.email || undefined,
        subject: `Payment confirmed (card) — ship order ${orderId}`,
        text: `Card payment confirmed by SumUp.

Order: ${orderId}
SumUp transaction: ${checkout.transaction_code || checkout.id}
Charged: ${charged}

${(order.lines || []).join("\n")}

${order.totals || ""}

Email: ${order.email}
Shipping address:
${order.name ? `${order.name}\n` : ""}${order.address || ""}
${order.notes ? `\nOrder notes:\n${order.notes}\n` : ""}${
          link ? `\nOnce shipped, notify the customer in one click:\n${link}\n` : ""
        }
All orders: ${SITE_URL}/admin`,
      });
    } catch (err) {
      console.error("Owner card email failed", err);
    }
    if (order.email) {
      try {
        await mail.transporter.sendMail({
          from: `Cellovate Advanced Peptides <${mail.user}>`,
          to: order.email,
          subject: `Your Cellovate order ${orderId} — payment received`,
          text: `Thank you — your card payment of ${charged} for order ${orderId} has been received.

${(order.lines || []).join("\n")}

${order.totals || ""}

Shipping to:
${order.name ? `${order.name}\n` : ""}${order.address || ""}

We are now preparing your order and will email you again once it ships.

Cellovate Advanced Peptides — for research use only, not for human consumption.`,
        });
      } catch (err) {
        console.error("Customer card email failed", err);
      }
    }
  }

  if (order.customer && Array.isArray(order.items)) {
    const summary = order.pricing || { total: order.total };
    await safely("placed order", () =>
      placedOrder({ orderId, customer: order.customer, items: order.items, order: summary, paid: true })
    );
    await safely("paid for order", () =>
      paidForOrder({ orderId, email: order.email, items: order.items, order: summary })
    );
  }

  return { status: "PAID", orderId };
}


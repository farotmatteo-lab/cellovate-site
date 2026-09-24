// POST /api/create-payment
// Body: { orderId, payCurrency: "btc" | "eth" | "usdttrc20", code?, customer,
//         items: [{ id, variantKey, qty }] }
// The amount charged is recomputed here from lib/products + shipping; any
// `amount` sent by the browser is ignored.
//
// Requires the environment variable NOWPAYMENTS_API_KEY (the PRIVATE api key,
// e.g. 1AFH...YP1R) set in your hosting provider (Vercel: Project Settings ->
// Environment Variables). Never put this key in frontend code.

import nodemailer from "nodemailer";
import { promoFromRequest } from "../../lib/promos";
import { placedOrder, safely, encodeCart } from "../../lib/omnisend";
import { computeOrder, formatTotals } from "../../lib/pricing";
import { validateCustomer, formatAddress } from "../../lib/countries";

// Emails the shipping details as soon as a payment is created, so an order is
// never left with a payment on NOWPayments and no address on our side.
async function emailOrderDetails({ orderId, customer, order, payment }) {
  // Trim every value pulled from env: a stray space or newline pasted into
  // Vercel's dashboard silently breaks nodemailer's "No recipients defined"
  // check even though the variable "looks" set.
  const smtpUser = String(process.env.ZOHO_SMTP_USER || "").trim();
  const smtpPass = String(process.env.ZOHO_SMTP_PASS || "").trim();
  const ownerEmail =
    String(process.env.OWNER_NOTIFICATION_EMAIL || "").trim() || smtpUser;

  if (!smtpUser || !smtpPass) {
    console.warn("Zoho SMTP not configured — order details not emailed.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const summary = `Order: ${orderId}
Payment ID: ${payment?.payment_id || "n/a"}
Paid in: ${payment?.pay_currency || "crypto"}
Status: awaiting payment

${order.lines.join("\n")}

${formatTotals(order)}

Email: ${customer.email}
Shipping address:
${formatAddress(customer)}
${customer.notes ? `\nOrder notes:\n${customer.notes}` : ""}`;

  await transporter.sendMail({
    from: smtpUser,
    to: ownerEmail,
    replyTo: customer.email,
    subject: `New order awaiting payment — ${orderId}`,
    text: summary,
  });

  await transporter.sendMail({
    from: smtpUser,
    to: customer.email,
    subject: `Your Cellovate order ${orderId}`,
    text: `Thank you — we have received your order.

${order.lines.join("\n")}

${formatTotals(order)}

Shipping to:
${formatAddress(customer)}

Your order ships once the crypto payment is confirmed. You will get another email at that point.

Cellovate Advanced Peptides — for research use only, not for human consumption.`,
  });
}

// NOWPayments posts payment status updates here. Use the www host: the bare
// domain redirects, and a redirected POST loses its body.
const DEFAULT_IPN_URL =
  "https://www.cellovateadvancedpeptides.com/api/nowpayments-webhook";

function ipnCallbackUrl() {
  const fromEnv = String(process.env.NOWPAYMENTS_IPN_URL || "").trim();
  return /^https:\/\/\S+$/.test(fromEnv) ? fromEnv : DEFAULT_IPN_URL;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId, payCurrency, customer, items } = req.body || {};

  const { promo, invalid } = promoFromRequest(req.body);
  if (invalid.length) {
    return res.status(400).json({ error: "Invalid promo code." });
  }

  const order = computeOrder(items, promo);
  if (!order.lines.length) {
    return res.status(400).json({ error: "Cart is empty." });
  }
  if (order.total <= 0) {
    return res
      .status(400)
      .json({ error: "This order is free — no crypto payment needed." });
  }

  const check = validateCustomer(customer);
  if (!check.ok) {
    return res.status(400).json({
      error: `Missing or invalid shipping details: ${check.missing.join(", ")}.`,
    });
  }

  const allowedCurrencies = ["btc", "eth", "usdttrc20"];
  const currency = allowedCurrencies.includes(payCurrency) ? payCurrency : "btc";

  try {
    const response = await fetch("https://api.nowpayments.io/v1/payment", {
      method: "POST",
      headers: {
        "x-api-key": process.env.NOWPAYMENTS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price_amount: order.total,
        price_currency: "usd",
        pay_currency: currency,
        order_id: orderId || `CEL-${Date.now()}`,
        // The webhook reads the customer email back from here to send the
        // "payment confirmed" email (there is no database to look it up).
        // The webhook also reads the cart back from here (see encodeCart).
        order_description: `Cellovate Advanced Peptides order | ${encodeCart(
          items,
          promo?.codes
        )} | ${String(customer.email).trim()}`,
        ipn_callback_url: ipnCallbackUrl(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: data?.message || "NOWPayments error creating payment" });
    }

    try {
      await emailOrderDetails({
        orderId: orderId || data.order_id,
        customer,
        order,
        payment: data,
      });
    } catch (mailErr) {
      // The payment exists; losing the email must not break checkout.
      console.error("Order details email failed", mailErr);
    }

    // Stops Omnisend's abandoned-checkout reminders for this cart.
    await safely("placed order", () =>
      placedOrder({
        orderId: orderId || data.order_id,
        customer,
        items,
        order,
        paid: false,
      })
    );

    return res.status(200).json({
      paymentId: data.payment_id,
      payAddress: data.pay_address,
      payAmount: data.pay_amount,
      payCurrency: data.pay_currency,
      status: data.payment_status,
      expiresAt: data.expiration_estimate_date,
    });
  } catch (err) {
    return res.status(500).json({ error: "Server error creating payment" });
  }
}

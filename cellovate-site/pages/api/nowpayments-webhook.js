import crypto from "crypto";
import nodemailer from "nodemailer";
import { paidForOrder, decodeCart, safely } from "../../lib/omnisend";
import { promoFromRequest } from "../../lib/promos";
import { computeOrder } from "../../lib/pricing";
import { updateOrder } from "../../lib/orderStore";
import { shipUrl } from "../../lib/adminAuth";

// NOWPayments sends the raw JSON body plus a header `x-nowpayments-sig`
// containing an HMAC-SHA512 signature computed over the JSON with keys
// sorted alphabetically, signed with your IPN secret key.
// Set IPN secret at: NOWPayments dashboard -> Payments Settings ->
// Instant payment notifications.

export const config = {
  api: {
    bodyParser: false, // we need the raw body to verify the signature
  },
};

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function sortObject(obj) {
  if (Array.isArray(obj)) return obj.map(sortObject);
  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = sortObject(obj[key]);
        return acc;
      }, {});
  }
  return obj;
}

function smtpConfig() {
  const user = String(process.env.ZOHO_SMTP_USER || "").trim();
  const pass = String(process.env.ZOHO_SMTP_PASS || "").trim();
  const owner =
    String(process.env.OWNER_NOTIFICATION_EMAIL || "").trim() || user;
  return { user, pass, owner };
}

// create-payment stores the customer email at the end of order_description.
function customerEmailFrom(payment) {
  const match = String(payment.order_description || "").match(
    /\|\s*([^\s|@]+@[^\s|@]+\.[^\s|@]+)\s*$/
  );
  return match ? match[1] : null;
}

async function sendConfirmationEmails(payment) {
  const { user, pass, owner } = smtpConfig();
  if (!user || !pass) {
    console.warn("Zoho SMTP not configured — skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const reference = payment.order_id || payment.payment_id;
  const customerEmail = customerEmailFrom(payment);
  const shipLink = shipUrl(String(reference), customerEmail);

  await transporter.sendMail({
    from: user,
    to: owner,
    replyTo: customerEmail || undefined,
    subject: `Payment confirmed — ship order ${reference}`,
    text: `A payment has been confirmed. The shipping address was emailed when
the order was placed (subject "New order awaiting payment — ${reference}").

Order ID: ${payment.order_id || "n/a"}
Payment ID: ${payment.payment_id}
Customer: ${customerEmail || "n/a"}
Amount: ${payment.price_amount} ${payment.price_currency}
Paid in: ${payment.actually_paid || payment.pay_amount} ${payment.pay_currency}
Status: ${payment.payment_status}
${
  shipLink
    ? `\nOnce shipped, notify the customer in one click:\n${shipLink}\n`
    : ""
}
All orders: https://www.cellovateadvancedpeptides.com/admin`,
  });

  if (customerEmail) {
    try {
      await transporter.sendMail({
        from: user,
        to: customerEmail,
        subject: `Payment received — Cellovate order ${reference}`,
        text: `Your crypto payment for order ${reference} has been confirmed.

We are now preparing your order and will email you again once it ships.

Cellovate Advanced Peptides — for research use only, not for human consumption.`,
      });
    } catch (err) {
      console.error("Customer payment confirmation failed", err);
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const rawBody = await readRawBody(req);
  const signature = req.headers["x-nowpayments-sig"];
  const ipnSecret = String(process.env.NOWPAYMENTS_IPN_SECRET || "").trim();

  if (!ipnSecret) {
    console.error("NOWPAYMENTS_IPN_SECRET is not set.");
    return res.status(500).json({ error: "Server not configured" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const sortedPayload = JSON.stringify(sortObject(payload));
  const expectedSig = crypto
    .createHmac("sha512", ipnSecret)
    .update(sortedPayload)
    .digest("hex");

  const sigOk =
    typeof signature === "string" &&
    signature.length === expectedSig.length &&
    crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSig));

  if (!sigOk) {
    console.warn("NOWPayments webhook: signature mismatch.");
    return res.status(401).json({ error: "Invalid signature" });
  }

  // Signature verified — safe to trust the payload from here on.
  const status = payload.payment_status;

  // Keep the /admin order list in sync (no-op until Upstash is connected).
  if (payload.order_id) {
    const cart = decodeCart(payload.order_description);
    const cartOrder = cart.items.length
      ? computeOrder(cart.items, promoFromRequest({ codes: cart.codes }).promo)
      : null;
    await updateOrder(String(payload.order_id), (current) => {
      const fields = {
        paymentStatus: status,
        paymentId: payload.payment_id,
        email: current.email || customerEmailFrom(payload) || undefined,
        total: current.total ?? payload.price_amount,
        lines: current.lines || cartOrder?.lines,
        codes: current.codes || cart.codes,
      };
      if (current.status === "shipped") return fields;
      if (status === "finished") {
        return { ...fields, status: "paid", paidAt: Date.now() };
      }
      if (["expired", "failed", "refunded"].includes(status)) {
        return { ...fields, status };
      }
      if (status === "partially_paid") {
        return { ...fields, status: "partially_paid" };
      }
      return fields;
    });
  }

  // NOWPayments sends "confirmed" and then "finished" for the same payment;
  // email once, on "finished", so each order produces a single notification.
  if (status === "finished") {
    try {
      await sendConfirmationEmails(payload);
    } catch (err) {
      console.error("Failed to send owner notification email:", err);
      // Don't fail the webhook response over email issues — NOWPayments
      // will retry the IPN if we return a non-200 status.
    }

    // Omnisend post-purchase automations.
    const email = customerEmailFrom(payload);
    const { items, codes } = decodeCart(payload.order_description);
    if (email && items.length) {
      const { promo } = promoFromRequest({ codes });
      const order = computeOrder(items, promo);
      await safely("paid for order", () =>
        paidForOrder({
          orderId: payload.order_id || String(payload.payment_id),
          email,
          items,
          order,
        })
      );
    }
  }

  return res.status(200).json({ received: true });
}

// POST /api/free-order
// Body: { orderId, code, items: [{ id, variantKey, qty }], email, name, address }
//
// Places an order whose total is $0 after a promo code. The cart total is
// never trusted: prices come from lib/products and the discount is recomputed
// here, so a tampered client cannot turn a paid cart into a free one.
import nodemailer from "nodemailer";
import { promoFromRequest } from "../../lib/promos";
import { placedOrder, paidForOrder, safely } from "../../lib/omnisend";
import { computeOrder, formatTotals } from "../../lib/pricing";
import { validateCustomer, formatAddress } from "../../lib/countries";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId, items, customer } = req.body || {};

  const { promo, invalid } = promoFromRequest(req.body);
  if (!promo || invalid.length) {
    return res.status(400).json({ error: "Invalid promo code." });
  }

  const check = validateCustomer(customer);
  if (!check.ok) {
    return res.status(400).json({
      error: `Missing or invalid shipping details: ${check.missing.join(", ")}.`,
    });
  }

  const email = String(customer.email).trim();
  const address = formatAddress(customer);

  const order = computeOrder(items, promo);

  if (!order.lines.length) {
    return res.status(400).json({ error: "Cart is empty." });
  }

  // Anything above zero still has to go through the crypto checkout.
  if (order.total > 0) {
    return res
      .status(400)
      .json({ error: "This order is not free — please pay with crypto." });
  }

  const reference = orderId || `CEL-${Date.now()}`;
  const summary = `Order: ${reference}
Promo code: ${promo.code} (${promo.percent}% off${
    promo.freeShipping ? ", shipping included" : ""
  })

${order.lines.join("\n")}

${formatTotals(order)}

Email: ${email}
Shipping address:
${address}
${customer.notes ? `\nOrder notes:\n${customer.notes}` : ""}`;

  // Trim every value pulled from env: a stray space or newline pasted into
  // Vercel's dashboard silently breaks nodemailer's "No recipients defined"
  // check even though the variable "looks" set.
  const smtpUser = String(process.env.ZOHO_SMTP_USER || "").trim();
  const smtpPass = String(process.env.ZOHO_SMTP_PASS || "").trim();
  const ownerEmail =
    String(process.env.OWNER_NOTIFICATION_EMAIL || "").trim() || smtpUser;

  if (!smtpUser || !smtpPass) {
    // The order is valid but cannot be emailed — say so rather than pretending.
    console.error("Zoho SMTP not configured — free order not emailed.", summary);
    return res.status(500).json({
      error:
        "Order could not be recorded (email service unavailable). Please contact us.",
    });
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

  // The owner notification is the one that matters for fulfillment — fail
  // loudly if it doesn't go out. A failed customer confirmation is logged
  // but must not lose an otherwise-valid order.
  try {
    await transporter.sendMail({
      from: smtpUser,
      to: ownerEmail,
      replyTo: email,
      subject: `Free order (${promo.code}) — ${reference}`,
      text: summary,
    });
  } catch (err) {
    console.error("Free order owner notification failed", ownerEmail, err);
    return res
      .status(500)
      .json({ error: "Order could not be recorded. Please contact us." });
  }

  try {
    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: `Your Cellovate order ${reference}`,
      text: `Thank you — your order has been received.

${order.lines.join("\n")}

Total: $0.00 (code ${promo.code})

Shipping to:
${address}

We will email you again once your order ships.

Cellovate Advanced Peptides — for research use only, not for human consumption.`,
    });
  } catch (err) {
    console.error("Free order customer confirmation failed", email, err);
  }

  await safely("placed order", () =>
    placedOrder({ orderId: reference, customer, items, order, paid: true })
  );
  await safely("paid for order", () =>
    paidForOrder({ orderId: reference, email, items, order })
  );

  return res.status(200).json({ ok: true, orderId: reference });
}

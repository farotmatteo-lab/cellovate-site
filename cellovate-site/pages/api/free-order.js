// POST /api/free-order
// Body: { orderId, code, items: [{ id, variantKey, qty }], email, name, address }
//
// Places an order whose total is $0 after a promo code. The cart total is
// never trusted: prices come from lib/products and the discount is recomputed
// here, so a tampered client cannot turn a paid cart into a free one.
import nodemailer from "nodemailer";
import { PRODUCTS, getVariant } from "../../lib/products";
import { getPromo, getDiscount } from "../../lib/promos";

function buildOrder(items, promo) {
  const lines = [];
  let subtotal = 0;

  for (const item of items || []) {
    const product = PRODUCTS.find((p) => p.id === item.id);
    if (!product || product.draft) continue;
    const variant = getVariant(product, item.variantKey);
    const qty = Math.max(1, Math.min(50, parseInt(item.qty, 10) || 0));
    if (!qty) continue;
    subtotal += variant.price * qty;
    lines.push(
      `${qty} × ${product.name} — ${variant.label} (${product.code}) — $${(
        variant.price * qty
      ).toFixed(2)}`
    );
  }

  const discount = getDiscount(promo, subtotal);
  const total = Math.max(0, Math.round((subtotal - discount) * 100) / 100);
  return { lines, subtotal, discount, total };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId, code, items, email, name, address } = req.body || {};

  const promo = getPromo(code);
  if (!promo) {
    return res.status(400).json({ error: "Invalid promo code." });
  }

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email address is required." });
  }

  if (!address || String(address).trim().length < 10) {
    return res.status(400).json({ error: "A shipping address is required." });
  }

  const order = buildOrder(items, promo);

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

Subtotal: $${order.subtotal.toFixed(2)}
Discount: -$${order.discount.toFixed(2)}
Total paid: $0.00

Customer: ${name || "n/a"}
Email: ${email}
Shipping address:
${address}`;

  if (!process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
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
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.ZOHO_SMTP_USER,
      to: process.env.OWNER_NOTIFICATION_EMAIL || process.env.ZOHO_SMTP_USER,
      replyTo: email,
      subject: `Free order (${promo.code}) — ${reference}`,
      text: summary,
    });

    await transporter.sendMail({
      from: process.env.ZOHO_SMTP_USER,
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
    console.error("Free order email failed", err);
    return res
      .status(500)
      .json({ error: "Order could not be recorded. Please contact us." });
  }

  return res.status(200).json({ ok: true, orderId: reference });
}

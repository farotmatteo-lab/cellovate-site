// POST /api/create-payment
// Body: { amount: number, orderId: string, payCurrency: "btc" | "eth" | "usdttrc20" }
//
// Requires the environment variable NOWPAYMENTS_API_KEY (the PRIVATE api key,
// e.g. 1AFH...YP1R) set in your hosting provider (Vercel: Project Settings ->
// Environment Variables). Never put this key in frontend code.

import nodemailer from "nodemailer";
import { PRODUCTS, getVariant } from "../../lib/products";
import { validateCustomer, formatAddress } from "../../lib/countries";

// Emails the shipping details as soon as a payment is created, so an order is
// never left with a payment on NOWPayments and no address on our side.
async function emailOrderDetails({ orderId, customer, items, amount, payment }) {
  if (!process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
    console.warn("Zoho SMTP not configured — order details not emailed.");
    return;
  }

  const lines = (items || [])
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      if (!product) return null;
      const variant = getVariant(product, item.variantKey);
      const qty = Math.max(1, parseInt(item.qty, 10) || 1);
      return `${qty} × ${product.name} — ${variant.label} (${product.code}) — $${(
        variant.price * qty
      ).toFixed(2)}`;
    })
    .filter(Boolean);

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });

  const summary = `Order: ${orderId}
Payment ID: ${payment?.payment_id || "n/a"}
Amount due: $${Number(amount).toFixed(2)} (paid in ${payment?.pay_currency || "crypto"})
Status: awaiting payment

${lines.join("\n")}

Email: ${customer.email}
Shipping address:
${formatAddress(customer)}
${customer.notes ? `\nOrder notes:\n${customer.notes}` : ""}`;

  await transporter.sendMail({
    from: process.env.ZOHO_SMTP_USER,
    to: process.env.OWNER_NOTIFICATION_EMAIL || process.env.ZOHO_SMTP_USER,
    replyTo: customer.email,
    subject: `New order awaiting payment — ${orderId}`,
    text: summary,
  });

  await transporter.sendMail({
    from: process.env.ZOHO_SMTP_USER,
    to: customer.email,
    subject: `Your Cellovate order ${orderId}`,
    text: `Thank you — we have received your order.

${lines.join("\n")}

Total: $${Number(amount).toFixed(2)}

Shipping to:
${formatAddress(customer)}

Your order ships once the crypto payment is confirmed. You will get another email at that point.

Cellovate Advanced Peptides — for research use only, not for human consumption.`,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { amount, orderId, payCurrency, customer, items } = req.body || {};

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
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
        price_amount: Number(amount),
        price_currency: "usd",
        pay_currency: currency,
        order_id: orderId || `CEL-${Date.now()}`,
        order_description: "Cellovate Advanced Peptides order",
        // Optional: set this once you have the IPN endpoint deployed
        // ipn_callback_url: process.env.NOWPAYMENTS_IPN_URL,
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
        items,
        amount,
        payment: data,
      });
    } catch (mailErr) {
      // The payment exists; losing the email must not break checkout.
      console.error("Order details email failed", mailErr);
    }

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

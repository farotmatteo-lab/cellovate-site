// POST /api/sumup-checkout
// Body: { orderId, customer, items: [{ id, variantKey, qty }], codes? }
// Recomputes the order server-side (prices, tiers, codes, shipping), saves it
// to the order list and opens a SumUp checkout for the card widget.
import crypto from "crypto";
import { promoFromRequest } from "../../lib/promos";
import { computeOrder, formatTotals } from "../../lib/pricing";
import { validateCustomer, formatAddress } from "../../lib/countries";
import { saveOrder, getOrder } from "../../lib/orderStore";
import {
  sumupEnabled,
  sumupConfig,
  usdRate,
  createCheckout,
} from "../../lib/sumup";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (!sumupEnabled()) {
    return res.status(503).json({ error: "Card payments are not available." });
  }

  const { orderId, customer, items } = req.body || {};
  if (!orderId || !/^CEL-\d+$/.test(String(orderId))) {
    return res.status(400).json({ error: "Invalid order reference." });
  }

  const { promo, invalid } = promoFromRequest(req.body);
  if (invalid.length) return res.status(400).json({ error: "Invalid promo code." });

  const order = computeOrder(items, promo);
  if (!order.lines.length) return res.status(400).json({ error: "Cart is empty." });
  if (order.total <= 0) {
    return res.status(400).json({ error: "This order is free — no payment needed." });
  }

  const check = validateCustomer(customer);
  if (!check.ok) {
    return res.status(400).json({
      error: `Missing or invalid shipping details: ${check.missing.join(", ")}.`,
    });
  }

  const existing = await getOrder(orderId);
  if (existing && existing.status !== "awaiting_payment") {
    return res.status(409).json({ error: "This order is already paid." });
  }

  try {
    const { currency } = sumupConfig();
    const rate = await usdRate(currency);
    const amount = Math.round(order.total * rate * 100) / 100;
    const email = String(customer.email).trim();

    const checkout = await createCheckout({
      reference: `${orderId}.${crypto.randomBytes(4).toString("hex")}`,
      amount,
      currency,
      description: `Cellovate Advanced Peptides order ${orderId}`,
    });

    await saveOrder({
      ...(existing || {}),
      id: orderId,
      createdAt: existing?.createdAt || Date.now(),
      status: "awaiting_payment",
      payCurrency: `card ${currency}`,
      email,
      name: [customer.firstName, customer.lastName].filter(Boolean).join(" "),
      address: formatAddress(customer),
      notes: customer.notes || "",
      lines: order.lines,
      totals: formatTotals(order),
      total: order.total,
      pricing: {
        total: order.total,
        subtotal: order.subtotal,
        discount: order.discount,
        shipping: order.shipping,
      },
      codes: promo?.codes || [],
      items: (items || []).map((it) => ({
        id: it.id,
        variantKey: it.variantKey,
        qty: parseInt(it.qty, 10) || 1,
      })),
      customer,
      sumupCheckoutId: checkout.id,
      chargeAmount: amount,
      chargeCurrency: currency,
    });

    return res.status(200).json({
      checkoutId: checkout.id,
      amount,
      currency,
      usdTotal: order.total,
      rate,
    });
  } catch (err) {
    console.error("SumUp checkout failed", err.message);
    return res.status(502).json({ error: "Card payment could not be started. Please try again or pay with crypto." });
  }
}

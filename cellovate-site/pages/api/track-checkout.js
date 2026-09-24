// POST /api/track-checkout
// Body: { orderId, customer, items: [{ id, variantKey, qty }], codes: [] }
//
// Called when the shopper submits contact + shipping details. Registers the
// contact in Omnisend and sends "started checkout" so the abandoned checkout
// automation can follow up. Always answers 200: tracking must never block the
// purchase.
import { promoFromRequest } from "../../lib/promos";
import { computeOrder } from "../../lib/pricing";
import { validateCustomer } from "../../lib/countries";
import { upsertContact, startedCheckout, safely } from "../../lib/omnisend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { orderId, customer, items } = req.body || {};
  const { promo } = promoFromRequest(req.body);

  if (!validateCustomer(customer).ok) {
    return res.status(200).json({ tracked: false });
  }

  const order = computeOrder(items, promo);
  if (!order.lines.length) return res.status(200).json({ tracked: false });

  await safely("contact", () => upsertContact(customer));
  await safely("started checkout", () =>
    startedCheckout({
      orderId,
      customer,
      items,
      codes: promo?.codes || [],
      order,
    })
  );

  return res.status(200).json({ tracked: true });
}

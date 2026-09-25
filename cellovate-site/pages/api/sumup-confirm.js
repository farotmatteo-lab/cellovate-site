// POST /api/sumup-confirm { checkoutId } — called by the checkout page after
// the card widget reports success. The status is read from SumUp, never
// taken from the browser.
import { sumupEnabled, finalizeCheckout } from "../../lib/sumup";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!sumupEnabled()) return res.status(503).json({ error: "Card payments are not available." });
  const checkoutId = String(req.body?.checkoutId || "").slice(0, 80);
  if (!checkoutId) return res.status(400).json({ error: "Missing checkout." });
  try {
    const result = await finalizeCheckout(checkoutId);
    return res.status(200).json({ status: result.status, orderId: result.orderId });
  } catch (err) {
    console.error("SumUp confirm failed", err.message);
    return res.status(502).json({ error: "Could not confirm the payment yet." });
  }
}

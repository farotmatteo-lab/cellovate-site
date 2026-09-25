// POST /api/sumup-webhook — SumUp calls this (checkout return_url) when a
// checkout changes status. The body only tells us which checkout; its status
// is re-read from the SumUp API before anything happens.
import { sumupEnabled, finalizeCheckout } from "../../lib/sumup";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!sumupEnabled()) return res.status(200).json({ ignored: true });
  const id = String(req.body?.id || req.body?.checkout_id || "").slice(0, 80);
  if (!id) return res.status(200).json({ ignored: true });
  try {
    await finalizeCheckout(id);
  } catch (err) {
    console.error("SumUp webhook failed", err.message);
    // 5xx so SumUp retries later.
    return res.status(500).json({ error: "retry" });
  }
  return res.status(200).json({ received: true });
}

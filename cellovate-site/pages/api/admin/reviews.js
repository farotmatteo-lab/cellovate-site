// POST /api/admin/reviews  Body: { id, status: "approved" | "rejected" }
// Owner only. Approving refreshes the product page right away.
import { isAdmin } from "../../../lib/adminAuth";
import { setReviewStatus } from "../../../lib/reviews";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!isAdmin(req)) return res.status(401).json({ error: "Session expirée." });
  const id = String(req.body?.id || "").slice(0, 40);
  const status = req.body?.status;
  if (!id || !["approved", "rejected"].includes(status)) {
    return res.status(400).json({ error: "Requête invalide." });
  }
  const review = await setReviewStatus(id, status);
  if (!review) return res.status(404).json({ error: "Avis introuvable." });
  try {
    await res.revalidate(`/shop/${review.handle}`);
  } catch (err) {
    console.error("revalidate failed", err.message);
  }
  return res.status(200).json({ ok: true, review });
}

// GET  /api/admin/stock -> { stock, enabled }
// POST /api/admin/stock { stock: { "productId::variantKey": qty } } -> replaces it
import { isAdmin } from "../../../lib/adminAuth";
import { storeEnabled } from "../../../lib/orderStore";
import { getThStock, setThStock } from "../../../lib/stock";

export default async function handler(req, res) {
  if (!isAdmin(req)) return res.status(401).json({ error: "Session expirée." });
  res.setHeader("Cache-Control", "private, no-store");
  if (req.method === "GET") {
    return res.status(200).json({ stock: await getThStock(), enabled: storeEnabled() });
  }
  if (req.method === "POST") {
    try {
      await setThStock(req.body?.stock || {});
      return res.status(200).json({ ok: true, stock: await getThStock() });
    } catch (err) {
      return res.status(503).json({ error: err.message });
    }
  }
  return res.status(405).json({ error: "Method not allowed" });
}

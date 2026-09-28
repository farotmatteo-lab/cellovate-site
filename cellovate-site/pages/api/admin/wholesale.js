// POST /api/admin/wholesale  Body: { id, status }  — owner only.
import { isAdmin } from "../../../lib/adminAuth";
import { redisCommand } from "../../../lib/orderStore";

const STATUSES = ["new", "contacted", "quoted", "won", "lost"];

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!isAdmin(req)) return res.status(401).json({ error: "Session expirée." });
  const id = String(req.body?.id || "").slice(0, 20);
  const status = req.body?.status;
  if (!/^WS-[0-9A-F]{6}$/.test(id) || !STATUSES.includes(status)) return res.status(400).json({ error: "Requête invalide." });
  const raw = await redisCommand("GET", `wholesale:${id}`);
  if (!raw) return res.status(404).json({ error: "Demande introuvable." });
  const lead = { ...JSON.parse(raw), status, updatedAt: Date.now() };
  await redisCommand("SET", `wholesale:${id}`, JSON.stringify(lead));
  return res.status(200).json({ ok: true, lead });
}

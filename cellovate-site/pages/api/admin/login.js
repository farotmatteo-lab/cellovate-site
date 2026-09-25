// POST /api/admin/login  { password }  -> sets the admin session cookie.
// POST /api/admin/login  { logout: true } -> clears it.
import {
  adminEnabled,
  checkPassword,
  sessionCookie,
  clearSessionCookie,
} from "../../../lib/adminAuth";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (req.body?.logout) {
    res.setHeader("Set-Cookie", clearSessionCookie());
    return res.status(200).json({ ok: true });
  }
  if (!adminEnabled()) {
    return res
      .status(503)
      .json({ error: "ADMIN_PASSWORD is not set in Vercel." });
  }
  if (!checkPassword(req.body?.password)) {
    // Slow down guessing.
    await new Promise((r) => setTimeout(r, 800));
    return res.status(401).json({ error: "Mot de passe incorrect." });
  }
  res.setHeader("Set-Cookie", sessionCookie());
  return res.status(200).json({ ok: true });
}

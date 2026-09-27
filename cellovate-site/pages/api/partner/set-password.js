// Sets the partner password from a one-time link, then logs them in.
import { useToken, setPassword, sessionCookie } from "../../../lib/partnerAuth";
import { partnerByEmail } from "../../../lib/partners";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const token = String((req.body && req.body.token) || "");
  const password = String((req.body && req.body.password) || "");
  if (password.length < 8) return res.status(400).json({ error: "Use at least 8 characters." });
  try {
    const email = await useToken(token);
    if (!email || !partnerByEmail(email)) return res.status(400).json({ error: "This link has expired or was already used. Ask for a new one." });
    await setPassword(email, password);
    res.setHeader("Set-Cookie", sessionCookie(email));
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("set password error", e.message);
    return res.status(500).json({ error: "Something went wrong. Try again later." });
  }
}

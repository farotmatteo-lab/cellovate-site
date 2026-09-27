// Partner login with email + password.
import { getAccount, checkPassword, sessionCookie, kv } from "../../../lib/partnerAuth";
import { partnerByEmail } from "../../../lib/partners";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const email = String((req.body && req.body.email) || "").trim().toLowerCase();
  const password = String((req.body && req.body.password) || "");
  const fail = () => res.status(401).json({ error: "Wrong email or password." });
  if (!partnerByEmail(email) || !password) return fail();
  try {
    const k = "cv:plogin:" + email;
    const n = await kv(["INCR", k]);
    if (n === 1) await kv(["EXPIRE", k, "900"]);
    if (n > 10) return res.status(429).json({ error: "Too many attempts. Try again in 15 minutes." });
    const account = await getAccount(email);
    if (!account || !checkPassword(password, account.pw)) return fail();
    await kv(["DEL", k]);
    res.setHeader("Set-Cookie", sessionCookie(email));
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("partner login error", e.message);
    return res.status(500).json({ error: "Login is unavailable right now. Try again later." });
  }
}

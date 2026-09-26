// POST /api/subscribe  Body: { email, adult: true, page? }
// Welcome popup sign-up: subscribes the email to marketing in Omnisend (this
// starts the Welcome automation) after the visitor confirmed they are 18+.
const API = "https://api.omnisend.com/api";
const VERSION = "2026-03-15";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const email = String(req.body?.email || "").trim().toLowerCase().slice(0, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email." });
  }
  if (req.body?.adult !== true) {
    return res.status(400).json({ error: "Please confirm you are 18 or older." });
  }

  const key = String(process.env.OMNISEND_API_KEY || "").trim();
  if (!key) {
    console.warn("OMNISEND_API_KEY missing: popup sign-up not saved", email);
    return res.status(200).json({ ok: true, code: "WELCOME10" });
  }

  const now = new Date().toISOString();
  try {
    const r = await fetch(`${API}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Omnisend-API-Key ${key}`,
        "Omnisend-Version": VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tags: ["source: popup", "age confirmed 18+"],
        customProperties: { ageConfirmed18: true, ageConfirmedAt: now },
        identifiers: [
          {
            type: "email",
            id: email,
            channels: { email: { status: "subscribed", statusDate: now } },
          },
        ],
      }),
    });
    if (!r.ok) {
      const text = await r.text().catch(() => "");
      throw new Error(`Omnisend ${r.status}: ${text.slice(0, 300)}`);
    }
  } catch (err) {
    console.error("Popup subscribe failed", err.message);
    return res.status(502).json({ error: "We couldn't sign you up right now. Please try again." });
  }
  return res.status(200).json({ ok: true, code: "WELCOME10" });
}

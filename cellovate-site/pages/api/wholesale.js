// POST /api/wholesale — qualified wholesale enquiry from the /wholesale chat.
// Saves the lead (Redis, visible in /admin/wholesale), emails the owner a
// summary with a priority score, and sends the prospect a confirmation.
import crypto from "crypto";
import nodemailer from "nodemailer";
import { storeEnabled, redisSend } from "../../lib/orderStore";
import { EMAIL_SIGNATURE } from "../../lib/business";

const clean = (v, max = 300) => String(v ?? "").replace(/\s+/g, " ").trim().slice(0, max);
const cleanList = (v) => (Array.isArray(v) ? v.slice(0, 40).map((x) => clean(x, 80)).filter(Boolean) : []);

const FIELDS = [
  ["businessType", "Business type"],
  ["company", "Company"],
  ["website", "Website"],
  ["country", "Country"],
  ["products", "Products"],
  ["volume", "Monthly volume"],
  ["format", "Format"],
  ["frequency", "Order frequency"],
  ["privateLabel", "Private label"],
  ["timeline", "Timeline"],
  ["name", "Name"],
  ["email", "Email"],
  ["phone", "WhatsApp / Telegram"],
  ["message", "Message"],
];

// Rough priority so the best leads get answered first.
function score(l) {
  const vol = { "Under 50": 1, "50–200": 2, "200–500": 3, "500–1,000": 4, "1,000+": 5 }[l.volume] || 1;
  const time = { "As soon as possible": 3, "Within a month": 2, "1–3 months": 1 }[l.timeline] || 0;
  const freq = { Monthly: 2, "Every 2–3 months": 1 }[l.frequency] || 0;
  const s = vol * 2 + time + freq + (l.privateLabel === "Yes" ? 1 : 0);
  return { score: s, tier: s >= 11 ? "HOT" : s >= 7 ? "WARM" : "COLD" };
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const b = req.body || {};
  const lead = {};
  for (const [k] of FIELDS) lead[k] = k === "products" ? cleanList(b[k]) : clean(b[k], k === "message" ? 1500 : 200);
  lead.email = lead.email.toLowerCase();

  if (b.ack !== true) return res.status(400).json({ error: "Please confirm the statement to send your request." });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return res.status(400).json({ error: "Please enter a valid email." });
  for (const k of ["businessType", "company", "country", "volume", "name"]) {
    if (!lead[k]) return res.status(400).json({ error: "Some answers are missing. Please start over." });
  }
  if (!lead.products.length) return res.status(400).json({ error: "Please choose at least one product." });

  const { score: s, tier } = score(lead);
  const record = { id: `WS-${crypto.randomBytes(3).toString("hex").toUpperCase()}`, createdAt: Date.now(), status: "new", score: s, tier, ...lead };

  if (storeEnabled()) {
    try {
      await redisSend("/pipeline", [
        ["SET", `wholesale:${record.id}`, JSON.stringify(record)],
        ["ZADD", "wholesale", String(record.createdAt), record.id],
      ]);
    } catch (err) {
      console.error("wholesale save failed", err.message);
    }
  }

  const summary = FIELDS.map(([k, label]) => {
    const v = Array.isArray(record[k]) ? record[k].join(", ") : record[k];
    return `${label}: ${v || "—"}`;
  }).join("\n");

  const smtpUser = String(process.env.ZOHO_SMTP_USER || "").trim();
  const smtpPass = String(process.env.ZOHO_SMTP_PASS || "").trim();
  const owner = String(process.env.OWNER_NOTIFICATION_EMAIL || "").trim() || smtpUser;
  if (smtpUser && smtpPass) {
    const t = nodemailer.createTransport({ host: "smtp.zoho.com", port: 465, secure: true, auth: { user: smtpUser, pass: smtpPass } });
    try {
      await t.sendMail({
        from: `Cellovate Wholesale <${smtpUser}>`,
        to: owner,
        replyTo: record.email,
        subject: `[B2B ${tier}] ${record.company} (${record.country}) — ${record.volume} units/mo`,
        text: `New wholesale enquiry ${record.id} — priority ${tier} (score ${s}).\n\n${summary}\n\nReply to this email to answer the prospect directly.\nAll leads: https://www.cellovateadvancedpeptides.com/admin/wholesale`,
      });
      await t.sendMail({
        from: `Cellovate Wholesale <${smtpUser}>`,
        to: record.email,
        subject: "We received your wholesale request",
        text: `Hi ${record.name.split(" ")[0]},\n\nThanks for your interest in Cellovate wholesale. We have your request (${record.id}) and will reply within 24 hours (business days) with pricing for your volume.\n\nYour request:\n${summary}\n\nIf anything changes, just reply to this email.\n\n${EMAIL_SIGNATURE}`,
      });
    } catch (err) {
      console.error("wholesale email failed", err.message);
    }
  }

  return res.status(200).json({ ok: true, id: record.id });
}

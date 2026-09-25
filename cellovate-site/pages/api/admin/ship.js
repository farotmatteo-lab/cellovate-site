// POST /api/admin/ship
// Body: { orderId, email, token?, carrier?, tracking?, trackingUrl?, force? }
//
// Emails the customer that the order has shipped and marks it "shipped" in
// the order list. Allowed with the admin session cookie, or with the signed
// token from the owner notification email (no login needed).
import nodemailer from "nodemailer";
import { isAdmin, verifyShipToken } from "../../../lib/adminAuth";
import { getOrder, updateOrder } from "../../../lib/orderStore";

const clean = (v, max = 300) => String(v || "").trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body || {};
  const orderId = clean(body.orderId, 64);
  const stored = orderId ? await getOrder(orderId) : null;
  const email = clean(body.email || stored?.email, 200).toLowerCase();

  const allowed =
    isAdmin(req) || verifyShipToken(orderId, email, clean(body.token, 200));
  if (!allowed) {
    return res.status(401).json({ error: "Lien invalide ou session expirée." });
  }
  if (!orderId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Commande ou email manquant." });
  }
  if (stored?.status === "shipped" && !body.force) {
    return res.status(409).json({
      error: "Cette commande est déjà marquée expédiée. Le client a déjà reçu l'email.",
      alreadyShipped: true,
    });
  }

  const carrier = clean(body.carrier, 80);
  const tracking = clean(body.tracking, 120);
  let trackingUrl = clean(body.trackingUrl, 500);
  if (trackingUrl && !/^https?:\/\//i.test(trackingUrl)) trackingUrl = "";

  const smtpUser = String(process.env.ZOHO_SMTP_USER || "").trim();
  const smtpPass = String(process.env.ZOHO_SMTP_PASS || "").trim();
  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ error: "Zoho SMTP n'est pas configuré." });
  }

  const trackingBlock = [
    carrier && `Carrier: ${carrier}`,
    tracking && `Tracking number: ${tracking}`,
    trackingUrl && `Track your parcel: ${trackingUrl}`,
  ]
    .filter(Boolean)
    .join("\n");

  const itemsBlock = Array.isArray(stored?.lines) && stored.lines.length
    ? `\nIn this parcel:\n${stored.lines.join("\n")}\n`
    : "";

  const text = `Good news: your Cellovate order ${orderId} has shipped.
${trackingBlock ? `\n${trackingBlock}\n` : ""}${itemsBlock}
Questions about your delivery? Just reply to this email.

Cellovate Advanced Peptides — for research use only, not for human consumption.`;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: { user: smtpUser, pass: smtpPass },
    });
    await transporter.sendMail({
      from: `Cellovate Advanced Peptides <${smtpUser}>`,
      to: email,
      subject: `Your Cellovate order ${orderId} has shipped`,
      text,
    });
  } catch (err) {
    console.error("Shipping email failed", err);
    return res.status(502).json({ error: "L'email n'a pas pu être envoyé. Réessaie." });
  }

  await updateOrder(orderId, {
    status: "shipped",
    shippedAt: Date.now(),
    email,
    carrier,
    tracking,
    trackingUrl,
  });

  return res.status(200).json({ ok: true, email });
}

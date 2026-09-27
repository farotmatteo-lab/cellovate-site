// Sends a one-time link to create or reset the partner password.
// Same answer whether the email is registered or not.
import nodemailer from "nodemailer";
import { partnerByEmail } from "../../../lib/partners";
import { createToken, kvEnabled } from "../../../lib/partnerAuth";

const SITE = "https://www.cellovateadvancedpeptides.com";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const email = String((req.body && req.body.email) || "").trim().toLowerCase();
  const p = partnerByEmail(email);
  if (!p) return res.status(200).json({ ok: true });
  if (!kvEnabled() || !process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
    console.error("partner link: store or SMTP not configured");
    return res.status(503).json({ error: "Email sending is not available yet." });
  }
  try {
    const token = await createToken(email, 2 * 86400);
    const link = SITE + "/partner/set-password?token=" + token;
    const text = "Hi " + p.name + ",\n\nUse this link to create or reset your password for the Cellovate partner area. It is valid for 48 hours and works once:\n" + link +
      "\n\nYour code: " + p.code + "\nPartner area: " + SITE + "/partner\n\nCellovate Advanced Peptides";
    const html = "<div style=\"background:#0A0A0A;padding:32px;font-family:Arial,sans-serif;color:#ffffff\">" +
      "<p style=\"font-size:20px;font-weight:bold;letter-spacing:2px;margin:0 0 16px\">CELLOVATE</p>" +
      "<p>Hi " + p.name + ",</p>" +
      "<p>Create your password to access your partner area and follow every order placed with your code <b>" + p.code + "</b>.</p>" +
      "<p style=\"margin:28px 0\"><a href=\"" + link + "\" style=\"background:#22d3ee;color:#0A0A0A;padding:14px 22px;text-decoration:none;font-weight:bold;display:inline-block\">Create my password</a></p>" +
      "<p style=\"color:#9b9b9b;font-size:13px\">This link is valid for 48 hours and works once. If you did not ask for it, you can ignore this email.</p></div>";
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: { user: process.env.ZOHO_SMTP_USER, pass: process.env.ZOHO_SMTP_PASS },
    });
    await transporter.sendMail({
      from: "\"Cellovate\" <" + process.env.ZOHO_SMTP_USER + ">",
      to: email,
      subject: "Your Cellovate partner access",
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("partner link error", e.message);
    return res.status(502).json({ error: "The email could not be sent. Try again later." });
  }
}

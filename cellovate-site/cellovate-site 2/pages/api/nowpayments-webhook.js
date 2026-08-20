import crypto from "crypto";
import nodemailer from "nodemailer";

// NOWPayments sends the raw JSON body plus a header `x-nowpayments-sig`
// containing an HMAC-SHA512 signature computed over the JSON with keys
// sorted alphabetically, signed with your IPN secret key.
// Set IPN secret at: NOWPayments dashboard -> Payments Settings ->
// Instant payment notifications.

export const config = {
  api: {
    bodyParser: false, // we need the raw body to verify the signature
  },
};

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => (data += chunk));
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function sortObject(obj) {
  if (Array.isArray(obj)) return obj.map(sortObject);
  if (obj !== null && typeof obj === "object") {
    return Object.keys(obj)
      .sort()
      .reduce((acc, key) => {
        acc[key] = sortObject(obj[key]);
        return acc;
      }, {});
  }
  return obj;
}

async function sendOwnerNotification(payment) {
  if (!process.env.ZOHO_SMTP_USER || !process.env.ZOHO_SMTP_PASS) {
    console.warn("Zoho SMTP not configured — skipping email notification.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_SMTP_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.ZOHO_SMTP_USER,
    to: process.env.OWNER_NOTIFICATION_EMAIL || process.env.ZOHO_SMTP_USER,
    subject: `New Cellovate order confirmed — ${payment.order_id || payment.payment_id}`,
    text: `A payment has been confirmed.

Order ID: ${payment.order_id || "n/a"}
Payment ID: ${payment.payment_id}
Amount: ${payment.price_amount} ${payment.price_currency}
Paid in: ${payment.pay_amount} ${payment.pay_currency}
Status: ${payment.payment_status}

Log in to NOWPayments for full details and to arrange shipping.`,
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const rawBody = await readRawBody(req);
  const signature = req.headers["x-nowpayments-sig"];
  const ipnSecret = process.env.NOWPAYMENTS_IPN_SECRET;

  if (!ipnSecret) {
    console.error("NOWPAYMENTS_IPN_SECRET is not set.");
    return res.status(500).json({ error: "Server not configured" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ error: "Invalid JSON" });
  }

  const sortedPayload = JSON.stringify(sortObject(payload));
  const expectedSig = crypto
    .createHmac("sha512", ipnSecret)
    .update(sortedPayload)
    .digest("hex");

  if (!signature || signature !== expectedSig) {
    console.warn("NOWPayments webhook: signature mismatch.");
    return res.status(401).json({ error: "Invalid signature" });
  }

  // Signature verified — safe to trust the payload from here on.
  const status = payload.payment_status;

  if (status === "finished" || status === "confirmed") {
    try {
      await sendOwnerNotification(payload);
    } catch (err) {
      console.error("Failed to send owner notification email:", err);
      // Don't fail the webhook response over email issues — NOWPayments
      // will retry the IPN if we return a non-200 status.
    }
  }

  return res.status(200).json({ received: true });
}

// Single-use gift codes (server only).
//
// During a campaign (lib/campaign.js), a paid order placed with a partner
// code earns a surprise gift: a single-use GIFT-XXXXXX code worth 30% off a
// later order, valid 30 days, never combined with any other code or
// promotion. The code is emailed to the customer when the payment is confirmed.
//
// Redis keys:
//   gift:<CODE>          JSON { code, email, orderId, createdAt, expiresAt, usedBy?, usedAt? }
//   giftfor:<orderId>    the code created for that order (one per order)
import crypto from "crypto";
import nodemailer from "nodemailer";
import { EMAIL_SIGNATURE } from "./business";
import { redisCommand, storeEnabled, getOrder } from "./orderStore";
import { getPromo, isPartnerCode, promoFromRequest, GIFT_PERCENT, GIFT_CODE_RE } from "./promos";
import { campaignActive } from "./campaign";
import { computeOrder } from "./pricing";

export const GIFT_VALID_DAYS = 30;

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function newCode() {
  const bytes = crypto.randomBytes(6);
  let s = "";
  for (const b of bytes) s += ALPHABET[b % ALPHABET.length];
  return `GIFT-${s}`;
}

async function getGift(code) {
  try {
    const raw = await redisCommand("GET", `gift:${code}`);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("giftCodes.get failed", err.message);
    return null;
  }
}

// Checks every gift code in `codes`. Returns an error message, or null when
// all are valid and unused.
export async function checkGiftCodes(codes) {
  const gifts = (codes || []).filter((c) => getPromo(c)?.gift);
  if (!gifts.length) return null;
  if (!storeEnabled()) return "Gift codes are not available right now.";
  for (const code of gifts) {
    const gift = await getGift(code);
    if (!gift) return `${code} is not a valid gift code.`;
    if (gift.usedBy) return `${code} has already been used.`;
    if (gift.expiresAt && Date.now() > gift.expiresAt) return `${code} has expired.`;
  }
  return null;
}

// Marks the gift codes of a paid order as used (only the ones that actually
// gave the discount; a code beaten by a better offer is kept for later).
async function redeemGiftCodes({ orderId, codes, discountSource }) {
  if (discountSource !== "code") return;
  for (const code of (codes || []).filter((c) => getPromo(c)?.gift)) {
    const gift = await getGift(code);
    if (!gift || gift.usedBy) continue;
    await redisCommand(
      "SET",
      `gift:${code}`,
      JSON.stringify({ ...gift, usedBy: orderId, usedAt: Date.now() })
    );
  }
}

// One code per order: returns the existing one when called twice.
async function createGiftCode({ orderId, email }) {
  const existing = await redisCommand("GET", `giftfor:${orderId}`);
  if (existing) return { code: existing, created: false };
  for (let i = 0; i < 5; i++) {
    const code = newCode();
    const ok = await redisCommand(
      "SET",
      `gift:${code}`,
      JSON.stringify({
        code,
        email,
        orderId,
        createdAt: Date.now(),
        expiresAt: Date.now() + GIFT_VALID_DAYS * 864e5,
      }),
      "NX"
    );
    if (ok === "OK") {
      const claimed = await redisCommand("SET", `giftfor:${orderId}`, code, "NX");
      if (claimed !== "OK") {
        // Another call won the race: keep its code.
        await redisCommand("DEL", `gift:${code}`);
        return { code: await redisCommand("GET", `giftfor:${orderId}`), created: false };
      }
      return { code, created: true };
    }
  }
  throw new Error("Could not create a unique gift code");
}

async function emailGift({ email, code, orderId }) {
  const user = String(process.env.ZOHO_SMTP_USER || "").trim();
  const pass = String(process.env.ZOHO_SMTP_PASS || "").trim();
  if (!user || !pass || !email) return;
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  const until = new Date(Date.now() + GIFT_VALID_DAYS * 864e5).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York",
  });
  await transporter.sendMail({
    from: `Cellovate Advanced Peptides <${user}>`,
    to: email,
    subject: "A surprise gift for your next order",
    text: `Thank you for your order ${orderId}!

Because you ordered with a partner code during our Buy 2, Get 1 Free event, here is a surprise gift: ${GIFT_PERCENT}% off your next order.

Your personal code: ${code}

- Single use, for one future order
- Valid ${GIFT_VALID_DAYS} days (until ${until})
- ${GIFT_PERCENT}% off products (shipping not included)
- Cannot be combined with any other code or promotion

Shop: https://www.cellovateadvancedpeptides.com/shop

${EMAIL_SIGNATURE}`,
  });
}

// Called once per paid order (crypto webhook, card confirmation).
// order: { id, email, codes, items?, createdAt? }
export async function onOrderPaid({ orderId, email, codes, items, createdAt }) {
  if (!storeEnabled() || !orderId) return;
  try {
    const record = createdAt ? null : await getOrder(orderId);
    const placedAt = createdAt || record?.createdAt || Date.now();
    const list = codes || record?.codes || [];

    // Which offer gave the discount (a gift code beaten by a better offer is
    // not used up).
    let discountSource = "code";
    const cartItems = items || record?.items;
    if (Array.isArray(cartItems) && cartItems.length) {
      const { promo } = promoFromRequest({ codes: list });
      discountSource = computeOrder(cartItems, promo, { now: placedAt }).discountSource;
    }
    await redeemGiftCodes({ orderId, codes: list, discountSource });

    // Campaign gift for orders placed with a partner code.
    if (campaignActive(placedAt) && list.some(isPartnerCode) && email) {
      const { code, created } = await createGiftCode({ orderId, email });
      if (created) await emailGift({ email, code, orderId });
    }
  } catch (err) {
    console.error("giftCodes.onOrderPaid failed", err.message);
  }
}

export { GIFT_CODE_RE };

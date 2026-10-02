// GET /api/check-code?code=GIFT-XXXXXX — tells the cart whether a single-use
// gift code exists and is unused. Static codes are checked in the browser.
import { getPromo } from "../../lib/promos";
import { checkGiftCodes } from "../../lib/giftCodes";

export default async function handler(req, res) {
  const code = String(req.query.code || "").trim().toUpperCase().slice(0, 40);
  const promo = getPromo(code);
  if (!promo) return res.status(200).json({ ok: false, error: "This code is not valid." });
  if (!promo.gift) return res.status(200).json({ ok: true });
  const error = await checkGiftCodes([code]);
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json(error ? { ok: false, error } : { ok: true });
}

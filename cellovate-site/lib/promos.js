// Promo codes. `percent` is the discount applied to the products subtotal
// (never to shipping). `freeShipping: true` waives the shipping fee
// (see lib/pricing.js).
//
// Stacking rule: codes never combine, with ONE exception — an influencer code
// (`influencer: true`) can be added on top of one regular code. So at most
// two codes per order: one regular + one influencer. Adding a second code of
// the same kind replaces the first. Percentages add up, capped at 100%.
//
// Exclusive codes (`exclusive: true`) never combine with anything, not even
// an influencer code or another exclusive code: applying one removes every
// other code, and applying any code afterwards removes it.
//
// Volume tiers (lib/upsell.js) are not codes: the order gets whichever is
// better, the codes or the volume tier, never both.
//
// A combination reaching a $0 total skips the crypto checkout and is placed
// through /api/free-order instead.
export const PROMOS = {
  ROLALA: {
    code: "ROLALA",
    percent: 100,
    freeShipping: true,
    label: "Free order — 100% off, shipping included",
  },
  // 10% off the products only; the shipping fee is still charged.
  // Influencer code — the only kind that stacks with another code.
  RND10: {
    code: "RND10",
    percent: 10,
    freeShipping: false,
    influencer: true,
    label: "10% off products",
  },
  // Influencer code (Brick).
  BRICK10: {
    code: "BRICK10",
    percent: 10,
    freeShipping: false,
    influencer: true,
    label: "10% off products",
  },
  // Win-back offer sent by the Omnisend "Customer Reactivation" automation
  // (60 days after a paid order). Same rules as RND10.
  HEALTH10: {
    code: "HEALTH10",
    percent: 10,
    freeShipping: false,
    label: "10% off products",
  },
  // Welcome offer sent by the Omnisend signup automation. Regular code:
  // combines only with an influencer code.
  WELCOME10: {
    code: "WELCOME10",
    percent: 10,
    freeShipping: false,
    label: "Welcome offer — 10% off products",
  },
  // Influencer codes (Coursey) — exclusive: never combined with any other code.
  // `partner` marks them as influencer codes for attribution and campaign gifts.
  COURSEY15: {
    code: "COURSEY15",
    percent: 15,
    freeShipping: false,
    exclusive: true,
    partner: true,
    label: "15% off products",
  },
  COACHCOUR60: {
    code: "COACHCOUR60",
    percent: 60,
    freeShipping: false,
    exclusive: true,
    partner: true,
    label: "60% off products",
  },
};

// Single-use gift codes (GIFT-XXXXXX), created per order by lib/giftCodes.js.
// The format is recognised here; whether a code exists and is still unused is
// checked server-side (lib/giftCodes.js) before any payment.
export const GIFT_PERCENT = 30;
export const GIFT_CODE_RE = /^GIFT-[A-Z2-9]{6}$/;

export function getPromo(code) {
  if (!code) return null;
  const c = String(code).trim().toUpperCase();
  if (PROMOS[c]) return PROMOS[c];
  if (GIFT_CODE_RE.test(c)) {
    return {
      code: c,
      percent: GIFT_PERCENT,
      freeShipping: false,
      exclusive: true,
      gift: true,
      label: `Gift — ${GIFT_PERCENT}% off products`,
    };
  }
  return null;
}

// Influencer / partner code (credited to a partner, earns campaign gifts).
export function isPartnerCode(code) {
  const p = getPromo(code);
  return Boolean(p && (p.influencer || p.partner));
}

// Normalise a list of codes: known codes only, no duplicates, at most one
// regular code and one influencer code (within each kind, the last one wins).
// An exclusive code stands alone: it clears the others, and a later code
// clears it.
export function normaliseCodes(codes) {
  let promos = [];
  for (const raw of codes || []) {
    const p = getPromo(raw);
    if (!p || promos.some((x) => x.code === p.code)) continue;
    if (p.exclusive) {
      promos = [p];
      continue;
    }
    promos = promos.filter((x) => !x.exclusive);
    const i = promos.findIndex((x) => Boolean(x.influencer) === Boolean(p.influencer));
    if (i >= 0) promos.splice(i, 1);
    promos.push(p);
  }
  return promos.map((p) => p.code);
}

// Several codes folded into one promo-like object, so pricing and display
// code can treat "WELCOME10 + RND10" exactly like a single code.
export function combinePromos(codes) {
  const promos = normaliseCodes(codes).map(getPromo);
  if (!promos.length) return null;
  return {
    code: promos.map((p) => p.code).join(" + "),
    codes: promos.map((p) => p.code),
    percent: Math.min(
      100,
      promos.reduce((s, p) => s + p.percent, 0)
    ),
    freeShipping: promos.some((p) => p.freeShipping),
    label: promos.map((p) => p.label).join(" · "),
  };
}

// Accepts the request body of an API route: `codes` (array) or the older
// single `code`. Returns { promo, invalid } — `invalid` lists unknown codes.
export function promoFromRequest(body) {
  const raw = Array.isArray(body?.codes)
    ? body.codes
    : body?.code
    ? [body.code]
    : [];
  const invalid = raw.filter((c) => c && !getPromo(c));
  return { promo: combinePromos(raw), invalid };
}

// Discount in dollars for a given subtotal, rounded to the cent.
export function getDiscount(promo, subtotal) {
  if (!promo) return 0;
  return Math.round(subtotal * promo.percent) / 100;
}

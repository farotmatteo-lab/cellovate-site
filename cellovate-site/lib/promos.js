// Promo codes. `percent` is the discount applied to the products subtotal
// (never to shipping). `freeShipping: true` waives the shipping fee
// (see lib/pricing.js).
//
// Stacking rule: codes never combine, with ONE exception — an influencer code
// (`influencer: true`) can be added on top of one regular code. So at most
// two codes per order: one regular + one influencer. Adding a second code of
// the same kind replaces the first. Percentages add up, capped at 100%.
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
  // Win-back offer sent by the Omnisend "Customer Reactivation" automation
  // (60 days after a paid order). Same rules as RND10.
  HEALTH10: {
    code: "HEALTH10",
    percent: 10,
    freeShipping: false,
    label: "10% off products",
  },
  // TEMPORARY — card payment test (GHK-Cu 50mg vial ≈ $5.96). Remove after the test.
  CELTEST87X: {
    code: "CELTEST87X",
    percent: 87,
    freeShipping: true,
    label: "Test order",
  },
  // Welcome offer sent by the Omnisend signup automation. Regular code:
  // combines only with an influencer code.
  WELCOME10: {
    code: "WELCOME10",
    percent: 10,
    freeShipping: false,
    label: "Welcome offer — 10% off products",
  },
};

export function getPromo(code) {
  if (!code) return null;
  return PROMOS[String(code).trim().toUpperCase()] || null;
}

// Normalise a list of codes: known codes only, no duplicates, at most one
// regular code and one influencer code (within each kind, the last one wins).
export function normaliseCodes(codes) {
  const promos = [];
  for (const raw of codes || []) {
    const p = getPromo(raw);
    if (!p || promos.some((x) => x.code === p.code)) continue;
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

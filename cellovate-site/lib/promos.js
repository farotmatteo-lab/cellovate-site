// Promo codes. `percent` is the discount applied to the products subtotal
// (never to shipping). `freeShipping: true` waives the flat shipping fee
// (see lib/pricing.js).
//
// Stacking: a `stackable` code (the welcome offer) combines with ONE other
// code. Two non-stackable codes never combine — the newest replaces the
// previous one. Percentages add up (10% + 10% = 20%) and are capped at 100%.
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
  RND10: {
    code: "RND10",
    percent: 10,
    freeShipping: false,
    label: "10% off products",
  },
  // Welcome offer sent by the Omnisend signup automation. Stacks with any
  // other code.
  WELCOME10: {
    code: "WELCOME10",
    percent: 10,
    freeShipping: false,
    stackable: true,
    label: "Welcome offer — 10% off products",
  },
};

export function getPromo(code) {
  if (!code) return null;
  return PROMOS[String(code).trim().toUpperCase()] || null;
}

// Normalise a list of codes: known codes only, no duplicates, at most one
// non-stackable code (the last one wins), stackable codes kept.
export function normaliseCodes(codes) {
  const promos = [];
  for (const raw of codes || []) {
    const p = getPromo(raw);
    if (!p || promos.some((x) => x.code === p.code)) continue;
    if (!p.stackable) {
      const i = promos.findIndex((x) => !x.stackable);
      if (i >= 0) promos.splice(i, 1);
    }
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

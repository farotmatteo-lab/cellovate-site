// Promo codes. `percent` is the discount applied to the cart subtotal.
// `freeShipping: true` waives the flat shipping fee (see lib/pricing.js).
//
// A code at 100% produces a $0 total: the crypto checkout is skipped and the
// order is placed through /api/free-order instead.
export const PROMOS = {
  ROLALA: {
    code: "ROLALA",
    percent: 100,
    freeShipping: true,
    label: "Free order — 100% off, shipping included",
  },
};

export function getPromo(code) {
  if (!code) return null;
  return PROMOS[String(code).trim().toUpperCase()] || null;
}

// Discount in dollars for a given subtotal, rounded to the cent.
export function getDiscount(promo, subtotal) {
  if (!promo) return 0;
  return Math.round(subtotal * promo.percent) / 100;
}

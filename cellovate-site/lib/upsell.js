// Upsell rules shared by the cart, checkout, product pages and the server
// (lib/pricing.js applies the tiers and free shipping to what is charged).
import { VISIBLE_PRODUCTS, getDefaultVariant } from "./products";

// Orders whose products total (after discount) reaches this ship free.
export const FREE_SHIPPING_THRESHOLD = 250;

// Automatic discount by number of items in the cart. Never added to promo
// codes: the order gets whichever is better (see lib/pricing.js).
export const VOLUME_TIERS = [
  { minItems: 5, percent: 10 },
  { minItems: 3, percent: 5 },
];

export function getVolumeTier(itemCount) {
  return VOLUME_TIERS.find((t) => itemCount >= t.minItems) || null;
}

// The next tier the shopper can reach, with how many items are missing.
export function getNextVolumeTier(itemCount) {
  const next = [...VOLUME_TIERS]
    .sort((a, b) => a.minItems - b.minItems)
    .find((t) => itemCount < t.minItems);
  return next ? { ...next, missing: next.minItems - itemCount } : null;
}

// "10mg", "10mg (5+5)", "500mg" -> milligrams.
export function doseMg(variant) {
  const m = String(variant?.dose || "").match(/([\d.]+)\s*mg/i);
  return m ? parseFloat(m[1]) : null;
}

export function pricePerMg(variant) {
  const mg = doseMg(variant);
  return mg ? variant.price / mg : null;
}

// Minimum saving per mg for a size upgrade to be worth suggesting.
const MIN_UPGRADE_SAVING = 0.05;

// Next larger size in the same format that is cheaper per mg.
// Returns { variant, extra, saving } or null.
export function getSizeUpgrade(product, variant) {
  if (!product || !variant) return null;
  const mg = doseMg(variant);
  const perMg = pricePerMg(variant);
  if (!mg || !perMg) return null;
  const candidates = product.variants
    .filter((v) => v.format === variant.format && doseMg(v) > mg)
    .sort((a, b) => doseMg(a) - doseMg(b));
  for (const v of candidates) {
    const saving = 1 - pricePerMg(v) / perMg;
    if (saving >= MIN_UPGRADE_SAVING) {
      return {
        variant: v,
        extra: Math.round((v.price - variant.price) * 100) / 100,
        saving: Math.round(saving * 100),
      };
    }
  }
  return null;
}

// Dosage with the lowest price per mg for a format (for the "Best value"
// badge). Null when the product has a single dosage.
export function getBestValueDose(product, format) {
  const vs = product.variants.filter((v) => v.format === format && pricePerMg(v));
  if (vs.length < 2) return null;
  return vs.reduce((best, v) => (pricePerMg(v) < pricePerMg(best) ? v : best)).dose;
}

// Curated pairings by research area (not by goal or protocol).
const RELATED = {
  bpc: ["tb500", "bpctb", "ghk"],
  tb500: ["bpc", "bpctb", "ghk"],
  bpctb: ["ghk", "kpv", "glow"],
  ghk: ["bpc", "glow", "kpv"],
  glow: ["klow", "ghk", "bpc"],
  klow: ["glow", "kpv", "ghk"],
  kpv: ["bpc", "ghk", "klow"],
  cjc: ["tesa", "ipa"],
  ipa: ["cjc", "tesa"],
  tesa: ["cjc", "ipa"],
  kiss: ["cjc", "ipa"],
  ss31: ["motsc", "nad"],
  motsc: ["ss31", "nad", "amino5"],
  nad: ["motsc", "ss31", "epi"],
  amino5: ["motsc", "nad"],
  semax: ["selank", "pinealon"],
  selank: ["semax", "pinealon"],
  pinealon: ["epi", "semax"],
  epi: ["pinealon", "nad"],
  tirz: ["reta", "amino5", "motsc"],
  reta: ["tirz", "amino5", "motsc"],
  aod: ["amino5", "motsc"],
};

const visible = (id) => VISIBLE_PRODUCTS.find((p) => p.id === id);

export function getRelatedProducts(productId, limit = 3) {
  return (RELATED[productId] || []).map(visible).filter(Boolean).slice(0, limit);
}

// Suggestions for the cart: products researched alongside what is already in
// it, most frequently linked first, never something already in the cart.
export function getCartSuggestions(lines, limit = 2) {
  const inCart = new Set((lines || []).map((l) => l.id));
  const score = new Map();
  for (const l of lines || []) {
    (RELATED[l.id] || []).forEach((id, rank) => {
      if (inCart.has(id) || !visible(id)) return;
      score.set(id, (score.get(id) || 0) + (3 - Math.min(rank, 2)));
    });
  }
  return [...score.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => {
      const product = visible(id);
      return { product, variant: getDefaultVariant(product) };
    });
}


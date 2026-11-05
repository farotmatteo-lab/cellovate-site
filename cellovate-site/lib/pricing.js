// Order pricing shared by the cart (display) and the API routes (what is
// actually charged). The server always recomputes with this — the amount sent
// by the browser is never trusted.
import { PRODUCTS, getVariant } from "./products";
import { getDiscount } from "./promos";
import { FREE_SHIPPING_THRESHOLD, getVolumeTier } from "./upsell";
import { CAMPAIGN, campaignActive, buy2Get1 } from "./campaign";
import { planFulfillment } from "./fulfillment";

// Flat shipping fee per order, in USD. Waived by promo codes with
// `freeShipping: true` and when the products total (after discount) reaches
// FREE_SHIPPING_THRESHOLD.
export const SHIPPING_FEE = 50;

export function getShipping(promo, itemCount, productsTotal = 0) {
  if (!itemCount) return 0;
  if (promo?.freeShipping) return 0;
  return productsTotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
}

const round = (n) => Math.round(n * 100) / 100;

// items: [{ id, variantKey, qty }]
// opts.now: time used for the campaign (default: now). Pass the order's
// creation time when recomputing an order after the fact.
// opts.country + opts.stock: shipping country and Thailand stock; an order
// to Thailand fully covered by that stock ships free (lib/fulfillment.js).
export function computeOrder(items, promo, opts = {}) {
  const lines = [];
  const unitPrices = [];
  let subtotal = 0;
  let itemCount = 0;

  for (const item of items || []) {
    const product = PRODUCTS.find((p) => p.id === item.id);
    if (!product || product.draft) continue;
    const variant = getVariant(product, item.variantKey);
    const qty = Math.max(1, Math.min(50, parseInt(item.qty, 10) || 0));
    subtotal += variant.price * qty;
    itemCount += qty;
    for (let i = 0; i < qty; i++) unitPrices.push(variant.price);
    lines.push(
      `${qty} × ${product.name} — ${variant.label} (${product.code}) — $${(
        variant.price * qty
      ).toFixed(2)}`
    );
  }

  subtotal = round(subtotal);

  // Promo codes, the volume tier and the campaign never add up: the best one
  // applies (a tie goes to the code). Codes stay on the order either way, so
  // partner codes keep their attribution.
  const codeDiscount = getDiscount(promo, subtotal);
  const tier = getVolumeTier(itemCount);
  const tierDiscount = tier ? round((subtotal * tier.percent) / 100) : 0;
  const campaign = campaignActive(opts.now) ? buy2Get1(unitPrices) : null;
  const campaignDiscount = campaign ? campaign.discount : 0;
  let discount = 0;
  let discountSource = null;
  let discountLabel = null;
  if (campaignDiscount > codeDiscount && campaignDiscount >= tierDiscount) {
    discount = campaignDiscount;
    discountSource = "campaign";
    discountLabel = `${CAMPAIGN.name} (${campaign.free} free)`;
  } else if (tierDiscount > codeDiscount) {
    discount = tierDiscount;
    discountSource = "volume";
    discountLabel = `Volume discount ${tier.percent}%`;
  } else if (codeDiscount > 0) {
    discount = codeDiscount;
    discountSource = "code";
    discountLabel = promo.code;
  }

  const productsTotal = round(Math.max(0, subtotal - discount));
  const { fulfillment, factoryKeys } = planFulfillment(items, opts.country, opts.stock);
  const shipping =
    fulfillment === "thailand" && itemCount ? 0 : getShipping(promo, itemCount, productsTotal);
  const total = round(productsTotal + shipping);
  const freeShippingRemaining =
    shipping > 0 ? round(FREE_SHIPPING_THRESHOLD - productsTotal) : 0;
  return {
    fulfillment,
    factoryKeys,
    lines,
    itemCount,
    subtotal,
    discount,
    discountSource,
    discountLabel,
    codeDiscount,
    tier,
    campaignFree: campaign ? campaign.free : 0,
    shipping,
    total,
    freeShippingRemaining,
  };
}

// Text block used in order emails.
export function formatTotals({ subtotal, discount, discountLabel, shipping, total, fulfillment }) {
  return [
    fulfillment === "thailand" ? "Ships from: THAILAND STOCK" : null,
    `Subtotal: $${subtotal.toFixed(2)}`,
    discount > 0
      ? `Discount${discountLabel ? ` (${discountLabel})` : ""}: -$${discount.toFixed(2)}`
      : null,
    `Shipping: ${shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}`,
    `Total: $${total.toFixed(2)}`,
  ]
    .filter(Boolean)
    .join("\n");
}

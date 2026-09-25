// Order pricing shared by the cart (display) and the API routes (what is
// actually charged). The server always recomputes with this — the amount sent
// by the browser is never trusted.
import { PRODUCTS, getVariant } from "./products";
import { getDiscount } from "./promos";
import { FREE_SHIPPING_THRESHOLD, getVolumeTier } from "./upsell";

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
export function computeOrder(items, promo) {
  const lines = [];
  let subtotal = 0;
  let itemCount = 0;

  for (const item of items || []) {
    const product = PRODUCTS.find((p) => p.id === item.id);
    if (!product || product.draft) continue;
    const variant = getVariant(product, item.variantKey);
    const qty = Math.max(1, Math.min(50, parseInt(item.qty, 10) || 0));
    subtotal += variant.price * qty;
    itemCount += qty;
    lines.push(
      `${qty} × ${product.name} — ${variant.label} (${product.code}) — $${(
        variant.price * qty
      ).toFixed(2)}`
    );
  }

  subtotal = round(subtotal);

  // Promo codes and the volume tier never add up: the better one applies
  // (a tie goes to the code, so influencer codes keep their attribution).
  const codeDiscount = getDiscount(promo, subtotal);
  const tier = getVolumeTier(itemCount);
  const tierDiscount = tier ? round((subtotal * tier.percent) / 100) : 0;
  let discount = 0;
  let discountSource = null;
  let discountLabel = null;
  if (tierDiscount > codeDiscount) {
    discount = tierDiscount;
    discountSource = "volume";
    discountLabel = `Volume discount ${tier.percent}%`;
  } else if (codeDiscount > 0) {
    discount = codeDiscount;
    discountSource = "code";
    discountLabel = promo.code;
  }

  const productsTotal = round(Math.max(0, subtotal - discount));
  const shipping = getShipping(promo, itemCount, productsTotal);
  const total = round(productsTotal + shipping);
  const freeShippingRemaining =
    shipping > 0 ? round(FREE_SHIPPING_THRESHOLD - productsTotal) : 0;
  return {
    lines,
    itemCount,
    subtotal,
    discount,
    discountSource,
    discountLabel,
    codeDiscount,
    tier,
    shipping,
    total,
    freeShippingRemaining,
  };
}

// Text block used in order emails.
export function formatTotals({ subtotal, discount, discountLabel, shipping, total }) {
  return [
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

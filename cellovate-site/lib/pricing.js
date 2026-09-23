// Order pricing shared by the cart (display) and the API routes (what is
// actually charged). The server always recomputes with this — the amount sent
// by the browser is never trusted.
import { PRODUCTS, getVariant } from "./products";
import { getDiscount } from "./promos";

// Flat shipping fee per order, in USD. Waived by promo codes with
// `freeShipping: true`.
export const SHIPPING_FEE = 50;

export function getShipping(promo, itemCount) {
  if (!itemCount) return 0;
  return promo?.freeShipping ? 0 : SHIPPING_FEE;
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
  const discount = getDiscount(promo, subtotal);
  const shipping = getShipping(promo, itemCount);
  const total = round(Math.max(0, subtotal - discount) + shipping);
  return { lines, itemCount, subtotal, discount, shipping, total };
}

// Text block used in order emails.
export function formatTotals({ subtotal, discount, shipping, total }) {
  return [
    `Subtotal: $${subtotal.toFixed(2)}`,
    discount > 0 ? `Discount: -$${discount.toFixed(2)}` : null,
    `Shipping: ${shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}`,
    `Total: $${total.toFixed(2)}`,
  ]
    .filter(Boolean)
    .join("\n");
}

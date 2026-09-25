// Upsell blocks used by the cart drawer and the checkout summary.
import { Truck, Percent, ArrowUpRight, Plus, Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import {
  FREE_SHIPPING_THRESHOLD,
  getSizeUpgrade,
  getCartSuggestions,
} from "../lib/upsell";

const money = (n) => `$${Number(n || 0).toFixed(2)}`;

// "Add $X more for free shipping" + progress bar.
export function FreeShippingBar() {
  const { lines, shipping, freeShippingRemaining, promo } = useCart();
  if (!lines.length || promo?.freeShipping) return null;
  const unlocked = shipping === 0;
  const pct = unlocked
    ? 100
    : Math.max(4, Math.min(100, ((FREE_SHIPPING_THRESHOLD - freeShippingRemaining) / FREE_SHIPPING_THRESHOLD) * 100));
  return (
    <div className="rounded-xl bg-[#0039CC]/[0.06] border border-[#0039CC]/15 px-3 py-2.5">
      <p className="text-[12px] text-[#0A0A0A] flex items-center gap-1.5">
        <Truck size={14} className="text-[#0039CC] shrink-0" />
        {unlocked ? (
          <span className="font-semibold text-[#0039CC]">Free shipping unlocked</span>
        ) : (
          <span>
            Add <strong className="font-mono">{money(freeShippingRemaining)}</strong> more for{" "}
            <strong>free shipping</strong>
          </span>
        )}
      </p>
      <div className="mt-2 h-1.5 rounded-full bg-black/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#0039CC] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// Volume tier status: what is applied, and how close the next tier is.
export function VolumeNudge() {
  const { lines, tier, nextTier, discountSource, codeDiscount } = useCart();
  if (!lines.length) return null;
  const tierWins = discountSource === "volume";
  const codeBeatsTier = tier && !tierWins && codeDiscount > 0;
  if (!tierWins && !codeBeatsTier && !nextTier) return null;
  return (
    <div className="text-[12px] flex items-start gap-1.5 text-black/70">
      <Percent size={13} className="text-[#0039CC] shrink-0 mt-[2px]" />
      <span>
        {tierWins && (
          <>
            <strong className="text-[#0039CC]">{tier.percent}% volume discount applied</strong>
            {codeDiscount > 0 && " (better than your code)"}.{" "}
          </>
        )}
        {codeBeatsTier && <>Your code beats the {tier.percent}% volume discount. </>}
        {nextTier && (
          <>
            Add {nextTier.missing} more item{nextTier.missing > 1 ? "s" : ""} to get{" "}
            <strong>{nextTier.percent}% off</strong> your order.
          </>
        )}
      </span>
    </div>
  );
}

// One-click size upgrade for a cart line, only when cheaper per mg.
export function LineUpgrade({ line, disabled }) {
  const { swapVariant } = useCart();
  const up = getSizeUpgrade(line, line.variant);
  if (!up || disabled) return null;
  return (
    <button
      type="button"
      onClick={() => swapVariant(line.id, line.variant.key, up.variant.key)}
      className="mt-1.5 inline-flex items-center gap-1 text-[11.5px] font-medium text-[#0039CC] bg-[#0039CC]/[0.07] hover:bg-[#0039CC]/[0.12] rounded-lg px-2 py-1 transition text-left"
    >
      <ArrowUpRight size={12} className="shrink-0" />
      Upgrade to {up.variant.dose} for +{money(up.extra * line.qty)} — {up.saving}% less per mg
    </button>
  );
}

// "Frequently researched together" suggestions based on the cart content.
export function CartSuggestions({ limit = 2 }) {
  const { lines, addToCart } = useCart();
  const items = getCartSuggestions(lines, limit);
  if (!items.length) return null;
  return (
    <div>
      <p className="text-[10.5px] uppercase tracking-[0.15em] text-black/45 font-mono mb-2">
        Frequently researched together
      </p>
      <div className="space-y-2">
        {items.map(({ product, variant }) => (
          <div
            key={product.id}
            className="flex items-center gap-3 bg-white border border-black/10 rounded-xl p-2"
          >
            <div className="w-11 h-11 rounded-lg bg-[#EFEFF2] overflow-hidden shrink-0">
              <img
                src={variant.image || "/product-placeholder.svg"}
                alt={variant.imageAlt || product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <a
                href={`/shop/${product.handle}`}
                className="block text-[12.5px] font-medium truncate hover:text-[#0039CC]"
              >
                {product.name}
              </a>
              <p className="text-[11px] text-black/45 font-mono">
                {variant.label} · {money(variant.price)}
              </p>
            </div>
            <button
              type="button"
              onClick={() => addToCart(product.id, variant.key)}
              className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-[#0039CC] text-white text-[12px] font-semibold px-3 py-1.5 active:scale-95 transition"
            >
              <Plus size={12} strokeWidth={2.5} /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PromoNotice() {
  const { promoNotice } = useCart();
  if (!promoNotice) return null;
  return (
    <p className="text-[11.5px] text-black/55 flex items-start gap-1">
      <Check size={12} className="mt-[2px] shrink-0" /> {promoNotice}
    </p>
  );
}

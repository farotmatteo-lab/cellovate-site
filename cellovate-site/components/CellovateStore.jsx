import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import {
  VISIBLE_PRODUCTS,
  getDefaultVariant,
  getVariant,
  getDoses,
  getFormats,
} from "../lib/products";
import { useCart } from "../context/CartContext";

function ProductCard({ p, cart, addToCart, removeFromCart }) {
  const [variantKey, setVariantKey] = useState(getDefaultVariant(p).key);
  const variant = getVariant(p, variantKey);
  const qty = cart[`${p.id}::${variantKey}`] || 0;
  const doses = getDoses(p);
  const formats = getFormats(p, variant.dose);

  // Keep the chosen format when the shopper switches dosage.
  const selectDose = (dose) => {
    const match =
      getFormats(p, dose).find((v) => v.format === variant.format) ||
      getFormats(p, dose)[0];
    setVariantKey(match.key);
  };

  return (
    <div className="bg-white border border-black/8 rounded-2xl p-4 flex flex-col">
      <Link
        href={`/shop/${p.handle}`}
        className="aspect-[4/3] rounded-xl bg-[#EFEFF2] mb-3 flex items-center justify-center relative overflow-hidden"
      >
        <img
          src={variant.image || "/product-placeholder.svg"}
          alt={variant.imageAlt}
          loading="lazy"
          className={`w-full h-full ${
            variant.image ? "object-cover" : "object-contain p-6 opacity-70"
          }`}
        />
        <span className="absolute bottom-2 right-2 text-[8px] font-mono text-black/60 bg-white/70 backdrop-blur px-1.5 py-0.5 rounded tracking-wider">
          {p.code}
        </span>
      </Link>

      <div className="flex items-start justify-between gap-2">
        <Link href={`/shop/${p.handle}`}>
          <h3 className="font-display text-[14px] leading-tight hover:text-[#0039CC] transition">
            {p.name}
          </h3>
        </Link>
        <span className="font-mono text-[13px] text-[#0039CC] font-semibold shrink-0">
          ${variant.price}
        </span>
      </div>
      <p className="text-[11px] text-black/35 font-mono mt-1">
        {p.dose} · {p.purity ? `${p.purity} purity` : "HPLC verified"}
      </p>
      <p className="text-[11.5px] text-black/45 mt-2 leading-snug flex-1">
        {p.desc}
      </p>

      {/* Dosage selector — hidden when a product has a single dosage */}
      {doses.length > 1 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {doses.map((d) => (
            <button
              key={d}
              onClick={() => selectDose(d)}
              className={`flex-1 min-w-[56px] text-[10.5px] font-mono py-1.5 rounded-lg border transition ${
                d === variant.dose
                  ? "border-[#0039CC] bg-[#0039CC]/10 text-[#0A0A0A]"
                  : "border-black/10 text-black/40 hover:text-black/60"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      )}

      {/* Format selector */}
      <div className="flex gap-1.5 mt-2">
        {formats.map((v) => (
          <button
            key={v.key}
            onClick={() => setVariantKey(v.key)}
            className={`flex-1 text-[10.5px] font-mono py-1.5 rounded-lg border transition ${
              v.key === variantKey
                ? "border-[#0039CC] bg-[#0039CC]/10 text-[#0A0A0A]"
                : "border-black/10 text-black/40 hover:text-black/60"
            }`}
          >
            {v.format}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3 pt-3 border-t border-black/6">
        <Link
          href={`/shop/${p.handle}`}
          className="text-[10px] text-black/25 font-mono hover:text-[#0039CC] transition"
        >
          Third-party tested
        </Link>
        {qty === 0 ? (
          <button
            onClick={() => addToCart(p.id, variantKey)}
            className="w-8 h-8 rounded-full bg-[#FAFAFA] text-[#0A0A0A] flex items-center justify-center active:scale-90 transition"
          >
            <Plus size={15} strokeWidth={2.5} />
          </button>
        ) : (
          <div className="flex items-center gap-2 bg-black/5 rounded-full px-1 py-1">
            <button
              onClick={() => removeFromCart(p.id, variantKey)}
              className="w-6 h-6 rounded-full flex items-center justify-center active:scale-90 transition"
            >
              <Minus size={12} strokeWidth={2.5} />
            </button>
            <span className="font-mono text-[12px] w-4 text-center tabular-nums">
              {qty}
            </span>
            <button
              onClick={() => addToCart(p.id, variantKey)}
              className="w-6 h-6 rounded-full bg-[#0039CC] flex items-center justify-center active:scale-90 transition"
            >
              <Plus size={12} strokeWidth={2.5} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CellovateStore() {
  const { cart, addToCart, removeFromCart, itemCount, setCartOpen } =
    useCart();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans pb-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#FAFAFA]/95 backdrop-blur border-b border-black/8">
        <div className="max-w-5xl mx-auto px-5 pt-5 pb-4 flex items-center justify-between">
          <Link href="/" className="block">
            <img src="/logo.png" alt="Cellovate Advanced Peptide Systems" className="h-8 w-auto bg-[#0A0A0A] rounded-md px-2 py-1" />
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            className="relative w-10 h-10 rounded-full border border-black/15 flex items-center justify-center active:scale-95 transition"
          >
            <ShoppingBag size={16} strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#0039CC] text-[10px] font-semibold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                {itemCount}
              </span>
            )}
          </button>
        </div>
        <div className="max-w-5xl mx-auto px-5 pb-3">
          <p className="text-[10px] tracking-[0.1em] text-[#0039CC]/80 font-mono uppercase">
            For research use only — not for human consumption
          </p>
        </div>
      </header>

      {/* Catalog */}
      <main className="max-w-5xl mx-auto px-5 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {VISIBLE_PRODUCTS.map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              cart={cart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

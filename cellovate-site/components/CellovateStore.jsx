import React from "react";
import Link from "next/link";
import { Plus, Minus, ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../lib/products";
import { useCart } from "../context/CartContext";

export default function CellovateStore() {
  const { cart, addToCart, removeFromCart, itemCount, setCartOpen } =
    useCart();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans pb-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#0A0A0A]/95 backdrop-blur border-b border-white/8">
        <div className="max-w-5xl mx-auto px-5 pt-5 pb-4 flex items-center justify-between">
          <Link href="/" className="block">
            <img src="/logo.png" alt="Cellovate Advanced Peptide Systems" className="h-8 w-auto" />
          </Link>
          <button
            onClick={() => setCartOpen(true)}
            className="relative w-10 h-10 rounded-full border border-white/15 flex items-center justify-center active:scale-95 transition"
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
          {PRODUCTS.map((p) => {
            const qty = cart[p.id] || 0;
            return (
              <div
                key={p.id}
                className="bg-[#131313] border border-white/8 rounded-2xl p-4 flex flex-col"
              >
                <Link
                  href={`/shop/${p.handle}`}
                  className="aspect-[4/3] rounded-xl bg-[#1C1C1C] mb-3 flex items-center justify-center relative overflow-hidden"
                >
                  {p.images?.[0] && (
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/60 bg-black/50 backdrop-blur px-1.5 py-0.5 rounded tracking-wider">
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
                    ${p.price}
                  </span>
                </div>
                <p className="text-[11px] text-white/35 font-mono mt-1">
                  {p.dose} · {p.purity} purity
                </p>
                <p className="text-[11.5px] text-white/45 mt-2 leading-snug flex-1">
                  {p.desc}
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/6">
                  <Link
                    href={`/shop/${p.handle}`}
                    className="text-[10px] text-white/25 font-mono hover:text-[#0039CC] transition"
                  >
                    COA available
                  </Link>
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(p.id)}
                      className="w-8 h-8 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center active:scale-90 transition"
                    >
                      <Plus size={15} strokeWidth={2.5} />
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 bg-white/10 rounded-full px-1 py-1">
                      <button
                        onClick={() => removeFromCart(p.id)}
                        className="w-6 h-6 rounded-full flex items-center justify-center active:scale-90 transition"
                      >
                        <Minus size={12} strokeWidth={2.5} />
                      </button>
                      <span className="font-mono text-[12px] w-4 text-center tabular-nums">
                        {qty}
                      </span>
                      <button
                        onClick={() => addToCart(p.id)}
                        className="w-6 h-6 rounded-full bg-[#0039CC] flex items-center justify-center active:scale-90 transition"
                      >
                        <Plus size={12} strokeWidth={2.5} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

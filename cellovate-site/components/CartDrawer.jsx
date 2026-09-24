import React, { useState, useEffect } from "react";
import {
  Plus,
  Minus,
  X,
  Check,
  ChevronRight,
  Copy,
  ShieldCheck,
  ArrowLeft,
  Bitcoin,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/router";

export default function CartDrawer() {
  const {
    lines,
    itemCount,
    subtotal,
    discount,
    shipping,
    total,
    promo,
    promos,
    promoError,
    applyPromo,
    removePromo,
    addToCart,
    removeFromCart,
    cartOpen,
    setCartOpen,
  } = useCart();
  const router = useRouter();
  const [codeInput, setCodeInput] = useState("");
  const freeOrder = total === 0 && lines.length > 0;

  // Checkout is a full page; the drawer only shows the cart.
  const goToCheckout = () => {
    setCartOpen(false);
    router.push("/checkout");
  };

  // The checkout page has its own always-visible summary.
  if (router.pathname === "/checkout") return null;

  return (
    <>
      {itemCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-[#0039CC] text-white rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-lg shadow-black/15 active:scale-[0.98] transition z-30"
        >
          <span className="text-[13px] font-semibold">
            View cart · {itemCount} item{itemCount > 1 ? "s" : ""}
          </span>
          <span className="font-mono text-[14px] font-bold">
            ${total.toFixed(2)}
          </span>
        </button>
      )}

      {cartOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setCartOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white rounded-t-3xl border-t border-black/10 max-h-[85vh] flex flex-col">
            {(
              <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-black/8">
                <h2 className="font-display text-[15px]">YOUR CART</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center"
                >
                  <X size={15} />
                </button>
              </div>
            )}

            {lines.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-16 text-black/30 text-[13px]">
                Cart is empty.
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                  {lines.map((l) => (
                    <div key={l.lineId} className="flex items-center justify-between">
                      <div className="min-w-0 pr-3">
                        <p className="text-[13px] font-medium leading-tight">
                          {l.name}
                          <span className="text-black/35 font-normal">
                            {" "}
                            — {l.variant.label}
                          </span>
                        </p>
                        <p className="text-[11px] text-black/35 font-mono mt-0.5">
                          {l.qty} × ${l.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-black/5 rounded-full px-1 py-1 shrink-0">
                        <button
                          onClick={() => removeFromCart(l.id, l.variant.key)}
                          className="w-6 h-6 rounded-full flex items-center justify-center active:scale-90 transition"
                        >
                          <Minus size={12} strokeWidth={2.5} />
                        </button>
                        <span className="font-mono text-[12px] w-4 text-center tabular-nums">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => addToCart(l.id, l.variant.key)}
                          className="w-6 h-6 rounded-full bg-[#0039CC] text-white flex items-center justify-center active:scale-90 transition"
                        >
                          <Plus size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-4 border-t border-black/8 space-y-1.5">
                  {promos.map((p) => (
                    <div
                      key={p.code}
                      className="flex items-center justify-between text-[12px]"
                    >
                      <span className="text-black/55">
                        Code{" "}
                        <span className="font-mono text-[#0039CC] font-semibold">
                          {p.code}
                        </span>{" "}
                        applied
                      </span>
                      <button
                        onClick={() => removePromo(p.code)}
                        className="text-black/40 hover:text-black/70 underline"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (applyPromo(codeInput)) setCodeInput("");
                    }}
                    className="flex gap-2 mb-2"
                  >
                    <input
                      value={codeInput}
                      onChange={(e) => setCodeInput(e.target.value)}
                      placeholder={promos.length ? "Add another code" : "Promo code"}
                      className="flex-1 bg-[#FAFAFA] border border-black/10 rounded-xl px-3 py-2 text-[12.5px] uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 rounded-xl border border-black/15 text-[12.5px] font-medium hover:border-[#0039CC] transition"
                    >
                      Apply
                    </button>
                  </form>
                  {promoError && (
                    <p className="text-[11.5px] text-red-600">{promoError}</p>
                  )}

                  <div className="flex items-center justify-between text-[12px] text-black/45">
                    <span>Subtotal</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex items-center justify-between text-[12px] text-[#0039CC]">
                      <span>Discount</span>
                      <span className="font-mono">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-[12px] text-black/45">
                    <span>Shipping</span>
                    <span className="font-mono">
                      {shipping > 0 ? `$${shipping.toFixed(2)}` : "Free"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-display text-[13px]">TOTAL</span>
                    <span className="font-mono text-[16px] font-bold text-[#0039CC]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={goToCheckout}
                    className="w-full mt-3 bg-[#0A0A0A] text-white rounded-xl py-3.5 font-semibold text-[13px] flex items-center justify-center gap-1.5 active:scale-[0.98] transition"
                  >
                    {freeOrder ? "Complete free order" : "Go to checkout"}
                    <ChevronRight size={15} strokeWidth={2.5} />
                  </button>
                  <p className="text-center text-[10px] text-black/25 pt-1">
                    {freeOrder
                      ? "No payment required — shipping included"
                      : "Secure crypto payment via NOWPayments"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

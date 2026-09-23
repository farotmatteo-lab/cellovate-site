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
import CheckoutForm from "./CheckoutForm";

const CRYPTO_OPTIONS = [
  { id: "btc", label: "Bitcoin", symbol: "BTC" },
  { id: "eth", label: "Ethereum", symbol: "ETH" },
  { id: "usdttrc20", label: "USDT (TRC-20)", symbol: "USDT" },
];

function useCountdown(seconds, active) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (!active || left <= 0) return;
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [left, active]);
  const m = String(Math.floor(left / 60)).padStart(2, "0");
  const s = String(left % 60).padStart(2, "0");
  return { display: `${m}:${s}`, left };
}

function CheckoutPanel({ total, orderId, customer, lines, onBack, onDone }) {
  const [coin, setCoin] = useState(CRYPTO_OPTIONS[0].id);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [payment, setPayment] = useState(null); // { paymentId, payAddress, payAmount, payCurrency, status }
  const activeCoin = CRYPTO_OPTIONS.find((c) => c.id === coin);
  const paid = payment?.status === "finished" || payment?.status === "confirmed";
  const { display } = useCountdown(1200, !!payment && !paid);

  const createPayment = async (nextCoin) => {
    setLoading(true);
    setError(null);
    setPayment(null);
    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: total,
          orderId,
          payCurrency: nextCoin,
          customer,
          items: lines.map((l) => ({
            id: l.id,
            variantKey: l.variant.key,
            qty: l.qty,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Payment creation failed");
      setPayment({
        paymentId: data.paymentId,
        payAddress: data.payAddress,
        payAmount: data.payAmount,
        payCurrency: data.payCurrency,
        status: data.status || "waiting",
      });
    } catch (err) {
      setError(
        "Unable to create payment. Check that /api/create-payment is deployed and NOWPAYMENTS_API_KEY is set."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createPayment(coin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coin]);

  // Poll payment status every 6s until finished/confirmed
  useEffect(() => {
    if (!payment?.paymentId || paid) return;
    const t = setInterval(async () => {
      try {
        const res = await fetch(
          `/api/payment-status?paymentId=${payment.paymentId}`
        );
        const data = await res.json();
        if (res.ok && data.status) {
          setPayment((p) => (p ? { ...p, status: data.status } : p));
        }
      } catch {
        // silent — will retry on next interval
      }
    }, 6000);
    return () => clearInterval(t);
  }, [payment?.paymentId, paid]);

  useEffect(() => {
    if (paid) {
      const t = setTimeout(onDone, 2200);
      return () => clearTimeout(t);
    }
  }, [paid, onDone]);

  const qrUrl = payment
    ? `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
        `${payment.payCurrency}:${payment.payAddress}?amount=${payment.payAmount}`
      )}`
    : null;

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-black/8">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full border border-black/15 flex items-center justify-center shrink-0"
        >
          <ArrowLeft size={15} />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-black/35">
            Order
          </p>
          <p className="font-mono text-[13px]">{orderId}</p>
        </div>
        {payment && !paid && (
          <span className="ml-auto font-mono text-[12px] text-[#0039CC] bg-[#0039CC]/10 px-2.5 py-1 rounded-full">
            {display}
          </span>
        )}
      </div>

      {paid ? (
        <div className="flex-1 flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[#0039CC] flex items-center justify-center mb-4">
            <Check size={24} strokeWidth={3} />
          </div>
          <p className="font-display text-[15px] tracking-tight">
            PAYMENT CONFIRMED
          </p>
          <p className="text-[12px] text-black/40 mt-2">
            Order confirmation sent by email. Ships within 24h.
          </p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <div className="flex gap-2 mb-5">
            {CRYPTO_OPTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCoin(c.id)}
                disabled={loading}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl border text-[12px] font-medium transition disabled:opacity-40 ${
                  coin === c.id
                    ? "border-[#0039CC] bg-[#0039CC]/10 text-[#0A0A0A]"
                    : "border-black/10 text-black/40"
                }`}
              >
                <Bitcoin size={13} />
                {c.symbol}
              </button>
            ))}
          </div>

          {error ? (
            <div className="bg-white border border-red-500/20 rounded-2xl p-5 text-center">
              <p className="text-[12px] text-red-400/90 leading-snug">
                {error}
              </p>
              <button
                onClick={() => createPayment(coin)}
                className="mt-3 text-[12px] text-[#0039CC] underline underline-offset-2"
              >
                Retry
              </button>
            </div>
          ) : loading || !payment ? (
            <div className="bg-white border border-black/8 rounded-2xl p-10 flex flex-col items-center">
              <div className="w-6 h-6 border-2 border-black/15 border-t-[#0039CC] rounded-full animate-spin mb-3" />
              <p className="text-[12px] text-black/40">
                Creating your invoice…
              </p>
            </div>
          ) : (
            <div className="bg-white border border-black/8 rounded-2xl p-5 flex flex-col items-center">
              <div className="w-[168px] h-[168px] bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src={qrUrl}
                  alt="Payment QR code"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-[10px] uppercase tracking-[0.15em] text-black/35 mb-1">
                {payment.status === "waiting"
                  ? "Amount due"
                  : `Status: ${payment.status}`}
              </p>
              <p className="font-mono text-[22px] font-semibold text-[#0A0A0A]">
                {payment.payAmount}{" "}
                <span className="text-[13px] text-black/40">
                  {activeCoin.symbol}
                </span>
              </p>
              <p className="text-[11px] text-black/30 font-mono mt-0.5">
                ≈ ${total.toFixed(2)} USD
              </p>

              <div className="w-full mt-5">
                <p className="text-[10px] uppercase tracking-[0.15em] text-black/35 mb-1.5">
                  {activeCoin.label} address
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(payment.payAddress);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="w-full flex items-center justify-between gap-2 bg-[#FAFAFA] border border-black/10 rounded-xl px-3 py-2.5"
                >
                  <span className="font-mono text-[11px] text-black/70 truncate">
                    {payment.payAddress}
                  </span>
                  {copied ? (
                    <Check size={13} className="text-[#0039CC] shrink-0" />
                  ) : (
                    <Copy size={13} className="text-black/40 shrink-0" />
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2 mt-4 text-[11px] text-black/30 leading-snug">
            <ShieldCheck size={14} className="shrink-0 mt-0.5 text-[#0039CC]" />
            Payment processed via NOWPayments — non-custodial, no card data
            ever collected. Status updates automatically once the network
            confirms your transaction.
          </div>
        </div>
      )}
    </div>
  );
}


function FreeOrderPanel({ lines, promo, orderId, customer, onBack, onDone }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const place = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/free-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          code: promo?.code,
          customer,
          items: lines.map((l) => ({
            id: l.id,
            variantKey: l.variant.key,
            qty: l.qty,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Order failed");
      setDone(true);
      setTimeout(onDone, 2800);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-5 py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-[#0039CC] flex items-center justify-center mb-4">
          <Check size={24} strokeWidth={3} className="text-white" />
        </div>
        <p className="font-display text-[15px] mb-1">Order received</p>
        <p className="text-[12.5px] text-black/45 max-w-xs">
          Reference {orderId}. A confirmation has been sent to {customer.email}.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto px-5 pt-5 pb-6">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-[12px] text-black/40 hover:text-black/70 mb-4"
      >
        <ArrowLeft size={13} /> Back
      </button>

      <h2 className="font-display text-[14px] uppercase tracking-[0.1em] mb-3">
        Review order
      </h2>

      <div className="space-y-1.5 mb-4">
        {lines.map((l) => (
          <div key={l.lineId} className="flex justify-between text-[12.5px]">
            <span className="text-black/60">
              {l.qty} × {l.name}{" "}
              <span className="text-black/35">— {l.variant.label}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="bg-[#FAFAFA] border border-black/8 rounded-xl p-3 text-[12.5px] text-black/60 whitespace-pre-line mb-4">
        {customer.firstName} {customer.lastName}
        {"\n"}
        {customer.address1}
        {customer.address2 ? `\n${customer.address2}` : ""}
        {"\n"}
        {customer.postalCode} {customer.city}
        {"\n"}
        {customer.country}
        {"\n"}
        {customer.email}
      </div>

      <div className="flex items-center justify-between mb-1 text-[12px] text-black/45">
        <span>Code {promo?.code}</span>
        <span className="font-mono">100% off</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="font-display text-[13px]">TOTAL</span>
        <span className="font-mono text-[16px] font-bold text-[#0039CC]">
          $0.00
        </span>
      </div>

      {error && <p className="text-[12px] text-red-600 mb-3">{error}</p>}

      <button
        onClick={place}
        disabled={loading}
        className="w-full bg-[#0A0A0A] text-white rounded-xl py-3.5 font-semibold text-[13px] disabled:opacity-50"
      >
        {loading ? "Placing order…" : "Place order — $0.00"}
      </button>
    </div>
  );
}

export default function CartDrawer() {
  const {
    lines,
    itemCount,
    subtotal,
    discount,
    total,
    promo,
    promoError,
    applyPromo,
    removePromo,
    orderId,
    addToCart,
    removeFromCart,
    clearCart,
    cartOpen,
    setCartOpen,
    checkout,
    setCheckout,
  } = useCart();
  const [codeInput, setCodeInput] = useState("");
  const [customer, setCustomer] = useState(null);
  const freeOrder = total === 0 && lines.length > 0;

  const closeCheckout = () => {
    setCheckout(false);
    setCustomer(null);
  };

  return (
    <>
      {itemCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-[#0039CC] rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-lg shadow-black/15 active:scale-[0.98] transition z-30"
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
            onClick={() => {
              setCartOpen(false);
              closeCheckout();
            }}
          />
          <div className="relative w-full max-w-md bg-white rounded-t-3xl border-t border-black/10 max-h-[85vh] flex flex-col">
            {!checkout && (
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

            {checkout && !customer ? (
              <CheckoutForm
                initial={customer}
                submitLabel={
                  freeOrder ? "Review free order" : "Continue to payment"
                }
                onBack={closeCheckout}
                onSubmit={setCustomer}
              />
            ) : checkout && freeOrder ? (
              <FreeOrderPanel
                lines={lines}
                promo={promo}
                orderId={orderId}
                customer={customer}
                onBack={() => setCustomer(null)}
                onDone={() => {
                  clearCart();
                  closeCheckout();
                  setCartOpen(false);
                }}
              />
            ) : checkout ? (
              <CheckoutPanel
                total={total}
                orderId={orderId}
                customer={customer}
                lines={lines}
                onBack={() => setCustomer(null)}
                onDone={() => {
                  clearCart();
                  closeCheckout();
                  setCartOpen(false);
                }}
              />
            ) : lines.length === 0 ? (
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
                          {l.qty} × ${l.price}
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
                          className="w-6 h-6 rounded-full bg-[#0039CC] flex items-center justify-center active:scale-90 transition"
                        >
                          <Plus size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-4 border-t border-black/8 space-y-1.5">
                  {promo ? (
                    <div className="flex items-center justify-between text-[12px] mb-1">
                      <span className="text-black/45">
                        Code{" "}
                        <span className="font-mono text-[#0039CC]">
                          {promo.code}
                        </span>{" "}
                        applied
                      </span>
                      <button
                        onClick={removePromo}
                        className="text-black/35 hover:text-black/60 underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2 mb-2">
                      <input
                        value={codeInput}
                        onChange={(e) => setCodeInput(e.target.value)}
                        placeholder="Promo code"
                        className="flex-1 bg-[#FAFAFA] border border-black/10 rounded-xl px-3 py-2 text-[12.5px] uppercase"
                      />
                      <button
                        onClick={() => {
                          if (applyPromo(codeInput)) setCodeInput("");
                        }}
                        className="px-4 rounded-xl border border-black/15 text-[12.5px] font-medium hover:border-[#0039CC] transition"
                      >
                        Apply
                      </button>
                    </div>
                  )}
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
                    <span className="font-mono">Free</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-display text-[13px]">TOTAL</span>
                    <span className="font-mono text-[16px] font-bold text-[#0039CC]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => setCheckout(true)}
                    className="w-full mt-3 bg-[#0A0A0A] text-white rounded-xl py-3.5 font-semibold text-[13px] flex items-center justify-center gap-1.5 active:scale-[0.98] transition"
                  >
                    {freeOrder ? "Complete free order" : "Checkout"}
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

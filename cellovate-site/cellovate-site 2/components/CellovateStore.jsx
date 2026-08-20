import React, { useState, useMemo, useEffect } from "react";
import {
  Plus,
  Minus,
  ShoppingBag,
  X,
  Check,
  ChevronRight,
  Copy,
  ShieldCheck,
  ArrowLeft,
  Bitcoin,
} from "lucide-react";

const PRODUCTS = [
  {
    id: "reta",
    name: "Retatrutide",
    code: "RT-15MG",
    dose: "15mg / vial",
    price: 189,
    purity: "99.2%",
    desc: "Triple agonist (GLP-1 / GIP / Glucagon). Third-party tested.",
  },
  {
    id: "motsc",
    name: "MOTS-c",
    code: "MC-10MG",
    dose: "10mg / vial",
    price: 79,
    purity: "99.4%",
    desc: "Mitochondrial-derived peptide, metabolic research.",
  },
  {
    id: "cjc",
    name: "CJC-1295 + Ipamorelin",
    code: "CJ-5MG",
    dose: "5mg blend / vial",
    price: 69,
    purity: "99.1%",
    desc: "GHRH / GHRP blend, growth hormone secretion research.",
  },
  {
    id: "glow",
    name: "GLOW Blend",
    code: "GL-BLEND",
    dose: "Multi-peptide / vial",
    price: 99,
    purity: "99.0%",
    desc: "GHK-Cu / BPC-157 / TB-500 combination for tissue research.",
  },
  {
    id: "tesa",
    name: "Tesamorelin",
    code: "TS-10MG",
    dose: "10mg / vial",
    price: 89,
    purity: "99.3%",
    desc: "GHRH analog, visceral fat research.",
  },
  {
    id: "epi",
    name: "Epithalon",
    code: "EP-50MG",
    dose: "50mg / vial",
    price: 59,
    purity: "99.5%",
    desc: "Tetrapeptide, telomerase activity research.",
  },
  {
    id: "ghk",
    name: "GHK-Cu",
    code: "GH-50MG",
    dose: "50mg / vial",
    price: 49,
    purity: "99.2%",
    desc: "Copper peptide, dermal and wound-healing research.",
  },
  {
    id: "nad",
    name: "NAD+",
    code: "ND-500MG",
    dose: "500mg / vial",
    price: 109,
    purity: "99.0%",
    desc: "Coenzyme research, cellular metabolism.",
  },
];

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

function CheckoutPanel({ total, orderId, onBack, onDone }) {
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
      <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-white/8">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0"
        >
          <ArrowLeft size={15} />
        </button>
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
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
          <p className="text-[12px] text-white/40 mt-2">
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
                    ? "border-[#0039CC] bg-[#0039CC]/10 text-white"
                    : "border-white/10 text-white/40"
                }`}
              >
                <Bitcoin size={13} />
                {c.symbol}
              </button>
            ))}
          </div>

          {error ? (
            <div className="bg-[#131313] border border-red-500/20 rounded-2xl p-5 text-center">
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
            <div className="bg-[#131313] border border-white/8 rounded-2xl p-10 flex flex-col items-center">
              <div className="w-6 h-6 border-2 border-white/15 border-t-[#0039CC] rounded-full animate-spin mb-3" />
              <p className="text-[12px] text-white/40">
                Creating your invoice…
              </p>
            </div>
          ) : (
            <div className="bg-[#131313] border border-white/8 rounded-2xl p-5 flex flex-col items-center">
              <div className="w-[168px] h-[168px] bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src={qrUrl}
                  alt="Payment QR code"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-1">
                {payment.status === "waiting"
                  ? "Amount due"
                  : `Status: ${payment.status}`}
              </p>
              <p className="font-mono text-[22px] font-semibold text-white">
                {payment.payAmount}{" "}
                <span className="text-[13px] text-white/40">
                  {activeCoin.symbol}
                </span>
              </p>
              <p className="text-[11px] text-white/30 font-mono mt-0.5">
                ≈ ${total.toFixed(2)} USD
              </p>

              <div className="w-full mt-5">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/35 mb-1.5">
                  {activeCoin.label} address
                </p>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(payment.payAddress);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="w-full flex items-center justify-between gap-2 bg-[#0A0A0A] border border-white/10 rounded-xl px-3 py-2.5"
                >
                  <span className="font-mono text-[11px] text-white/70 truncate">
                    {payment.payAddress}
                  </span>
                  {copied ? (
                    <Check size={13} className="text-[#0039CC] shrink-0" />
                  ) : (
                    <Copy size={13} className="text-white/40 shrink-0" />
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="flex items-start gap-2 mt-4 text-[11px] text-white/30 leading-snug">
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

export default function CellovateStore() {
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [orderId] = useState(
    () => `CEL-${Math.floor(100000 + Math.random() * 900000)}`
  );

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeFromCart = (id) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const lines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => ({ ...PRODUCTS.find((p) => p.id === id), qty }))
        .filter(Boolean),
    [cart]
  );

  const itemCount = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

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
          <div>
            <div className="font-display text-lg tracking-tight leading-none">
              CELLO<span className="text-[#0039CC]">VATE</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-white/35 mt-1">
              Advanced Peptide Systems
            </div>
          </div>
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
                <div className="aspect-[4/3] rounded-xl bg-[#1C1C1C] mb-3 flex items-center justify-center relative overflow-hidden">
                  <div className="w-1 h-16 bg-gradient-to-b from-[#0039CC]/60 to-transparent rounded-full" />
                  <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/25 tracking-wider">
                    {p.code}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-[14px] leading-tight">
                    {p.name}
                  </h3>
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
                  <span className="text-[10px] text-white/25 font-mono">
                    COA available
                  </span>
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

      {itemCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-[#0039CC] rounded-2xl px-5 py-3.5 flex items-center justify-between shadow-lg shadow-black/40 active:scale-[0.98] transition z-30"
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
              setCheckout(false);
            }}
          />
          <div className="relative w-full max-w-md bg-[#0F0F0F] rounded-t-3xl border-t border-white/10 max-h-[85vh] flex flex-col">
            {!checkout && (
              <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-white/8">
                <h2 className="font-display text-[15px]">YOUR CART</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center"
                >
                  <X size={15} />
                </button>
              </div>
            )}

            {checkout ? (
              <CheckoutPanel
                total={total}
                orderId={orderId}
                onBack={() => setCheckout(false)}
                onDone={() => {
                  setCart({});
                  setCheckout(false);
                  setCartOpen(false);
                }}
              />
            ) : lines.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-16 text-white/30 text-[13px]">
                Cart is empty.
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                  {lines.map((l) => (
                    <div key={l.id} className="flex items-center justify-between">
                      <div className="min-w-0 pr-3">
                        <p className="text-[13px] font-medium leading-tight">
                          {l.name}
                        </p>
                        <p className="text-[11px] text-white/35 font-mono mt-0.5">
                          {l.qty} × ${l.price}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 rounded-full px-1 py-1 shrink-0">
                        <button
                          onClick={() => removeFromCart(l.id)}
                          className="w-6 h-6 rounded-full flex items-center justify-center active:scale-90 transition"
                        >
                          <Minus size={12} strokeWidth={2.5} />
                        </button>
                        <span className="font-mono text-[12px] w-4 text-center tabular-nums">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => addToCart(l.id)}
                          className="w-6 h-6 rounded-full bg-[#0039CC] flex items-center justify-center active:scale-90 transition"
                        >
                          <Plus size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-5 py-4 border-t border-white/8 space-y-1.5">
                  <div className="flex items-center justify-between pt-1">
                    <span className="font-display text-[13px]">TOTAL</span>
                    <span className="font-mono text-[16px] font-bold text-[#0039CC]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => setCheckout(true)}
                    className="w-full mt-3 bg-white text-[#0A0A0A] rounded-xl py-3.5 font-semibold text-[13px] flex items-center justify-center gap-1.5 active:scale-[0.98] transition"
                  >
                    Pay with crypto
                    <ChevronRight size={15} strokeWidth={2.5} />
                  </button>
                  <p className="text-center text-[10px] text-white/25 pt-1">
                    Demo checkout — BTCPay/Coinbase Commerce not yet connected
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

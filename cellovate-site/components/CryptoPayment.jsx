import React, { useState, useEffect } from "react";
import { Check, Copy, ShieldCheck, Bitcoin, Loader2 } from "lucide-react";

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

// Crypto payment step. The shopper picks a coin, then creates ONE invoice —
// switching coins before paying does not spam NOWPayments or the owner inbox.
// `onInvoice(bool)` tells the page when an invoice exists, so it can lock the
// cart (the invoice amount is fixed once created).
export default function CryptoPayment({
  total,
  promoCode,
  orderId,
  customer,
  lines,
  onInvoice,
  onPaid,
}) {
  const [coin, setCoin] = useState(CRYPTO_OPTIONS[0].id);
  const [copied, setCopied] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [payment, setPayment] = useState(null);
  const activeCoin = CRYPTO_OPTIONS.find((c) => c.id === coin);
  const paid =
    payment?.status === "finished" || payment?.status === "confirmed";
  const { display, left } = useCountdown(1200, !!payment && !paid);

  const createPayment = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: promoCode,
          orderId,
          payCurrency: coin,
          customer,
          items: lines.map((l) => ({
            id: l.id,
            variantKey: l.variant.key,
            qty: l.qty,
          })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Payment could not be created.");
      setPayment({
        paymentId: data.paymentId,
        payAddress: data.payAddress,
        payAmount: data.payAmount,
        payCurrency: data.payCurrency,
        status: data.status || "waiting",
      });
      onInvoice?.(true);
    } catch (err) {
      setError(err.message || "Payment could not be created. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  const changeCoin = () => {
    setPayment(null);
    onInvoice?.(false);
  };

  // Poll payment status every 6s until finished/confirmed.
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
        // silent — retried on next tick
      }
    }, 6000);
    return () => clearInterval(t);
  }, [payment?.paymentId, paid]);

  useEffect(() => {
    if (paid) onPaid?.();
  }, [paid, onPaid]);

  const copy = (text, key) => {
    navigator.clipboard?.writeText(String(text));
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const qrUrl = payment
    ? `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(
        `${payment.payCurrency}:${payment.payAddress}?amount=${payment.payAmount}`
      )}`
    : null;

  // Step A — choose a coin
  if (!payment) {
    return (
      <div>
        <p className="text-[13px] text-black/60 mb-3">
          Choose the cryptocurrency you want to pay with.
        </p>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {CRYPTO_OPTIONS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCoin(c.id)}
              disabled={loading}
              className={`flex flex-col items-center gap-1 py-3 rounded-xl border-2 text-[12.5px] font-semibold transition disabled:opacity-50 ${
                coin === c.id
                  ? "border-[#0039CC] bg-[#0039CC]/5 text-[#0039CC]"
                  : "border-black/15 bg-white text-[#0A0A0A] hover:border-[#0039CC]/60"
              }`}
            >
              <Bitcoin size={16} />
              {c.symbol}
              <span className="text-[10.5px] font-normal text-black/45">
                {c.label}
              </span>
            </button>
          ))}
        </div>

        {error && (
          <p className="text-[12.5px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5 mb-4">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={createPayment}
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#0039CC] hover:bg-[#002FA8] text-white rounded-2xl py-4 text-[15px] font-semibold shadow-lg shadow-[#0039CC]/30 active:scale-[0.99] transition disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={17} className="animate-spin" /> Creating your
              invoice…
            </>
          ) : (
            <>
              Pay ${total.toFixed(2)} with {activeCoin.symbol}
            </>
          )}
        </button>

        <div className="flex items-start gap-2 mt-4 text-[11.5px] text-black/45 leading-snug">
          <ShieldCheck size={14} className="shrink-0 mt-0.5 text-[#0039CC]" />
          Payment processed by NOWPayments. No card data is ever collected.
        </div>
      </div>
    );
  }

  // Step C — paid
  if (paid) {
    return (
      <div className="flex flex-col items-center text-center py-10">
        <div className="w-14 h-14 rounded-full bg-[#0039CC] text-white flex items-center justify-center mb-4">
          <Check size={24} strokeWidth={3} />
        </div>
        <p className="font-display text-[17px]">Payment confirmed</p>
        <p className="text-[13px] text-black/50 mt-2">
          A confirmation has been sent to {customer.email}.
        </p>
      </div>
    );
  }

  // Step B — invoice created, waiting for the transfer
  return (
    <div>
      <div className="bg-white border border-black/10 rounded-2xl p-5 flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-4">
          <span className="text-[11px] uppercase tracking-[0.12em] text-black/45">
            {payment.status === "waiting"
              ? "Awaiting payment"
              : `Status: ${payment.status}`}
          </span>
          <span
            className={`font-mono text-[12px] px-2.5 py-1 rounded-full ${
              left < 120
                ? "text-red-600 bg-red-50"
                : "text-[#0039CC] bg-[#0039CC]/10"
            }`}
          >
            {display}
          </span>
        </div>

        <div className="w-[180px] h-[180px] bg-white rounded-lg overflow-hidden mb-4">
          <img
            src={qrUrl}
            alt="Payment QR code"
            className="w-full h-full object-contain"
          />
        </div>

        <p className="text-[11px] uppercase tracking-[0.12em] text-black/45 mb-1">
          Send exactly
        </p>
        <button
          type="button"
          onClick={() => copy(payment.payAmount, "amount")}
          className="font-mono text-[22px] font-semibold text-[#0A0A0A] inline-flex items-center gap-2"
        >
          {payment.payAmount}{" "}
          <span className="text-[13px] text-black/45">{activeCoin.symbol}</span>
          {copied === "amount" ? (
            <Check size={14} className="text-[#0039CC]" />
          ) : (
            <Copy size={14} className="text-black/35" />
          )}
        </button>
        <p className="text-[12px] text-black/45 font-mono mt-0.5">
          = ${total.toFixed(2)} USD
        </p>

        <div className="w-full mt-5">
          <p className="text-[11px] uppercase tracking-[0.12em] text-black/45 mb-1.5">
            {activeCoin.label} address
          </p>
          <button
            type="button"
            onClick={() => copy(payment.payAddress, "address")}
            className="w-full flex items-center justify-between gap-2 bg-[#FAFAFA] border border-black/10 rounded-xl px-3 py-2.5"
          >
            <span className="font-mono text-[11.5px] text-black/75 truncate">
              {payment.payAddress}
            </span>
            {copied === "address" ? (
              <Check size={14} className="text-[#0039CC] shrink-0" />
            ) : (
              <Copy size={14} className="text-black/40 shrink-0" />
            )}
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={changeCoin}
        className="mt-3 text-[12.5px] text-black/50 hover:text-[#0039CC] underline underline-offset-2"
      >
        Pay with another cryptocurrency
      </button>

      <div className="flex items-start gap-2 mt-4 text-[11.5px] text-black/45 leading-snug">
        <ShieldCheck size={14} className="shrink-0 mt-0.5 text-[#0039CC]" />
        This page updates automatically once the network confirms your
        transaction. You will also receive a confirmation email.
      </div>
    </div>
  );
}

// Card payment step (SumUp Payment Widget). Opens a SumUp checkout for the
// server-computed total, mounts SumUp's card form (3-D Secure, Apple Pay /
// Google Pay where available), then confirms the status server-side.
import { useEffect, useRef, useState } from "react";
import { Loader2, ShieldCheck, CreditCard, RotateCcw } from "lucide-react";

const SDK = "https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js";

function loadSdk() {
  if (typeof window === "undefined") return Promise.reject();
  if (window.SumUpCard) return Promise.resolve(window.SumUpCard);
  return new Promise((resolve, reject) => {
    let s = document.querySelector(`script[src="${SDK}"]`);
    if (!s) {
      s = document.createElement("script");
      s.src = SDK;
      s.async = true;
      document.head.appendChild(s);
    }
    s.addEventListener("load", () => resolve(window.SumUpCard));
    s.addEventListener("error", () => reject(new Error("Card form failed to load.")));
  });
}

const money = (n, c) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: c || "USD" }).format(n || 0);

export default function CardPayment({ total, promoCodes, orderId, customer, lines, onInvoice, onPaid }) {
  const [checkout, setCheckout] = useState(null); // { checkoutId, amount, currency, rate }
  const [state, setState] = useState("loading"); // loading | form | confirming | error
  const [error, setError] = useState(null);
  const widget = useRef(null);
  const [attempt, setAttempt] = useState(0);

  // 1. Open a checkout for this cart.
  useEffect(() => {
    let cancelled = false;
    setState("loading");
    setError(null);
    (async () => {
      try {
        const res = await fetch("/api/sumup-checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId,
            codes: promoCodes,
            customer,
            items: lines.map((l) => ({ id: l.id, variantKey: l.variant.key, qty: l.qty })),
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Card payment unavailable.");
        if (cancelled) return;
        setCheckout(data);
        onInvoice?.(true);
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setState("error");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  // Unlock the cart when leaving the card step.
  useEffect(() => () => onInvoice?.(false), []); // eslint-disable-line react-hooks/exhaustive-deps

  const confirm = async (checkoutId, tries = 0) => {
    setState("confirming");
    try {
      const res = await fetch("/api/sumup-confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ checkoutId }),
      });
      const data = await res.json();
      if (res.ok && data.status === "PAID") return onPaid?.();
      if (res.ok && data.status === "PENDING" && tries < 6) {
        return setTimeout(() => confirm(checkoutId, tries + 1), 2000);
      }
      throw new Error(
        data.status === "FAILED"
          ? "The payment was declined. Please try another card."
          : data.error || "We could not confirm the payment yet. If your card was charged, contact us — do not pay twice."
      );
    } catch (err) {
      setError(err.message);
      setState("error");
    }
  };

  // 2. Mount SumUp's card form.
  useEffect(() => {
    if (!checkout) return;
    let active = true;
    loadSdk()
      .then((SumUpCard) => {
        if (!active) return;
        widget.current?.unmount?.();
        widget.current = SumUpCard.mount({
          id: "sumup-card",
          checkoutId: checkout.checkoutId,
          locale: "en-GB",
          email: customer?.email,
          onResponse: (type) => {
            if (type === "success") confirm(checkout.checkoutId);
            if (type === "fail" || type === "error") {
              setError("The payment did not go through. Please check your card details or try another card.");
              setState("error");
            }
          },
        });
        setState("form");
      })
      .catch((err) => {
        setError(err.message);
        setState("error");
      });
    return () => {
      active = false;
      widget.current?.unmount?.();
      widget.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkout]);

  const converted = checkout && checkout.currency !== "USD";

  return (
    <div>
      {checkout && (
        <div className="rounded-xl bg-[#F4F5F8] border border-black/10 px-4 py-3 mb-4 text-[13px]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 font-medium">
              <CreditCard size={15} /> Total
            </span>
            <span className="font-mono text-[16px] font-bold">{money(total, "USD")}</span>
          </div>
          {converted && (
            <p className="text-[11.5px] text-black/50 mt-1">
              Processed by our payment provider as {money(checkout.amount, checkout.currency)} (today's
              rate). Your bank converts it back to your currency.
            </p>
          )}
        </div>
      )}

      {state === "loading" && (
        <div className="flex items-center justify-center gap-2 py-10 text-[13px] text-black/50">
          <Loader2 size={16} className="animate-spin" /> Preparing secure card form…
        </div>
      )}

      <div id="sumup-card" className={state === "form" ? "" : "hidden"} />

      {state === "confirming" && (
        <div className="flex items-center justify-center gap-2 py-10 text-[13px] text-black/60">
          <Loader2 size={16} className="animate-spin" /> Confirming your payment…
        </div>
      )}

      {state === "error" && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-[13px] text-red-700">
          <p>{error}</p>
          <button
            type="button"
            onClick={() => {
              setCheckout(null);
              setAttempt((a) => a + 1);
            }}
            className="mt-2 inline-flex items-center gap-1.5 font-semibold text-[#0039CC]"
          >
            <RotateCcw size={13} /> Try again
          </button>
        </div>
      )}

      <p className="mt-4 text-[11.5px] text-black/45 flex items-center gap-1.5">
        <ShieldCheck size={13} /> Card details are handled by SumUp (PCI DSS, 3-D Secure). We never see your card number.
      </p>
    </div>
  );
}

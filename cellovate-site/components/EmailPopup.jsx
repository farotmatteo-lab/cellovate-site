// Welcome-offer popup (replaces the Omnisend form, so no third-party branding).
// Shown once per visitor after a short delay or some scrolling; never on
// checkout, admin or review pages. Signing up requires confirming 18+,
// subscribes the email in Omnisend (which starts the Welcome automation)
// and applies WELCOME10 to the cart.
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { X, Loader2, Check, Copy } from "lucide-react";
import { useCart } from "../context/CartContext";
import { getPromo } from "../lib/promos";
import { identify } from "../lib/omnisendClient";

const KEY = "cel_popup";
const CODE = "WELCOME10";
const DISMISS_DAYS = 7;
const HIDDEN_ON = ["/checkout", "/admin", "/review", "/terms", "/privacy", "/refund-policy"];

function readState() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    if (!raw) return null;
    if (raw.s === "subscribed") return raw;
    if (raw.s === "dismissed" && Date.now() - raw.t < DISMISS_DAYS * 864e5) return raw;
  } catch {
    // storage unavailable: behave as a first visit
  }
  return null;
}

function writeState(s) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ s, t: Date.now() }));
  } catch {
    // ignore
  }
}

export default function EmailPopup() {
  const { pathname } = useRouter();
  const { promoCodes, applyPromo } = useCart();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [adult, setAdult] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const hiddenHere = HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  useEffect(() => {
    if (hiddenHere || readState()) return;
    let shown = false;
    const show = () => {
      if (shown || readState()) return;
      shown = true;
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      const h = document.documentElement;
      if (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) > 0.4) show();
    };
    const timer = setTimeout(show, 12000);
    window.addEventListener("scroll", onScroll, { passive: true });
    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    }
    return cleanup;
  }, [hiddenHere]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }); // eslint-disable-line react-hooks/exhaustive-deps

  const close = () => {
    if (status !== "done") writeState("dismissed");
    setOpen(false);
  };

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("Please enter a valid email.");
    if (!adult) return setError("Please confirm you are 18 or older.");
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), adult: true, page: pathname }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      identify(email.trim());
      writeState("subscribed");
      // Apply the code unless a regular code is already in the cart (codes
      // don't combine, except with a partner code).
      const hasRegular = promoCodes.some((c) => !getPromo(c)?.influencer);
      if (!hasRegular) applyPromo(CODE);
      setStatus("done");
    } catch (err) {
      setError(err.message);
      setStatus("idle");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  if (!open || hiddenHere) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-4"
      onClick={(e) => e.target === e.currentTarget && close()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl px-6 sm:px-8 pt-10 pb-7 text-center">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 p-2 text-black/60 hover:text-black"
        >
          <X size={22} />
        </button>

        {status !== "done" ? (
          <form onSubmit={submit} noValidate>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#0039CC] font-mono mb-3">
              Welcome offer
            </p>
            <h2 id="welcome-title" className="font-display text-[26px] sm:text-[30px] leading-[1.1] font-bold">
              Get 10% off your first order
            </h2>
            <p className="text-[14px] text-black/55 mt-3">Use it on any research peptide.</p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              className="mt-6 w-full rounded-xl border-2 border-black/80 px-4 py-3 text-[15px] focus:outline-none focus:border-[#0039CC]"
            />

            <label className="mt-4 flex items-start gap-2.5 text-left text-[12.5px] text-black/65 leading-snug cursor-pointer">
              <input
                type="checkbox"
                checked={adult}
                onChange={(e) => setAdult(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#0039CC]"
              />
              <span>
                I confirm I am <strong>18 or older</strong> and agree to receive emails from
                Cellovate. Unsubscribe anytime.
              </span>
            </label>

            {error && <p className="mt-3 text-[12.5px] text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0039CC] hover:bg-[#0030AD] text-white font-semibold text-[15px] py-3.5 transition disabled:opacity-60"
            >
              {status === "sending" && <Loader2 size={16} className="animate-spin" />}
              Get 10% off
            </button>
            <button type="button" onClick={close} className="mt-3 text-[12px] text-black/40 hover:text-black/60">
              No thanks
            </button>
            <p className="mt-3 text-[10.5px] text-black/35">
              For laboratory research use only.{" "}
              <a href="/privacy" className="underline">
                Privacy policy
              </a>
            </p>
          </form>
        ) : (
          <div>
            <div className="mx-auto mb-4 h-11 w-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Check size={22} />
            </div>
            <h2 id="welcome-title" className="font-display text-[24px] font-bold">
              Your 10% code
            </h2>
            <button
              type="button"
              onClick={copy}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-[#0039CC] px-5 py-3 font-mono text-[20px] font-bold text-[#0039CC]"
            >
              {CODE} {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
            <p className="text-[13px] text-black/55 mt-3">
              Applied to your cart automatically. We&apos;ve also emailed it to you.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-5 w-full rounded-xl bg-[#0A0A0A] text-white font-semibold text-[15px] py-3.5"
            >
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

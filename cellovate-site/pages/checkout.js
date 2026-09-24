import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
  Lock,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus,
  Tag,
  X,
  Check,
  ArrowLeft,
  ShoppingBag,
  Loader2,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm";
import CryptoPayment from "../components/CryptoPayment";
import { identify } from "../lib/omnisendClient";

const money = (n) => `$${Number(n || 0).toFixed(2)}`;

// ---------------------------------------------------------------------------
// Order summary — always visible (right column on desktop, collapsible bar on
// mobile) so the shopper sees the total and how it changes at every step.
// ---------------------------------------------------------------------------
function OrderSummary({ locked }) {
  const {
    lines,
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
  } = useCart();
  const [code, setCode] = useState("");

  return (
    <div>
      <ul className="space-y-4">
        {lines.map((l) => (
          <li key={l.lineId} className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-xl bg-white border border-black/10 overflow-hidden">
                <img
                  src={l.variant.image || "/product-placeholder.svg"}
                  alt={l.variant.imageAlt || l.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-[#0A0A0A] text-white text-[11px] font-semibold flex items-center justify-center">
                {l.qty}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13.5px] font-medium text-[#0A0A0A] truncate">
                {l.name}
              </p>
              <p className="text-[12px] text-black/50">{l.variant.label}</p>
              {!locked && (
                <div className="flex items-center gap-1 mt-1">
                  <button
                    type="button"
                    onClick={() => removeFromCart(l.id, l.variant.key)}
                    aria-label="Remove one"
                    className="w-6 h-6 rounded-md border border-black/15 text-black/60 hover:border-[#0039CC] hover:text-[#0039CC] flex items-center justify-center"
                  >
                    <Minus size={12} strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => addToCart(l.id, l.variant.key)}
                    aria-label="Add one"
                    className="w-6 h-6 rounded-md border border-black/15 text-black/60 hover:border-[#0039CC] hover:text-[#0039CC] flex items-center justify-center"
                  >
                    <Plus size={12} strokeWidth={2.5} />
                  </button>
                </div>
              )}
            </div>
            <span className="font-mono text-[13.5px] text-[#0A0A0A] shrink-0">
              {money(l.price * l.qty)}
            </span>
          </li>
        ))}
      </ul>

      {/* Promo code */}
      <div className="mt-6 pt-5 border-t border-black/10">
        {promos.length > 0 && (
          <div className="space-y-2 mb-3">
            {promos.map((p) => (
              <div
                key={p.code}
                className="flex items-center justify-between bg-[#0039CC]/8 border border-[#0039CC]/25 rounded-xl px-3 py-2.5"
              >
                <span className="flex items-center gap-2 text-[13px] text-[#0039CC] font-semibold min-w-0">
                  <Tag size={14} className="shrink-0" />
                  {p.code}
                  <span className="font-normal text-[#0039CC]/80 truncate">
                    — {p.label}
                  </span>
                </span>
                {!locked && (
                  <button
                    type="button"
                    onClick={() => removePromo(p.code)}
                    aria-label={`Remove ${p.code}`}
                    className="text-[#0039CC]/70 hover:text-[#0039CC] shrink-0"
                  >
                    <X size={15} />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
        {!locked && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (applyPromo(code)) setCode("");
            }}
            className="flex gap-2"
          >
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={promos.length ? "Add another code" : "Discount code"}
              className="flex-1 min-w-0 bg-white border border-black/15 rounded-xl px-3 py-2.5 text-[13px] uppercase outline-none focus:border-[#0039CC]"
            />
            <button
              type="submit"
              disabled={!code.trim()}
              className="px-4 rounded-xl bg-[#0A0A0A] text-white text-[13px] font-semibold disabled:bg-black/15 disabled:text-black/40 transition"
            >
              Apply
            </button>
          </form>
        )}
        {promoError && (
          <p className="text-[12px] text-red-600 mt-1.5">{promoError}</p>
        )}
      </div>

      {/* Totals */}
      <div className="mt-5 space-y-2 text-[13.5px]">
        <div className="flex justify-between text-black/65">
          <span>Subtotal</span>
          <span className="font-mono">{money(subtotal)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-[#0039CC] font-medium">
            <span>Discount ({promo.code})</span>
            <span className="font-mono">−{money(discount)}</span>
          </div>
        )}
        <div className="flex justify-between text-black/65">
          <span>Shipping</span>
          <span className="font-mono">
            {shipping > 0 ? money(shipping) : "Free"}
          </span>
        </div>
        <div className="flex justify-between items-baseline pt-3 mt-1 border-t border-black/10">
          <span className="text-[15px] font-semibold text-[#0A0A0A]">
            Total
          </span>
          <span className="font-mono text-[22px] font-bold text-[#0A0A0A]">
            <span className="text-[12px] font-normal text-black/45 mr-1.5">
              USD
            </span>
            {money(total)}
          </span>
        </div>
        {discount > 0 && (
          <p className="text-[12.5px] text-[#0039CC] font-medium flex items-center gap-1.5">
            <Tag size={13} /> You save {money(discount)}
          </p>
        )}
      </div>

      {locked && (
        <p className="mt-4 text-[11.5px] text-black/45">
          Your invoice is issued for this amount. To change the order, choose
          “Pay with another cryptocurrency” first.
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// $0 orders (100% promo code) skip crypto entirely.
// ---------------------------------------------------------------------------
function FreeOrder({ orderId, customer, lines, promo, onDone }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const place = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/free-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          codes: promo?.codes,
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
      onDone();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="text-[13px] text-black/60 mb-4">
        Your code <strong className="text-[#0039CC]">{promo?.code}</strong>{" "}
        covers the full order, shipping included. No payment is required.
      </p>
      {error && (
        <p className="text-[12.5px] text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5 mb-4">
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={place}
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#0039CC] hover:bg-[#002FA8] text-white rounded-2xl py-4 text-[15px] font-semibold shadow-lg shadow-[#0039CC]/30 disabled:opacity-60 transition"
      >
        {loading ? (
          <>
            <Loader2 size={17} className="animate-spin" /> Placing order…
          </>
        ) : (
          "Place order — $0.00"
        )}
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
function Steps({ step }) {
  const items = ["Cart", "Information", "Payment"];
  return (
    <nav className="flex items-center gap-1.5 text-[12.5px] mb-7">
      {items.map((label, i) => {
        const done = i < step;
        const current = i === step;
        const content = (
          <span
            className={
              current
                ? "font-semibold text-[#0A0A0A]"
                : done
                ? "text-[#0039CC]"
                : "text-black/35"
            }
          >
            {label}
          </span>
        );
        return (
          <span key={label} className="flex items-center gap-1.5">
            {i === 0 ? (
              <Link href="/shop" className="text-[#0039CC] hover:underline">
                Cart
              </Link>
            ) : (
              content
            )}
            {i < items.length - 1 && (
              <ChevronRight size={13} className="text-black/30" />
            )}
          </span>
        );
      })}
    </nav>
  );
}

function Recap({ customer, onEdit }) {
  const rows = [
    ["Contact", customer.email],
    [
      "Ship to",
      [
        customer.address1,
        customer.address2,
        `${customer.postalCode} ${customer.city}`,
        customer.state,
        customer.country,
      ]
        .filter(Boolean)
        .join(", "),
    ],
  ];
  return (
    <div className="border border-black/12 rounded-2xl divide-y divide-black/8 mb-7 bg-white">
      {rows.map(([label, value]) => (
        <div key={label} className="flex items-start gap-3 px-4 py-3 text-[13px]">
          <span className="w-16 shrink-0 text-black/45">{label}</span>
          <span className="flex-1 text-[#0A0A0A] break-words">{value}</span>
          <button
            type="button"
            onClick={onEdit}
            className="text-[12.5px] text-[#0039CC] hover:underline shrink-0"
          >
            Change
          </button>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
export default function CheckoutPage() {
  const cart = useCart();
  const { lines, total, promo, orderId, hydrated, clearCart, restoreCart } =
    cart;
  const router = useRouter();
  const [customer, setCustomer] = useState(null);
  const [savedCustomer, setSavedCustomer] = useState(null);
  const [locked, setLocked] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [done, setDone] = useState(null); // snapshot shown after the order

  // Abandoned-checkout links carry the cart: /checkout?cart=<base64url>.
  useEffect(() => {
    if (!hydrated || !router.isReady || !router.query.cart) return;
    try {
      const b64 = String(router.query.cart).replace(/-/g, "+").replace(/_/g, "/");
      const data = JSON.parse(window.atob(b64));
      const items = {};
      for (const [id, variantKey, qty] of data.i || []) {
        items[`${id}::${variantKey}`] = Math.max(1, parseInt(qty, 10) || 1);
      }
      if (Object.keys(items).length) restoreCart(items, data.c || []);
    } catch {
      // malformed link: keep the current cart
    }
    router.replace("/checkout", undefined, { shallow: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, router.isReady, router.query.cart]);

  // Prefill with the details used last time on this device.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("cellovate-customer");
      if (raw) setSavedCustomer(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  const submitInfo = (form) => {
    setCustomer(form);
    // Lets Omnisend attach this browser's events (cart, product views) to
    // the shopper.
    identify(form.email);
    // Registers the contact + "started checkout" in Omnisend (abandoned
    // checkout reminders). Fire-and-forget: never blocks the purchase.
    fetch("/api/track-checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId,
        customer: form,
        codes: promo?.codes || [],
        items: lines.map((l) => ({
          id: l.id,
          variantKey: l.variant.key,
          qty: l.qty,
        })),
      }),
      keepalive: true,
    }).catch(() => {});
    try {
      window.localStorage.setItem("cellovate-customer", JSON.stringify(form));
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finish = useCallback(() => {
    setDone({
      orderId,
      email: customer?.email,
      total,
      free: total === 0,
    });
    clearCart();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [orderId, customer, total, clearCart]);

  const freeOrder = total === 0 && lines.length > 0;
  const step = customer ? 2 : 1;

  // ---- Confirmation -------------------------------------------------------
  if (done) {
    return (
      <Shell>
        <div className="max-w-lg mx-auto px-5 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-[#0039CC] text-white flex items-center justify-center mx-auto mb-5">
            <Check size={28} strokeWidth={3} />
          </div>
          <h1 className="font-display text-[26px] mb-2">Thank you!</h1>
          <p className="text-[14px] text-black/60">
            Order <span className="font-mono">{done.orderId}</span>{" "}
            {done.free ? "has been received" : "is paid"}. A confirmation has
            been sent to <strong>{done.email}</strong>.
          </p>
          <p className="text-[13px] text-black/45 mt-2">
            We will email you again when your order ships.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-[#0A0A0A] text-white rounded-2xl px-6 py-3.5 text-[14px] font-semibold"
          >
            Back to the shop
          </Link>
        </div>
      </Shell>
    );
  }

  // ---- Loading / empty cart ----------------------------------------------
  if (!hydrated) {
    return (
      <Shell>
        <div className="flex justify-center py-32">
          <Loader2 className="animate-spin text-black/30" />
        </div>
      </Shell>
    );
  }
  if (lines.length === 0) {
    return (
      <Shell>
        <div className="max-w-lg mx-auto px-5 py-24 text-center">
          <ShoppingBag className="mx-auto text-black/25 mb-4" size={36} />
          <h1 className="font-display text-[22px] mb-2">Your cart is empty</h1>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-4 bg-[#0039CC] text-white rounded-2xl px-6 py-3.5 text-[14px] font-semibold"
          >
            Browse the catalog
          </Link>
        </div>
      </Shell>
    );
  }

  // ---- Checkout -----------------------------------------------------------
  return (
    <Shell>
      {/* Mobile: collapsible summary with the running total */}
      <div className="lg:hidden border-b border-black/10 bg-[#F4F5F8]">
        <button
          type="button"
          onClick={() => setSummaryOpen((o) => !o)}
          className="w-full max-w-xl mx-auto px-5 py-4 flex items-center justify-between"
        >
          <span className="flex items-center gap-2 text-[13.5px] text-[#0039CC] font-medium">
            <ShoppingBag size={16} />
            {summaryOpen ? "Hide" : "Show"} order summary
            <ChevronDown
              size={15}
              className={`transition ${summaryOpen ? "rotate-180" : ""}`}
            />
          </span>
          <span className="font-mono text-[17px] font-bold text-[#0A0A0A]">
            {money(total)}
          </span>
        </button>
        {summaryOpen && (
          <div className="max-w-xl mx-auto px-5 pb-6">
            <OrderSummary locked={locked} />
          </div>
        )}
      </div>

      <div className="lg:bg-[linear-gradient(to_right,#ffffff_50%,#F4F5F8_50%)]">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[1fr_440px] min-h-[calc(100vh-73px)] bg-white">
        {/* Left: steps */}
        <section className="px-5 lg:pr-12 lg:pl-8 py-8 lg:py-10 max-w-xl w-full mx-auto lg:mx-0 lg:ml-auto">
          <Steps step={step} />

          {step === 1 ? (
            <>
              <CheckoutForm
                initial={customer || savedCustomer}
                className=""
                submitLabel={`Continue to ${
                  freeOrder ? "review" : "payment"
                } — ${money(total)}`}
                onSubmit={submitInfo}
              />
              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 mt-5 text-[13px] text-[#0039CC] hover:underline"
              >
                <ArrowLeft size={14} /> Return to shop
              </Link>
            </>
          ) : (
            <>
              <Recap
                customer={customer}
                onEdit={() => {
                  if (locked) return;
                  setCustomer(null);
                }}
              />
              <h2 className="font-display text-[15px] uppercase tracking-[0.1em] mb-4">
                {freeOrder ? "Review & place order" : "Payment"}
              </h2>
              {freeOrder ? (
                <FreeOrder
                  orderId={orderId}
                  customer={customer}
                  lines={lines}
                  promo={promo}
                  onDone={finish}
                />
              ) : (
                <CryptoPayment
                  total={total}
                  promoCodes={promo?.codes}
                  orderId={orderId}
                  customer={customer}
                  lines={lines}
                  onInvoice={setLocked}
                  onPaid={finish}
                />
              )}
              {!locked && (
                <button
                  type="button"
                  onClick={() => setCustomer(null)}
                  className="inline-flex items-center gap-1.5 mt-6 text-[13px] text-[#0039CC] hover:underline"
                >
                  <ArrowLeft size={14} /> Return to information
                </button>
              )}
            </>
          )}
        </section>

        {/* Right: sticky summary (desktop) */}
        <aside className="hidden lg:block bg-[#F4F5F8] border-l border-black/10">
          <div className="sticky top-[73px] px-8 py-10 max-h-[calc(100vh-73px)] overflow-y-auto">
            <OrderSummary locked={locked} />
          </div>
        </aside>
      </div>
      </div>
    </Shell>
  );
}

function Shell({ children }) {
  return (
    <>
      <Head>
        <title>Checkout | Cellovate Advanced Peptides</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen bg-white text-[#0A0A0A] font-sans">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-mono { font-family: 'IBM Plex Mono', monospace; }
        `}</style>
        <header className="border-b border-black/10 bg-white sticky top-0 z-30">
          <div className="max-w-6xl mx-auto px-5 h-[72px] flex items-center justify-between">
            <Link href="/" className="block">
              <img
                src="/logo.png"
                alt="Cellovate Advanced Peptide Systems"
                className="h-8 w-auto"
              />
            </Link>
            <span className="flex items-center gap-1.5 text-[12.5px] text-black/55">
              <Lock size={14} /> Secure checkout
            </span>
          </div>
        </header>
        {children}
      </div>
    </>
  );
}

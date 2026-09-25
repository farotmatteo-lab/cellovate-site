// Verified review form, reached from the signed link in the shipping email.
import { useState } from "react";
import Link from "next/link";
import { Star, Loader2, CheckCircle2 } from "lucide-react";
import Seo from "../components/Seo";
import { verifyReviewToken } from "../lib/adminAuth";
import { getOrder } from "../lib/orderStore";
import { productsInOrder, hasReviewed } from "../lib/reviews";

// Same rule as lib/reviews displayName (kept here: that module is server-only).
const displayName = (name) => {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "Verified customer";
  return parts[1] ? `${parts[0]} ${parts[1][0].toUpperCase()}.` : parts[0];
};

function Stars({ value, onChange }) {
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          onClick={() => onChange(n)}
          className="p-0.5"
        >
          <Star
            size={26}
            className={n <= value ? "fill-[#F5A524] text-[#F5A524]" : "text-black/20"}
          />
        </button>
      ))}
    </div>
  );
}

export default function ReviewPage({ state, products = [], o, e, t, defaultName }) {
  const [form, setForm] = useState(() =>
    Object.fromEntries(products.map((p) => [p.handle, { rating: 0, text: "" }]))
  );
  const [name, setName] = useState(defaultName || "");
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState(null);

  const set = (handle, patch) =>
    setForm((f) => ({ ...f, [handle]: { ...f[handle], ...patch } }));

  const submit = async (ev) => {
    ev.preventDefault();
    setError(null);
    const reviews = products
      .filter((p) => !p.done && form[p.handle]?.rating)
      .map((p) => ({ handle: p.handle, ...form[p.handle] }));
    if (!reviews.length) return setError("Pick a star rating for at least one product.");
    setStatus("sending");
    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ o, e, t, name, reviews }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("done");
    } catch (err) {
      setError(err.message);
      setStatus("idle");
    }
  };

  const message =
    state === "invalid"
      ? "This review link is not valid. Please use the link from your shipping email."
      : state === "notShipped"
      ? "Reviews open once your order has shipped."
      : state === "unavailable"
      ? "Reviews are not available right now. Please try again later."
      : null;

  return (
    <>
      <Seo title="Review your order | Cellovate Advanced Peptides" noindex />
      <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans pb-24">
        <header className="max-w-2xl mx-auto px-5 pt-8">
          <Link href="/">
            <img src="/logo.png" alt="Cellovate" className="h-8 w-auto" />
          </Link>
        </header>
        <div className="max-w-2xl mx-auto px-5 pt-10">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Review your order</h1>
          {message && <p className="text-[14px] text-black/60">{message}</p>}

          {state === "ok" && status === "done" && (
            <div className="bg-white border border-black/8 rounded-2xl p-6 mt-6 flex gap-3">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={22} />
              <div>
                <p className="font-medium">Thank you for your review.</p>
                <p className="text-[13px] text-black/55 mt-1">
                  It will appear on the product page once it has been checked.
                </p>
              </div>
            </div>
          )}

          {state === "ok" && status !== "done" && (
            <form onSubmit={submit} className="mt-6 space-y-4">
              <p className="text-[13px] text-black/55 leading-relaxed">
                Order {o}. Tell other researchers about the service: delivery, packaging,
                documentation and support. Our products are for laboratory research only, so
                please do not describe personal use; such reviews cannot be published.
              </p>
              {products.map((p) => (
                <div key={p.handle} className="bg-white border border-black/8 rounded-2xl p-5">
                  <p className="font-medium mb-2">{p.name}</p>
                  {p.done ? (
                    <p className="text-[13px] text-black/45">Already reviewed, thank you.</p>
                  ) : (
                    <>
                      <Stars
                        value={form[p.handle].rating}
                        onChange={(rating) => set(p.handle, { rating })}
                      />
                      <textarea
                        value={form[p.handle].text}
                        onChange={(ev) => set(p.handle, { text: ev.target.value })}
                        maxLength={1000}
                        rows={3}
                        placeholder="Your review (delivery, packaging, documentation, service)"
                        className="mt-3 w-full rounded-xl border border-black/15 px-3 py-2 text-[14px] focus:outline-none focus:border-[#0039CC]"
                      />
                    </>
                  )}
                </div>
              ))}
              <label className="block">
                <span className="text-[12px] text-black/50">Name shown with your review</span>
                <input
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  maxLength={60}
                  className="mt-1 w-full rounded-xl border border-black/15 px-3 py-2 text-[14px] focus:outline-none focus:border-[#0039CC]"
                />
                <span className="text-[11px] text-black/40">
                  Shown as first name and initial, e.g. {displayName(name || "Alex Smith")}
                </span>
              </label>
              {error && <p className="text-[13px] text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white rounded-full px-6 py-3 text-[13px] font-semibold disabled:opacity-60"
              >
                {status === "sending" && <Loader2 size={15} className="animate-spin" />}
                Submit review
              </button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ query, res }) {
  res.setHeader("Cache-Control", "no-store");
  const o = String(query.o || "");
  const e = String(query.e || "").toLowerCase();
  const t = String(query.t || "");
  if (!verifyReviewToken(o, e, t)) return { props: { state: "invalid" } };
  const order = await getOrder(o);
  if (!order) return { props: { state: "unavailable" } };
  if (String(order.email || "").toLowerCase() !== e) return { props: { state: "invalid" } };
  if (order.status !== "shipped") return { props: { state: "notShipped" } };
  const products = await Promise.all(
    productsInOrder(order).map(async (p) => ({ ...p, done: await hasReviewed(o, p.handle) }))
  );
  return {
    props: { state: "ok", products, o, e, t, defaultName: order.name || "" },
  };
}

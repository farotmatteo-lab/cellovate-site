// Review moderation: approve or reject verified customer reviews.
import { useState } from "react";
import { Star } from "lucide-react";
import { AdminShell } from "../../components/AdminShell";
import { adminEnabled, isAdmin } from "../../lib/adminAuth";
import { storeEnabled } from "../../lib/orderStore";
import { listReviews } from "../../lib/reviews";

const BADGE = {
  pending: ["À valider", "bg-[#0039CC] text-white"],
  approved: ["Publié", "bg-emerald-100 text-emerald-800"],
  rejected: ["Refusé", "bg-black/5 text-black/40"],
};

export default function AdminReviews({ allowed, reviews: initial = [] }) {
  const [reviews, setReviews] = useState(initial);
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState(null);

  if (!allowed) {
    return (
      <AdminShell title="Avis">
        <p className="text-[14px]">
          Connecte-toi d&apos;abord sur <a className="text-[#0039CC] underline" href="/admin">/admin</a>.
        </p>
      </AdminShell>
    );
  }

  const moderate = async (id, status) => {
    setBusy(id);
    setError(null);
    try {
      const res = await fetch("/api/admin/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");
      setReviews((list) => list.map((r) => (r.id === id ? data.review : r)));
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(null);
    }
  };

  const pending = reviews.filter((r) => r.status === "pending").length;

  return (
    <AdminShell
      title="Avis clients"
      right={
        <a href="/admin" className="text-[12px] text-white/60 hover:text-white">
          ← Commandes
        </a>
      }
    >
      <h1 className="text-xl font-semibold mb-1">Avis clients</h1>
      <p className="text-[13px] text-black/50 mb-6">
        {pending} à valider. Refuse tout avis qui décrit un usage personnel ou un effet sur la
        santé (produits réservés à la recherche).
      </p>
      {error && <p className="text-[13px] text-red-600 mb-4">{error}</p>}
      {!reviews.length && <p className="text-[14px] text-black/50">Aucun avis pour l&apos;instant.</p>}
      <div className="space-y-3">
        {reviews.map((r) => (
          <div key={r.id} className="bg-white border border-black/8 rounded-2xl p-5">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-[11px] font-semibold rounded-full px-2.5 py-0.5 ${BADGE[r.status]?.[1]}`}>
                {BADGE[r.status]?.[0] || r.status}
              </span>
              <span className="font-medium text-[14px]">{r.productName}</span>
              <span className="flex">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={14}
                    className={n <= r.rating ? "fill-[#F5A524] text-[#F5A524]" : "text-black/15"}
                  />
                ))}
              </span>
              <span className="text-[12px] text-black/40 ml-auto">
                {r.name} · {r.orderId} · {new Date(r.createdAt).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <p className="text-[14px] text-black/70 whitespace-pre-line">{r.text}</p>
            <div className="flex gap-2 mt-3">
              {r.status !== "approved" && (
                <button
                  disabled={busy === r.id}
                  onClick={() => moderate(r.id, "approved")}
                  className="text-[12px] font-semibold bg-[#0A0A0A] text-white rounded-full px-4 py-1.5 disabled:opacity-50"
                >
                  Publier
                </button>
              )}
              {r.status !== "rejected" && (
                <button
                  disabled={busy === r.id}
                  onClick={() => moderate(r.id, "rejected")}
                  className="text-[12px] font-semibold border border-black/15 rounded-full px-4 py-1.5 disabled:opacity-50"
                >
                  {r.status === "approved" ? "Retirer" : "Refuser"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader("Cache-Control", "no-store");
  if (!adminEnabled() || !isAdmin(req)) return { props: { allowed: false } };
  const reviews = storeEnabled() ? await listReviews(300).catch(() => []) : [];
  return { props: { allowed: true, reviews: JSON.parse(JSON.stringify(reviews)) } };
}

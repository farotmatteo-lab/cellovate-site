// Wholesale / B2B leads from the /wholesale chat, best leads first.
import { useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { adminEnabled, isAdmin } from "../../lib/adminAuth";
import { storeEnabled, redisCommand } from "../../lib/orderStore";

const TIER = { HOT: "bg-red-100 text-red-700", WARM: "bg-amber-100 text-amber-800", COLD: "bg-black/5 text-black/50" };
const STATUS = [
  ["new", "Nouveau"],
  ["contacted", "Contacté"],
  ["quoted", "Devis envoyé"],
  ["won", "Gagné"],
  ["lost", "Perdu"],
];
const ROWS = [
  ["businessType", "Activité"],
  ["products", "Produits"],
  ["volume", "Volume / mois"],
  ["format", "Format"],
  ["frequency", "Fréquence"],
  ["privateLabel", "Private label"],
  ["timeline", "Délai"],
  ["website", "Site"],
  ["phone", "WhatsApp / Telegram"],
  ["message", "Message"],
];

export default function AdminWholesale({ allowed, leads: initial = [] }) {
  const [leads, setLeads] = useState(initial);
  const [error, setError] = useState(null);

  if (!allowed) {
    return (
      <AdminShell title="Wholesale">
        <p className="text-[14px]">
          Connecte-toi d&apos;abord sur <a className="text-[#0039CC] underline" href="/admin">/admin</a>.
        </p>
      </AdminShell>
    );
  }

  const setStatus = async (id, status) => {
    setError(null);
    try {
      const res = await fetch("/api/admin/wholesale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");
      setLeads((l) => l.map((x) => (x.id === id ? data.lead : x)));
    } catch (err) {
      setError(err.message);
    }
  };

  const open = leads.filter((l) => !["won", "lost"].includes(l.status)).length;

  return (
    <AdminShell
      title="Wholesale"
      right={
        <a href="/admin" className="text-[12px] text-white/60 hover:text-white">
          ← Commandes
        </a>
      }
    >
      <h1 className="text-xl font-semibold mb-1">Demandes wholesale / B2B</h1>
      <p className="text-[13px] text-black/50 mb-6">
        {open} en cours · triées par priorité (volume, délai, fréquence). Réponds directement à l&apos;email reçu.
      </p>
      {error && <p className="text-[13px] text-red-600 mb-4">{error}</p>}
      {!leads.length && <p className="text-[14px] text-black/50">Aucune demande pour l&apos;instant.</p>}
      <div className="space-y-3">
        {leads.map((l) => (
          <div key={l.id} className="bg-white border border-black/8 rounded-2xl p-5">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 ${TIER[l.tier] || TIER.COLD}`}>{l.tier}</span>
              <span className="font-semibold text-[15px]">{l.company}</span>
              <span className="text-[13px] text-black/50">· {l.country}</span>
              <span className="text-[12px] text-black/40 ml-auto">
                {l.id} · {new Date(l.createdAt).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <p className="text-[13px] mb-3">
              {l.name} ·{" "}
              <a className="text-[#0039CC] underline" href={`mailto:${l.email}?subject=Cellovate wholesale quote (${l.id})`}>
                {l.email}
              </a>
            </p>
            <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[13px]">
              {ROWS.map(([k, label]) => {
                const v = Array.isArray(l[k]) ? l[k].join(", ") : l[k];
                return v ? (
                  <div key={k} className={k === "message" || k === "products" ? "sm:col-span-2" : ""}>
                    <dt className="inline text-black/45">{label} : </dt>
                    <dd className="inline">{v}</dd>
                  </div>
                ) : null;
              })}
            </dl>
            <div className="flex flex-wrap gap-2 mt-4">
              {STATUS.map(([k, label]) => (
                <button
                  key={k}
                  onClick={() => setStatus(l.id, k)}
                  className={`text-[12px] rounded-full px-3 py-1 border ${
                    l.status === k ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" : "border-black/15 text-black/60"
                  }`}
                >
                  {label}
                </button>
              ))}
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
  let leads = [];
  if (storeEnabled()) {
    try {
      const ids = await redisCommand("ZRANGE", "wholesale", 0, 499, "REV");
      if (Array.isArray(ids) && ids.length) {
        const raws = await redisCommand("MGET", ...ids.map((id) => `wholesale:${id}`));
        leads = (raws || []).map((r) => { try { return JSON.parse(r); } catch { return null; } }).filter(Boolean);
      }
    } catch (err) {
      console.error("wholesale list failed", err.message);
    }
  }
  const rank = (l) => (["won", "lost"].includes(l.status) ? -100 : 0) + (l.score || 0);
  leads.sort((a, b) => rank(b) - rank(a) || b.createdAt - a.createdAt);
  return { props: { allowed: true, leads } };
}

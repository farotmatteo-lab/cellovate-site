// Thailand stock: quantity per product, dosage and format. An order to a
// Thailand address ships free from this stock (1-3 days) when every item is
// available here; otherwise it ships from the factory. Paid Thailand-stock
// orders take their items out automatically.
import { useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { adminEnabled, isAdmin } from "../../lib/adminAuth";
import { storeEnabled } from "../../lib/orderStore";
import { VISIBLE_PRODUCTS } from "../../lib/products";
import { getThStock } from "../../lib/stock";
import { stockKey } from "../../lib/fulfillment";

export default function AdminStock({ allowed, enabled, initial = {}, products = [] }) {
  const [stock, setStock] = useState(initial);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  if (!allowed) {
    return (
      <AdminShell title="Stock Thaïlande">
        <p className="text-[14px]">
          Connecte-toi d&apos;abord sur <a className="text-[#0039CC] underline" href="/admin">/admin</a>.
        </p>
      </AdminShell>
    );
  }

  const set = (k, v) => setStock((s) => ({ ...s, [k]: v.replace(/\D/g, "").slice(0, 4) }));
  const total = Object.values(stock).reduce((n, q) => n + (parseInt(q, 10) || 0), 0);

  const save = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stock }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur");
      setStock(data.stock || {});
      setMessage(["ok", "Stock enregistré. Il s'applique tout de suite sur le site."]);
    } catch (err) {
      setMessage(["err", err.message]);
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminShell
      title="Stock Thaïlande"
      right={
        <a href="/admin" className="text-[12px] text-white/60 hover:text-white">
          ← Commandes
        </a>
      }
    >
      <h1 className="text-xl font-semibold mb-1">Stock Thaïlande</h1>
      <p className="text-[13px] text-black/50 mb-6 max-w-2xl leading-relaxed">
        Quantités disponibles en Thaïlande. Une commande livrée en Thaïlande part de ce stock,
        livraison gratuite en 1–3 jours, si tous ses produits y sont disponibles. Sinon elle part
        de la factory (7–10 jours, frais standard) et le client en est prévenu. Les commandes
        payées depuis ce stock sont déduites automatiquement. Les autres pays ne voient jamais ce
        stock. Total en stock : <strong>{total}</strong>.
      </p>
      {!enabled && (
        <p className="text-[13px] text-red-600 mb-4">
          Upstash Redis n&apos;est pas connecté : le stock ne peut pas être enregistré.
        </p>
      )}

      <div className="space-y-3">
        {products.map((p) => (
          <div key={p.id} className="bg-white border border-black/8 rounded-2xl p-4">
            <p className="font-semibold text-[14px] mb-3">{p.name}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {p.variants.map((v) => {
                const k = stockKey(p.id, v.key);
                const q = stock[k] ?? "";
                return (
                  <label
                    key={k}
                    className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2 text-[12.5px] ${
                      parseInt(q, 10) > 0 ? "border-emerald-300 bg-emerald-50" : "border-black/10"
                    }`}
                  >
                    <span>{v.label}</span>
                    <input
                      inputMode="numeric"
                      value={q}
                      placeholder="0"
                      onChange={(e) => set(k, e.target.value)}
                      className="w-14 text-right bg-transparent outline-none font-mono"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-[#FAFAFA] py-4 mt-4 flex items-center gap-4">
        <button
          onClick={save}
          disabled={saving || !enabled}
          className="bg-[#0039CC] text-white rounded-xl px-6 py-3 text-[14px] font-semibold disabled:opacity-50"
        >
          {saving ? "Enregistrement…" : "Enregistrer le stock"}
        </button>
        {message && (
          <span className={`text-[13px] ${message[0] === "ok" ? "text-emerald-700" : "text-red-600"}`}>
            {message[1]}
          </span>
        )}
      </div>
    </AdminShell>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader("Cache-Control", "no-store");
  if (!adminEnabled() || !isAdmin(req)) return { props: { allowed: false } };
  const stock = await getThStock();
  const initial = Object.fromEntries(Object.entries(stock).map(([k, q]) => [k, String(q)]));
  const products = VISIBLE_PRODUCTS.map((p) => ({
    id: p.id,
    name: p.name,
    variants: p.variants.map((v) => ({ key: v.key, label: v.label })),
  }));
  return { props: { allowed: true, enabled: storeEnabled(), initial, products } };
}

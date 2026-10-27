// /admin/stats — visits, funnel, products, sources, countries and codes.
// Visits and clicks come from lib/stats.js; paid orders from the order store.
import { AdminShell } from "../../components/AdminShell";
import { adminEnabled, isAdmin } from "../../lib/adminAuth";
import { storeEnabled, listOrders } from "../../lib/orderStore";
import { readStats, dayKey } from "../../lib/stats";
import { CATALOG } from "../../lib/products";

const RANGES = [7, 30, 90];
const PAID = new Set(["paid", "shipped"]);

const n = (v) => (v || 0).toLocaleString("fr-FR");
const usd = (v) => `$${(v || 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
const pct = (a, b) => (b ? `${((a / b) * 100).toFixed(1)} %` : "—");

function Card({ label, value, sub }) {
  return (
    <div className="bg-white border border-black/10 rounded-xl p-4">
      <p className="text-[11px] uppercase tracking-wider text-black/45">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
      {sub && <p className="text-[12px] text-black/50 mt-0.5">{sub}</p>}
    </div>
  );
}

function Table({ title, head, rows, empty = "Pas encore de données." }) {
  return (
    <section className="bg-white border border-black/10 rounded-xl p-4">
      <h2 className="font-semibold mb-3">{title}</h2>
      {rows.length === 0 ? (
        <p className="text-sm text-black/40">{empty}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-black/45 text-[11px] uppercase tracking-wider">
                {head.map((h, i) => (
                  <th key={h} className={`pb-2 font-medium ${i ? "text-right" : ""}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-t border-black/5">
                  {r.map((c, i) => (
                    <td key={i} className={`py-2 ${i ? "text-right tabular-nums" : "font-medium"}`}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default function Stats({ mode, range, totals, visitors, funnel, daily, products, sources, countries, codes, storeReady, loadError }) {
  if (mode !== "stats") {
    return (
      <AdminShell title="Stats">
        <p className="text-sm text-center mt-16">
          <a href="/admin" className="underline">Connecte-toi à l'admin</a> pour voir les stats.
        </p>
      </AdminShell>
    );
  }
  const maxDay = Math.max(1, ...daily.map((d) => d.visits));
  return (
    <AdminShell
      title="Stats"
      right={
        <a href="/admin" className="text-[12px] text-white/60 hover:text-white">
          ← Commandes
        </a>
      }
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-2xl font-semibold">Stats</h1>
        <div className="flex gap-2">
          {RANGES.map((r) => (
            <a
              key={r}
              href={`/admin/stats?d=${r}`}
              className={`text-[13px] rounded-full px-4 py-1.5 border ${
                r === range ? "bg-[#0A0A0A] text-white border-[#0A0A0A]" : "border-black/15 text-black/60"
              }`}
            >
              {r} jours
            </a>
          ))}
        </div>
      </div>

      {!storeReady && (
        <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm">
          Les stats ont besoin de la base Upstash (Redis), comme la liste des commandes.
        </div>
      )}
      {loadError && (
        <div className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm">
          Impossible de charger les stats : {loadError}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <Card label="Visiteurs uniques" value={n(visitors)} sub={`${n(totals.visit)} visites`} />
        <Card label="Pages vues" value={n(totals.view)} />
        <Card label="Commandes payées" value={n(funnel.orders)} sub={`taux de conversion ${pct(funnel.orders, totals.visit)}`} />
        <Card label="Chiffre d'affaires" value={usd(funnel.revenue)} sub={funnel.orders ? `panier moyen ${usd(funnel.revenue / funnel.orders)}` : null} />
      </div>

      <section className="bg-white border border-black/10 rounded-xl p-4 mb-6">
        <h2 className="font-semibold mb-3">Entonnoir</h2>
        <div className="space-y-2">
          {[
            ["Visites", totals.visit, null],
            ["Fiches produit vues", totals.product, totals.visit],
            ["Ajouts au panier", totals.cart, totals.product],
            ["Checkouts commencés", totals.checkout, totals.cart],
            ["Commandes payées", funnel.orders, totals.checkout],
          ].map(([label, value, prev]) => (
            <div key={label} className="flex items-center gap-3 text-[13px]">
              <span className="w-28 sm:w-44 shrink-0 text-[12px] sm:text-[13px]">{label}</span>
              <div className="flex-1 h-6 bg-black/5 rounded">
                <div
                  className="h-6 rounded bg-[#0039CC]"
                  style={{ width: `${Math.max(totals.visit ? (value / totals.visit) * 100 : 0, value ? 1 : 0)}%` }}
                />
              </div>
              <span className="w-24 text-right tabular-nums">
                <strong>{n(value)}</strong>
                {prev !== null && <span className="block text-[11px] text-black/45">{pct(value, prev)}</span>}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-black/40 mt-3">
          Sous chaque chiffre : le pourcentage par rapport à l'étape précédente.
        </p>
      </section>

      <section className="bg-white border border-black/10 rounded-xl p-4 mb-6">
        <h2 className="font-semibold mb-3">Visites par jour</h2>
        <div className="flex items-end gap-[2px] h-32">
          {daily.map((d) => (
            <div key={d.day} className="flex-1 h-full flex flex-col justify-end" title={`${d.day} · ${d.visits} visites · ${d.orders} commandes`}>
              <div className="bg-[#0039CC] rounded-t" style={{ height: `${(d.visits / maxDay) * 100}%`, minHeight: d.visits ? 2 : 0 }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[11px] text-black/40 mt-1">
          <span>{daily[0]?.day}</span>
          <span>{daily[daily.length - 1]?.day}</span>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Table
          title="Produits"
          head={["Produit", "Vues", "Ajouts panier", "Taux"]}
          rows={products.map((p) => [p.name, n(p.views), n(p.carts), pct(p.carts, p.views)])}
        />
        <Table
          title="Sources de trafic"
          head={["Source", "Visites", "Paniers", "Checkouts"]}
          rows={sources.map((s) => [s.source, n(s.visits), n(s.carts), n(s.checkouts)])}
        />
        <Table
          title="Codes promo (commandes payées)"
          head={["Code", "Commandes", "CA"]}
          rows={codes.map((c) => [c.code, n(c.orders), usd(c.revenue)])}
          empty="Aucune commande payée avec un code sur la période."
        />
        <Table
          title="Pays"
          head={["Pays", "Visites"]}
          rows={countries.map((c) => [c.country, n(c.visits)])}
        />
      </div>
      <p className="text-[11px] text-black/40 mt-6">
        Visites comptées depuis la mise en place du suivi (oct. 2026). Les robots sont exclus. Jours en heure de Bangkok.
      </p>
    </AdminShell>
  );
}

function sumBy(daily, prefix) {
  const out = {};
  for (const d of daily) {
    for (const [k, v] of Object.entries(d.fields)) {
      if (k.startsWith(prefix)) {
        const name = k.slice(prefix.length);
        out[name] = (out[name] || 0) + v;
      }
    }
  }
  return out;
}

export async function getServerSideProps({ req, res, query }) {
  res.setHeader("Cache-Control", "no-store");
  if (!adminEnabled() || !isAdmin(req)) return { props: { mode: "login" } };
  const range = RANGES.includes(Number(query.d)) ? Number(query.d) : 30;
  const storeReady = storeEnabled();
  let stats = { daily: [], visitors: 0 };
  let orders = [];
  let loadError = null;
  if (storeReady) {
    try {
      [stats, orders] = await Promise.all([readStats(range), listOrders(1000)]);
    } catch (err) {
      loadError = err.message;
    }
  }

  const since = Date.now() - range * 86400000;
  const paid = orders.filter((o) => PAID.has(o.status) && (o.createdAt || 0) >= since);
  const ordersByDay = {};
  for (const o of paid) {
    const d = dayKey(o.createdAt);
    ordersByDay[d] = (ordersByDay[d] || 0) + 1;
  }

  const totals = { visit: 0, view: 0, product: 0, cart: 0, checkout: 0 };
  for (const d of stats.daily) for (const k of Object.keys(totals)) totals[k] += d.fields[k] || 0;

  const views = sumBy(stats.daily, "product:");
  const carts = sumBy(stats.daily, "cart:");
  const products = CATALOG.filter((p) => !p.draft)
    .map((p) => ({ name: p.fullName || p.name, views: views[p.id] || 0, carts: carts[p.id] || 0 }))
    .filter((p) => p.views || p.carts)
    .sort((a, b) => b.views - a.views);

  const srcVisits = sumBy(stats.daily, "src:");
  const srcCarts = sumBy(stats.daily, "cart@");
  const srcCheckouts = sumBy(stats.daily, "checkout@");
  const sources = [...new Set([...Object.keys(srcVisits), ...Object.keys(srcCarts), ...Object.keys(srcCheckouts)])]
    .map((s) => ({ source: s, visits: srcVisits[s] || 0, carts: srcCarts[s] || 0, checkouts: srcCheckouts[s] || 0 }))
    .sort((a, b) => b.visits - a.visits);

  const countries = Object.entries(sumBy(stats.daily, "cc:"))
    .map(([country, visits]) => ({ country, visits }))
    .sort((a, b) => b.visits - a.visits)
    .slice(0, 15);

  const codeMap = {};
  for (const o of paid) {
    for (const c of o.codes || []) {
      const k = String(c).toUpperCase();
      codeMap[k] = codeMap[k] || { code: k, orders: 0, revenue: 0 };
      codeMap[k].orders += 1;
      codeMap[k].revenue += Number(o.total) || 0;
    }
  }

  return {
    props: {
      mode: "stats",
      range,
      storeReady,
      loadError,
      totals,
      visitors: stats.visitors,
      funnel: { orders: paid.length, revenue: paid.reduce((s, o) => s + (Number(o.total) || 0), 0) },
      daily: stats.daily.map((d) => ({ day: d.day, visits: d.fields.visit || 0, orders: ordersByDay[d.day] || 0 })),
      products,
      sources,
      countries,
      codes: Object.values(codeMap).sort((a, b) => b.revenue - a.revenue),
    },
  };
}

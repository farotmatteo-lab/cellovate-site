// /admin — owner order list. Password = ADMIN_PASSWORD (Vercel env).
import { useState } from "react";
import { AdminShell, STATUS } from "../../components/AdminShell";
import { adminEnabled, isAdmin } from "../../lib/adminAuth";
import { storeEnabled, listOrders } from "../../lib/orderStore";

function money(n) {
  return typeof n === "number" ? `$${n.toFixed(2)}` : "—";
}

function date(ms) {
  if (!ms) return "—";
  return new Date(ms).toLocaleString("fr-FR", {
    timeZone: "Asia/Bangkok",
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json().catch(() => ({}));
    setBusy(false);
    if (res.ok) window.location.reload();
    else setError(data.error || "Erreur");
  };
  return (
    <form
      onSubmit={submit}
      className="max-w-sm mx-auto mt-16 bg-white border border-black/10 rounded-2xl p-6"
    >
      <h1 className="font-semibold text-lg mb-4">Connexion admin</h1>
      <input
        type="password"
        autoFocus
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mot de passe"
        className="w-full border border-black/15 rounded-lg px-3 py-2.5 text-sm mb-3"
      />
      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
      <button
        disabled={busy}
        className="w-full bg-[#0039CC] text-white rounded-lg py-2.5 text-sm font-semibold disabled:opacity-50"
      >
        {busy ? "…" : "Se connecter"}
      </button>
    </form>
  );
}

function Setup({ what }) {
  return (
    <div className="max-w-xl mx-auto mt-16 bg-white border border-black/10 rounded-2xl p-6 text-sm leading-relaxed">
      <h1 className="font-semibold text-lg mb-3">Configuration requise</h1>
      {what === "password" ? (
        <p>
          Ajoute la variable <code>ADMIN_PASSWORD</code> (8 caractères minimum)
          dans Vercel → Settings → Environment Variables, puis redéploie.
        </p>
      ) : null}
    </div>
  );
}

export default function AdminHome({ mode, orders, storeReady, loadError }) {
  const [filter, setFilter] = useState("todo");

  if (mode === "setup") {
    return (
      <AdminShell title="Configuration">
        <Setup what="password" />
      </AdminShell>
    );
  }
  if (mode === "login") {
    return (
      <AdminShell title="Connexion">
        <Login />
      </AdminShell>
    );
  }

  const logout = async () => {
    await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ logout: true }),
    });
    window.location.reload();
  };

  const todo = orders.filter((o) => o.status === "paid");
  const shown =
    filter === "todo"
      ? todo
      : filter === "shipped"
      ? orders.filter((o) => o.status === "shipped")
      : orders;

  const tabs = [
    ["todo", `À expédier (${todo.length})`],
    ["shipped", "Expédiées"],
    ["all", `Toutes (${orders.length})`],
  ];

  return (
    <AdminShell
      title="Commandes"
      right={
        <div className="flex items-center gap-4">
          <a href="/admin/reviews" className="text-[12px] text-white/60 hover:text-white">
            Avis
          </a>
          <button onClick={logout} className="text-[12px] text-white/60 hover:text-white">
            Déconnexion
          </button>
        </div>
      }
    >
      <h1 className="text-2xl font-semibold mb-6">Commandes</h1>

      {!storeReady && (
        <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed">
          <strong>La liste n'est pas encore activée.</strong> Dans Vercel →
          ton projet → <em>Storage</em> → <em>Create</em> → <em>Upstash
          (Redis)</em> → connecte-le au projet, puis redéploie. En attendant,
          les liens « Marquer comme expédiée » des emails fonctionnent déjà.
        </div>
      )}
      {loadError && (
        <div className="mb-6 rounded-xl border border-red-300 bg-red-50 p-4 text-sm">
          Impossible de charger les commandes : {loadError}
        </div>
      )}

      <div className="flex gap-2 mb-4">
        {tabs.map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`text-[13px] rounded-full px-4 py-1.5 border ${
              filter === key
                ? "bg-[#0A0A0A] text-white border-[#0A0A0A]"
                : "border-black/15 text-black/60 hover:border-black/40"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="text-sm text-black/40 py-12 text-center">
          {filter === "todo" ? "Rien à expédier." : "Aucune commande."}
        </p>
      ) : (
        <div className="space-y-2">
          {shown.map((o) => {
            const st = STATUS[o.status] || {
              label: o.status || "—",
              cls: "bg-black/5 text-black/50",
            };
            return (
              <details
                key={o.id}
                className="bg-white border border-black/10 rounded-xl group"
              >
                <summary className="list-none cursor-pointer px-4 py-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="font-mono text-[13px] font-medium">{o.id}</span>
                  <span className="text-[13px] text-black/50">{date(o.createdAt)}</span>
                  <span className="text-[13px] text-black/70 truncate max-w-[14rem]">
                    {o.email || "—"}
                  </span>
                  <span className="text-[13px] font-medium ml-auto">{money(o.total)}</span>
                  <span className={`text-[11px] font-semibold rounded-full px-2.5 py-1 ${st.cls}`}>
                    {st.label}
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 grid sm:grid-cols-2 gap-4 text-[13px] border-t border-black/5">
                  <div>
                    <p className="text-black/40 text-[11px] uppercase tracking-wider mb-1">
                      Livraison
                    </p>
                    <p className="whitespace-pre-line">{o.name ? `${o.name}\n` : ""}{o.address || "—"}</p>
                    {o.notes && <p className="mt-2 text-black/60">Note : {o.notes}</p>}
                  </div>
                  <div>
                    <p className="text-black/40 text-[11px] uppercase tracking-wider mb-1">
                      Produits
                    </p>
                    <p className="whitespace-pre-line">{(o.lines || []).join("\n") || "—"}</p>
                    {o.totals && (
                      <p className="whitespace-pre-line text-black/50 mt-2">{o.totals}</p>
                    )}
                    {o.codes?.length > 0 && (
                      <p className="text-black/50 mt-1">Codes : {o.codes.join(", ")}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-2">
                    {o.status === "shipped" ? (
                      <p className="text-black/60">
                        Expédiée le {date(o.shippedAt)}
                        {o.tracking ? ` · suivi ${o.carrier ? `${o.carrier} ` : ""}${o.tracking}` : ""}
                      </p>
                    ) : null}
                    {o.email && o.status !== "shipped" && (
                      <a
                        href={`/admin/ship?o=${encodeURIComponent(o.id)}&e=${encodeURIComponent(o.email)}`}
                        className={`rounded-lg px-4 py-2 text-[13px] font-semibold ${
                          o.status === "paid"
                            ? "bg-[#0039CC] text-white"
                            : "border border-black/15 text-black/60"
                        }`}
                      >
                        Marquer comme expédiée
                      </a>
                    )}
                    {o.paymentId && (
                      <span className="text-black/40 text-[12px]">
                        NOWPayments #{o.paymentId}
                        {o.payCurrency ? ` · ${String(o.payCurrency).toUpperCase()}` : ""}
                      </span>
                    )}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      )}
    </AdminShell>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader("Cache-Control", "no-store");
  if (!adminEnabled()) return { props: { mode: "setup" } };
  if (!isAdmin(req)) return { props: { mode: "login" } };
  const storeReady = storeEnabled();
  let orders = [];
  let loadError = null;
  if (storeReady) {
    try {
      orders = await listOrders(300);
    } catch (err) {
      loadError = err.message;
    }
  }
  return {
    props: {
      mode: "list",
      orders: JSON.parse(JSON.stringify(orders)),
      storeReady,
      loadError,
    },
  };
}

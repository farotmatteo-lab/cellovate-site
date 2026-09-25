// /admin/ship?o=<orderId>&e=<email>&t=<token>
// Opened from the owner email (signed link, no login) or from /admin.
// Sends the "your order has shipped" email to the customer.
import { useState } from "react";
import { AdminShell } from "../../components/AdminShell";
import { isAdmin, verifyShipToken, adminEnabled } from "../../lib/adminAuth";
import { getOrder } from "../../lib/orderStore";

const CARRIERS = ["Thailand Post", "DHL", "FedEx", "UPS", "USPS", "Kerry Express", "Flash Express", "J&T Express"];

export default function Ship({ ok, reason, orderId, email, token, order }) {
  const [carrier, setCarrier] = useState(order?.carrier || "");
  const [tracking, setTracking] = useState(order?.tracking || "");
  const [trackingUrl, setTrackingUrl] = useState(order?.trackingUrl || "");
  const [state, setState] = useState(order?.status === "shipped" ? "already" : "form");
  const [error, setError] = useState(null);

  if (!ok) {
    return (
      <AdminShell title="Expédition">
        <div className="max-w-md mx-auto mt-16 bg-white border border-black/10 rounded-2xl p-6 text-sm">
          <h1 className="font-semibold text-lg mb-2">Lien invalide</h1>
          <p className="text-black/60 mb-4">{reason}</p>
          <a href="/admin" className="text-[#0039CC] font-semibold">
            Aller à l'admin →
          </a>
        </div>
      </AdminShell>
    );
  }

  const submit = async (e, force = false) => {
    e?.preventDefault();
    setState("sending");
    setError(null);
    const res = await fetch("/api/admin/ship", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, email, token, carrier, tracking, trackingUrl, force }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) setState("done");
    else if (data.alreadyShipped) setState("already");
    else {
      setError(data.error || "Erreur");
      setState("form");
    }
  };

  const input = "w-full border border-black/15 rounded-lg px-3 py-2.5 text-sm";

  return (
    <AdminShell title={`Expédier ${orderId}`}>
      <div className="max-w-lg mx-auto">
        <a href="/admin" className="text-[13px] text-black/50 hover:text-black">
          ← Toutes les commandes
        </a>
        <div className="mt-3 bg-white border border-black/10 rounded-2xl p-6">
          <p className="text-[11px] uppercase tracking-wider text-black/40">Commande</p>
          <h1 className="font-mono text-xl font-semibold">{orderId}</h1>
          <p className="text-sm text-black/60 mt-1">{email}</p>

          {order && (
            <div className="mt-4 grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <p className="text-black/40 text-[11px] uppercase tracking-wider mb-1">Livraison</p>
                <p className="whitespace-pre-line">{order.name ? `${order.name}\n` : ""}{order.address || "—"}</p>
              </div>
              <div>
                <p className="text-black/40 text-[11px] uppercase tracking-wider mb-1">Produits</p>
                <p className="whitespace-pre-line">{(order.lines || []).join("\n") || "—"}</p>
              </div>
            </div>
          )}

          {state === "done" && (
            <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm">
              <strong>Envoyé.</strong> Le client ({email}) a reçu l'email
              « Your order has shipped »{tracking ? " avec le numéro de suivi" : ""}.
            </div>
          )}

          {state === "already" && (
            <div className="mt-6 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm">
              <p>
                <strong>Déjà expédiée.</strong> Le client a déjà reçu l'email
                d'expédition{order?.tracking ? ` (suivi ${order.tracking})` : ""}.
              </p>
              <button
                onClick={() => setState("form")}
                className="mt-3 text-[#0039CC] font-semibold"
              >
                Renvoyer avec d'autres infos
              </button>
            </div>
          )}

          {(state === "form" || state === "sending") && (
            <form onSubmit={(e) => submit(e, order?.status === "shipped")} className="mt-6 space-y-3">
              <div>
                <label className="text-[12px] text-black/50">Transporteur (optionnel)</label>
                <input
                  list="carriers"
                  value={carrier}
                  onChange={(e) => setCarrier(e.target.value)}
                  className={input}
                  placeholder="ex. Thailand Post"
                />
                <datalist id="carriers">
                  {CARRIERS.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>
              <div>
                <label className="text-[12px] text-black/50">Numéro de suivi (optionnel)</label>
                <input value={tracking} onChange={(e) => setTracking(e.target.value)} className={input} />
              </div>
              <div>
                <label className="text-[12px] text-black/50">Lien de suivi (optionnel)</label>
                <input
                  value={trackingUrl}
                  onChange={(e) => setTrackingUrl(e.target.value)}
                  className={input}
                  placeholder="https://…"
                />
              </div>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button
                disabled={state === "sending"}
                className="w-full bg-[#0039CC] text-white rounded-lg py-3 text-sm font-semibold disabled:opacity-50"
              >
                {state === "sending" ? "Envoi…" : "Marquer expédiée et prévenir le client"}
              </button>
            </form>
          )}
        </div>
      </div>
    </AdminShell>
  );
}

export async function getServerSideProps({ req, res, query }) {
  res.setHeader("Cache-Control", "no-store");
  const orderId = String(query.o || "").slice(0, 64);
  const token = String(query.t || "");
  const order = orderId ? await getOrder(orderId) : null;
  const email = String(query.e || order?.email || "").trim().toLowerCase();

  if (!adminEnabled()) {
    return { props: { ok: false, reason: "ADMIN_PASSWORD n'est pas configuré dans Vercel." } };
  }
  const allowed = isAdmin(req) || verifyShipToken(orderId, email, token);
  if (!allowed) {
    return {
      props: {
        ok: false,
        reason: "Ce lien n'est pas valide (ou le mot de passe admin a changé). Connecte-toi à l'admin.",
      },
    };
  }
  return {
    props: {
      ok: true,
      orderId,
      email,
      token,
      order: order ? JSON.parse(JSON.stringify(order)) : null,
    },
  };
}

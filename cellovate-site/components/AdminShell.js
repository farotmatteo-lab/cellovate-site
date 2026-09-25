import Head from "next/head";

export const STATUS = {
  paid: { label: "Payée · à expédier", cls: "bg-[#0039CC] text-white" },
  shipped: { label: "Expédiée", cls: "bg-emerald-100 text-emerald-800" },
  awaiting_payment: {
    label: "En attente de paiement",
    cls: "bg-black/5 text-black/60",
  },
  partially_paid: {
    label: "Paiement partiel",
    cls: "bg-amber-100 text-amber-800",
  },
  expired: { label: "Expirée", cls: "bg-black/5 text-black/40" },
  failed: { label: "Échouée", cls: "bg-red-100 text-red-700" },
  refunded: { label: "Remboursée", cls: "bg-black/5 text-black/40" },
};

export function AdminShell({ title, children, right }) {
  return (
    <>
      <Head>
        <title>{`${title} · Cellovate admin`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans">
        <header className="bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
            <a href="/admin" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Cellovate"
                className="h-6 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                Admin
              </span>
            </a>
            {right}
          </div>
        </header>
        <div className="max-w-5xl mx-auto px-5 py-8">{children}</div>
      </main>
    </>
  );
}

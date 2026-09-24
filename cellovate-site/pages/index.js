import Head from "next/head";
import Link from "next/link";
import { ShieldCheck, FlaskConical, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cellovate Advanced Peptides</title>
        <meta
          name="description"
          content="Research-grade peptides, third-party tested. For research use only."
        />
      </Head>

      <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-mono { font-family: 'IBM Plex Mono', monospace; }
        `}</style>

        <header className="max-w-5xl mx-auto px-5 pt-8 flex items-center justify-between">
          <img src="/logo.png" alt="Cellovate" className="h-8 w-auto" />
          <nav className="flex items-center gap-2">
            <Link
              href="/quality"
              className="text-[12px] font-medium text-black/50 hover:text-[#0039CC] px-3 py-2 transition"
            >
              Quality
            </Link>
            <Link
              href="/shop"
              className="text-[12px] font-medium border border-black/15 rounded-full px-4 py-2 hover:border-[#0039CC] transition"
            >
              Shop
            </Link>
          </nav>
        </header>

        <section className="max-w-5xl mx-auto px-5 pt-24 pb-20">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0039CC] font-mono mb-4">
            For research use only
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.1] max-w-2xl">
            Research-grade peptides, verified before they reach you.
          </h1>
          <p className="text-black/50 text-[15px] max-w-lg mt-5 leading-relaxed">
            Every batch is analysed by Janoshik Analytical for purity and
            identity. Supplied strictly for laboratory research — not for
            human consumption.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-8 bg-[#0A0A0A] text-white rounded-full px-6 py-3 text-[13px] font-semibold hover:bg-[#0A0A0A]/85 transition"
          >
            Browse the catalog
            <ArrowRight size={15} />
          </Link>
        </section>

        <section className="max-w-5xl mx-auto px-5 pb-24 grid sm:grid-cols-2 gap-4">
          <div className="bg-white border border-black/8 rounded-2xl p-6">
            <ShieldCheck size={20} className="text-[#0039CC] mb-3" />
            <h3 className="font-display text-[15px] mb-1.5">
              Third-party tested
            </h3>
            <p className="text-[13px] text-black/40 leading-relaxed">
              Every batch is analysed by Janoshik Analytical, an independent
              laboratory — purity and identity confirmed by HPLC before it
              ships.{" "}
              <Link href="/quality" className="text-[#0039CC] hover:underline">
                How we verify
              </Link>
            </p>
          </div>
          <div className="bg-white border border-black/8 rounded-2xl p-6">
            <FlaskConical size={20} className="text-[#0039CC] mb-3" />
            <h3 className="font-display text-[15px] mb-1.5">
              Research use only
            </h3>
            <p className="text-[13px] text-black/40 leading-relaxed">
              All products are sold strictly for laboratory research
              purposes, not for human or veterinary use.
            </p>
          </div>
        </section>

        <footer className="max-w-5xl mx-auto px-5 py-8 border-t border-black/8 text-[11px] text-black/25 font-mono">
          © {new Date().getFullYear()} Cellovate Advanced Peptides — For
          research use only.
        </footer>
      </main>
    </>
  );
}

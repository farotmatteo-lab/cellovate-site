import Head from "next/head";
import Link from "next/link";
import {
  ArrowLeft,
  FlaskConical,
  ScanLine,
  Boxes,
  ShieldCheck,
  Lock,
} from "lucide-react";

const CHECKS = [
  {
    icon: FlaskConical,
    title: "HPLC purity",
    text: "High-performance liquid chromatography measures the purity of each batch by comparing the main peak against every other peak detected in the sample.",
  },
  {
    icon: ScanLine,
    title: "Mass spectrometry",
    text: "Mass spectrometry confirms molecular identity: the measured mass is checked against the theoretical mass of the target compound, so an analog or a degradation product cannot pass as the real thing.",
  },
  {
    icon: Boxes,
    title: "Lot-traceable analysis",
    text: "Testing is tied to a specific batch, not to a product line. What ships to you belongs to a lot that was analysed, with its own results on file.",
  },
  {
    icon: ShieldCheck,
    title: "One controlled source",
    text: "Every compound comes from the same manufacturing partner and is prepared the same way from one batch to the next, which is what makes results comparable over time.",
  },
];

export default function QualityPage() {
  return (
    <>
      <Head>
        <title>Quality Standards | Cellovate Advanced Peptides</title>
        <meta
          name="description"
          content="How every Cellovate batch is verified: HPLC purity and mass spectrometry identity, analysed by Janoshik Analytical. For research use only."
        />
      </Head>

      <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans pb-24">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-mono { font-family: 'IBM Plex Mono', monospace; }
        `}</style>

        <header className="max-w-5xl mx-auto px-5 pt-8 flex items-center justify-between">
          <Link href="/" className="block">
            <img
              src="/logo.png"
              alt="Cellovate"
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/shop"
            className="text-[12px] font-medium border border-black/15 rounded-full px-4 py-2 hover:border-[#0039CC] transition"
          >
            Shop
          </Link>
        </header>

        <div className="max-w-5xl mx-auto px-5 pt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] text-black/40 hover:text-black/70 transition mb-8"
          >
            <ArrowLeft size={13} /> Back to home
          </Link>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0039CC] font-mono mb-4">
            Quality standards
          </p>
          <h1 className="font-display text-3xl sm:text-4xl leading-[1.15] max-w-2xl">
            How we verify every Cellovate batch
          </h1>
          <p className="text-black/50 text-[15px] max-w-2xl mt-5 leading-relaxed">
            Every batch is analysed by{" "}
            <span className="text-[#0A0A0A] font-medium">
              Janoshik Analytical
            </span>
            , an independent laboratory, for purity and molecular identity
            before it leaves the facility. Nothing ships on the strength of a
            supplier&apos;s word alone.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {CHECKS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white border border-black/8 rounded-2xl p-6"
              >
                <Icon size={20} className="text-[#0039CC] mb-3" />
                <h2 className="font-display text-[15px] mb-2">{title}</h2>
                <p className="text-[13px] text-black/45 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-black/8 rounded-2xl p-6 sm:p-8 mt-4">
            <Lock size={20} className="text-[#0039CC] mb-3" />
            <h2 className="font-display text-[15px] mb-2">
              Why we do not publish the reports
            </h2>
            <p className="text-[13px] text-black/45 leading-relaxed max-w-3xl">
              A certificate of analysis is a PDF, and a PDF travels. Reports
              issued to legitimate suppliers are routinely lifted, rebranded and
              attached to unrelated material by sellers who never tested
              anything. Publishing ours would hand those sellers a credential
              for products we did not make, and would make our own batch numbers
              impossible to tell apart from counterfeits carrying the same
              document. So the analysis happens on every batch, and the results
              stay internal.
            </p>
            <p className="text-[13px] text-black/45 leading-relaxed max-w-3xl mt-3">
              If you are evaluating us as a wholesale or private-label partner,
              analytical results are reviewed directly with you.{" "}
              <Link href="/shop" className="text-[#0039CC] hover:underline">
                Get in touch through the shop
              </Link>
              .
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 sm:p-8 mt-4">
            <h2 className="font-display text-[15px] mb-2">
              Compliance commitment
            </h2>
            <p className="text-[13px] text-black/45 leading-relaxed max-w-3xl">
              All products sold by Cellovate are intended for laboratory
              research use only. They are not for human consumption, veterinary
              use, or medical applications. By using this site, you agree to
              comply with all applicable laws and regulations regarding these
              products.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 mt-10 bg-[#0A0A0A] text-white rounded-full px-6 py-3 text-[13px] font-semibold hover:bg-[#0A0A0A]/85 transition"
          >
            Browse the catalog
          </Link>
        </div>

        <footer className="max-w-5xl mx-auto px-5 py-8 mt-12 border-t border-black/8 text-[11px] text-black/25 font-mono">
          © {new Date().getFullYear()} Cellovate Advanced Peptides — For
          research use only.
        </footer>
      </main>
    </>
  );
}

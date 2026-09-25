import { useEffect, useRef } from "react";
import Link from "next/link";
import { ShieldCheck, FlaskConical, ArrowRight } from "lucide-react";
import Seo, { organizationLd, websiteLd } from "../components/Seo";

export default function Home() {
  // React doesn't render the `muted` attribute in the server HTML, so some
  // browsers (Safari/iOS, battery saver) refuse to autoplay. Force it here.
  const videoRef = useRef(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    // Retry on the first interaction if the browser still blocked it.
    const onFirst = () => {
      tryPlay();
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("scroll", onFirst);
    };
    window.addEventListener("touchstart", onFirst, { passive: true });
    window.addEventListener("scroll", onFirst, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("scroll", onFirst);
    };
  }, []);
  return (
    <>
      <Seo
        title="Cellovate Advanced Peptides — Research-Grade Peptides, Third-Party Tested"
        description="Research-grade peptides verified by Janoshik Analytical (HPLC purity and identity) on every batch. Crypto and card payment, worldwide shipping. For research use only."
        jsonLd={[organizationLd, websiteLd]}
      />

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

        {/* Full-bleed hero: looping lab video behind the headline. */}
        <section className="relative mt-8 mb-16 overflow-hidden bg-[#0A0A0A] min-h-[720px] sm:min-h-[560px] sm:h-[82vh] sm:max-h-[820px]">
          <video
            ref={videoRef}
            className="absolute top-0 right-0 w-full h-[62%] sm:h-full sm:w-[80%] object-cover pointer-events-none"
            poster="/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
          >
            <source src="/hero.mp4?v=2" type="video/mp4" />
            <source src="/hero.webm?v=2" type="video/webm" />
          </video>
          {/* Keeps the text readable: dark on the left (desktop), bottom (mobile). */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,#0A0A0A_40%,rgba(10,10,10,0.6)_55%,transparent_75%)] sm:bg-[linear-gradient(to_right,#0A0A0A_20%,rgba(10,10,10,0.75)_38%,rgba(10,10,10,0.15)_60%,transparent_80%)]" />
          <div className="relative min-h-[720px] sm:min-h-0 sm:h-full max-w-5xl mx-auto px-5 flex flex-col justify-end sm:justify-center pb-12 sm:pb-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#5B8CFF] font-mono mb-4">
              For research use only
            </p>
            <h1 className="font-display text-white text-4xl sm:text-5xl leading-[1.08] max-w-[30rem]">
              Research-grade peptides, verified before they reach you.
            </h1>
            <p className="text-white/70 text-[15px] max-w-[26rem] mt-5 leading-relaxed">
              Every batch is analysed by Janoshik Analytical for purity and
              identity. Supplied strictly for laboratory research — not for
              human consumption.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#0039CC] text-white rounded-full px-6 py-3 text-[13px] font-semibold shadow-lg shadow-[#0039CC]/30 hover:bg-[#0030AD] transition"
              >
                Browse the catalog
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 border border-white/30 text-white rounded-full px-6 py-3 text-[13px] font-semibold hover:border-white transition"
              >
                How we verify
              </Link>
            </div>
          </div>
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
      </main>
    </>
  );
}

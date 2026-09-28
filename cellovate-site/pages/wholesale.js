import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Layers,
  BadgePercent,
  Tag,
  Truck,
  Headphones,
  MessageSquare,
} from "lucide-react";
import Seo, { breadcrumbLd } from "../components/Seo";
import WholesaleChat from "../components/WholesaleChat";
import { VISIBLE_PRODUCTS } from "../lib/products";

const PERKS = [
  {
    icon: ShieldCheck,
    title: "Third-party lab tested, every batch",
    text: "Purity by HPLC and identity by mass spectrometry, analysed by an independent laboratory before any batch ships. Results are reviewed directly with wholesale partners.",
  },
  {
    icon: Layers,
    title: "Consistent, lot-traceable supply",
    text: "One controlled manufacturing source and batch-numbered vials, so what you receive in month six matches what you validated in month one.",
  },
  {
    icon: BadgePercent,
    title: "Tiered volume pricing",
    text: "Wholesale rates that drop as your volume grows, well below our retail prices. You get a written quote for your exact product mix and quantities.",
  },
  {
    icon: Tag,
    title: "Private label available",
    text: "Your brand on vials, pens and packaging, produced from the same tested batches as our own line.",
  },
  {
    icon: Truck,
    title: "Worldwide shipping",
    text: "Discreet, protected packaging and tracked international delivery on every wholesale order.",
  },
  {
    icon: Headphones,
    title: "A dedicated contact",
    text: "One person who knows your account, answers by email, WhatsApp or Telegram, and plans restocks with you.",
  },
];

const STEPS_HOW = [
  ["Tell us what you need", "Answer a few quick questions in the chat below: products, volumes, format, timeline."],
  ["Receive your quote", "We reply within 24 hours (business days) with pricing for your volume and lead times."],
  ["Place your first order", "Confirm the quote, pay by card or crypto, and we ship. Reorders get priority allocation."],
];

export default function WholesalePage({ products }) {
  return (
    <>
      <Seo
        title="Wholesale & B2B Research Peptides | Cellovate Advanced Peptides"
        description="Wholesale research peptides for laboratories and distributors: third-party lab tested batches, tiered volume pricing, private label and worldwide shipping. Request a quote."
        jsonLd={breadcrumbLd([
          ["Home", "/"],
          ["Wholesale", "/wholesale"],
        ])}
      />
      <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans pb-24">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-mono { font-family: 'IBM Plex Mono', monospace; }
        `}</style>

        <header className="max-w-5xl mx-auto px-5 pt-8 flex items-center justify-between">
          <Link href="/" className="block">
            <img src="/logo.png" alt="Cellovate" className="h-8 w-auto" />
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
            Wholesale &amp; B2B
          </p>
          <h1 className="font-display text-3xl sm:text-4xl leading-[1.15] max-w-2xl">
            Research-grade peptides at wholesale prices, without compromising on quality
          </h1>
          <p className="text-black/50 text-[15px] max-w-2xl mt-5 leading-relaxed">
            We supply laboratories, research institutions and distributors of research compounds with the same
            third-party tested batches we sell in our shop, at tiered prices built for volume.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 mt-8 bg-[#0039CC] text-white rounded-full px-6 py-3 text-[13px] font-semibold shadow-lg shadow-[#0039CC]/25 hover:bg-[#0030AD] transition"
          >
            <MessageSquare size={15} /> Request a quote
          </a>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {PERKS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white border border-black/8 rounded-2xl p-6">
                <Icon size={20} className="text-[#0039CC] mb-3" />
                <h2 className="font-display text-[15px] mb-2">{title}</h2>
                <p className="text-[13px] text-black/50 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="font-display text-[13px] uppercase tracking-[0.15em] text-black/40 mb-5">
              How it works
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {STEPS_HOW.map(([title, text], i) => (
                <div key={title} className="border border-black/10 rounded-2xl p-6">
                  <p className="font-mono text-[12px] text-[#0039CC] mb-2">0{i + 1}</p>
                  <h3 className="font-display text-[15px] mb-1.5">{title}</h3>
                  <p className="text-[13px] text-black/50 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="quote" className="mt-14 grid lg:grid-cols-[1fr_1.35fr] gap-8 items-start scroll-mt-8">
            <div>
              <h2 className="font-display text-2xl leading-tight">Request a wholesale quote</h2>
              <p className="text-[14px] text-black/50 leading-relaxed mt-3">
                Chat with our wholesale desk: a few questions about your business and volumes, and we come back
                with pricing tailored to your order. No commitment.
              </p>
              <ul className="mt-5 space-y-2 text-[13px] text-black/60">
                {["Reply within 24 hours", "Quote for your exact product mix", "Private label quotes on request"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0039CC]" /> {t}
                    </li>
                  )
                )}
              </ul>
              <p className="text-[11.5px] text-black/35 mt-6 leading-relaxed">
                Wholesale accounts are reserved for businesses. All products are supplied for laboratory research
                use only and are not for human or veterinary use.
              </p>
            </div>
            <WholesaleChat products={products} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  return { props: { products: VISIBLE_PRODUCTS.map((p) => p.name) } };
}

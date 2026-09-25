import Link from "next/link";
import Seo from "./Seo";
import { BUSINESS } from "../lib/business";

export default function LegalLayout({ title, description, children }) {
  return (
    <>
      <Seo title={`${title} | ${BUSINESS.brand}`} description={description} />
      <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans pb-24">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          .font-sans { font-family: 'Inter', sans-serif; }
          .legal h2 { font-weight: 600; font-size: 16px; margin: 2rem 0 0.6rem; }
          .legal p, .legal li { font-size: 14px; line-height: 1.7; color: rgba(10,10,10,0.72); }
          .legal p { margin-bottom: 0.8rem; }
          .legal ul { list-style: disc; margin: 0 0 1rem 1.25rem; }
          .legal a { color: #0039CC; text-decoration: underline; }
        `}</style>
        <header className="max-w-3xl mx-auto px-5 pt-8 flex items-center justify-between">
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
        <article className="legal max-w-3xl mx-auto px-5 pt-10">
          <h1 className="text-3xl font-semibold mb-2">{title}</h1>
          <p className="text-[12px] text-black/40 mb-8">Last updated: {BUSINESS.lastUpdated}</p>
          {children}
        </article>
      </main>
    </>
  );
}

export function BusinessBlock() {
  return (
    <p>
      {BUSINESS.legalName || BUSINESS.brand}
      {BUSINESS.address && (
        <>
          <br />
          {BUSINESS.address}
        </>
      )}
      <br />
      Email: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
    </p>
  );
}

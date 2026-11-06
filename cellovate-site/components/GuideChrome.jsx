// Shared page frame of the localized guide pages: logo, language switch,
// shop link, fonts (incl. Thai).
import Link from "next/link";
import { Globe } from "lucide-react";
import { LOCALES } from "../lib/seo/locales";

export function GuideChrome({ lang, locales, pathFor, shopLabel, children }) {
  return (
    <main lang={lang} className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans pb-28">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+Thai:wght@400;500;600&display=swap');
        .font-display { font-family: 'Space Grotesk', 'Noto Sans Thai', sans-serif; }
        .font-sans { font-family: 'Inter', 'Noto Sans Thai', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', 'Noto Sans Thai', monospace; }
      `}</style>
      <header className="max-w-5xl mx-auto px-5 pt-8 flex items-center justify-between gap-4">
        <Link href="/" className="block shrink-0">
          <img src="/logo.png" alt="Cellovate" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-2">
          {locales.length > 1 && (
            <nav aria-label="Language" className="flex flex-wrap items-center gap-0.5 text-[12px]">
              <Globe size={13} className="text-black/35 mr-0.5" />
              {locales.map((l) =>
                l === lang ? (
                  <span key={l} className="px-2 py-1 rounded-full bg-black/5 font-medium">{l.toUpperCase()}</span>
                ) : (
                  <Link key={l} href={pathFor(l)} hrefLang={LOCALES[l].hreflang} className="px-2 py-1 rounded-full text-black/45 hover:text-[#0039CC] transition">
                    {l.toUpperCase()}
                  </Link>
                )
              )}
            </nav>
          )}
          <Link href="/shop" className="text-[12px] font-medium border border-black/15 rounded-full px-4 py-2 hover:border-[#0039CC] transition">
            {shopLabel}
          </Link>
        </div>
      </header>
      <div className="max-w-5xl mx-auto px-5 pt-10">{children}</div>
    </main>
  );
}

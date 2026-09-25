// Site-wide announcement bar and footer (hidden on /admin by _app).
import Link from "next/link";
import { FREE_SHIPPING_THRESHOLD } from "../lib/upsell";
import { BUSINESS } from "../lib/business";

export function AnnouncementBar() {
  return (
    <div className="bg-[#0A0A0A] text-white text-center text-[11.5px] sm:text-[12px] font-medium px-4 py-2 tracking-wide">
      Free shipping over ${FREE_SHIPPING_THRESHOLD}
      <span className="mx-2 text-white/40">·</span>
      <Link href="/quality" className="hover:underline">
        Third-party lab tested
      </Link>
    </div>
  );
}

const LINKS = [
  ["Shop", "/shop"],
  ["Quality", "/quality"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
  ["Terms of Sale", "/terms"],
  ["Refund Policy", "/refund-policy"],
  ["Privacy Policy", "/privacy"],
];

export function SiteFooter() {
  return (
    <footer className="bg-[#FAFAFA] border-t border-black/8">
      <div className="max-w-5xl mx-auto px-5 py-8">
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-black/55">
          {LINKS.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-[#0039CC] transition">
              {label}
            </Link>
          ))}
        </nav>
        <p className="mt-5 text-[11px] text-black/35 font-mono leading-relaxed">
          © {new Date().getFullYear()} {BUSINESS.legalName} — {BUSINESS.address}
        </p>
        <p className="mt-1 text-[11px] text-black/35 font-mono leading-relaxed">
          All products are intended for laboratory research use only. Not for human or
          veterinary use.
        </p>
      </div>
    </footer>
  );
}

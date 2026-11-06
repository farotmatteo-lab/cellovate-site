// Site-wide announcement bar and footer (hidden on /admin by _app).
import { useEffect, useState } from "react";
import Link from "next/link";
import { CAMPAIGN, campaignActive } from "../lib/campaign";
import { FREE_SHIPPING_THRESHOLD } from "../lib/upsell";
import { Price } from "../context/CurrencyContext";
import { BUSINESS } from "../lib/business";

export function AnnouncementBar() {
  // Checked in the browser so the bar switches on and off on time, even on
  // pages built in advance.
  const [promo, setPromo] = useState(false);
  useEffect(() => setPromo(campaignActive()), []);
  if (promo) {
    return (
      <Link
        href="/shop"
        className="block bg-[#0039CC] text-white text-center text-[11.5px] sm:text-[12.5px] font-semibold px-4 py-2 tracking-wide hover:bg-[#0030AD] transition"
      >
        BUY 2, GET 1 FREE — storewide
        <span className="mx-2 text-white/50">·</span>
        <span className="font-normal">Ends {CAMPAIGN.endsLabel}, no code needed</span>
      </Link>
    );
  }
  return (
    <div className="bg-[#0A0A0A] text-white text-center text-[11.5px] sm:text-[12px] font-medium px-4 py-2 tracking-wide">
      Free shipping over <Price usd={FREE_SHIPPING_THRESHOLD} />
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
  ["Wholesale", "/wholesale"],
  ["Contact", "/contact"],
  ["Terms of Sale", "/terms"],
  ["Refund Policy", "/refund-policy"],
  ["Privacy Policy", "/privacy"],
  ["Partner login", "/partner"],
];

// Country delivery pages, each in the visitor-facing local language.
const DELIVERY = [
  ["Thailand", "/en/peptides/thailand"],
  ["France", "/fr/peptides/france"],
  ["Deutschland", "/de/peptides/germany"],
  ["España", "/es/peptides/spain"],
  ["Italia", "/it/peptides/italy"],
  ["United Kingdom", "/en/peptides/united-kingdom"],
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
        <nav aria-label="Delivery" className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11.5px] text-black/40">
          <span className="text-black/30">Delivery:</span>
          {DELIVERY.map(([label, href]) => (
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

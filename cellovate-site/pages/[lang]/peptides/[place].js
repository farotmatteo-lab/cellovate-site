// Localized country and city pages: /{lang}/peptides/{place}
// Content lives in lib/seo/places.js, interface text in lib/seo/ui.js.
import Link from "next/link";
import { Truck, CreditCard, ChevronDown, MapPin, Globe } from "lucide-react";
import Seo, { breadcrumbLd, SITE_URL } from "../../../components/Seo";
import { Price } from "../../../context/CurrencyContext";
import { VISIBLE_PRODUCTS } from "../../../lib/products";
import { BUSINESS } from "../../../lib/business";
import { LOCALES, DEFAULT_LOCALE, placePath } from "../../../lib/seo/locales";
import { UI } from "../../../lib/seo/ui";
import { PLACES, getPlace, placesInCountry, countryHub } from "../../../lib/seo/places";

export async function getStaticPaths() {
  const paths = [];
  for (const place of PLACES) {
    for (const lang of place.locales) paths.push({ params: { lang, place: place.slug } });
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const place = getPlace(params.place);
  const lang = params.lang;
  const c = place.content[lang];

  const featured = place.featured
    .map((h) => VISIBLE_PRODUCTS.find((p) => p.handle === h))
    .filter(Boolean)
    .map((p) => ({
      handle: p.handle,
      name: p.name,
      dose: p.dose,
      image: p.variants[0]?.image || null,
      from: Math.min(...p.variants.map((v) => v.price)),
    }));

  const hub = countryHub(place.country);
  const siblings = placesInCountry(place.country)
    .filter((p) => p.slug !== place.slug && p.locales.includes(lang))
    .map((p) => ({ slug: p.slug, name: p.name[lang] }));

  return {
    props: {
      lang,
      slug: place.slug,
      type: place.type,
      name: place.name[lang],
      locales: place.locales,
      hub: hub && hub.slug !== place.slug ? { slug: hub.slug, name: hub.name[lang] } : null,
      countryName: hub ? hub.name[lang] : place.name[lang],
      siblings,
      featured,
      thailand: place.country === "thailand",
      c,
    },
  };
}

export default function PlacePage({ lang, slug, type, name, locales, hub, countryName, siblings, featured, thailand, c }) {
  const t = UI[lang] || UI[DEFAULT_LOCALE];
  const path = placePath(lang, slug);

  const alternates = [
    ...locales.map((l) => ({ hreflang: LOCALES[l].hreflang, path: placePath(l, slug) })),
    {
      hreflang: "x-default",
      path: placePath(locales.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : locales[0], slug),
    },
  ];

  const crumbs = [[t.home, "/"]];
  if (hub) crumbs.push([hub.name, placePath(lang, hub.slug)]);
  crumbs.push([name, path]);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: c.faq.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const waHref = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
    `${t.whatsappText(name)} ${SITE_URL}${path}`
  )}`;

  return (
    <>
      <Seo
        title={c.title}
        description={c.description}
        alternates={alternates}
        locale={LOCALES[lang].og}
        jsonLd={[breadcrumbLd(crumbs), faqLd]}
      />

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
              <nav aria-label={t.language} className="flex items-center gap-1 text-[12px]">
                <Globe size={13} className="text-black/35 mr-0.5" />
                {locales.map((l) =>
                  l === lang ? (
                    <span key={l} className="px-2 py-1 rounded-full bg-black/5 font-medium">
                      {l.toUpperCase()}
                    </span>
                  ) : (
                    <Link
                      key={l}
                      href={placePath(l, slug)}
                      hrefLang={LOCALES[l].hreflang}
                      className="px-2 py-1 rounded-full text-black/45 hover:text-[#0039CC] transition"
                    >
                      {l.toUpperCase()}
                    </Link>
                  )
                )}
              </nav>
            )}
            <Link
              href="/shop"
              className="text-[12px] font-medium border border-black/15 rounded-full px-4 py-2 hover:border-[#0039CC] transition"
            >
              Shop
            </Link>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-5 pt-10">
          <nav className="text-[12px] text-black/40 mb-8 flex flex-wrap gap-1.5">
            {crumbs.map(([label, href], i) => (
              <span key={href} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {i < crumbs.length - 1 ? (
                  <Link href={href} className="hover:text-black/70 transition">
                    {label}
                  </Link>
                ) : (
                  <span className="text-black/60">{label}</span>
                )}
              </span>
            ))}
          </nav>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#0039CC] font-mono mb-4">
            {t.eyebrow} · {name}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl leading-[1.2] max-w-3xl">{c.h1}</h1>
          <p className="text-black/55 text-[15px] max-w-3xl mt-5 leading-relaxed">{c.intro}</p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white rounded-full px-6 py-3 text-[13px] font-semibold hover:bg-[#1EBE5A] transition"
            >
              {t.whatsapp}
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white rounded-full px-6 py-3 text-[13px] font-semibold hover:bg-[#0A0A0A]/85 transition"
            >
              {t.shopAll}
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <div className="bg-white border border-black/8 rounded-2xl p-6">
              <Truck size={20} className="text-[#0039CC] mb-3" />
              <h2 className="font-display text-[15px] mb-1.5">{t.delivery}</h2>
              <p className="text-[13px] text-black/55 leading-relaxed">{c.delivery}</p>
              {thailand && t.stockNote && (
                <p className="text-[11.5px] text-black/40 leading-relaxed mt-2">{t.stockNote}</p>
              )}
            </div>
            <div className="bg-white border border-black/8 rounded-2xl p-6">
              <CreditCard size={20} className="text-[#0039CC] mb-3" />
              <h2 className="font-display text-[15px] mb-1.5">{t.payment}</h2>
              <p className="text-[13px] text-black/55 leading-relaxed">{t.paymentText}</p>
            </div>
          </div>

          <section className="mt-14">
            <h2 className="font-display text-xl sm:text-2xl mb-5">{t.featured}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {featured.map((p) => (
                <Link
                  key={p.handle}
                  href={`/shop/${p.handle}`}
                  className="group bg-white border border-black/8 rounded-2xl p-4 hover:border-[#0039CC]/40 transition flex flex-col"
                >
                  <div className="aspect-square rounded-xl bg-[#F3F3F3] overflow-hidden mb-3">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={`${p.name} research peptide`}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover:scale-[1.03] transition"
                      />
                    )}
                  </div>
                  <p className="font-display text-[14px] leading-tight">{p.name}</p>
                  <p className="text-[11px] text-black/40 font-mono mt-1">{p.dose}</p>
                  <p className="text-[13px] mt-auto pt-3">
                    <span className="text-black/40">{t.from} </span>
                    <span className="font-semibold">
                      <Price usd={p.from} />
                    </span>
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {c.sections.map((s) => (
            <section key={s.h} className="mt-14 max-w-3xl">
              <h2 className="font-display text-xl sm:text-2xl mb-4">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="text-[14.5px] text-black/60 leading-relaxed mt-3">
                  {para}
                </p>
              ))}
            </section>
          ))}

          <section className="mt-14">
            <h2 className="font-display text-xl sm:text-2xl mb-5">{t.ordering}</h2>
            <ol className="grid sm:grid-cols-3 gap-4">
              {t.steps.map(([h, p], i) => (
                <li key={h} className="bg-white border border-black/8 rounded-2xl p-6">
                  <span className="font-mono text-[11px] text-[#0039CC]">0{i + 1}</span>
                  <h3 className="font-display text-[15px] mt-2 mb-1.5">{h}</h3>
                  <p className="text-[13px] text-black/50 leading-relaxed">{p}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-14 max-w-3xl">
            <h2 className="font-display text-xl sm:text-2xl mb-5">{t.faq}</h2>
            <div className="space-y-2">
              {c.faq.map(([q, a]) => (
                <details key={q} className="group bg-white border border-black/8 rounded-2xl px-5 py-4">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-[14px]">
                    {q}
                    <ChevronDown size={16} className="shrink-0 text-black/35 group-open:rotate-180 transition" />
                  </summary>
                  <p className="text-[13.5px] text-black/55 leading-relaxed mt-3">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {(siblings.length > 0 || hub) && (
            <section className="mt-14">
              <h2 className="font-display text-xl sm:text-2xl mb-5">
                {type === "country" ? t.areas : t.otherCities(countryName)}
              </h2>
              <div className="flex flex-wrap gap-2">
                {hub && (
                  <Link
                    href={placePath(lang, hub.slug)}
                    className="inline-flex items-center gap-1.5 text-[13px] bg-white border border-black/10 rounded-full px-4 py-2 hover:border-[#0039CC] transition"
                  >
                    <MapPin size={13} className="text-[#0039CC]" /> {hub.name}
                  </Link>
                )}
                {siblings.map((s) => (
                  <Link
                    key={s.slug}
                    href={placePath(lang, s.slug)}
                    className="inline-flex items-center gap-1.5 text-[13px] bg-white border border-black/10 rounded-full px-4 py-2 hover:border-[#0039CC] transition"
                  >
                    <MapPin size={13} className="text-black/30" /> {s.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <p className="mt-14 text-[11.5px] text-black/40 leading-relaxed max-w-3xl border-t border-black/8 pt-6">
            {t.ruo}
          </p>
        </div>
      </main>
    </>
  );
}

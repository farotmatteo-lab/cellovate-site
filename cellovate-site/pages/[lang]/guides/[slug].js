// One guide in one language: /{lang}/guides/{slug}
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Seo, { articleLd, breadcrumbLd } from "../../../components/Seo";
import { Price } from "../../../context/CurrencyContext";
import { VISIBLE_PRODUCTS } from "../../../lib/products";
import { LOCALES, DEFAULT_LOCALE } from "../../../lib/seo/locales";
import { GUIDES_UI } from "../../../lib/seo/guides-ui";
import { UI } from "../../../lib/seo/ui";
import { ARTICLES, getArticle, articlesIn, guidePath, UPDATED } from "../../../lib/seo/articles";
import { GuideChrome } from "../../../components/GuideChrome";

export async function getStaticPaths() {
  const paths = [];
  for (const a of ARTICLES) for (const lang of a.locales) paths.push({ params: { lang, slug: a.slug } });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { lang, slug } = params;
  const a = getArticle(slug);
  const products = (a.products || [])
    .map((h) => VISIBLE_PRODUCTS.find((p) => p.handle === h))
    .filter(Boolean)
    .map((p) => ({
      handle: p.handle,
      name: p.name,
      dose: p.dose,
      image: p.variants[0]?.image || null,
      from: Math.min(...p.variants.map((v) => v.price)),
    }));
  const more = articlesIn(lang)
    .filter((x) => x.slug !== slug)
    .slice(0, 6)
    .map((x) => ({ slug: x.slug, title: x.content[lang].h1 }));
  return { props: { lang, slug, locales: a.locales, c: a.content[lang], products, more } };
}

export default function Guide({ lang, slug, locales, c, products, more }) {
  const t = GUIDES_UI[lang] || GUIDES_UI[DEFAULT_LOCALE];
  const ruo = (UI[lang] || UI[DEFAULT_LOCALE]).ruo;
  const path = guidePath(lang, slug);
  const alternates = [
    ...locales.map((l) => ({ hreflang: LOCALES[l].hreflang, path: guidePath(l, slug) })),
    {
      hreflang: "x-default",
      path: guidePath(locales.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : locales[0], slug),
    },
  ];
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: c.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <>
      <Seo
        title={c.title}
        description={c.description}
        type="article"
        alternates={alternates}
        locale={LOCALES[lang].og}
        jsonLd={[
          articleLd({ title: c.h1, summary: c.description, path, lang, updated: UPDATED }),
          breadcrumbLd([[t.home, "/"], [t.guides, guidePath(lang)], [c.h1, path]]),
          faqLd,
        ]}
      />
      <GuideChrome lang={lang} locales={locales} pathFor={(l) => guidePath(l, slug)} shopLabel={t.shop}>
        <nav className="text-[12px] text-black/40 mb-8 flex flex-wrap gap-1.5">
          <Link href="/" className="hover:text-black/70">{t.home}</Link>
          <span>/</span>
          <Link href={guidePath(lang)} className="hover:text-black/70">{t.guides}</Link>
        </nav>
        <article className="max-w-3xl">
          <h1 className="font-display text-3xl sm:text-4xl leading-[1.2]">{c.h1}</h1>
          <p className="text-[11px] font-mono text-black/35 mt-4">
            {t.updated} {UPDATED}
          </p>
          <p className="text-black/60 text-[16px] mt-5 leading-relaxed">{c.intro}</p>

          {c.sections.map((s) => (
            <section key={s.h} className="mt-10">
              <h2 className="font-display text-xl sm:text-2xl mb-3">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="text-[15px] text-black/65 leading-[1.75] mt-3">{para}</p>
              ))}
              {s.list && (
                <ul className="list-disc pl-5 mt-3 space-y-1.5 text-[15px] text-black/65 leading-relaxed">
                  {s.list.map((li) => <li key={li}>{li}</li>)}
                </ul>
              )}
            </section>
          ))}
        </article>

        {products.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-xl sm:text-2xl mb-5">{t.products}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {products.map((p) => (
                <Link key={p.handle} href={`/shop/${p.handle}`} className="group bg-white border border-black/8 rounded-2xl p-4 hover:border-[#0039CC]/40 transition flex flex-col">
                  <div className="aspect-square rounded-xl bg-[#F3F3F3] overflow-hidden mb-3">
                    {p.image && <img src={p.image} alt={`${p.name} research peptide`} loading="lazy" className="w-full h-full object-contain" />}
                  </div>
                  <p className="font-display text-[14px] leading-tight">{p.name}</p>
                  <p className="text-[11px] text-black/40 font-mono mt-1">{p.dose}</p>
                  <p className="text-[13px] mt-auto pt-3">
                    <span className="text-black/40">{t.from} </span>
                    <span className="font-semibold"><Price usd={p.from} /></span>
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

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

        {more.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-xl sm:text-2xl mb-5">{t.more}</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {more.map((m) => (
                <Link key={m.slug} href={guidePath(lang, m.slug)} className="bg-white border border-black/8 rounded-xl px-4 py-3 text-[13.5px] hover:border-[#0039CC] transition">
                  {m.title}
                </Link>
              ))}
            </div>
          </section>
        )}

        <p className="mt-14 text-[11.5px] text-black/40 leading-relaxed max-w-3xl border-t border-black/8 pt-6">{ruo}</p>
      </GuideChrome>
    </>
  );
}

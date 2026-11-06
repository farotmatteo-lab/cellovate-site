// Guide index per language: /{lang}/guides
import Link from "next/link";
import Seo, { breadcrumbLd } from "../../../components/Seo";
import { LOCALES, DEFAULT_LOCALE } from "../../../lib/seo/locales";
import { GUIDES_UI } from "../../../lib/seo/guides-ui";
import { articlesIn, guideLocales, guidePath } from "../../../lib/seo/articles";
import { GuideChrome } from "../../../components/GuideChrome";

export async function getStaticPaths() {
  return { paths: guideLocales().map((lang) => ({ params: { lang } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const lang = params.lang;
  const list = articlesIn(lang).map((a) => ({
    slug: a.slug,
    title: a.content[lang].h1,
    intro: a.content[lang].intro,
  }));
  return { props: { lang, list, locales: guideLocales() } };
}

export default function GuidesIndex({ lang, list, locales }) {
  const t = GUIDES_UI[lang] || GUIDES_UI[DEFAULT_LOCALE];
  const alternates = [
    ...locales.map((l) => ({ hreflang: LOCALES[l].hreflang, path: guidePath(l) })),
    { hreflang: "x-default", path: guidePath(DEFAULT_LOCALE) },
  ];
  return (
    <>
      <Seo
        title={t.guidesTitle}
        description={t.guidesDescription}
        alternates={alternates}
        locale={LOCALES[lang].og}
        jsonLd={[breadcrumbLd([[t.home, "/"], [t.guides, guidePath(lang)]])]}
      />
      <GuideChrome lang={lang} locales={locales} pathFor={(l) => guidePath(l)} shopLabel={t.shop}>
        <h1 className="font-display text-3xl sm:text-4xl leading-[1.2]">{t.guides}</h1>
        <p className="text-black/55 text-[15px] max-w-3xl mt-4 leading-relaxed">{t.guidesIntro}</p>
        <div className="grid sm:grid-cols-2 gap-4 mt-10">
          {list.map((a) => (
            <Link
              key={a.slug}
              href={guidePath(lang, a.slug)}
              className="group bg-white border border-black/8 rounded-2xl p-6 hover:border-[#0039CC]/40 transition flex flex-col"
            >
              <h2 className="font-display text-[17px] leading-snug group-hover:text-[#0039CC] transition">
                {a.title}
              </h2>
              <p className="text-[13px] text-black/50 leading-relaxed mt-2 line-clamp-3">{a.intro}</p>
              <span className="text-[12px] text-[#0039CC] font-medium mt-auto pt-4">{t.read} →</span>
            </Link>
          ))}
        </div>
      </GuideChrome>
    </>
  );
}

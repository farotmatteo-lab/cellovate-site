// GET /sitemap.xml — every public page, generated from the catalog and blog.
import { VISIBLE_PRODUCTS } from "../lib/products";
import { POSTS } from "../lib/blog-posts";
import { PLACES } from "../lib/seo/places";
import { LOCALES, DEFAULT_LOCALE, placePath } from "../lib/seo/locales";
import { ARTICLES, guideLocales, guidePath, UPDATED } from "../lib/seo/articles";

const SITE_URL = "https://www.cellovateadvancedpeptides.com";

export const STATIC_PAGES = [
  ["/", "1.0", "weekly"],
  ["/shop", "0.9", "weekly"],
  ["/quality", "0.7", "monthly"],
  ["/blog", "0.7", "weekly"],
  ["/wholesale", "0.6", "monthly"],
  ["/contact", "0.4", "yearly"],
  ["/terms", "0.3", "yearly"],
  ["/refund-policy", "0.3", "yearly"],
  ["/privacy", "0.3", "yearly"],
];

// Localized pages: one <url> per language, each listing every language
// version (hreflang), as Google expects for multilingual sitemaps.
function placeUrls() {
  const out = [];
  for (const place of PLACES) {
    const links = place.locales
      .map((l) => `<xhtml:link rel="alternate" hreflang="${LOCALES[l].hreflang}" href="${SITE_URL}${placePath(l, place.slug)}"/>`)
      .concat(
        `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${placePath(
          place.locales.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : place.locales[0],
          place.slug
        )}"/>`
      )
      .join("");
    const priority = place.type === "country" ? "0.8" : "0.7";
    for (const l of place.locales) {
      out.push(
        `  <url><loc>${SITE_URL}${placePath(l, place.slug)}</loc>${links}<changefreq>monthly</changefreq><priority>${priority}</priority></url>`
      );
    }
  }
  return out;
}

// One <url> per language version, each listing all versions (hreflang).
function altUrls(locales, pathFor, priority, lastmod) {
  const links = locales
    .map((l) => `<xhtml:link rel="alternate" hreflang="${LOCALES[l].hreflang}" href="${SITE_URL}${pathFor(l)}"/>`)
    .concat(
      `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${pathFor(
        locales.includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : locales[0]
      )}"/>`
    )
    .join("");
  return locales.map(
    (l) =>
      `  <url><loc>${SITE_URL}${pathFor(l)}</loc>${links}${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}<changefreq>monthly</changefreq><priority>${priority}</priority></url>`
  );
}

function guideUrls() {
  const out = [];
  const langs = guideLocales();
  if (langs.length) out.push(...altUrls(langs, (l) => guidePath(l), "0.6", UPDATED));
  for (const a of ARTICLES) out.push(...altUrls(a.locales, (l) => guidePath(l, a.slug), "0.6", UPDATED));
  return out;
}

function build() {
  const urls = [
    ...STATIC_PAGES,
    ...VISIBLE_PRODUCTS.map((p) => [`/shop/${p.handle}`, "0.8", "weekly"]),
    ...POSTS.map((p) => [`/blog/${p.handle}`, "0.6", "monthly"]),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    ([path, priority, freq]) =>
      `  <url><loc>${SITE_URL}${path === "/" ? "" : path}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`
  )
  .concat(placeUrls())
  .concat(guideUrls())
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=86400");
  res.write(build());
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}

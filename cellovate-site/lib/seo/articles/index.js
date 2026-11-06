// All localized guides: every other file in this folder exports an array of
// articles (see any of them for the shape). Files are collected at build
// time, so a new file is picked up without touching this one.
const ctx = require.context("./", false, /^\.\/(?!index)[a-z0-9-]+\.js$/);

export const UPDATED = "2026-11-06";

export const ARTICLES = ctx
  .keys()
  .sort()
  .flatMap((k) => Object.values(ctx(k)).find(Array.isArray) || []);

export const guidePath = (lang, slug) => (slug ? `/${lang}/guides/${slug}` : `/${lang}/guides`);

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function articlesIn(lang) {
  return ARTICLES.filter((a) => a.locales.includes(lang));
}

// Languages that have at least one guide.
export function guideLocales() {
  return [...new Set(ARTICLES.flatMap((a) => a.locales))];
}

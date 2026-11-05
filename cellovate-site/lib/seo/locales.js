// Languages of the localized SEO pages (/{lang}/peptides/{place}).
// English stays the language of the rest of the site; other languages are
// switched on here as their pages are written.
export const LOCALES = {
  en: { name: "English", hreflang: "en", og: "en_US" },
  th: { name: "ไทย", hreflang: "th", og: "th_TH" },
  fr: { name: "Français", hreflang: "fr", og: "fr_FR" },
  de: { name: "Deutsch", hreflang: "de", og: "de_DE" },
  es: { name: "Español", hreflang: "es", og: "es_ES" },
  it: { name: "Italiano", hreflang: "it", og: "it_IT" },
  nl: { name: "Nederlands", hreflang: "nl", og: "nl_NL" },
  pt: { name: "Português", hreflang: "pt", og: "pt_PT" },
  pl: { name: "Polski", hreflang: "pl", og: "pl_PL" },
};

export const DEFAULT_LOCALE = "en";

export const placePath = (lang, slug) => `/${lang}/peptides/${slug}`;

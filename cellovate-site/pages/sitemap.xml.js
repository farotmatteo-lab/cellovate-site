// GET /sitemap.xml — every public page, generated from the catalog and blog.
import { VISIBLE_PRODUCTS } from "../lib/products";
import { POSTS } from "../lib/blog-posts";

const SITE_URL = "https://www.cellovateadvancedpeptides.com";

export const STATIC_PAGES = [
  ["/", "1.0", "weekly"],
  ["/shop", "0.9", "weekly"],
  ["/quality", "0.7", "monthly"],
  ["/blog", "0.7", "weekly"],
  ["/contact", "0.4", "yearly"],
  ["/terms", "0.3", "yearly"],
  ["/refund-policy", "0.3", "yearly"],
  ["/privacy", "0.3", "yearly"],
];

function build() {
  const urls = [
    ...STATIC_PAGES,
    ...VISIBLE_PRODUCTS.map((p) => [`/shop/${p.handle}`, "0.8", "weekly"]),
    ...POSTS.map((p) => [`/blog/${p.handle}`, "0.6", "monthly"]),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ([path, priority, freq]) =>
      `  <url><loc>${SITE_URL}${path === "/" ? "" : path}</loc><changefreq>${freq}</changefreq><priority>${priority}</priority></url>`
  )
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

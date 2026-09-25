// Page metadata: title, description, canonical URL, Open Graph / Twitter
// previews and optional JSON-LD structured data. Keyed tags so Next.js keeps
// a single copy of each.
import Head from "next/head";
import { useRouter } from "next/router";

export const SITE_URL = "https://www.cellovateadvancedpeptides.com";
export const SITE_NAME = "Cellovate Advanced Peptides";
const DEFAULT_IMAGE = `${SITE_URL}/hero-poster.jpg`;

const abs = (src) => (!src ? DEFAULT_IMAGE : src.startsWith("http") ? src : `${SITE_URL}${src}`);

export default function Seo({ title, description, image, type = "website", jsonLd, noindex }) {
  const { asPath } = useRouter();
  const path = (asPath || "/").split(/[?#]/)[0];
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const img = abs(image);
  const blocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} key="description" />}
      <link rel="canonical" href={url} key="canonical" />
      {noindex && <meta name="robots" content="noindex" key="robots" />}
      <meta property="og:site_name" content={SITE_NAME} key="og:site_name" />
      <meta property="og:type" content={type} key="og:type" />
      <meta property="og:title" content={title} key="og:title" />
      {description && <meta property="og:description" content={description} key="og:description" />}
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:image" content={img} key="og:image" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="twitter:title" content={title} key="twitter:title" />
      {description && <meta name="twitter:description" content={description} key="twitter:description" />}
      <meta name="twitter:image" content={img} key="twitter:image" />
      {blocks.map((b, i) => (
        <script
          key={`ld-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(b).replace(/</g, "\\u003c") }}
        />
      ))}
    </Head>
  );
}

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "info@cellovateadvancedpeptides.com",
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

// `reviews` = { reviews, count, average } of approved, verified reviews only.
export function productLd(product, reviews) {
  const prices = product.variants.map((v) => v.price);
  const image = [...new Set(product.variants.map((v) => v.image).filter(Boolean))].map(abs);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    sku: product.code,
    brand: { "@type": "Brand", name: "Cellovate" },
    image: image.length ? image : [DEFAULT_IMAGE],
    url: `${SITE_URL}/shop/${product.handle}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: product.variants.length,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/shop/${product.handle}`,
    },
    ...(reviews?.count
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: reviews.average,
            reviewCount: reviews.count,
            bestRating: 5,
            worstRating: 1,
          },
          review: reviews.reviews.slice(0, 5).map((r) => ({
            "@type": "Review",
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            author: { "@type": "Person", name: r.name },
            datePublished: new Date(r.createdAt).toISOString().slice(0, 10),
            reviewBody: r.text,
          })),
        }
      : {}),
  };
}

export function articleLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: String(post.summary || "").replace(/<[^>]+>/g, ""),
    mainEntityOfPage: `${SITE_URL}/blog/${post.handle}`,
    image: DEFAULT_IMAGE,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };
}

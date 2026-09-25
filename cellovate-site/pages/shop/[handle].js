import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  Check,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";
import {
  VISIBLE_PRODUCTS,
  getProductByHandle,
  getDefaultVariant,
  getVariant,
  getDoses,
  getFormats,
  getLowestPrice,
} from "../../lib/products";
import { useCart } from "../../context/CartContext";
import { viewedProduct } from "../../lib/omnisendClient";
import {
  getBestValueDose,
  getSizeUpgrade,
  getRelatedProducts,
  pricePerMg,
  FREE_SHIPPING_THRESHOLD,
} from "../../lib/upsell";
import Seo, { productLd, breadcrumbLd } from "../../components/Seo";
import ProductReviews, { RatingSummary } from "../../components/ProductReviews";
import { getProductReviews } from "../../lib/reviews";

export async function getStaticPaths() {
  return {
    paths: VISIBLE_PRODUCTS.map((p) => ({ params: { handle: p.handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductByHandle(params.handle);
  if (!product || product.draft) return { notFound: true };
  const reviews = await getProductReviews(product.handle);
  // Re-built at most hourly, and right away when a review is approved.
  return { props: { product, reviews }, revalidate: 3600 };
}

export default function ProductPage({ product, reviews }) {
  const { cart, addToCart, removeFromCart, itemCount, setCartOpen } =
    useCart();
  // null = follow the selected variant; a src = the thumbnail the shopper clicked.
  const [pickedImage, setPickedImage] = useState(null);
  const [variantKey, setVariantKeyRaw] = useState(
    getDefaultVariant(product).key
  );
  const setVariantKey = (key) => {
    setVariantKeyRaw(key);
    setPickedImage(null);
  };
  const variant = getVariant(product, variantKey);

  // Omnisend "viewed product" (product abandonment automation), once per product.
  useEffect(() => {
    viewedProduct(product, getDefaultVariant(product));
  }, [product.id]); // eslint-disable-line react-hooks/exhaustive-deps
  const mainImage = pickedImage || variant.image;
  const mainAlt =
    product.variants.find((v) => v.image === mainImage)?.imageAlt ||
    product.name;
  const qty = cart[`${product.id}::${variantKey}`] || 0;
  const doses = getDoses(product);
  const formats = getFormats(product, variant.dose);

  // Switching dosage keeps the format (Vial / Pen) already selected.
  const selectDose = (dose) => {
    const match =
      getFormats(product, dose).find((v) => v.format === variant.format) ||
      getFormats(product, dose)[0];
    setVariantKey(match.key);
  };

  // Brief "Added" confirmation after each add.
  const [justAdded, setJustAdded] = useState(false);
  const timer = useRef(null);
  const add = () => {
    addToCart(product.id, variantKey);
    setJustAdded(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setJustAdded(false), 1600);
  };

  const bestDose = getBestValueDose(product, variant.format);
  const upgrade = getSizeUpgrade(product, variant);
  const perMg = pricePerMg(variant);
  const curated = getRelatedProducts(product.id, 3);
  const related = curated.length
    ? curated
    : VISIBLE_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);
  const [addedRelated, setAddedRelated] = useState(null);
  const addRelated = (p) => {
    addToCart(p.id, getDefaultVariant(p).key);
    setAddedRelated(p.id);
    setTimeout(() => setAddedRelated(null), 1600);
  };

  return (
    <>
      <Seo
        title={`${product.name} — Research Peptide | Cellovate Advanced Peptides`}
        description={`${product.name} (${getDoses(product).join(" / ")}) — ${product.desc} HPLC purity and identity verified by an independent third-party lab. For research use only.`}
        image={product.images?.[0]}
        type="product"
        jsonLd={[
          productLd(product, reviews),
          breadcrumbLd([["Home", "/"], ["Shop", "/shop"], [product.name, `/shop/${product.handle}`]]),
        ]}
      />

      <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] font-sans pb-24">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-mono { font-family: 'IBM Plex Mono', monospace; }
          .product-body p { margin-bottom: 1rem; line-height: 1.75; color: rgba(10,10,10,0.72); font-size: 14px; }
          .product-body hr { border-color: rgba(10,10,10,0.1); margin: 1.5rem 0; }
          .product-body ul { margin: 0 0 1rem 1.25rem; list-style: disc; color: rgba(10,10,10,0.72); font-size: 14px; }
          .product-body li { margin-bottom: 0.4rem; }
          .product-body li p { margin-bottom: 0; display: inline; }
          .product-body strong { color: #0A0A0A; }
          .product-body > p:first-child strong { font-family: 'Space Grotesk', sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #0A0A0A; }
        `}</style>

        {/* Header */}
        <header className="sticky top-0 z-30 bg-[#FAFAFA]/95 backdrop-blur border-b border-black/8">
          <div className="max-w-5xl mx-auto px-5 pt-5 pb-4 flex items-center justify-between">
            <Link href="/" className="block">
              <img src="/logo.png" alt="Cellovate" className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 rounded-full border border-black/15 flex items-center justify-center active:scale-95 transition"
            >
              <ShoppingBag size={16} strokeWidth={1.75} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#0039CC] text-white text-[10px] font-semibold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-5 pt-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-[12px] text-black/40 hover:text-black/70 transition mb-6"
          >
            <ArrowLeft size={13} /> Back to shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gallery */}
            <div className="min-w-0">
              <div className="aspect-square rounded-2xl bg-white border border-black/8 overflow-hidden flex items-center justify-center relative">
                <img
                  src={mainImage || "/product-placeholder.svg"}
                  alt={mainAlt}
                  className={`w-full h-full object-contain ${
                    mainImage ? "" : "p-16 opacity-70"
                  }`}
                />
                <span className="absolute bottom-3 right-3 text-[9px] font-mono text-black/60 bg-white/70 backdrop-blur px-2 py-1 rounded tracking-wider">
                  {product.code}
                </span>
              </div>
              {product.images?.length > 1 && (
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                  {product.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setPickedImage(img)}
                      className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border transition ${
                        img === mainImage
                          ? "border-[#0039CC]"
                          : "border-black/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={
                          product.variants.find((v) => v.image === img)
                            ?.imageAlt || `${product.name} view ${i + 1}`
                        }
                        className="w-full h-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0039CC] font-mono mb-2">
                For research use only
              </p>
              <h1 className="font-display text-2xl sm:text-3xl leading-tight mb-2">
                {product.name}
              </h1>
              <RatingSummary reviews={reviews} />
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <p className="text-[12px] text-black/35 font-mono">
                  {product.dose} ·{" "}
                  {product.purity ? `${product.purity} purity` : "HPLC verified"}
                </p>
                <Link
                  href="/quality"
                  className="inline-flex items-center gap-1 rounded-full bg-[#0039CC]/8 border border-[#0039CC]/20 text-[#0039CC] text-[10.5px] font-semibold px-2.5 py-0.5 hover:bg-[#0039CC]/12 transition"
                >
                  <ShieldCheck size={11} /> Third-party tested
                </Link>
              </div>
              <p className="text-black/50 text-[14px] leading-relaxed mb-5">
                {product.desc}
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-mono text-3xl font-bold text-[#0039CC]">
                  ${variant.price.toFixed(2)}
                </span>
                <span className="text-[12px] text-black/30">
                  / {variant.dose} {variant.format.toLowerCase()}
                </span>
                {perMg && doses.length > 1 && (
                  <span className="text-[11.5px] text-black/40 font-mono ml-auto">
                    ${perMg.toFixed(2)}/mg
                  </span>
                )}
              </div>

              {/* Dosage selector */}
              {doses.length > 1 && (
                <div className="mb-4">
                  <p className="text-[10.5px] uppercase tracking-[0.15em] text-black/55 font-mono mb-2">
                    Dosage
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {doses.map((d) => (
                      <button
                        key={d}
                        onClick={() => selectDose(d)}
                        className={`relative sm:px-6 px-4 text-[12.5px] font-medium py-2.5 rounded-full border transition ${
                          d === variant.dose
                            ? "border-[#0039CC] bg-[#0039CC] text-white shadow-sm shadow-[#0039CC]/25"
                            : "border-black/20 bg-white text-[#0A0A0A] hover:border-[#0039CC] hover:text-[#0039CC]"
                        }`}
                      >
                        {d}
                        {d === bestDose && (
                          <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0A0A0A] text-white text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5">
                            Best value
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Format selector */}
              <div className="mb-6">
                <p className="text-[10.5px] uppercase tracking-[0.15em] text-black/55 font-mono mb-2">
                  Format
                </p>
                <div className="flex gap-2">
                  {formats.map((v) => (
                    <button
                      key={v.key}
                      onClick={() => setVariantKey(v.key)}
                      className={`flex-1 sm:flex-none sm:px-6 text-[12.5px] font-medium py-2.5 rounded-full border transition ${
                        v.key === variantKey
                          ? "border-[#0039CC] bg-[#0039CC] text-white shadow-sm shadow-[#0039CC]/25"
                          : "border-black/20 bg-white text-[#0A0A0A] hover:border-[#0039CC] hover:text-[#0039CC]"
                      }`}
                    >
                      {v.format}
                      <span className="ml-1.5 font-mono text-[11px] opacity-80">
                        ${v.price.toFixed(2)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {qty === 0 ? (
                <button
                  onClick={add}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#0039CC] hover:bg-[#002FA8] text-white rounded-2xl py-4 text-[15px] font-semibold shadow-lg shadow-[#0039CC]/30 active:scale-[0.98] transition"
                >
                  <ShoppingBag size={18} strokeWidth={2.25} />
                  Add to cart — ${variant.price.toFixed(2)}
                </button>
              ) : (
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="flex items-center justify-between sm:w-48 border-2 border-[#0039CC] rounded-2xl px-2 py-1.5">
                    <button
                      onClick={() => removeFromCart(product.id, variantKey)}
                      aria-label="Remove one"
                      className="w-10 h-10 rounded-xl text-[#0039CC] hover:bg-[#0039CC]/10 flex items-center justify-center active:scale-90 transition"
                    >
                      <Minus size={16} strokeWidth={2.5} />
                    </button>
                    <span className="text-[14px] font-semibold text-[#0039CC] tabular-nums flex items-center gap-1.5">
                      {justAdded && <Check size={15} strokeWidth={3} />}
                      {qty} in cart
                    </span>
                    <button
                      onClick={add}
                      aria-label="Add one"
                      className="w-10 h-10 rounded-xl bg-[#0039CC] text-white flex items-center justify-center active:scale-90 transition"
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                  <Link
                    href="/checkout"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-black text-white rounded-2xl py-3.5 text-[14px] font-semibold active:scale-[0.98] transition"
                  >
                    <ShoppingBag size={16} strokeWidth={2.25} />
                    Checkout
                  </Link>
                </div>
              )}

              {upgrade && (
                <button
                  onClick={() => setVariantKey(upgrade.variant.key)}
                  className="mt-3 w-full inline-flex items-center justify-center gap-1.5 text-[12.5px] font-medium text-[#0039CC] bg-[#0039CC]/[0.07] hover:bg-[#0039CC]/[0.12] rounded-xl py-2.5 transition"
                >
                  <ArrowUpRight size={14} />
                  {upgrade.variant.dose} is {upgrade.saving}% cheaper per mg (+$
                  {upgrade.extra.toFixed(2)})
                </button>
              )}
              <p className="mt-3 text-center text-[11.5px] text-black/40">
                Free shipping from ${FREE_SHIPPING_THRESHOLD} · 5% off from 3 items · 10% off from 5
              </p>

              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="bg-white border border-black/8 rounded-xl p-4">
                  <ShieldCheck size={16} className="text-[#0039CC] mb-2" />
                  <p className="text-[11.5px] text-black/50 leading-snug">
                    Purity and identity verified by an independent lab on
                    every batch —{" "}
                    <Link href="/quality" className="text-[#0039CC] hover:underline">
                      quality standards
                    </Link>
                    . Batch COA available to customers on request —{" "}
                    <Link href="/contact" className="text-[#0039CC] hover:underline">
                      contact us
                    </Link>
                    .
                  </p>
                </div>
                <div className="bg-white border border-black/8 rounded-xl p-4">
                  <FlaskConical size={16} className="text-[#0039CC] mb-2" />
                  <p className="text-[11.5px] text-black/50 leading-snug">
                    Research use only — not for human consumption
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full description */}
          <div className="max-w-3xl mt-14 pt-10 border-t border-black/8">
            <h2 className="font-display text-[13px] uppercase tracking-[0.15em] text-black/40 mb-5">
              Product information
            </h2>
            <div
              className="product-body"
              dangerouslySetInnerHTML={{ __html: product.bodyHtml }}
            />
          </div>

          <ProductReviews reviews={reviews} />

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-14 pt-10 border-t border-black/8">
              <h2 className="font-display text-[13px] uppercase tracking-[0.15em] text-black/40 mb-5">
                Frequently researched together
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {related.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white border border-black/8 rounded-2xl p-4 flex flex-col hover:border-black/20 transition"
                  >
                    <Link href={`/shop/${p.handle}`} className="block">
                      <div className="aspect-[4/3] rounded-xl bg-[#EFEFF2] mb-3 overflow-hidden">
                        <img
                          src={p.images?.[0] || "/product-placeholder.svg"}
                          alt={p.variants[0].imageAlt}
                          loading="lazy"
                          className={`w-full h-full ${
                            p.images?.[0]
                              ? "object-cover"
                              : "object-contain p-6 opacity-70"
                          }`}
                        />
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-[13px] leading-tight">
                          {p.name}
                        </h3>
                        <span className="font-mono text-[12px] text-[#0039CC] font-semibold shrink-0">
                          from ${getLowestPrice(p).toFixed(2)}
                        </span>
                      </div>
                      <p className="text-[11.5px] text-black/40 mt-1 leading-snug">
                        {p.desc}
                      </p>
                    </Link>
                    <button
                      onClick={() => addRelated(p)}
                      className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#0039CC] text-[#0039CC] hover:bg-[#0039CC] hover:text-white text-[12.5px] font-semibold py-2 transition"
                    >
                      {addedRelated === p.id ? (
                        <>
                          <Check size={13} strokeWidth={3} /> Added
                        </>
                      ) : (
                        <>
                          <Plus size={13} strokeWidth={2.5} /> Add{" "}
                          {getDefaultVariant(p).label} · $
                          {getDefaultVariant(p).price.toFixed(2)}
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

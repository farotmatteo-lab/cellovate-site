import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowLeft,
  Plus,
  Minus,
  ShoppingBag,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";
import { PRODUCTS, getProductByHandle } from "../../lib/products";
import { useCart } from "../../context/CartContext";

export async function getStaticPaths() {
  return {
    paths: PRODUCTS.map((p) => ({ params: { handle: p.handle } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = getProductByHandle(params.handle);
  if (!product) return { notFound: true };
  return { props: { product } };
}

export default function ProductPage({ product }) {
  const { cart, addToCart, removeFromCart, itemCount, setCartOpen } =
    useCart();
  const [activeImage, setActiveImage] = useState(0);
  const qty = cart[product.id] || 0;

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <Head>
        <title>{product.name} | Cellovate Advanced Peptides</title>
        <meta name="description" content={product.desc} />
      </Head>

      <main className="min-h-screen bg-[#0A0A0A] text-white font-sans pb-24">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
          .font-display { font-family: 'Space Grotesk', sans-serif; }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-mono { font-family: 'IBM Plex Mono', monospace; }
          .product-body p { margin-bottom: 1rem; line-height: 1.75; color: rgba(255,255,255,0.7); font-size: 14px; }
          .product-body hr { border-color: rgba(255,255,255,0.08); margin: 1.5rem 0; }
          .product-body ul { margin: 0 0 1rem 1.25rem; list-style: disc; color: rgba(255,255,255,0.7); font-size: 14px; }
          .product-body li { margin-bottom: 0.4rem; }
          .product-body li p { margin-bottom: 0; display: inline; }
          .product-body strong { color: #fff; }
          .product-body > p:first-child strong { font-family: 'Space Grotesk', sans-serif; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #fff; }
        `}</style>

        {/* Header */}
        <header className="sticky top-0 z-30 bg-[#0A0A0A]/95 backdrop-blur border-b border-white/8">
          <div className="max-w-5xl mx-auto px-5 pt-5 pb-4 flex items-center justify-between">
            <Link href="/" className="font-display text-lg tracking-tight leading-none">
              CELLO<span className="text-[#0039CC]">VATE</span>
            </Link>
            <button
              onClick={() => setCartOpen(true)}
              className="relative w-10 h-10 rounded-full border border-white/15 flex items-center justify-center active:scale-95 transition"
            >
              <ShoppingBag size={16} strokeWidth={1.75} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#0039CC] text-[10px] font-semibold min-w-[18px] h-[18px] rounded-full flex items-center justify-center px-1">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-5 pt-6">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white/70 transition mb-6"
          >
            <ArrowLeft size={13} /> Back to shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gallery */}
            <div>
              <div className="aspect-square rounded-2xl bg-[#131313] border border-white/8 overflow-hidden flex items-center justify-center relative">
                {product.images?.[activeImage] && (
                  <img
                    src={product.images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
                <span className="absolute bottom-3 right-3 text-[9px] font-mono text-white/60 bg-black/50 backdrop-blur px-2 py-1 rounded tracking-wider">
                  {product.code}
                </span>
              </div>
              {product.images?.length > 1 && (
                <div className="flex gap-2 mt-3">
                  {product.images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border transition ${
                        i === activeImage
                          ? "border-[#0039CC]"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#0039CC] font-mono mb-2">
                For research use only
              </p>
              <h1 className="font-display text-2xl sm:text-3xl leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-[12px] text-white/35 font-mono mb-4">
                {product.dose} · {product.purity} purity
              </p>
              <p className="text-white/50 text-[14px] leading-relaxed mb-5">
                {product.desc}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-mono text-3xl font-bold text-[#0039CC]">
                  ${product.price}
                </span>
                <span className="text-[12px] text-white/30">/ vial</span>
              </div>

              {qty === 0 ? (
                <button
                  onClick={() => addToCart(product.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0A0A0A] rounded-full px-8 py-3.5 text-[13px] font-semibold hover:bg-white/90 active:scale-[0.98] transition"
                >
                  <Plus size={15} strokeWidth={2.5} />
                  Add to cart
                </button>
              ) : (
                <div className="flex items-center gap-3 bg-white/10 rounded-full px-2 py-2 w-fit">
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="w-9 h-9 rounded-full flex items-center justify-center active:scale-90 transition"
                  >
                    <Minus size={14} strokeWidth={2.5} />
                  </button>
                  <span className="font-mono text-[14px] w-5 text-center tabular-nums">
                    {qty}
                  </span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-9 h-9 rounded-full bg-[#0039CC] flex items-center justify-center active:scale-90 transition"
                  >
                    <Plus size={14} strokeWidth={2.5} />
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 mt-8">
                <div className="bg-[#131313] border border-white/8 rounded-xl p-4">
                  <ShieldCheck size={16} className="text-[#0039CC] mb-2" />
                  <p className="text-[11.5px] text-white/50 leading-snug">
                    Third-party tested — COA available on request
                  </p>
                </div>
                <div className="bg-[#131313] border border-white/8 rounded-xl p-4">
                  <FlaskConical size={16} className="text-[#0039CC] mb-2" />
                  <p className="text-[11.5px] text-white/50 leading-snug">
                    Research use only — not for human consumption
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full description */}
          <div className="max-w-3xl mt-14 pt-10 border-t border-white/8">
            <h2 className="font-display text-[13px] uppercase tracking-[0.15em] text-white/40 mb-5">
              Product information
            </h2>
            <div
              className="product-body"
              dangerouslySetInnerHTML={{ __html: product.bodyHtml }}
            />
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-14 pt-10 border-t border-white/8">
              <h2 className="font-display text-[13px] uppercase tracking-[0.15em] text-white/40 mb-5">
                Also researched together
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/shop/${p.handle}`}
                    className="bg-[#131313] border border-white/8 rounded-2xl p-4 flex flex-col hover:border-white/20 transition"
                  >
                    <div className="aspect-[4/3] rounded-xl bg-[#1C1C1C] mb-3 overflow-hidden">
                      {p.images?.[0] && (
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-[13px] leading-tight">
                        {p.name}
                      </h3>
                      <span className="font-mono text-[12px] text-[#0039CC] font-semibold shrink-0">
                        ${p.price}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

// Browser-side Omnisend tracking (JS snippet loaded in pages/_app.js).
// Events only attach to a contact Omnisend already knows in this browser:
// someone who signed up through the popup, clicked an Omnisend email, or
// entered their email at checkout (identify() below). Anonymous visitors
// are ignored by Omnisend, so calling these is always safe.
import { PRODUCTS, getVariant } from "./products";

export const SITE_URL = "https://www.cellovateadvancedpeptides.com";

// The snippet in _app.js queues "brandID" first. Events pushed before that
// (e.g. from a page's first effect) wait until the snippet has run.
function snippetReady() {
  const o = window.omnisend;
  if (!o) return false;
  if (!Array.isArray(o)) return true; // launcher loaded
  return o.some((x) => Array.isArray(x) && x[0] === "brandID");
}

function push(args, tries = 0) {
  if (typeof window === "undefined") return;
  try {
    if (!snippetReady()) {
      if (tries < 20) setTimeout(() => push(args, tries + 1), 300);
      return;
    }
    window.omnisend.push(args);
  } catch {
    // tracking must never break the shop
  }
}

function uuid() {
  try {
    return window.crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

function base64url(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  bytes.forEach((b) => (bin += String.fromCharCode(b)));
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

// Same link format as the server (lib/omnisend.js): reopens /checkout with
// these items and codes.
export function restoreUrl(items, codes) {
  const payload = {
    i: (items || []).map((it) => [it.id, it.variantKey, it.qty]),
    c: codes || [],
  };
  return `${SITE_URL}/checkout?cart=${base64url(JSON.stringify(payload))}`;
}

function productItem(product, variant, qty) {
  return {
    productID: product.id,
    productVariantID: variant.key,
    productTitle: `${product.name} — ${variant.label}`,
    productPrice: variant.price,
    productQuantity: qty || 1,
    productURL: `${SITE_URL}/shop/${product.handle}`,
    productImageURL: variant.image ? `${SITE_URL}${variant.image}` : undefined,
    productVariantImageURL: variant.image
      ? `${SITE_URL}${variant.image}`
      : undefined,
  };
}

export function identify(email) {
  const clean = String(email || "").trim();
  if (!clean) return;
  if (typeof window === "undefined") return;
  try {
    if (window.omnisend && typeof window.omnisend.identifyContact === "function") {
      window.omnisend.identifyContact({ email: clean });
    } else {
      // Snippet not loaded yet: retry shortly.
      setTimeout(() => {
        if (window.omnisend && typeof window.omnisend.identifyContact === "function") {
          window.omnisend.identifyContact({ email: clean });
        }
      }, 2500);
    }
  } catch {
    // ignore
  }
}

export function pageViewed() {
  push(["track", "$pageViewed"]);
}

export function viewedProduct(product, variant) {
  if (!product) return;
  const v = variant || getVariant(product);
  push([
    "track",
    "viewed product",
    {
      eventVersion: "v4",
      eventID: uuid(),
      origin: "api",
      properties: {
        product: {
          id: product.id,
          currency: "USD",
          price: v.price,
          title: product.name,
          description: product.desc || undefined,
          imageUrl: v.image ? `${SITE_URL}${v.image}` : undefined,
          url: `${SITE_URL}/shop/${product.handle}`,
          status: "inStock",
        },
      },
    },
  ]);
}

// `items`: the whole cart after the add, [{ id, variantKey, qty }].
export function addedToCart({ cartId, added, items, codes }) {
  const lineItems = [];
  let value = 0;
  for (const it of items || []) {
    const product = PRODUCTS.find((p) => p.id === it.id);
    if (!product || product.draft) continue;
    const v = getVariant(product, it.variantKey);
    lineItems.push(productItem(product, v, it.qty));
    value += v.price * it.qty;
  }
  const addedProduct = PRODUCTS.find((p) => p.id === added?.id);
  if (!addedProduct || !lineItems.length) return;
  push([
    "track",
    "added product to cart",
    {
      origin: "api",
      eventID: uuid(),
      eventVersion: "",
      properties: {
        abandonedCheckoutURL: restoreUrl(items, codes),
        cartID: cartId,
        value: Math.round(value * 100) / 100,
        currency: "USD",
        addedItem: productItem(
          addedProduct,
          getVariant(addedProduct, added.variantKey),
          1
        ),
        lineItems,
      },
    },
  ]);
}

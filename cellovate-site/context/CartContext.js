import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { PRODUCTS, getDefaultVariant, getVariant } from "../lib/products";
import { getPromo, normaliseCodes, combinePromos } from "../lib/promos";
import { computeOrder } from "../lib/pricing";
import { getNextVolumeTier } from "../lib/upsell";
import { addedToCart } from "../lib/omnisendClient";

const CartContext = createContext(null);

// Cart lines are keyed by "<productId>::<variantKey>" so Pen and Vial of the
// same product are tracked as separate line items.
const lineKey = (id, variantKey) => `${id}::${variantKey}`;

// Carts saved before variants existed are keyed by bare product id. Fold any
// of those into the default-variant line so nothing is double-counted or lost.
function migrateLegacyCart(rawCart) {
  const migrated = {};
  for (const [key, qty] of Object.entries(rawCart || {})) {
    let normalizedKey = key;
    if (!key.includes("::")) {
      const product = PRODUCTS.find((p) => p.id === key);
      if (!product) continue;
      normalizedKey = lineKey(key, getDefaultVariant(product).key);
    }
    migrated[normalizedKey] = (migrated[normalizedKey] || 0) + qty;
  }
  return migrated;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
  const [promoCodes, setPromoCodes] = useState([]);
  const [promoError, setPromoError] = useState(null);
  // Info shown when a new code replaced one the shopper had applied.
  const [promoNotice, setPromoNotice] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const makeOrderId = () =>
    `CEL-${Math.floor(100000 + Math.random() * 900000)}`;
  const [orderId, setOrderId] = useState(makeOrderId);

  // Load any previously saved cart once, client-side only.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("cellovate-cart");
      if (saved) setCart(migrateLegacyCart(JSON.parse(saved)));
      // Saved as a JSON array; older versions stored a single code string.
      const savedPromo = window.localStorage.getItem("cellovate-promo");
      if (savedPromo) {
        let codes;
        try {
          codes = JSON.parse(savedPromo);
        } catch {
          codes = [savedPromo];
        }
        setPromoCodes(normaliseCodes(Array.isArray(codes) ? codes : [codes]));
      }
    } catch {
      // ignore corrupt/local storage errors
    }
    setHydrated(true);
  }, []);

  // Persist on every change (skip the very first render before hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem("cellovate-cart", JSON.stringify(cart));
      if (promoCodes.length)
        window.localStorage.setItem(
          "cellovate-promo",
          JSON.stringify(promoCodes)
        );
      else window.localStorage.removeItem("cellovate-promo");
    } catch {
      // ignore
    }
  }, [cart, promoCodes, hydrated]);

  const addToCart = (id, variantKey) => {
    const key = lineKey(id, variantKey);
    setCart((c) => ({ ...c, [key]: (c[key] || 0) + 1 }));
    // Omnisend "added product to cart" (abandoned cart automation).
    const next = { ...cart, [key]: (cart[key] || 0) + 1 };
    addedToCart({
      cartId: orderId,
      added: { id, variantKey },
      codes: promoCodes,
      items: Object.entries(next).map(([k, qty]) => {
        const [pid, vkey] = k.split("::");
        return { id: pid, variantKey: vkey, qty };
      }),
    });
  };

  const removeFromCart = (id, variantKey) => {
    const key = lineKey(id, variantKey);
    setCart((c) => {
      const next = { ...c };
      if (!next[key]) return next;
      next[key] -= 1;
      if (next[key] <= 0) delete next[key];
      return next;
    });
  };

  // Size upgrade: move the whole line to another variant of the same product.
  const swapVariant = (id, fromKey, toKey) => {
    const from = lineKey(id, fromKey);
    const to = lineKey(id, toKey);
    setCart((c) => {
      const qty = c[from] || 0;
      if (!qty || from === to) return c;
      const next = { ...c };
      delete next[from];
      next[to] = (next[to] || 0) + qty;
      return next;
    });
  };

  // Also starts a fresh order reference for the next purchase.
  const clearCart = () => {
    setCart({});
    setOrderId(makeOrderId());
    setPromoCodes([]);
    setPromoError(null);
  };

  // Replace the whole cart, e.g. when a shopper follows an abandoned-cart
  // link. `items` is { "<id>::<variantKey>": qty }.
  const restoreCart = (items, codes) => {
    setCart(migrateLegacyCart(items));
    setPromoCodes(normaliseCodes(codes || []));
    setPromoError(null);
  };

  // Adds a code. The welcome code stacks with one other code; two regular
  // codes do not — the new one replaces the old. Everything is validated
  // again server-side before payment.
  const applyPromo = (raw) => {
    const promo = getPromo(raw);
    if (!promo) {
      setPromoError("This code is not valid.");
      return false;
    }
    setPromoError(null);
    const next = normaliseCodes([...promoCodes, promo.code]);
    const dropped = promoCodes.filter((c) => !next.includes(c));
    setPromoNotice(
      dropped.length
        ? `${promo.code} replaced ${dropped.join(", ")} — discount codes can't be combined (except with one partner code).`
        : null
    );
    setPromoCodes(next);
    return true;
  };

  // Removes one code, or all codes when none is given.
  const removePromo = (code) => {
    setPromoCodes((codes) => (code ? codes.filter((c) => c !== code) : []));
    setPromoError(null);
    setPromoNotice(null);
  };

  const lines = useMemo(
    () =>
      Object.entries(cart)
        .map(([key, qty]) => {
          const [id, variantKey] = key.split("::");
          const product = PRODUCTS.find((p) => p.id === id);
          if (!product) return null;
          const variant = getVariant(product, variantKey);
          return {
            ...product,
            variant,
            lineId: key,
            qty,
            price: variant.price,
          };
        })
        .filter(Boolean),
    [cart]
  );

  const promo = combinePromos(promoCodes);
  const promos = promoCodes.map(getPromo).filter(Boolean);
  // Same computation as the server (lib/pricing.js): volume tier vs codes,
  // free shipping threshold.
  const order = useMemo(
    () =>
      computeOrder(
        lines.map((l) => ({ id: l.id, variantKey: l.variant.key, qty: l.qty })),
        promo
      ),
    [lines, promo?.code] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const {
    itemCount,
    subtotal,
    discount,
    discountSource,
    discountLabel,
    codeDiscount,
    tier,
    shipping,
    total,
    freeShippingRemaining,
  } = order;
  const nextTier = getNextVolumeTier(itemCount);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    lines,
    itemCount,
    subtotal,
    discount,
    shipping,
    total,
    promo,
    promos,
    promoCodes,
    restoreCart,
    swapVariant,
    discountSource,
    discountLabel,
    codeDiscount,
    tier,
    nextTier,
    freeShippingRemaining,
    promoNotice,
    promoError,
    applyPromo,
    removePromo,
    orderId,
    hydrated,
    cartOpen,
    setCartOpen,
    checkout,
    setCheckout,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

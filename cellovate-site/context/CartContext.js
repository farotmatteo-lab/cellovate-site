import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { PRODUCTS, getDefaultVariant, getVariant } from "../lib/products";
import { getPromo, getDiscount } from "../lib/promos";
import { getShipping } from "../lib/pricing";

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
  const [promoCode, setPromoCode] = useState(null);
  const [promoError, setPromoError] = useState(null);
  const [hydrated, setHydrated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [orderId] = useState(
    () => `CEL-${Math.floor(100000 + Math.random() * 900000)}`
  );

  // Load any previously saved cart once, client-side only.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("cellovate-cart");
      if (saved) setCart(migrateLegacyCart(JSON.parse(saved)));
      const savedPromo = window.localStorage.getItem("cellovate-promo");
      if (savedPromo && getPromo(savedPromo)) setPromoCode(savedPromo);
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
      if (promoCode) window.localStorage.setItem("cellovate-promo", promoCode);
      else window.localStorage.removeItem("cellovate-promo");
    } catch {
      // ignore
    }
  }, [cart, promoCode, hydrated]);

  const addToCart = (id, variantKey) => {
    const key = lineKey(id, variantKey);
    setCart((c) => ({ ...c, [key]: (c[key] || 0) + 1 }));
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

  const clearCart = () => {
    setCart({});
    setPromoCode(null);
    setPromoError(null);
  };

  // Promo codes are validated again server-side before a free order is placed.
  const applyPromo = (raw) => {
    const promo = getPromo(raw);
    if (!promo) {
      setPromoError("This code is not valid.");
      setPromoCode(null);
      return false;
    }
    setPromoError(null);
    setPromoCode(promo.code);
    return true;
  };

  const removePromo = () => {
    setPromoCode(null);
    setPromoError(null);
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

  const itemCount = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const promo = getPromo(promoCode);
  const discount = getDiscount(promo, subtotal);
  const shipping = getShipping(promo, itemCount);
  const total =
    Math.round((Math.max(0, subtotal - discount) + shipping) * 100) / 100;

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
    promoCode,
    promoError,
    applyPromo,
    removePromo,
    orderId,
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

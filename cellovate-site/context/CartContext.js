import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { PRODUCTS } from "../lib/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});
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
      if (saved) setCart(JSON.parse(saved));
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
    } catch {
      // ignore
    }
  }, [cart, hydrated]);

  const addToCart = (id) =>
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const removeFromCart = (id) =>
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] -= 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const clearCart = () => setCart({});

  const lines = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, qty]) => {
          const product = PRODUCTS.find((p) => p.id === id);
          return product ? { ...product, qty } : null;
        })
        .filter(Boolean),
    [cart]
  );

  const itemCount = lines.reduce((s, l) => s + l.qty, 0);
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    lines,
    itemCount,
    total,
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

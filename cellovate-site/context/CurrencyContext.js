// Display currency for the whole site. Starts in USD (server render), then
// switches to the visitor's local currency once /api/currency answers.
// Orders are always charged in USD: see <ApproxLocal /> on the checkout.
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { formatPrice, BASE_CURRENCY } from "../lib/currency";

const STORAGE_KEY = "cellovate_currency_v1";
const MAX_AGE_MS = 6 * 60 * 60 * 1000;

const CurrencyContext = createContext({
  currency: BASE_CURRENCY,
  rate: 1,
  fmt: (usd) => formatPrice(usd),
});

export function CurrencyProvider({ children }) {
  const [state, setState] = useState({ currency: BASE_CURRENCY, rate: 1 });

  useEffect(() => {
    let override = null;
    try {
      override = new URLSearchParams(window.location.search).get("country");
    } catch (e) {}
    if (!override) {
      try {
        const cached = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
        if (cached && cached.currency && Date.now() - cached.at < MAX_AGE_MS) {
          setState({ currency: cached.currency, rate: Number(cached.rate) || 1 });
          return;
        }
      } catch (e) {}
    }
    const url = "/api/currency" + (override ? "?country=" + encodeURIComponent(override) : "");
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        if (!d || !d.currency) return;
        const next = { currency: d.currency, rate: Number(d.rate) || 1 };
        setState(next);
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, at: Date.now() }));
        } catch (e) {}
      })
      .catch(() => {});
  }, []);

  const fmt = useCallback((usd) => formatPrice(usd, state), [state]);

  return (
    <CurrencyContext.Provider value={{ ...state, fmt }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}

// <Price usd={12.99} /> -> "฿429" in Thailand, "€11.15" in France, "$12.99" in the US
export function Price({ usd }) {
  const { fmt } = useCurrency();
  return <>{fmt(usd)}</>;
}

// Shown next to USD totals on the checkout: "≈ ฿4,290". Nothing in USD countries.
export function ApproxLocal({ usd, className }) {
  const { currency, fmt } = useCurrency();
  if (currency === BASE_CURRENCY) return null;
  return (
    <span className={className || "ml-2 text-[12px] font-normal text-black/45"}>
      ≈ {fmt(usd)}
    </span>
  );
}

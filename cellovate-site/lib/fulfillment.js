// Two stocks: a local Thailand stock and the factory. Shared by the browser
// and the server, so it holds no database code (see lib/stock.js for that).
//
// - Thailand addresses: an order ships from the Thailand stock, with free
//   delivery in 1-3 business days, when every item is in that stock.
//   If any item is only at the factory, the whole order ships from the
//   factory, with the standard fee and delay.
// - Every other country: always the factory. The Thailand stock is never
//   mentioned to them.

export const TH_DELIVERY = "1–3 business days";
export const FACTORY_DELIVERY = "7–10 business days";

export const stockKey = (productId, variantKey) => `${productId}::${variantKey}`;

// Checkout stores full country names ("Thailand"); geo lookups give "TH".
export function isThailand(country) {
  const c = String(country || "").trim().toLowerCase();
  return c === "th" || c === "thailand";
}

// items: [{ id, variantKey, qty }], stock: { "id::variantKey": qty }
// Returns { fulfillment: "thailand" | "factory", factoryKeys: [...] }.
// factoryKeys lists the items that are not (or not enough) in Thailand stock;
// it is only filled for Thailand addresses.
export function planFulfillment(items, country, stock) {
  if (!isThailand(country)) return { fulfillment: "factory", factoryKeys: [] };
  const wanted = {};
  for (const it of items || []) {
    const k = stockKey(it.id, it.variantKey);
    wanted[k] = (wanted[k] || 0) + Math.max(1, parseInt(it.qty, 10) || 1);
  }
  const factoryKeys = Object.keys(wanted).filter(
    (k) => (Number(stock?.[k]) || 0) < wanted[k]
  );
  return {
    fulfillment: factoryKeys.length || !Object.keys(wanted).length ? "factory" : "thailand",
    factoryKeys,
  };
}

export function inThailandStock(stock, productId, variantKey) {
  return (Number(stock?.[stockKey(productId, variantKey)]) || 0) > 0;
}

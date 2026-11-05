// Thailand stock quantities, kept in Upstash Redis (hash "stock:th",
// field "productId::variantKey" -> quantity). Edited from /admin/stock and
// decremented once per paid order shipped from Thailand.
// Without Redis the stock is empty, so everything ships from the factory.
import { command, storeEnabled, claimOnce } from "./orderStore";

const KEY = "stock:th";

export async function getThStock() {
  if (!storeEnabled()) return {};
  try {
    const flat = await command("HGETALL", KEY);
    const out = {};
    for (let i = 0; i < (flat || []).length; i += 2) {
      const qty = parseInt(flat[i + 1], 10) || 0;
      if (qty > 0) out[flat[i]] = qty;
    }
    return out;
  } catch (err) {
    console.error("stock.getThStock failed", err.message);
    return {};
  }
}

// Replaces the whole stock with `quantities` ({ key: qty }).
export async function setThStock(quantities) {
  if (!storeEnabled()) throw new Error("Upstash Redis n'est pas connecté.");
  const entries = Object.entries(quantities || {})
    .map(([k, q]) => [String(k).slice(0, 80), Math.max(0, Math.min(9999, parseInt(q, 10) || 0))])
    .filter(([k, q]) => k.includes("::") && q > 0);
  await command("DEL", KEY);
  if (entries.length) await command("HSET", KEY, ...entries.flat());
}

// Takes a paid order's items out of the Thailand stock, once per order.
// order: { id, fulfillment, items: [{ id, variantKey, qty }] }
export async function consumeThStock(order) {
  if (!order || order.fulfillment !== "thailand" || !storeEnabled()) return;
  if (!(await claimOnce(`stock-out:${order.id}`))) return;
  try {
    for (const it of order.items || []) {
      const qty = Math.max(1, parseInt(it.qty, 10) || 1);
      const field = `${it.id}::${it.variantKey}`;
      const left = await command("HINCRBY", KEY, field, -qty);
      if (Number(left) <= 0) await command("HDEL", KEY, field);
    }
  } catch (err) {
    console.error("stock.consumeThStock failed", err.message);
  }
}

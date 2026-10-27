// Site statistics for /admin/stats, kept in the same Upstash Redis as the
// orders (see lib/orderStore.js). Without Redis every call is a silent no-op.
//
// One hash per day (Bangkok time): stats:<YYYY-MM-DD>
//   visit, view, product, cart, checkout   -> totals
//   src:<source> / cc:<country>            -> visits by source / country
//   product:<id> / cart:<id>               -> product views / adds by product
//   cart@<source> / checkout@<source>      -> adds / checkouts by source
// Unique visitors: HyperLogLog uv:<YYYY-MM-DD>.
// Paid orders and revenue come from the order store, not from here.
import { storeEnabled, redisSend } from "./orderStore";

export const EVENT_TYPES = ["visit", "view", "product", "cart", "checkout"];
const TTL = String(60 * 60 * 24 * 400); // ~13 months

export function dayKey(ms) {
  return new Date(ms + 7 * 3600 * 1000).toISOString().slice(0, 10);
}

export async function recordEvent({ type, product, source, country, visitor }) {
  if (!storeEnabled() || !EVENT_TYPES.includes(type)) return;
  const day = dayKey(Date.now());
  const k = `stats:${day}`;
  const cmds = [["HINCRBY", k, type, "1"]];
  if (type === "visit") {
    cmds.push(["HINCRBY", k, `src:${source}`, "1"]);
    cmds.push(["HINCRBY", k, `cc:${country}`, "1"]);
  }
  if (visitor) {
    cmds.push(["PFADD", `uv:${day}`, visitor]);
    cmds.push(["EXPIRE", `uv:${day}`, TTL]);
  }
  if (product && (type === "product" || type === "cart")) {
    cmds.push(["HINCRBY", k, `${type}:${product}`, "1"]);
  }
  if (type === "cart" || type === "checkout") {
    cmds.push(["HINCRBY", k, `${type}@${source}`, "1"]);
  }
  cmds.push(["EXPIRE", k, TTL]);
  try {
    await redisSend("/pipeline", cmds);
  } catch (err) {
    console.error("stats.recordEvent failed", err.message);
  }
}

// Last `days` days, oldest first: [{ day, fields: {name: count} }],
// plus the number of unique visitors over the whole period.
export async function readStats(days) {
  if (!storeEnabled()) return { daily: [], visitors: 0 };
  const now = Date.now();
  const list = [];
  for (let i = days - 1; i >= 0; i--) list.push(dayKey(now - i * 86400000));
  const cmds = list.map((d) => ["HGETALL", `stats:${d}`]);
  cmds.push(["PFCOUNT", ...list.map((d) => `uv:${d}`)]);
  const res = await redisSend("/pipeline", cmds);
  const daily = list.map((day, i) => {
    const flat = res?.[i]?.result || [];
    const fields = {};
    for (let j = 0; j + 1 < flat.length; j += 2) fields[flat[j]] = Number(flat[j + 1]) || 0;
    return { day, fields };
  });
  const visitors = Number(res?.[list.length]?.result) || 0;
  return { daily, visitors };
}

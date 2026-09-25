// Order history for /admin, kept in Upstash Redis (REST API, no package).
//
// Setup: Vercel -> project -> Storage -> Create -> Upstash (Redis) -> connect
// to this project. Vercel then adds KV_REST_API_URL + KV_REST_API_TOKEN (or
// UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN) automatically.
//
// Without it every call is a silent no-op: checkout, emails and the signed
// "mark as shipped" links keep working, only the /admin list stays empty.
//
// Keys: order:<id> -> JSON record, "orders" -> sorted set (score = createdAt).

function config() {
  const url = String(
    process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || ""
  )
    .trim()
    .replace(/\/+$/, "");
  const token = String(
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ""
  ).trim();
  return { url, token };
}

export function storeEnabled() {
  const { url, token } = config();
  return Boolean(url && token);
}

async function send(path, body) {
  const { url, token } = config();
  const res = await fetch(`${url}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) {
    throw new Error(`Redis ${res.status}: ${JSON.stringify(data).slice(0, 200)}`);
  }
  return data;
}

async function command(...args) {
  const data = await send("", args.map(String));
  if (data?.error) throw new Error(`Redis: ${data.error}`);
  return data?.result;
}

const key = (id) => `order:${id}`;

function parse(raw) {
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export async function getOrder(id) {
  if (!storeEnabled() || !id) return null;
  try {
    return parse(await command("GET", key(id)));
  } catch (err) {
    console.error("orderStore.getOrder failed", err.message);
    return null;
  }
}

// Creates or replaces the record and indexes it by date.
export async function saveOrder(order) {
  if (!storeEnabled() || !order?.id) return;
  try {
    const record = { createdAt: Date.now(), ...order };
    await send("/pipeline", [
      ["SET", key(record.id), JSON.stringify(record)],
      ["ZADD", "orders", String(record.createdAt), record.id],
    ]);
  } catch (err) {
    console.error("orderStore.saveOrder failed", err.message);
  }
}

// `change` is an object to merge, or a function (current) => fields to merge.
// Creates the record when it does not exist yet.
export async function updateOrder(id, change) {
  if (!storeEnabled() || !id) return null;
  try {
    const current = (await getOrder(id)) || { id, createdAt: Date.now() };
    const patch = typeof change === "function" ? change(current) : change;
    const next = { ...current, ...patch, id, updatedAt: Date.now() };
    await send("/pipeline", [
      ["SET", key(id), JSON.stringify(next)],
      ["ZADD", "orders", String(next.createdAt), id],
    ]);
    return next;
  } catch (err) {
    console.error("orderStore.updateOrder failed", err.message);
    return null;
  }
}

// Newest first.
export async function listOrders(limit = 200) {
  if (!storeEnabled()) return [];
  const ids = await command("ZRANGE", "orders", 0, limit - 1, "REV");
  if (!Array.isArray(ids) || !ids.length) return [];
  const raws = await command("MGET", ...ids.map(key));
  return (raws || []).map(parse).filter(Boolean);
}

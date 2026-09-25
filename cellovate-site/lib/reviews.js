// Verified customer reviews, stored in the same Upstash Redis as orders.
//
// Only customers with a real order can write one (signed link in the shipping
// email). Every review starts "pending" and appears on the site only after
// the owner approves it in /admin/reviews.
//
// Keys:
//   review:<id>             -> JSON record
//   reviews:pending         -> sorted set of pending ids (score = createdAt)
//   reviews:all             -> sorted set of every id (score = createdAt)
//   reviews:p:<handle>      -> sorted set of approved ids for a product
//   reviewed:<order>:<handle> -> guard, one review per product per order
import crypto from "crypto";
import { storeEnabled, redisCommand, redisSend } from "./orderStore";
import { VISIBLE_PRODUCTS } from "./products";

const key = (id) => `review:${id}`;
const parse = (raw) => {
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

// Products of an order, matched on the product code in the stored lines
// ("2 × BPC-157 — 10mg · Vial (BP-S) — $…").
export function productsInOrder(order) {
  const lines = Array.isArray(order?.lines) ? order.lines : [];
  return VISIBLE_PRODUCTS.filter((p) =>
    lines.some((l) => String(l).includes(`(${p.code})`))
  ).map((p) => ({ handle: p.handle, name: p.name, code: p.code }));
}

// "Jane Doe" -> "Jane D."
export function displayName(name) {
  const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "Verified customer";
  const first = parts[0].slice(0, 30);
  return parts[1] ? `${first} ${parts[1][0].toUpperCase()}.` : first;
}

export async function hasReviewed(orderId, handle) {
  if (!storeEnabled()) return false;
  return Boolean(await redisCommand("EXISTS", `reviewed:${orderId}:${handle}`));
}

export async function createReview({ orderId, handle, productName, rating, text, name, country }) {
  const claimed = await redisCommand("SET", `reviewed:${orderId}:${handle}`, "1", "NX");
  if (claimed !== "OK") return { duplicate: true };
  const review = {
    id: crypto.randomBytes(6).toString("hex"),
    orderId,
    handle,
    productName,
    rating,
    text,
    name,
    country: country || "",
    status: "pending",
    createdAt: Date.now(),
  };
  await redisSend("/pipeline", [
    ["SET", key(review.id), JSON.stringify(review)],
    ["ZADD", "reviews:pending", String(review.createdAt), review.id],
    ["ZADD", "reviews:all", String(review.createdAt), review.id],
  ]);
  return { review };
}

async function load(ids) {
  if (!Array.isArray(ids) || !ids.length) return [];
  const raws = await redisCommand("MGET", ...ids.map(key));
  return (raws || []).map(parse).filter(Boolean);
}

// Newest first, every status (admin).
export async function listReviews(limit = 200) {
  if (!storeEnabled()) return [];
  return load(await redisCommand("ZRANGE", "reviews:all", 0, limit - 1, "REV"));
}

export async function setReviewStatus(id, status) {
  const review = parse(await redisCommand("GET", key(id)));
  if (!review) return null;
  const next = { ...review, status, moderatedAt: Date.now() };
  const ops = [
    ["SET", key(id), JSON.stringify(next)],
    ["ZREM", "reviews:pending", id],
  ];
  if (status === "approved") {
    ops.push(["ZADD", `reviews:p:${review.handle}`, String(review.createdAt), id]);
  } else {
    ops.push(["ZREM", `reviews:p:${review.handle}`, id]);
  }
  await redisSend("/pipeline", ops);
  return next;
}

// Approved reviews for a product page + summary for the rating stars and the
// AggregateRating structured data. Never throws: the page renders without.
export async function getProductReviews(handle, limit = 20) {
  const empty = { reviews: [], count: 0, average: 0 };
  if (!storeEnabled()) return empty;
  try {
    const all = await load(await redisCommand("ZRANGE", `reviews:p:${handle}`, 0, -1, "REV"));
    const approved = all.filter((r) => r.status === "approved");
    if (!approved.length) return empty;
    const average =
      Math.round((approved.reduce((s, r) => s + r.rating, 0) / approved.length) * 10) / 10;
    const reviews = approved.slice(0, limit).map(({ id, rating, text, name, country, createdAt }) => ({
      id,
      rating,
      text,
      name,
      country,
      createdAt,
    }));
    return { reviews, count: approved.length, average };
  } catch (err) {
    console.error("getProductReviews failed", err.message);
    return empty;
  }
}

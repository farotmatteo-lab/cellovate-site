// Partner accounts for /partner: scrypt-hashed passwords, one-time links,
// signed session cookie. Stored in the same Upstash Redis as the orders.
//   cv:partner:<email> -> JSON { pw: "salt:hash", updated }
//   cv:ptok:<token>    -> email (one-time link, expires)
import crypto from "crypto";
import { partnerByEmail } from "./partners";

const COOKIE = "cv_partner";
const DAYS = 90;
const norm = (e) => String(e || "").trim().toLowerCase();

function kvConfig() {
  const url = String(process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "").trim().replace(/\/+$/, "");
  const tok = String(process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "").trim();
  return { url, tok };
}

export function kvEnabled() {
  const c = kvConfig();
  return Boolean(c.url && c.tok);
}

export async function kv(args) {
  const c = kvConfig();
  const r = await fetch(c.url, {
    method: "POST",
    headers: { Authorization: "Bearer " + c.tok, "Content-Type": "application/json" },
    body: JSON.stringify(args.map(String)),
  });
  const j = await r.json();
  if (j.error) throw new Error("Redis: " + j.error);
  return j.result;
}

function key() {
  return "cv-partner-session:" + kvConfig().tok + (process.env.ADMIN_PASSWORD || "");
}

export function hashPassword(pw) {
  const salt = crypto.randomBytes(16).toString("hex");
  return salt + ":" + crypto.scryptSync(String(pw), salt, 64).toString("hex");
}

export function checkPassword(pw, stored) {
  if (!stored || stored.indexOf(":") < 0) return false;
  const parts = stored.split(":");
  const test = crypto.scryptSync(String(pw), parts[0], 64);
  const ref = Buffer.from(parts[1], "hex");
  return ref.length === test.length && crypto.timingSafeEqual(ref, test);
}

export async function getAccount(email) {
  const raw = await kv(["GET", "cv:partner:" + norm(email)]);
  return raw ? JSON.parse(raw) : null;
}

export async function setPassword(email, pw) {
  await kv(["SET", "cv:partner:" + norm(email), JSON.stringify({ pw: hashPassword(pw), updated: new Date().toISOString() })]);
}

export async function createToken(email, ttlSeconds) {
  const token = crypto.randomBytes(24).toString("hex");
  await kv(["SET", "cv:ptok:" + token, norm(email), "EX", String(ttlSeconds)]);
  return token;
}

export async function useToken(token) {
  if (!/^[a-f0-9]{48}$/.test(String(token || ""))) return null;
  const email = await kv(["GET", "cv:ptok:" + token]);
  if (email) await kv(["DEL", "cv:ptok:" + token]);
  return email || null;
}

function sign(v) {
  return crypto.createHmac("sha256", key()).update(v).digest("hex").slice(0, 40);
}

export function sessionCookie(email) {
  const exp = Date.now() + DAYS * 86400000;
  const v = Buffer.from(norm(email) + "|" + exp).toString("base64url");
  return COOKIE + "=" + v + "." + sign(v) + "; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=" + DAYS * 86400;
}

export function clearCookie() {
  return COOKIE + "=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0";
}

export function readSession(req) {
  const raw = String(req.headers.cookie || "").split(/;\s*/).find((c) => c.indexOf(COOKIE + "=") === 0);
  if (!raw) return null;
  const val = raw.slice(COOKIE.length + 1);
  const dot = val.lastIndexOf(".");
  if (dot < 0) return null;
  const v = val.slice(0, dot);
  if (sign(v) !== val.slice(dot + 1)) return null;
  const parts = Buffer.from(v, "base64url").toString().split("|");
  if (!parts[0] || Number(parts[1]) < Date.now()) return null;
  const partner = partnerByEmail(parts[0]);
  return partner ? { email: parts[0], partner } : null;
}

// Orders placed with this partner's code (newest first), from the order history.
export async function partnerOrders(code) {
  if (!kvEnabled()) return [];
  const ids = (await kv(["ZREVRANGE", "orders", "0", "999"])) || [];
  if (!ids.length) return [];
  const raws = (await kv(["MGET"].concat(ids.map((id) => "order:" + id)))) || [];
  const c = String(code).toUpperCase();
  return raws
    .filter(Boolean)
    .map((x) => { try { return JSON.parse(x); } catch (e) { return null; } })
    .filter((o) => o && (o.codes || []).some((k) => String(k).toUpperCase() === c))
    .map((o) => ({ id: String(o.id), date: o.createdAt || null, total: Number(o.total) || 0, status: String(o.status || "") }));
}

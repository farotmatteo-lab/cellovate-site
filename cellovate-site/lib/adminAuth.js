// Owner-only access to /admin and to the "mark as shipped" links.
//
// Needs ADMIN_PASSWORD in the Vercel environment (8+ characters). It is the
// password for /admin and the key that signs the links in the owner emails.
// Changing it logs everyone out and invalidates links already sent.
import crypto from "crypto";

export const SITE_URL = "https://www.cellovateadvancedpeptides.com";
const COOKIE = "cel_admin";
const SESSION_DAYS = 30;

function secret() {
  return String(process.env.ADMIN_PASSWORD || "").trim();
}

export function adminEnabled() {
  return secret().length >= 8;
}

function hmac(message) {
  return crypto
    .createHmac("sha256", `cellovate-admin:${secret()}`)
    .update(message)
    .digest("base64url");
}

function safeEqual(a, b) {
  const A = Buffer.from(String(a || ""));
  const B = Buffer.from(String(b || ""));
  return A.length === B.length && crypto.timingSafeEqual(A, B);
}

function normEmail(email) {
  return String(email || "").trim().toLowerCase();
}

// Signed link for one order: lets the owner mark it shipped from the
// notification email without logging in.
export function shipToken(orderId, email) {
  return hmac(`ship|${orderId}|${normEmail(email)}`);
}

export function verifyShipToken(orderId, email, token) {
  if (!adminEnabled() || !orderId || !email || !token) return false;
  return safeEqual(token, shipToken(orderId, email));
}

export function shipUrl(orderId, email) {
  if (!adminEnabled() || !orderId || !email) return null;
  const q = new URLSearchParams({
    o: orderId,
    e: normEmail(email),
    t: shipToken(orderId, email),
  });
  return `${SITE_URL}/admin/ship?${q.toString()}`;
}

// Signed link sent to the customer in the shipping email: lets them review
// the products of that order without an account.
export function reviewToken(orderId, email) {
  return hmac(`review|${orderId}|${normEmail(email)}`);
}

export function verifyReviewToken(orderId, email, token) {
  if (!adminEnabled() || !orderId || !email || !token) return false;
  return safeEqual(token, reviewToken(orderId, email));
}

export function reviewUrl(orderId, email) {
  if (!adminEnabled() || !orderId || !email) return null;
  const q = new URLSearchParams({
    o: orderId,
    e: normEmail(email),
    t: reviewToken(orderId, email),
  });
  return `${SITE_URL}/review?${q.toString()}`;
}

export function checkPassword(password) {
  return adminEnabled() && safeEqual(String(password || "").trim(), secret());
}

export function sessionCookie() {
  const exp = Date.now() + SESSION_DAYS * 86400 * 1000;
  const value = `${exp}.${hmac(`session|${exp}`)}`;
  return `${COOKIE}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${
    SESSION_DAYS * 86400
  }`;
}

export function clearSessionCookie() {
  return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

export function isAdmin(req) {
  if (!adminEnabled()) return false;
  const raw = String(req.headers?.cookie || "")
    .split(/;\s*/)
    .find((c) => c.startsWith(`${COOKIE}=`));
  if (!raw) return false;
  const [exp, sig] = raw.slice(COOKIE.length + 1).split(".");
  return Number(exp) > Date.now() && safeEqual(sig, hmac(`session|${exp}`));
}

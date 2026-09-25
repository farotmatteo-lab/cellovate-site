// POST /api/review
// Body: { o, e, t, name?, reviews: [{ handle, rating, text }] }
// Stores verified reviews (pending moderation) for the products of a
// shipped order. The signed link comes from the shipping email.
import { verifyReviewToken } from "../../lib/adminAuth";
import { getOrder, storeEnabled } from "../../lib/orderStore";
import { productsInOrder, displayName, createReview } from "../../lib/reviews";

const clean = (v, max) => String(v || "").replace(/\s+/g, " ").trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const body = req.body || {};
  const orderId = clean(body.o, 64);
  const email = clean(body.e, 200).toLowerCase();
  if (!storeEnabled() || !verifyReviewToken(orderId, email, clean(body.t, 200))) {
    return res.status(401).json({ error: "This review link is not valid." });
  }
  const order = await getOrder(orderId);
  if (!order || String(order.email || "").toLowerCase() !== email) {
    return res.status(404).json({ error: "Order not found." });
  }
  if (order.status !== "shipped") {
    return res.status(409).json({ error: "Reviews open once your order has shipped." });
  }

  const allowed = new Map(productsInOrder(order).map((p) => [p.handle, p]));
  const name = displayName(clean(body.name, 60) || order.name);
  const input = Array.isArray(body.reviews) ? body.reviews.slice(0, 20) : [];
  const saved = [];
  const skipped = [];
  for (const r of input) {
    const product = allowed.get(String(r?.handle || ""));
    const rating = parseInt(r?.rating, 10);
    const text = clean(r?.text, 1000);
    if (!product || !(rating >= 1 && rating <= 5)) continue;
    if (text.length < 10) {
      return res.status(400).json({ error: `Please write a few words about ${product.name}.` });
    }
    const out = await createReview({
      orderId,
      handle: product.handle,
      productName: product.name,
      rating,
      text,
      name,
    });
    (out.duplicate ? skipped : saved).push(product.handle);
  }
  if (!saved.length && !skipped.length) {
    return res.status(400).json({ error: "Pick a star rating for at least one product." });
  }
  return res.status(200).json({ ok: true, saved, skipped });
}

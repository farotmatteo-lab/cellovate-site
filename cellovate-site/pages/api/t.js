// POST /api/t — anonymous site statistics (visits, page views, product views,
// adds to cart, checkouts). Sent by lib/track.js with sendBeacon. Always
// answers 204: tracking must never get in the shopper's way.
import { recordEvent, EVENT_TYPES } from "../../lib/stats";
import { CATALOG } from "../../lib/products";

const BOTS = /bot|crawl|spider|slurp|preview|headless|lighthouse|facebookexternalhit|whatsapp|telegrambot|vercel-screenshot/i;
const PRODUCT_IDS = new Set(CATALOG.map((p) => p.id));

function clean(value, max = 40) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, "")
    .slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  res.setHeader("Cache-Control", "no-store");
  if (BOTS.test(String(req.headers["user-agent"] || ""))) return res.status(204).end();

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      body = null;
    }
  }
  const type = String(body?.t || "");
  if (!EVENT_TYPES.includes(type)) return res.status(204).end();

  const product = PRODUCT_IDS.has(body?.p) ? body.p : null;
  const country = clean(req.headers["x-vercel-ip-country"], 2).toUpperCase() || "??";
  await recordEvent({
    type,
    product,
    source: clean(body?.s) || "direct",
    country,
    visitor: clean(body?.v, 64),
  });
  return res.status(204).end();
}

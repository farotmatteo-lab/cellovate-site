// Returns the display currency for the visitor's country + today's USD rate.
// Country comes from Vercel's geo header (x-vercel-ip-country). For testing,
// /api/currency?country=FR forces a country.
import { currencyForCountry, BASE_CURRENCY } from "../../lib/currency";

const RATES_URL = "https://open.er-api.com/v6/latest/USD";
const TTL_MS = 6 * 60 * 60 * 1000; // refresh rates every 6 hours
let cache = { at: 0, rates: null };

async function getRates() {
  if (cache.rates && Date.now() - cache.at < TTL_MS) return cache.rates;
  try {
    const r = await fetch(RATES_URL);
    const j = await r.json();
    if (j && j.result === "success" && j.rates) {
      cache = { at: Date.now(), rates: j.rates };
    }
  } catch (e) {
    // keep the previous rates (if any)
  }
  return cache.rates;
}

export default async function handler(req, res) {
  const raw = (req.query && req.query.country) || req.headers["x-vercel-ip-country"] || "";
  const country = String(raw).toUpperCase().slice(0, 2);
  let currency = currencyForCountry(country);
  let rate = 1;
  if (currency !== BASE_CURRENCY) {
    const rates = await getRates();
    if (rates && rates[currency]) rate = rates[currency];
    else currency = BASE_CURRENCY; // no rate available -> fall back to USD
  }
  // Depends on the visitor's location: never cache it at the CDN level.
  res.setHeader("Cache-Control", "private, no-store");
  res.status(200).json({ country, currency, rate });
}

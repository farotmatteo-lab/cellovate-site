// Multi-currency DISPLAY only. Every price in the catalogue is stored in USD
// and every order is still charged in USD (crypto + card). This file converts
// what visitors SEE into the currency of the country they browse from.

export const BASE_CURRENCY = "USD";

const EURO_COUNTRIES = [
  "FR", "DE", "IT", "ES", "PT", "NL", "BE", "LU", "IE", "AT", "FI", "GR",
  "SK", "SI", "EE", "LV", "LT", "MT", "CY", "HR", "MC", "AD", "SM", "VA",
  "ME", "XK", "RE", "GP", "MQ", "GF", "YT", "PM", "BL", "MF",
];

const COUNTRY_CURRENCY = {
  US: "USD", TH: "THB", GB: "GBP", CH: "CHF", CA: "CAD", AU: "AUD",
  NZ: "NZD", JP: "JPY", SG: "SGD", HK: "HKD", MY: "MYR", ID: "IDR",
  PH: "PHP", VN: "VND", KR: "KRW", CN: "CNY", TW: "TWD", IN: "INR",
  AE: "AED", SA: "SAR", QA: "QAR", KW: "KWD", IL: "ILS", SE: "SEK",
  NO: "NOK", DK: "DKK", PL: "PLN", CZ: "CZK", HU: "HUF", RO: "RON",
  BG: "BGN", MX: "MXN", BR: "BRL", AR: "ARS", CL: "CLP", CO: "COP",
  ZA: "ZAR", TR: "TRY", KH: "KHR", LA: "LAK", MA: "MAD",
};

export function currencyForCountry(country) {
  const cc = String(country || "").toUpperCase();
  if (EURO_COUNTRIES.includes(cc)) return "EUR";
  return COUNTRY_CURRENCY[cc] || BASE_CURRENCY;
}

// usd: amount in USD. ctx: { currency, rate } where rate = units of
// "currency" for 1 USD. Large-unit currencies (THB, JPY...) are rounded to
// whole numbers so prices read cleanly (e.g. 4,290 instead of 4,288.57).
export function formatPrice(usd, ctx) {
  const currency = (ctx && ctx.currency) || BASE_CURRENCY;
  const rate = currency === BASE_CURRENCY ? 1 : Number(ctx && ctx.rate) || 1;
  const value = Number(usd || 0) * rate;
  const whole = currency !== BASE_CURRENCY && rate >= 10;
  const digits = whole ? 0 : 2;
  const amount = whole ? Math.round(value) : value;
  try {
    const opts = {
      style: "currency",
      currency,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    };
    let out = new Intl.NumberFormat("en-US", { ...opts, currencyDisplay: "narrowSymbol" }).format(amount);
    // Avoid an ambiguous plain "$" for CAD, AUD, SGD... -> "CA$", "A$", "SGD"
    if (currency !== "USD" && out.includes("$")) {
      out = new Intl.NumberFormat("en-US", { ...opts, currencyDisplay: "symbol" }).format(amount);
    }
    return out;
  } catch (e) {
    return "$" + Number(usd || 0).toFixed(2);
  }
}

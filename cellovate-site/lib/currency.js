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
// "currency" for 1 USD. Converted prices are rounded to "retail" looking
// amounts (display only, orders are charged in USD):
//  - EUR, GBP, CHF... -> nearest .99 (76.23 -> 75.99)
//  - THB, JPY... (no decimals) -> nearest 10 above 100 (4,815 -> 4,820)
// USD prices are shown exactly as stored.
export function formatPrice(usd, ctx) {
  const currency = (ctx && ctx.currency) || BASE_CURRENCY;
  const rate = currency === BASE_CURRENCY ? 1 : Number(ctx && ctx.rate) || 1;
  const value = Number(usd || 0) * rate;
  const whole = currency !== BASE_CURRENCY && rate >= 10;
  const digits = whole ? 0 : 2;
  let amount = value;
  if (currency !== BASE_CURRENCY) {
    if (whole) amount = value >= 100 ? Math.round(value / 10) * 10 : Math.round(value);
    else if (value >= 1) amount = Math.max(0.99, Math.round(value) - 0.01);
    else amount = Math.round(value * 100) / 100;
  }
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

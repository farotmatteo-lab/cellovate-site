// Time-limited "Buy 2, get 1 free" campaign.
//
// While it runs, every 3rd item in the cart is free: the cheapest units are
// the free ones (6 items -> the 2 cheapest free, etc.). Applied automatically,
// no code. It never adds up with codes or the volume tier: lib/pricing.js
// gives the order whichever is better. Partner codes can still be entered
// (the sale is credited to the partner) and earn a surprise gift: a
// single-use 30% code for a later order (lib/giftCodes.js).
//
// To run it again, change the id and the dates. Times are New York time.
export const CAMPAIGN = {
  id: "b2g1-2026-10",
  name: "Buy 2, get 1 free",
  start: "2026-10-02T00:00:00-04:00",
  end: "2026-10-05T00:00:00-04:00", // Sunday midnight (New York)
  endsLabel: "Sunday midnight EST",
};

const START = Date.parse(CAMPAIGN.start);
const END = Date.parse(CAMPAIGN.end);

export function campaignActive(now = Date.now()) {
  return now >= START && now < END;
}

// unitPrices: price of every unit in the cart. Returns the discount and how
// many units are free.
export function buy2Get1(unitPrices) {
  const free = Math.floor(unitPrices.length / 3);
  if (!free) return { discount: 0, free: 0 };
  const cheapest = [...unitPrices].sort((a, b) => a - b).slice(0, free);
  const discount = Math.round(cheapest.reduce((s, p) => s + p, 0) * 100) / 100;
  return { discount, free };
}

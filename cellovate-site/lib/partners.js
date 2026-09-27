// Partners (influencers) with access to /partner. Login = their email.
// Cellovate shows sales only (no commission).

export const PARTNERS = [
  { code: "RND10", email: "randy2lowe@gmail.com", name: "Randy" },
  // Owner test account (no real code, no sales)
  { code: "TEST", email: "farotmatteo@gmail.com", name: "Matteo" },
];

export function partnerByEmail(email) {
  const e = String(email || "").trim().toLowerCase();
  return PARTNERS.find((p) => p.email.toLowerCase() === e) || null;
}

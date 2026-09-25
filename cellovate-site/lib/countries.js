// Shipping destinations offered at checkout, alphabetical.
export const COUNTRIES = [
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Cambodia",
  "Canada",
  "Chile",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malaysia",
  "Malta",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Philippines",
  "Poland",
  "Portugal",
  "Romania",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
  "Other — contact us",
];

// Fields every order must carry, checked on the client and again on the server.
export const REQUIRED_CUSTOMER_FIELDS = [
  "email",
  "firstName",
  "lastName",
  "address1",
  "city",
  "postalCode",
  "country",
];

export function validateCustomer(customer) {
  const c = customer || {};
  const missing = REQUIRED_CUSTOMER_FIELDS.filter(
    (f) => !String(c[f] || "").trim()
  );
  // Buyer must confirm research-only use and legal age at every checkout.
  if (c.researchUseAck !== true) missing.push("researchUseAck");
  if (missing.length) return { ok: false, missing };
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(c.email).trim())) {
    return { ok: false, missing: ["email"] };
  }
  return { ok: true, missing: [] };
}

// One block of text for order emails.
export function formatAddress(c) {
  return [
    `${c.firstName} ${c.lastName}`.trim(),
    c.company,
    c.address1,
    c.address2,
    [c.postalCode, c.city].filter(Boolean).join(" "),
    c.state,
    c.country,
    c.phone ? `Phone: ${c.phone}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

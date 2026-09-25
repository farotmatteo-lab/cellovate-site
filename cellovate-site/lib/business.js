// Business identity: legal and contact pages, site footer and the signature
// of every automatic email.
export const BUSINESS = {
  brand: "Cellovate Advanced Peptides",
  legalName: "CELLOVATE LLC",
  address: "8206 Louisiana Blvd NE, Ste A #5219, Albuquerque, NM 87113, United States",
  email: "info@cellovateadvancedpeptides.com",
  website: "https://www.cellovateadvancedpeptides.com",
  lastUpdated: "September 25, 2026",
};

// Plain-text signature appended to customer emails.
export const EMAIL_SIGNATURE = `Cellovate Advanced Peptides
${BUSINESS.legalName}
8206 Louisiana Blvd NE, Ste A #5219
Albuquerque, NM 87113, United States
${BUSINESS.email} · www.cellovateadvancedpeptides.com

For research use only, not for human consumption.`;

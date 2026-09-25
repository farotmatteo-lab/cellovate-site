import LegalLayout, { BusinessBlock } from "../components/LegalLayout";

export default function Contact() {
  return (
    <LegalLayout
      title="Contact"
      description="Contact Cellovate Advanced Peptides for order questions, certificates of analysis and wholesale enquiries."
    >
      <p>
        We answer every email within 1–2 business days. Please include your order number (CEL-…)
        for questions about an order.
      </p>
      <BusinessBlock />
      <h2>Common requests</h2>
      <ul>
        <li>Order status and tracking</li>
        <li>Certificate of analysis for a specific batch</li>
        <li>Wholesale and laboratory accounts</li>
        <li>Damaged or missing items — see our <a href="/refund-policy">Refund Policy</a></li>
      </ul>
    </LegalLayout>
  );
}

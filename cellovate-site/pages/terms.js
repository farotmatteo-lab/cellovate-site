import LegalLayout, { BusinessBlock } from "../components/LegalLayout";
import { BUSINESS } from "../lib/business";
import { FREE_SHIPPING_THRESHOLD } from "../lib/upsell";
import { SHIPPING_FEE } from "../lib/pricing";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Sale"
      description="Terms of sale for Cellovate Advanced Peptides: research-use-only products, eligibility, orders, payment, shipping and liability."
    >
      <p>
        These terms govern every purchase made on {BUSINESS.website}. By placing an order you
        accept them in full.
      </p>
      <BusinessBlock />

      <h2>1. Research use only</h2>
      <p>
        All products are sold strictly for in-vitro laboratory research and analytical purposes.
        They are not drugs, food, cosmetics or dietary supplements, are not intended to diagnose,
        treat, cure or prevent any disease, and must not be administered to humans or animals.
        Nothing on this website constitutes medical advice or usage instructions.
      </p>

      <h2>2. Eligibility</h2>
      <ul>
        <li>You must be at least 18 years old (or the age of majority in your country).</li>
        <li>You confirm you are purchasing for legitimate research by qualified persons.</li>
        <li>
          You are responsible for ensuring that purchasing, importing and possessing the products
          is lawful in your jurisdiction.
        </li>
      </ul>
      <p>
        We may refuse or cancel any order, and refund it, if we believe these conditions are not
        met or if the products are intended for human or veterinary use.
      </p>

      <h2>3. Orders and prices</h2>
      <p>
        Prices are in US dollars. The total, discounts and shipping are confirmed at checkout
        before payment. We may correct obvious pricing errors and cancel affected orders with a
        full refund. Discount codes cannot be combined, except one partner code with one other
        code; the best available discount is applied automatically.
      </p>

      <h2>4. Payment</h2>
      <p>
        We accept cryptocurrency (processed by NOWPayments) and card payments (processed by
        SumUp). Card payments may be processed in euros at the day's exchange rate; your bank may
        convert the amount back to your currency. An order is confirmed once the payment is
        received.
      </p>

      <h2>5. Shipping</h2>
      <p>
        Shipping costs ${SHIPPING_FEE} per order and is free on orders of $
        {FREE_SHIPPING_THRESHOLD} or more (products total after discount). A tracking number is
        emailed when your order ships when available. Import duties, taxes and customs clearance
        are the buyer's responsibility.
      </p>

      <h2>6. Returns and refunds</h2>
      <p>
        See our <a href="/refund-policy">Refund Policy</a>.
      </p>

      <h2>7. Quality</h2>
      <p>
        Batches are analysed by an independent third-party laboratory. Certificates of
        analysis describe the tested batch only. Products must be stored and handled according to
        the product information.
      </p>

      <h2>8. Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for any damage resulting from misuse of
        the products, use outside a laboratory research setting, or failure to follow storage and
        handling information. Our liability for any order is limited to the amount paid for it.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about an order: <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
      </p>
    </LegalLayout>
  );
}

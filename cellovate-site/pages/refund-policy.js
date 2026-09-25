import LegalLayout from "../components/LegalLayout";
import { BUSINESS } from "../lib/business";

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      description="Refund and replacement policy for Cellovate Advanced Peptides orders: damaged, incorrect or lost parcels."
    >
      <h2>Damaged, incorrect or missing items</h2>
      <p>
        If your order arrives damaged, incomplete or with the wrong product, email{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> within 7 days of delivery with
        your order number and photos. We will send a replacement or refund the affected items.
      </p>

      <h2>Lost parcels</h2>
      <p>
        If tracking shows no movement for 20 business days, contact us and we will open an
        investigation with the carrier and reship or refund once the parcel is confirmed lost.
      </p>

      <h2>Returns</h2>
      <p>
        To protect product integrity and traceability, opened or unsealed products cannot be
        returned. Unopened products may be returned within 14 days of delivery in their original
        packaging; return shipping is paid by the buyer.
      </p>

      <h2>Cancellations</h2>
      <p>
        An order can be cancelled for a full refund before it ships. Once shipped, the return
        conditions above apply.
      </p>

      <h2>How refunds are paid</h2>
      <ul>
        <li>Card payments: refunded to the card used, within 5–10 business days.</li>
        <li>
          Crypto payments: refunded in the same cryptocurrency to a wallet address you provide,
          for the USD value of the refunded items.
        </li>
      </ul>
    </LegalLayout>
  );
}

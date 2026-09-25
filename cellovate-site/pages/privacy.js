import LegalLayout, { BusinessBlock } from "../components/LegalLayout";
import { BUSINESS } from "../lib/business";

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How Cellovate Advanced Peptides collects, uses and protects your personal data."
    >
      <p>This policy explains what personal data we collect and why.</p>
      <BusinessBlock />

      <h2>Data we collect</h2>
      <ul>
        <li>Contact and shipping details you enter at checkout (name, email, address, phone).</li>
        <li>Order details (products, amounts, payment status, tracking).</li>
        <li>
          Browsing data on our website (pages viewed, products added to cart) for anonymous
          statistics and cart reminders.
        </li>
      </ul>
      <p>We never receive or store your card number or wallet private keys.</p>

      <h2>Why we use it</h2>
      <ul>
        <li>To process, ship and support your order (contract).</li>
        <li>To send order, payment and shipping emails (contract).</li>
        <li>
          To send marketing emails only if you opted in, and cart reminders — you can unsubscribe
          from any email (consent / legitimate interest).
        </li>
        <li>To prevent fraud and meet legal obligations.</li>
      </ul>

      <h2>Service providers</h2>
      <ul>
        <li>Vercel (website hosting and anonymous analytics)</li>
        <li>Upstash (order records)</li>
        <li>NOWPayments (crypto payments) and SumUp (card payments)</li>
        <li>Omnisend (email marketing and cart reminders)</li>
        <li>Zoho (order emails)</li>
      </ul>
      <p>These providers only process data on our behalf to deliver their service.</p>

      <h2>Retention</h2>
      <p>
        Order records are kept as long as required for accounting and legal purposes. Marketing
        data is kept until you unsubscribe.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to access, correct or delete your data, or object to marketing, by emailing{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
      </p>

      <h2>Cookies and local storage</h2>
      <p>
        We store your cart and checkout details in your browser so they are not lost between
        visits. Our email provider may set cookies to link cart activity to your email address
        once you have shared it. Website analytics are cookieless.
      </p>
    </LegalLayout>
  );
}

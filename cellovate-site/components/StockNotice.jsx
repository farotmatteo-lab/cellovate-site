// Thailand stock vs factory messages. Shown only to Thailand (visitor
// location, or the Thailand address entered at checkout); other countries
// never see any of this.
import { Truck, Factory, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Price } from "../context/CurrencyContext";
import { BUSINESS } from "../lib/business";
import { SHIPPING_FEE } from "../lib/pricing";
import { FREE_SHIPPING_THRESHOLD } from "../lib/upsell";
import { PRODUCTS, getVariant } from "../lib/products";
import {
  isThailand,
  inThailandStock,
  TH_DELIVERY,
  FACTORY_DELIVERY,
} from "../lib/fulfillment";

function waLink(text) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
}

function FactoryTerms() {
  return (
    <>
      Delivery: {FACTORY_DELIVERY}. Shipping: <Price usd={SHIPPING_FEE} /> (free over{" "}
      <Price usd={FREE_SHIPPING_THRESHOLD} />).
    </>
  );
}

function AskWhatsApp({ text }) {
  return (
    <a
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-semibold text-[#128C4A] hover:underline"
    >
      <MessageCircle size={13} /> Questions? Ask us on WhatsApp
    </a>
  );
}

// Product page: availability of the selected variant.
export function ProductAvailability({ product, variant }) {
  const { country, thStock } = useCart();
  if (!isThailand(country) || !product || !variant) return null;
  if (inThailandStock(thStock, product.id, variant.key)) {
    return (
      <div className="flex items-start gap-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 px-4 py-3 text-[13px] text-[#0A0A0A]">
        <Truck size={16} className="text-[#128C4A] mt-0.5 shrink-0" />
        <span>
          <strong>In stock in Thailand.</strong> Free delivery in {TH_DELIVERY}.
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[13px] text-[#0A0A0A]">
      <Factory size={16} className="text-amber-600 mt-0.5 shrink-0" />
      <span className="leading-relaxed">
        <strong>Not in our Thailand stock:</strong> this {variant.dose} {variant.format.toLowerCase()} ships
        from our factory. <FactoryTerms />{" "}
        <AskWhatsApp text={`Hi Cellovate, a question about ${product.name} ${variant.label} (Thailand delivery).`} />
      </span>
    </div>
  );
}

// Cart and checkout: where the order ships from, for Thailand addresses.
export function CartFulfillmentNotice() {
  const { country, itemCount, fulfillment, factoryKeys } = useCart();
  if (!itemCount || !isThailand(country)) return null;
  if (fulfillment === "thailand") {
    return (
      <div className="flex items-start gap-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 px-4 py-3 text-[12.5px] text-[#0A0A0A]">
        <Truck size={15} className="text-[#128C4A] mt-0.5 shrink-0" />
        <span>
          <strong>Ships from our Thailand stock.</strong> Free delivery in {TH_DELIVERY}.
        </span>
      </div>
    );
  }
  const names = (factoryKeys || [])
    .map((k) => {
      const [id, variantKey] = k.split("::");
      const p = PRODUCTS.find((x) => x.id === id);
      return p ? `${p.name} ${getVariant(p, variantKey).label}` : null;
    })
    .filter(Boolean);
  return (
    <div className="flex items-start gap-2.5 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3 text-[12.5px] text-[#0A0A0A]">
      <Factory size={15} className="text-amber-600 mt-0.5 shrink-0" />
      <span className="leading-relaxed">
        <strong>{names.join(", ") || "Part of your order"}</strong>{" "}
        {names.length > 1 ? "are" : "is"} not available in our Thailand stock, so this order ships from
        our factory. <FactoryTerms />{" "}
        <AskWhatsApp text={`Hi Cellovate, a question about my order (Thailand delivery): ${names.join(", ")}.`} />
      </span>
    </div>
  );
}

// Floating "Order on WhatsApp" button, on every public page. The prefilled
// message names the page the visitor was on, so the chat starts with context.
import { useRouter } from "next/router";
import { useCart } from "../context/CartContext";
import { BUSINESS } from "../lib/business";
import { SITE_URL } from "./Seo";
import { UI } from "../lib/seo/ui";

const HIDDEN = /^\/(admin|partner|checkout)(\/|$)/;

export default function WhatsAppButton() {
  const router = useRouter();
  const { itemCount, cartOpen } = useCart();
  if (!BUSINESS.whatsapp || HIDDEN.test(router.pathname) || cartOpen) return null;

  const path = (router.asPath || "/").split(/[?#]/)[0];
  const ui = UI[router.query?.lang] || null;
  const text = `${ui && ui !== UI.en ? ui.whatsapp : "Hi Cellovate, I have a question about an order"}: ${SITE_URL}${path === "/" ? "" : path}`;
  const href = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`;
  // Sits above the floating "View cart" bar when that bar is showing.
  const bottom = itemCount > 0 ? "bottom-[84px]" : "bottom-4";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ui ? ui.whatsapp : "Order or ask a question on WhatsApp"}
      className={`fixed right-4 ${bottom} z-30 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-4 py-3 shadow-lg shadow-black/20 hover:bg-[#1EBE5A] active:scale-[0.97] transition`}
    >
      <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true" fill="currentColor">
        <path d="M16.04 3C8.86 3 3.02 8.83 3.02 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A13 13 0 0 0 16.04 29C23.2 29 29.04 23.17 29.04 16S23.2 3 16.04 3Zm0 23.8c-1.98 0-3.92-.53-5.61-1.53l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.77 10.77 0 0 1 5.24 16c0-5.95 4.85-10.79 10.8-10.79 5.95 0 10.8 4.84 10.8 10.79S21.99 26.8 16.04 26.8Zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.21.32-.84 1.06-1.03 1.27-.19.22-.38.24-.7.08-.32-.16-1.37-.5-2.6-1.6a9.77 9.77 0 0 1-1.8-2.24c-.19-.32-.02-.5.14-.66.15-.14.32-.38.49-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.11 1.32 3.33.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38Z" />
      </svg>
      <span className="text-[13px] font-semibold">{ui ? ui.whatsapp : "Order on WhatsApp"}</span>
    </a>
  );
}

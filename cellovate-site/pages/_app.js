import "../styles/globals.css";
import Script from "next/script";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";

// Omnisend brand ID (public, not a secret). Set NEXT_PUBLIC_OMNISEND_BRAND_ID
// in Vercel to override. The snippet loads signup forms and page tracking.
const OMNISEND_BRAND_ID =
  process.env.NEXT_PUBLIC_OMNISEND_BRAND_ID || "6ab49f929b0f973742e4032b";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <CartDrawer />
      {OMNISEND_BRAND_ID && (
        <Script id="omnisend-snippet" strategy="afterInteractive">
          {`window.omnisend = window.omnisend || [];
omnisend.push(["brandID", "${OMNISEND_BRAND_ID}"]);
omnisend.push(["track", "$pageViewed"]);
!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();`}
        </Script>
      )}
    </CartProvider>
  );
}

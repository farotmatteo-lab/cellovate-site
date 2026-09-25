import "../styles/globals.css";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";
import { pageViewed } from "../lib/omnisendClient";
import { CartProvider } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";
import { AnnouncementBar, SiteFooter } from "../components/SiteChrome";

// Omnisend brand ID (public, not a secret). Set NEXT_PUBLIC_OMNISEND_BRAND_ID
// in Vercel to override. The snippet loads signup forms and page tracking.
// Google Search Console "HTML tag" verification code (content="..." only).
const GSC_VERIFICATION =
  process.env.NEXT_PUBLIC_GSC_VERIFICATION || "2yXJqfW3DHKD9zUkrofgS3tAcjQgCp4XAkJqm3_sW-A";

const OMNISEND_BRAND_ID =
  process.env.NEXT_PUBLIC_OMNISEND_BRAND_ID || "6ab49f929b0f973742e4032b";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // The snippet records the first page view; client-side navigations are
  // reported here.
  useEffect(() => {
    const onRoute = () => pageViewed();
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);
  // Owner pages: no cart, no signup popup, no tracking.
  const isAdminPage = router.pathname.startsWith("/admin");
  return (
    <CartProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta name="theme-color" content="#0A0A0A" key="theme-color" />
        {GSC_VERIFICATION && (
          <meta name="google-site-verification" content={GSC_VERIFICATION} key="gsc" />
        )}
      </Head>
      {!isAdminPage && (
        <>
          {/* Vercel Web Analytics (enable it in Vercel -> project -> Analytics). */}
          <Script id="vercel-analytics-init" strategy="afterInteractive">
            {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
          </Script>
          <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
        </>
      )}
      {!isAdminPage && <AnnouncementBar />}
      <Component {...pageProps} />
      {!isAdminPage && <SiteFooter />}
      {!isAdminPage && <CartDrawer />}
      {OMNISEND_BRAND_ID && !isAdminPage && (
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

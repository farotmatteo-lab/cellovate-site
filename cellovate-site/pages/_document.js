// Sets <html lang> per page: the localized SEO pages (/{lang}/...) declare
// their own language, everything else is English.
import Document, { Html, Head, Main, NextScript } from "next/document";
import { LOCALES, DEFAULT_LOCALE } from "../lib/seo/locales";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const fromQuery = ctx.query && ctx.query.lang;
    const fromPath = String(ctx.asPath || "").split("/")[1];
    const lang = LOCALES[fromQuery] ? fromQuery : LOCALES[fromPath] ? fromPath : DEFAULT_LOCALE;
    return { ...initialProps, lang };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

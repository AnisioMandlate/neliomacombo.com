import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="min-h-full">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta
            name="google-site-verification"
            content="ts6KM6Dv4SPMIMaIRryYAkGrXLKIKqaU1dXkihI-bQ0"
          />
          <meta
            name="description"
            content="Nélio Macombo | Product Manager based in Mozambique."
          />
          <meta
            property="og:description"
            content="Nélio Macombo | Product Manager based in Mozambique."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/assets/icon-512.png" />
          <meta property="twitter:image" content="/assets/icon-512.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="Nélio Macombo" />
          <meta
            name="twitter:title"
            content="Nélio Macombo | Product Manager"
          />
          <meta
            name="twitter:text:title"
            content="Nélio Macombo | Product Manager"
          />
          <meta
            name="twitter:description"
            content="Nélio Macombo | Product Manager based in Mozambique."
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/assets/icon-192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/assets/icon-512.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon-16x16.png"
          />
          <link rel="manifest" href="/assets/site.webmanifest" />
        </Head>
        <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

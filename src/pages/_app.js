import "../styles/global.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <ThemeProvider attribute="class">
        <div className="grid grid-rows-mobile md:grid-rows-app min-h-screen justify-items-center pt-32">
          <Navbar />
          <main className="max-w-5xl w-full px-10 md:px-12 h-full my-auto">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

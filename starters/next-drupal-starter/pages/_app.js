import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // make sure we don't output invalid `hrefLang` values
  if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
    delete pageProps.hrefLang;
  }

  return <Component {...pageProps} />;
}

export default MyApp;

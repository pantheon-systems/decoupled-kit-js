import "../styles/globals.css";
import { DrupalStateWrapper } from "../lib/dsContext";

function MyApp({ Component, pageProps }) {
  // make sure we don't output invalid `hrefLang` values
  if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
    delete pageProps.hrefLang;
  }

  return (
    <DrupalStateWrapper>
      <Component {...pageProps} />;
    </DrupalStateWrapper>
  );
}

export default MyApp;

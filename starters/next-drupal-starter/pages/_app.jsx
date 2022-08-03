import { DrupalStateWrapper } from "../lib/drupalStateContext";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  // make sure we don't output invalid `hrefLang` values
  if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
    delete pageProps.hrefLang;
  }

  return (
    <DrupalStateWrapper>
      <Component {...pageProps} />
    </DrupalStateWrapper>
  );
}

export default App;

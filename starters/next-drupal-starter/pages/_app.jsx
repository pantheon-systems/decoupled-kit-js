import '../styles/globals.css';
import '@pantheon-systems/nextjs-kit/style.css';

function App({ Component, pageProps }) {
	// make sure we don't output invalid `hrefLang` values
	if (!process.env.NEXT_PUBLIC_FRONTEND_URL) {
		delete pageProps.hrefLang;
	}

	return <Component {...pageProps} />;
}

export default App;

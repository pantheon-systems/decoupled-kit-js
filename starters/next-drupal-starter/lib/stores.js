import { DRUPAL_URL } from './constants';
import { DrupalState } from '@pantheon-systems/drupal-kit';

// For each locale, make an instance of DrupalState (LocaleStore)
export const makeLocaleStores = ({ locales, debug = false }) =>
	locales.length > 1
		? locales.map(
				(locale) =>
					new DrupalState({
						apiBase: DRUPAL_URL,
						defaultLocale: locale,
						debug: debug,
						clientId: process.env.CLIENT_ID,
						clientSecret: process.env.CLIENT_SECRET,
					}),
		  )
		: [
				new DrupalState({
					apiBase: DRUPAL_URL,
					debug: debug,
					clientId: process.env.CLIENT_ID,
					clientSecret: process.env.CLIENT_SECRET,
				}),
		  ];

// exporting so we can reuse in
// getStaticProps and getServerSideProps
/**
 * @type {DrupalState[]}
 * @remarks These stores have auth enabled. Authenticated and anonymous request control takes place on the level of the request.
 * @see {@link https://project.pages.drupalcode.org/drupal_state/en/getting-objects/} for more information.
 *
 */
export const globalDrupalStateStores = makeLocaleStores({
	locales: process.env.locales,
	debug: process.env.DEBUG_MODE || false,
});

// Helper functions

/**
 * Helper function to get the store based on current locale
 * @param {string} currentLocale the current locale of the page
 * @param {array} localeStores the global stores either from useDSContext or globalDrupalStateStores
 * @returns {DrupalState} a single PantheonDrupalState store
 */
export const getCurrentLocaleStore = (currentLocale, localeStores) => {
	// check store locale and return the store that matches
	// or for monolingual sites return the store
	const [store] =
		localeStores.length > 1
			? localeStores.filter(
					({ defaultLocale }) => defaultLocale === currentLocale,
			  )
			: localeStores;
	return store;
};

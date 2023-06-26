import { DrupalState } from '@pantheon-systems/drupal-kit';

// For each locale, make an instance of DrupalState (LocaleStore)
export const makeLocaleStores = ({
	locales,
	debug = false,
}: {
	locales: string[];
	debug: boolean;
}) =>
	locales.length > 1
		? locales.map(
				(locale) =>
					new DrupalState({
						apiBase: process.env.backendUrl,
						defaultLocale: locale,
						debug: debug,
						clientId: process.env.CLIENT_ID,
						clientSecret: process.env.CLIENT_SECRET,
					}),
		  )
		: [
				new DrupalState({
					apiBase: process.env.backendUrl,
					debug: debug,
					clientId: process.env.CLIENT_ID,
					clientSecret: process.env.CLIENT_SECRET,
				}),
		  ];

/**
 * @returns DrupalState[]
 * @remarks These stores may have auth enabled. Authenticated and anonymous request control takes place on the level of the request.
 * @see {@link https://project.pages.drupalcode.org/drupal_state/en/getting-objects/} for more information.
 */
export const globalDrupalStateStores = makeLocaleStores({
	locales: process.env.locales,
	debug: process.env.DEBUG_MODE,
});
/**
 * Helper function to get the store based on current locale
 * @param currentLocale - the current locale of the page
 * @param localeStores - the global stores either from useDSContext or globalDrupalStateStores
 * @returns DrupalState a single PantheonDrupalState store
 */
export const getCurrentLocaleStore = (
	currentLocale: string,
	localeStores: DrupalState[],
) => {
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

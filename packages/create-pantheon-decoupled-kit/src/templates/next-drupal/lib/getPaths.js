import { getCurrentLocaleStore } from './stores';
/**
 * @description Helper function to get the current path needed for getStaticPaths
 * @param {import('next').GetStaticPathsContext} context - Nextjs getStaticPaths context
 * @param {import('@pantheon-systems/drupal-kit').DrupalState} globalDrupalStateStores - Drupal state stores from lib/stores.js. Can be auth'd stores or non auth'd stores.
 * @param {string} node - The node to fetch from Drupal. This will be passed to DrupalState.getObject as the objectName.
 * @param {string} dynamicRouteName - The name of the dynamic route. For example, if using getPath in /pages/articles/[slug] then dynamicRouteName would be "slug".
 * @param {string} urlAliasPrefix - The prefix of the path alias set in Drupal.
 * For example, if the alias for articles are prefixed with "/articles" then urlAliasPrefix would be "articles".
 * @param {boolean} failGracefully - If true, return an empty array which will not render any paths during the build. This is useful when using the fallback option in getStaticPaths.
 * @see https://nextjs.org/docs/api-reference/data-fetching/get-static-paths for more information on the fallback option.
 * @returns {Promise<{paths: {params: {dynamicRouteName: string[]}, locale: string}[]}>} an array of paths to return from getStaticPaths.
 */
export const getPaths = async (
	context,
	globalDrupalStateStores,
	node,
	dynamicRouteName,
	urlAliasPrefix,
	failGracefully = false,
) => {
	// Get paths for each locale.
	const pathsByLocale = context?.locales.map(async (locale) => {
		const store = getCurrentLocaleStore(locale, globalDrupalStateStores);
		try {
			// fetch the node from Drupal
			const data = await store.getObject({
				objectName: node,
				anon: true,
			});
			// filter out data that does not have the urlAliasPrefix in the path alias
			// so the catch all route works.
			// map over the data fetch to extract the path name
			return data
				.filter(({ path: { alias } }) => alias.includes(urlAliasPrefix))
				.map((datum) => {
					// remove the url prefix and split the path to handle
					// dynamic routes like /articles/my-article and /articles/featured/my-article
					// will also work for content that is not prefixed
					const regex = new RegExp(`/?(${urlAliasPrefix})?/?`);
					const path = datum.path.alias.replace(regex, '').split('/');

					// return the path object.
					return {
						params: { [`${dynamicRouteName}`]: path },
						locale: locale,
					};
				});
		} catch (error) {
			// if set to failGracefully, return null.
			if (failGracefully) {
				return null;
			} else {
				throw error;
			}
		}
	});

	// Resolve all promises returned as part of pathsByLocale.
	let paths = await Promise.all(pathsByLocale).then((values) => {
		// Flatten the array of arrays into a single array.
		return [].concat(...values);
	});

	if (failGracefully && paths[0] === null) {
		// clear paths to fail getStaticPaths gracefully
		paths = [];
	}

	return paths;
};

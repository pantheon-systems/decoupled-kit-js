import { defaultFetch } from '@pantheon-systems/drupal-kit';

/**
 * @description Helper function to query the Drupal Search API.
 * @param {import('next').GetServerSidePropsContext} context - Nextjs getServerSideProps context.
 * @param {string} index - The specific Drupal Search index to be used in the query. Default is an example 'articles_index'.
 * @see https://www.drupal.org/docs/contributed-modules/search-api for more information about the Drupal Search API.
 * @returns An array of search results matching the users search term.
 */

export const getDrupalSearchResults = async (
	context,
	index = 'articles_index',
) => {
	const res = await defaultFetch(
		`${process.env.BACKEND_URL}/${
			context.locale
		}/jsonapi/index/${index}?filter[fulltext]=${encodeURI(
			context.query?.alias[0],
		)}`,
		{},
		context.res,
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
};

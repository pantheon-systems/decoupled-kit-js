import defaultFetch from './defaultFetch';
import { ServerResponse } from 'http';
import type { TJsonApiBody } from 'jsona/lib/JsonaTypes';

interface GetDrupalSearchResultsParams {
	apiUrl: string;
	locale: string;
	query: string;
	response: ServerResponse;
	index?: string;
}

/**
 * @description Helper function to query the Drupal Search API.
 * @param {string} apiUrl - The base API URL of your query.
 * @param {string} locale - The locale currently in use.
 * @param {string} query - Specific string to search against an index.
 * @param {ServerResponse} response - An HTTP ServerResponse used for cache metadata.
 * @param {string} index - The specific Drupal Search index to be used in the query.
 * @see https://www.drupal.org/docs/contributed-modules/search-api for more information about the Drupal Search API.
 * @returns An array of search results matching the users search term.
 */

const getDrupalSearchResults = async ({
	apiUrl,
	locale,
	query,
	response,
	index = 'articles_index',
}: GetDrupalSearchResultsParams) => {
	const res = await defaultFetch(
		`${apiUrl}/${locale}/jsonapi/index/${index}?filter[fulltext]=${encodeURI(
			query,
		)}`,
		{},
		response,
	);

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return (await res.json()) as TJsonApiBody;
};

export default getDrupalSearchResults;

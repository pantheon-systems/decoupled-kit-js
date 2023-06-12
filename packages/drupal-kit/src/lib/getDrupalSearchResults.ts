import type { TJsonApiBody } from 'jsona/lib/JsonaTypes';
import { ServerResponse } from 'node:http';
import { defaultFetch } from './defaultFetch.js';

interface GetDrupalSearchResultsParams {
	apiUrl: string;
	locale: string;
	query: string;
	response: ServerResponse;
	index?: string;
}

/**
 * Helper function to query the Drupal Search API.
 * @param apiUrl - The base API URL of your query.
 * @param locale - The locale currently in use.
 * @param query - Specific string to search against an index.
 * @param response - An HTTP ServerResponse used for cache metadata.
 * @param index - The specific Drupal Search index to be used in the query.
 * @see {@link https://www.drupal.org/docs/contributed-modules/search-api} for more information about the Drupal Search API.
 * @returns An array of search results matching the query.
 */
export const getDrupalSearchResults = async ({
	apiUrl,
	locale,
	query,
	response,
	index = 'example_index',
}: GetDrupalSearchResultsParams) => {
	const res = await defaultFetch(
		`${apiUrl}/${locale}/jsonapi/index/${index}?filter[fulltext]=${encodeURIComponent(
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

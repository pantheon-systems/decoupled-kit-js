import type { ServerResponse } from 'http';
import fetch from 'isomorphic-fetch';

import { setSurrogateKeyHeader } from '@pantheon-systems/cms-kit';

const defaultCacheControlValue = 'public, s-maxage=600';

/**
 * fetch data from a JSON:API endpoint, bubbling up surrogate keys if possible
 * @param apiUrl the api url for the JSON:API endpoint
 * @param requestInit fetch initialization object
 * @param res response object
 * @param cacheControl optional value to override cache control header, defaults to 'public, s-maxage=600'
 * @returns a promise containing the data for the JSON:API response
 */
const defaultFetch = (
	apiUrl: RequestInfo,
	requestInit: RequestInit = {},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	res?: ServerResponse | boolean,
	cacheControl: string = defaultCacheControlValue,
): Promise<Response> => {
	// Use the existing request headers, or create a new headers object.
	const headers = requestInit?.headers
		? (requestInit.headers as Headers)
		: new Headers();

	// If we have the response object, add the debug header for fetch requests
	// and set appropriate cache-control headers on the active response.
	if (res && typeof res !== 'boolean') {
		// Ensure api response contains surrogate key headers.
		headers.set('Fastly-Debug', '1');
		res.setHeader('Cache-Control', cacheControl);
	}

	// Set the updated headers for fetch.
	requestInit.headers = headers;

	// Get the promise, which we will return.
	const fetchPromise = fetch(apiUrl, requestInit);

	// Parse the response to bubble up surrogate keys if possible.
	fetchPromise
		.then((response) => {
			if (res && response.headers.has('Surrogate-Key')) {
				setSurrogateKeyHeader(
					response.headers.get('Surrogate-Key'),
					res as ServerResponse,
				);
			}
		})
		.catch((error) => console.error('JSON:API fetch failed', error));
	return fetchPromise;
};

export default defaultFetch;

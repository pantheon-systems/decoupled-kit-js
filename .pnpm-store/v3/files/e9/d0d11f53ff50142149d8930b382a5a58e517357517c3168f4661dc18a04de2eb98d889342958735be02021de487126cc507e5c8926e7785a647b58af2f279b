import defaultFetch from './defaultFetch';

import { GenericIndex, ApiIndexResponse, fetchAdapter } from '../types/types';

/**
 * Get an index of resource links for the API
 * @param apiRoot url to the root of JSON:API
 * @param fetch fetch compatible function
 * @returns a promise containing an object with an index of resource links
 */
const fetchApiIndex = (
  apiRoot: string,
  fetch: fetchAdapter = defaultFetch
): Promise<void | GenericIndex> => {
  const apiIndex = fetch(apiRoot)
    .then(response => response.json() as Promise<ApiIndexResponse>)
    .then(data => data.links || false)
    .catch(error => console.error('API index fetch failed', error));
  return apiIndex as Promise<GenericIndex>;
};

export default fetchApiIndex;

import { ServerResponse } from 'http';
import defaultFetch from './defaultFetch';

import { fetchAdapter } from '../types/types';

/**
 * fetch data from a JSON:API endpoint
 * @param apiUrl the api url for the JSON:API endpoint
 * @param requestInit fetch initialization object
 * @param _res response object
 * @param fetch fetch compatible function
 * @returns a promise containing the data for the JSON:API response
 */
const fetchJsonapiEndpoint = (
  apiUrl: string,
  requestInit = {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _res?: ServerResponse | boolean,
  fetch: fetchAdapter = defaultFetch
): Promise<void | Response> => {
  const collection = fetch(apiUrl, requestInit, _res)
    .then(response => response.json() as Promise<void | Response>)
    .then(data => data)
    .catch(error => console.error('JSON:API fetch failed', error));
  return collection;
};

export default fetchJsonapiEndpoint;

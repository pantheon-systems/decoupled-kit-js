import defaultFetch from './defaultFetch';

import { fetchAdapter, stringIndex } from '../types/types';
import { TJsonApiBody } from 'jsona/lib/JsonaTypes';

/**
 * Fetch a token from Drupal
 * @param apiUrl the api url for the JON:API endpoint
 * @param tokenFetchBody object containing body parameters for the token request
 * @param fetch fetch compatible function
 * @returns a promise containing the token api response
 */
const fetchToken = (
  apiUrl: string,
  tokenFetchBody: stringIndex,
  fetch: fetchAdapter = defaultFetch
): Promise<void | TJsonApiBody> => {
  // Convert body object to parameter string
  const body = Object.keys(tokenFetchBody)
    .map(key => `${key}=${tokenFetchBody[key]}`)
    .join('&');

  const tokenPayload = fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  })
    .then(response => response.json() as Promise<TJsonApiBody>)
    .then(data => data)
    .catch(error => console.error('Token fetch failed', error));
  return tokenPayload;
};

export default fetchToken;

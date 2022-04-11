import { ServerResponse } from 'http';
import fetch from 'isomorphic-fetch';

import addSurrogateKeyHeader from '../utils/addSurrogateKeyHeader';
import updateMaxAge from '../utils/updateMaxAge';
/**
 * fetch data from a JSON:API endpoint, bubbling up surrogate keys if possible
 * @param apiUrl the api url for the JSON:API endpoint
 * @param requestInit fetch initialization object
 * @param res response object
 * @returns a promise containing the data for the JSON:API response
 */
const defaultFetch = (
  apiUrl: RequestInfo,
  requestInit: RequestInit = {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  res?: ServerResponse | boolean
): Promise<Response> => {
  // Use the existing request headers, or create a new headers object.
  const headers = requestInit?.headers
    ? (requestInit.headers as Headers)
    : new Headers();
  // If we have the response object, add the debug header.
  if (res) {
    headers.set('Pantheon-Debug', '1');
  }
  // Set the updated headers for fetch.
  requestInit.headers = headers;

  // Get the promise, which we will return.
  const fetchPromise = fetch(apiUrl, requestInit);

  // Parse the response to bubble up surrogate keys if possible.
  fetchPromise
    .then(response => {
      if (res && response.headers.has('Surrogate-Key-Raw')) {
        addSurrogateKeyHeader(
          response.headers.get('Surrogate-Key-Raw'),
          res as ServerResponse
        );
      }

      if ((res as ServerResponse) && response.headers.has('Cache-Control')) {
        updateMaxAge(
          response.headers.get('Cache-Control') as string,
          res as ServerResponse
        );
      }
    })
    .catch(error => console.error('JSON:API fetch failed', error));
  return fetchPromise;
};

export default defaultFetch;

import { ServerResponse } from 'http';

/**
 * Adds Cache control header in the working response.
 * @param cacheControlHeaders Value for cache-control header in API response.
 * @param res The active http.ServerResponse object.
 * @returns The shortest cache-control header found in JSON:API responses.
 */
const updateMaxAge = (
  cacheControlHeader: string,
  res: ServerResponse
): string => {
  /**
   * @param cacheControlHeader {string} a cache control header
   * @returns RegExpExecArray containing a match | null
   */
  const findMaxAge = (cacheControlHeader: string) =>
    /max-age=(\d+)/.exec(cacheControlHeader);

  let newCacheControlHeader: string;
  const currentHeader = res.getHeader('Cache-Control') as string;
  // pass along the no-store header if it has been set in Nextjs
  if (currentHeader && currentHeader.includes('no-store')) {
    return currentHeader;
  }

  const newMaxAgeMatches = findMaxAge(cacheControlHeader);
  if (newMaxAgeMatches) {
    const newMaxAge = Number(newMaxAgeMatches[1]);
    // set max-age to value found in Drupal header
    let maxAge = newMaxAge;
    // get other header values
    const newHeaderValues = cacheControlHeader
      .split(', ')
      .filter(v => !v.includes('max-age'));

    // if we find max-age on the current Next header
    // compare with the Drupal header value
    // and take the smaller value
    const currentMaxAgeMatches = findMaxAge(currentHeader);
    if (currentMaxAgeMatches) {
      const currentMaxAge = Number(currentMaxAgeMatches[1]);
      maxAge = Math.min(currentMaxAge, newMaxAge);
    }
    // set the header on Next's response
    newHeaderValues.unshift(`max-age=${maxAge.toString()}`);
    newCacheControlHeader = newHeaderValues.join(', ');
    res.setHeader('Cache-Control', newCacheControlHeader);
    return newHeaderValues.join(', ');
  }

  // if the current header exists and the header has
  // not already been set, pass it along
  if (currentHeader) {
    newCacheControlHeader = res.getHeader('Cache-Control') as string;
    res.setHeader('Cache-Control', newCacheControlHeader);
    return newCacheControlHeader;
  }
  // if there is no max-age on Drupal's
  // cache-control header, pass it along as is
  res.setHeader('Cache-Control', cacheControlHeader);
  return cacheControlHeader;
};

export default updateMaxAge;

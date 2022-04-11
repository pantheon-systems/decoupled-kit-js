import updateMaxAge from '../updateMaxAge';

// Mock the response object
const mockResponse: any = ({ cacheControlHeader }: any) => {
  const res = {
    getHeader: jest.fn().mockReturnValue(cacheControlHeader),
    setHeader: jest.fn(),
  };
  return res;
};

const drupalCacheControlHeader1 = 'max-age=3600, public';
const drupalCacheControlHeader2 = 'max-age=7200, public';
const nextCacheControlHeader = 'max-age=60, public';
const nextCacheControlHeaderNoStore = 'no-store, public';

describe('updateMaxAge()', () => {
  it("should set Next's cache-control header to the lowest max-age of cache-control headers from Drupal if there are multiple values", () => {
    let res = mockResponse({ cacheControlHeader: drupalCacheControlHeader1 });

    let result = updateMaxAge(drupalCacheControlHeader1, res);
    result = updateMaxAge(drupalCacheControlHeader2, res);

    expect(result).toBe(drupalCacheControlHeader1);
    expect(res.setHeader).toBeCalledTimes(2);
  });

  it("should maintain Next's cache-control header if it's max-age is lower than Drupal's max-age", () => {
    let res = mockResponse({ cacheControlHeader: nextCacheControlHeader });

    const result = updateMaxAge(drupalCacheControlHeader1, res);

    expect(result).toBe(nextCacheControlHeader);
  });

  it("should maintain Next's cache-control header if it's max-age is set on Drupal's header but no-store is set on Next's header", () => {
    let res = mockResponse({
      cacheControlHeader: nextCacheControlHeaderNoStore,
    });

    const result = updateMaxAge(drupalCacheControlHeader1, res);

    expect(result).toBe(nextCacheControlHeaderNoStore);
  });
});

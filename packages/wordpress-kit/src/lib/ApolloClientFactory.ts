import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';

// We're currently adding isomorphic fetch to be used with Jest.
import fetch from 'isomorphic-fetch';

class ApolloClientFactory {
  link: HttpLink;
  cache: InMemoryCache;

  constructor(uri: string, cache?: InMemoryCache) {
    // Using HttpLink is for a Jest related fix, but it opens the door to do
    // things like make the fetch library configurable, automatically bubble
    // up cache-control headers, etc.
    this.link = new HttpLink({ uri, fetch });
    this.cache = cache || new InMemoryCache();
  }

  /**
   * Creates an instance of ApolloClient using the specified uri and cache.
   */
  create(): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
      link: this.link,
      cache: this.cache,
    });
  }
}

export default ApolloClientFactory;

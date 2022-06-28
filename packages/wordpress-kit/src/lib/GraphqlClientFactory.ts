import { GraphQLClient } from 'graphql-request';
import type { PatchedRequestInit } from 'graphql-request/dist/types';

class GraphQLClientFactory {
  endpoint: string;
  options: PatchedRequestInit;

  constructor(endpoint: string, options: PatchedRequestInit = {}) {
    this.endpoint = endpoint;
    this.options = options;
  }

  create(): GraphQLClient {
    return new GraphQLClient(this.endpoint, this.options);
  }
}

export default GraphQLClientFactory;

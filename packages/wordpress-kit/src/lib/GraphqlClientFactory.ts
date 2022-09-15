import { GraphQLClient } from 'graphql-request';
import type { PatchedRequestInit } from 'graphql-request/dist/types';

/**
 * Creates instances of `graphql-request` GraphQLClient with the given options
 * @params endpoint - A WordPress GraphQL endpoint
 * @params options - A RequestInit object. {@link PatchedRequestInit}
 */
class GraphQLClientFactory {
	/**
	 * A WordPress GraphQL endpoint
	 */
	endpoint: string;
	/**
	 * {@link PatchedRequestInit}
	 */
	options: PatchedRequestInit;

	constructor(endpoint: string, options: PatchedRequestInit = {}) {
		this.endpoint = endpoint;
		this.options = options;
	}

	/**
	 * Creates an instance of `graphql-request` GraphQLClient based on the endpoint and options
	 */
	create(): GraphQLClient {
		return new GraphQLClient(this.endpoint, this.options);
	}
}

export default GraphQLClientFactory;

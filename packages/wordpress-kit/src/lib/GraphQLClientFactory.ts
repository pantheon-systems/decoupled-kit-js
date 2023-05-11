import { GraphQLClient } from 'graphql-request';
import type { RequestConfig } from 'graphql-request/src/types';
/**
 * Creates instances of `graphql-request` {@link GraphQLClient} with the given options.
 * @params endpoint - A WordPress GraphQL endpoint.
 * @params options - A {@link RequestConfig} object.
 */
export class GraphQLClientFactory {
	/**
	 * A WordPress GraphQL endpoint
	 */
	endpoint: string;
	/**
	 * {@link RequestOptions}
	 */
	options: RequestConfig;

	constructor(endpoint: string, options?: RequestConfig) {
		this.endpoint = endpoint;
		this.options = {
			...options,
			headers: {
				'Fastly-Debug': '1',
			},
			jsonSerializer:
				options?.method === 'GET'
					? { parse: JSON.parse, stringify: JSON.stringify }
					: undefined,
		};
	}
	/**
	 * Creates an instance of `graphql-request` GraphQLClient based on the endpoint and options
	 */
	create(): GraphQLClient {
		return new GraphQLClient(this.endpoint, this.options);
	}
}

import { gql, GraphQLClient } from 'graphql-request';
import { vi } from 'vitest';
import { GraphQLClientFactory } from '../src/lib/GraphQLClientFactory';
import basicPostsQuery from './data/basicPostsQuery.json';

afterEach(() => {
	vi.restoreAllMocks();
});

test('Create graphql-request Client instance from factory', () => {
	const client = new GraphQLClientFactory('http://my-wp.test/graphql').create();
	expect(client).toBeInstanceOf(GraphQLClient);
});

test('request and response middleware add appropriate headers', async () => {
	const client = new GraphQLClientFactory('http://my-wp.test/graphql').create();
	const res = await client.rawRequest(gql`
		query BasicPostsQuery {
			posts {
				edges {
					node {
						id
					}
				}
			}
		}
	`);
	expect(res.data).toEqual(basicPostsQuery);
	expect(res.headers.has('surrogate-key-raw')).toBeTruthy();
});

test('client is configured for GET requests', () => {
	const getClient = new GraphQLClientFactory('http://my-wp.test/graphql', {
		method: 'GET',
	});

	expect(getClient.options.method).toEqual('GET');
});

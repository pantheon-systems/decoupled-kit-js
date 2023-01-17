import GraphqlClientFactory from '../src/lib/graphqlClient/GraphqlClientFactory';
import { GraphQLClient, gql } from 'graphql-request';
import { vi } from 'vitest';
import basicPostsQuery from './data/basicPostsQuery.json';

afterEach(() => {
	vi.restoreAllMocks();
});

test('Create graphql-request Client instance from factory', () => {
	const client = new GraphqlClientFactory('http://my-wp.test/graphql').create();
	expect(client).toBeInstanceOf(GraphQLClient);
});

test('request and response middleware add appropriate headers', async () => {
	const client = new GraphqlClientFactory('http://my-wp.test/graphql').create();
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

test('client is configured for GET requests', async () => {
	const client = new GraphqlClientFactory('http://my-wp.test/graphql').create();
	const getClient = new GraphqlClientFactory('http://my-wp.test/graphql', {
		method: 'GET',
	}).create();

	expect(client).not.toMatchObject(getClient);
});

import { GraphqlClientFactory } from '@pantheon-systems/wordpress-kit';

export const client = new GraphqlClientFactory(process.env.backendUrl).create();
export const paginationClient = new GraphqlClientFactory(
	'https://dev-decoupled-wp-mock-data.pantheonsite.io/wp/graphql',
).create();

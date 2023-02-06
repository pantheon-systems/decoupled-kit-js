import { GraphqlClientFactory } from '@pantheon-systems/wordpress-kit';

export const client = new GraphqlClientFactory(process.env.backendUrl, {
	method: 'GET',
}).create();
export const paginationClient = new GraphqlClientFactory(
	'https://dev-decoupled-wp-mock-data.pantheonsite.io/wp/graphql',
	{
		method: 'GET',
	},
).create();

export const getAuthCredentials = () => {
	const credentials = `${process.env.WP_APPLICATION_USERNAME}:${process.env.WP_APPLICATION_PASSWORD}`;
	const encodedCredentials = Buffer.from(credentials, 'binary').toString(
		'base64',
	);
	return encodedCredentials;
};

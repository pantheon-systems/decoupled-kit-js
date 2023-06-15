import { gql, GraphQLClientFactory } from '@pantheon-systems/wordpress-kit';
import { PrivatePostsQuery } from './types';

const wpGraphqlEndpoint =
	process.env.WPGRAPHQL_URL || process.env.PANTHEON_CMS_ENDPOINT || '';

const client = new GraphQLClientFactory(wpGraphqlEndpoint).create();

export const privatePostsQuery = async () => {
	if (
		!process.env.WP_APPLICATION_USERNAME ||
		!process.env.WP_APPLICATION_PASSWORD
	) {
		console.warn(`No credentials set.
To fetch private posts, set the WP_APPLICATION_USERNAME and
WP_APPLICATION_PASSWORD environment variables.`);
	}

	const credentials = `${process.env.WP_APPLICATION_USERNAME || ''}:${
		process.env.WP_APPLICATION_PASSWORD || ''
	}`;
	const encodedCredentials = Buffer.from(credentials, 'binary').toString(
		'base64',
	);
	client.setHeader('Authorization', `Basic ${encodedCredentials}`);

	const query = gql`
		query LatestPostsQuery {
			posts(where: { status: PRIVATE }) {
				edges {
					node {
						id
					}
				}
			}
		}
	`;

	const {
		posts: { edges },
	} = await client.request<PrivatePostsQuery>(query);

	return edges.map(({ node }) => node);
};

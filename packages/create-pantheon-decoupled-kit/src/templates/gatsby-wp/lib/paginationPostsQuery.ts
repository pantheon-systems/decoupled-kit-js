import { gql, GraphQLClientFactory } from '@pantheon-systems/wordpress-kit';
import { PostsQuery } from './types';

const paginationClient = new GraphQLClientFactory(
	'https://dev-decoupled-wp-mock-data.pantheonsite.io/wp/graphql',
).create();

export const paginationPostsQuery = async () => {
	try {
		const query = gql`
			query paginationPostsQuery {
				posts(first: 50) {
					edges {
						node {
							id
							title
							excerpt
						}
					}
				}
			}
		`;

		const {
			posts: { edges },
		} = await paginationClient.request<PostsQuery>(query);

		return edges.map(({ node }) => node);
	} catch (error) {
		if (error instanceof Error) {
			console.error(
				'Could not fetch pagination example posts:\n\n',
				error.message,
				'\n\nIf https://dev-decoupled-wp-mock-data.pantheonsite.io is not available, try building again when it is. You may set up your own mock data with FakerPress: https://wordpress.org/plugins/fakerpress/',
			);
		}
		return [];
	}
};

import { gql, GraphQLClientFactory } from '@pantheon-systems/wordpress-kit';
import { PostsQuery } from './types';

const paginationClient = new GraphQLClientFactory(
	'https://dev-decoupled-wp-mock-data.pantheonsite.io/wp/graphql',
).create();

export const paginationPostsQuery = async () => {
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
};

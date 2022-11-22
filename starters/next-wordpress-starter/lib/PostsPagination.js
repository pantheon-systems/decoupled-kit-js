import { gql } from '@pantheon-systems/wordpress-kit';
import { paginationClient } from './WordPressClient';

export async function paginationPostsQuery() {
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
		data: {
			posts: { edges },
		},
		headers,
	} = await paginationClient.rawRequest(query);
	const posts = edges.map(({ node }) => node);
	return { posts, headers };
}

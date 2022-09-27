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
		posts: { edges },
	} = await paginationClient.request(query);

	return edges.map(({ node }) => node);
}

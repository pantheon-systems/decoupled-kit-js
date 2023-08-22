import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from './WordPressClient';

export async function getSearchResults(searchTerm) {
	const query = gql`
		query LatestPostsQuery($searchTerm: String) {
			posts(where: { search: $searchTerm }) {
				edges {
					node {
						uri
						title
						summary: excerpt
						databaseId
						contentType {
							node {
								name
							}
						}
					}
				}
			}
			pages(where: { search: $searchTerm }) {
				edges {
					node {
						uri
						title
						summary: content
						databaseId
						contentType {
							node {
								name
							}
						}
					}
				}
			}
		}
	`;

	const {
		data: {
			posts: { edges: postEdges },
			pages: { edges: pageEdges },
		},
		headers,
	} = await client.rawRequest(query, { searchTerm });
	const posts = postEdges.map(({ node }) => node);
	const pages = pageEdges.map(({ node }) => node);
	const searchResults = [].concat(posts, pages);

	return { searchResults, headers };
}

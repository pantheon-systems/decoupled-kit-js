import { gql } from '@pantheon-systems/wordpress-kit';
import { client, getAuthCredentials } from './WordPressClient';

export async function getLatestPosts(totalPosts) {
	const query = gql`
		query LatestPostsQuery($totalPosts: Int!) {
			posts(first: $totalPosts) {
				edges {
					node {
						id
						uri
						title
						featuredImage {
							node {
								altText
								sourceUrl
							}
						}
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
	} = await client.rawRequest(query, { totalPosts });
	const posts = edges.map(({ node }) => node);
	return { posts, headers };
}

export async function getPostByUri(uri) {
	const uriString = `${uri.join('/')}`;
	const query = gql`
		query PostBySlugQuery($uriString: ID!) {
			post(id: $uriString, idType: URI) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}
	`;

	const {
		data: { post },
		headers,
	} = await client.rawRequest(query, { uriString });

	return { post, headers };
}

export async function getPostPreview(id) {
	const credentials = getAuthCredentials();
	client.setHeaders({ Authorization: `Basic ${credentials}` });

	const query = gql`
		query PostPreviewQuery($id: ID!) {
			post(id: $id, idType: DATABASE_ID, asPreview: true) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}
	`;

	const { post } = await client.request(query, { id });

	return { post };
}

import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from './WordPressClient';

export async function getAllPagesUri() {
	const query = gql`
		query AllPagesURI {
			pages {
				edges {
					node {
						id
						uri
					}
				}
			}
		}
	`;

	const {
		pages: { edges },
	} = await client.request(query);

	return edges.map(({ node }) => node.uri.replaceAll('/', ''));
}

export async function getLatestPages() {
	const query = gql`
		query LatestPagesQuery {
			pages(first: 10) {
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
		pages: { edges },
	} = await client.request(query);

	return edges.map(({ node }) => node);
}

export async function getPageByUri(uri) {
	const query = gql`
		query PageByURIquery($uri: ID!) {
			page(id: $uri, idType: URI) {
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

	const { page } = await client.request(query, { uri });

	return page;
}

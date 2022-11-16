import { gql } from '@pantheon-systems/wordpress-kit';
import { client, getAuthCredentials } from './WordPressClient';

export async function getLatestPages(totalPages) {
	const query = gql`
		query LatestPagesQuery($totalPages: Int!) {
			pages(first: $totalPages) {
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
	} = await client.request(query, { totalPages });

	return edges.map(({ node }) => node);
}

export async function getPageByUri(uri) {
	const uriString = `${uri.join('/')}`;
	const query = gql`
		query PageByURIquery($uriString: ID!) {
			page(id: $uriString, idType: URI) {
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

	const { page } = await client.request(query, { uriString });

	return page;
}

export async function getPagePreview(id) {
	const credentials = getAuthCredentials();
	client.setHeaders({ Authorization: `Basic ${credentials}` });

	const query = gql`
		query PagePreviewQuery($id: ID!) {
			page(id: $id, idType: DATABASE_ID, asPreview: true) {
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

	const { page } = await client.request(query, { id });

	return page;
}

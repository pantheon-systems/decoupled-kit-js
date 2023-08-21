import { taggedTemplateHelpers as utils } from '@cli/utils';

const postUriAcf = /* jsx */ `
export async function getPostByUri(uri) {
	const uriString = uri.join('/');
	const query = gql ${utils.backticks`
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
				relatedContent {
					relatedPosts {
						... on Post {
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
		}
	`};

	const {
		data: { post },
		headers,
	} = await client.rawRequest(query, { uriString });

	return { post, headers };
}
`;

const postUri = /* jsx */ `
export async function getPostByUri(uri) {
	const uriString = uri.join();
	const query = gql ${utils.backticks`
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
	`};

	const {
		data: { post },
		headers,
	} = await client.rawRequest(query, { uriString });

	return { post, headers };
}
`;
const searchQuery = /* jsx */ `
export async function getSearchedPosts(searchTerm) {
	const query = gql ${utils.backticks`
		query LatestPostsQuery($searchTerm: String) {
			posts(where: { search: $searchTerm }) {
				edges {
					node {
						id
						uri
						title
						excerpt
						postId
					}
				}
			}
		}
	`};

	const {
		data: {
			posts: { edges },
		},
		headers,
	} = await client.rawRequest(query, { searchTerm });
	const posts = edges.map(({ node }) => node);
	return { posts, headers };
}
`;
export const postQueryTemplate = ({
	search,
	wpAcfAddon,
}: {
	search: boolean;
	wpAcfAddon: boolean;
}) => /* jsx */ `import { gql } from '@pantheon-systems/wordpress-kit';
import { client, getAuthCredentials } from './WordPressClient';

export async function getLatestPosts(totalPosts) {
	const query = gql ${utils.backticks`
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
	`};

	const {
		data: {
			posts: { edges },
		},
		headers,
	} = await client.rawRequest(query, { totalPosts });
	const posts = edges.map(({ node }) => node);
	return { posts, headers };
}
${utils.if(wpAcfAddon, postUriAcf)}
${utils.if(!wpAcfAddon, postUri)}
export async function getPostPreview(id) {
	const credentials = getAuthCredentials();
	client.setHeaders({ Authorization: ${utils.backticks`Basic \${credentials}`} });

	const query = gql ${utils.backticks`
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
	`};

	const { post } = await client.request(query, { id });

	return { post };
}
${utils.if(search, searchQuery)}
`;

import { taggedTemplateHelpers as utils } from '@cli/utils';

export const postUriQuery = (wpAcfAddon: boolean) => /* GraphQL */ `
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
			${utils.if(
				wpAcfAddon,
				/* GraphQL */ `relatedContent {
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
			}`,
			)}
		}
	}
`;

export const latestPostsQuery = () => /* GraphQL */ `
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

export const postPreview = () => /* GraphQL */ `
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

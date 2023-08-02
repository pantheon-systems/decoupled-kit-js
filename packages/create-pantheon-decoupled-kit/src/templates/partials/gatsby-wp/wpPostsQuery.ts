import { taggedTemplateHelpers as utils } from '@cli/utils';
/**
 * @param relatedContent should be true when using the ACF addon.
 * @returns wpPostsQuery with or without relatedContent.
 */
export const wpPostsQuery = (relatedContent: boolean) => /* GraphQL */ `
		query WpPosts {
			# Query all WordPress posts sorted by date
			allWpPost(sort: { date: DESC }) {
				edges {
					previous {
						id
						title
						uri
					}
					node {
						id
						uri
						title
						content
						date
						excerpt
						featuredImage {
							node {
								localFile {
									childImageSharp {
										gatsbyImageData(
											layout: CONSTRAINED
											placeholder: DOMINANT_COLOR
											aspectRatio: 1.77778 # 16/9
										)
									}
								}
							}
						}
						${utils.if(
							relatedContent,
							/* GraphQL */ `relatedContent {
							fieldGroupName
							relatedPosts {
								... on WpPost {
									id
									content
									title
									excerpt
									uri
									date(formatString: "MMMM DD, YYYY")
									featuredImage {
										node {
											altText
											localFile {
												childImageSharp {
													gatsbyImageData(
														quality: 100
														placeholder: DOMINANT_COLOR
														layout: FULL_WIDTH
													)
												}
											}
										}
									}
								}
							}
						}`,
						)}
					}
					next {
						id
						title
						uri
					}
				}
			}
		}
	`;

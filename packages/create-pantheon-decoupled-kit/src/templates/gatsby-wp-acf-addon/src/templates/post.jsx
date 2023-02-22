import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Post from '../components/post'
import { withGrid, PostGridItem } from '../components/grid'

const PostTemplate = ({ data: { previous, next, post }, location }) => {
	const PostGrid = withGrid(PostGridItem)

	return (
		<Layout>
			<Post post={post} next={next} previous={previous} />
			{post.relatedContent?.relatedContent ? (
                <section>
                    <header className="prose text-2xl mx-auto mt-20">
						<h2 className="text-center mx-auto">Related Content</h2>
					</header>
					<PostGrid data={post.relatedContent.relatedContent.map(item => ({post: item}))} />
                </section>
            ) : null}
		</Layout>
	)
}

export default PostTemplate

export function Head({ data: { post } }) {
	return <Seo title={post.title} description={post.excerpt} />
}

export const pageQuery = graphql`
	query PostById(
		# these variables are passed in via createPage.pageContext in gatsby-node.js
		$id: String!
		$previousPostId: String
		$nextPostId: String
	) {
		# selecting the current post by id
		post: wpPost(id: { eq: $id }) {
			id
			excerpt
			content
			title
			date(formatString: "MMMM DD, YYYY")
			featuredImage {
				node {
					altText
					localFile {
						childImageSharp {
							gatsbyImageData(
								quality: 100
								placeholder: TRACED_SVG
								layout: FULL_WIDTH
							)
						}
					}
				}
			}
			relatedContent {
				fieldGroupName
				relatedContent {
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
										placeholder: TRACED_SVG
										layout: FULL_WIDTH
									)
								}
							}
						}
					}
				  }
				}
			}
		}
		# this gets us the previous post by id (if it exists)
		previous: wpPost(id: { eq: $previousPostId }) {
			uri
			title
		}
		# this gets us the next post by id (if it exists)
		next: wpPost(id: { eq: $nextPostId }) {
			uri
			title
		}
	}
`

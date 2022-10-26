import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { withGrid, PostGridItem } from '../components/grid'
import Paginator from '../components/paginator'

const PostIndexTemplate = ({
	data,
	pageContext: { routing, itemsPerPage },
	location,
}) => {
	const posts = data.allWpPost.nodes

	const PostGrid = withGrid(PostGridItem)

	const RenderCurrentItems = ({ currentItems }) => {
		return <PostGrid data={currentItems} />
	}

	return (
		<Layout>
			<header className="prose text-2xl mx-auto mt-20">
				<h1 className="text-center mx-auto">Posts</h1>
			</header>
			<div className="max-w-screen-lg mx-auto">
				<section>
					<Paginator
						data={posts}
						itemsPerPage={itemsPerPage}
						location={location}
						routing={routing}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	)
}

export default PostIndexTemplate

export function Head() {
	return <Seo title="All posts" />
}

export const pageQuery = graphql`
	query PostList {
		allWpPost(limit: 101) {
			nodes {
				excerpt
				uri
				featuredImage {
					node {
						sourceUrl
						altText
						localFile {
							childImageSharp {
								gatsbyImageData(quality: 100, layout: CONSTRAINED)
							}
						}
					}
				}
				date(formatString: "MMMM DD, YYYY")
				title
				excerpt
			}
		}
	}
`

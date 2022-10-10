import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { withGrid, PostGridItem } from '../components/grid'

const PageHeader = () => (
	<div className="prose sm:prose-xl mt-20 flex flex-col mx-auto max-w-fit">
		<h1 className="prose text-4xl text-center h-full">
			Welcome to{' '}
			<a
				className="text-purple-600 no-underline hover:underline"
				href="https://www.gatsbyjs.com/"
			>
				Gatsby!
			</a>
		</h1>

		<div className="text-2xl">
			<div className="not-prose bg-black text-white rounded flex items-center justify-center p-4">
				Decoupled WordPress on{' '}
				<img src="/pantheon.png" alt="Pantheon Logo" width={191} height={60} />
			</div>
		</div>
	</div>
)

const Index = ({ data, pageContext: { nextPagePath, previousPagePath } }) => {
	const posts = data.allWpPost.nodes

	const PostGrid = withGrid(PostGridItem)

	return (
		<Layout isHomePage>
			<PageHeader />

			<section>
				<PostGrid data={posts} />
			</section>

			<nav className="flex max-w-5xl mx-auto mt-8 px-6">
				{previousPagePath && (
					<Link className="underline font-medium" to={previousPagePath}>
						{' '}
						← Previous page
					</Link>
				)}
				{nextPagePath && (
					<Link className="underline font-medium ml-auto" to={nextPagePath}>
						Next page →
					</Link>
				)}
			</nav>
		</Layout>
	)
}

export default Index

export function Head() {
	return <Seo title="All posts" />
}

export const pageQuery = graphql`
	query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
		allWpPost(
			sort: { fields: [date], order: DESC }
			limit: $postsPerPage
			skip: $offset
		) {
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

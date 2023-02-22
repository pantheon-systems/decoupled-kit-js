import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Page from '../components/page'

const PageTemplate = ({ data: { page }, pageContext: { next, previous } }) => {
	return (
		<Layout>
			<Page page={page} next={next} previous={previous} />
		</Layout>
	)
}

export default PageTemplate

export const pageQuery = graphql`
	query PageById(
		# these variables are passed in via createPage.pageContext in gatsby-node.js
		$id: String!
	) {
		page: wpPage(id: { eq: $id }) {
			id
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
		}
	}
`
export function Head({ data: { page } }) {
	// Todo - add truncated content as description
	return <Seo title={page.title} />
}

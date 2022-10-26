import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { PageGridItem, withGrid } from '../components/grid'
import Paginator from '../components/paginator'

const PageIndexTemplate = ({
	data,
	pageContext: { itemsPerPage, routing },
	location,
}) => {
	const PageGrid = withGrid(PageGridItem)
	const pages = data.allWpPage.nodes

	const RenderCurrentItems = ({ currentItems }) => {
		return <PageGrid data={currentItems} />
	}

	return (
		<Layout isHomePage>
			<header className="prose text-2xl mx-auto mt-20">
				<h1 className="text-center mx-auto">Pages</h1>
			</header>
			<div className="max-w-screen-lg mx-auto">
				<section>
					<Paginator
						data={pages}
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

export default PageIndexTemplate

export function Head() {
	return <Seo title="All pages" />
}

export const pageQuery = graphql`
	query WpPages {
		allWpPage(limit: 100) {
			nodes {
				id
				title
				uri
				featuredImage {
					node {
						localFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	}
`

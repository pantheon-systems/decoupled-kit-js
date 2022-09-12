import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { PageGridItem, withGrid } from '../components/grid'

const PageIndexTemplate = ({ pageContext: { pages } }) => {
	const PageGrid = withGrid(PageGridItem)

	return (
		<Layout isHomePage>
			<Seo title="All pages" />
			<header className="prose text-2xl mx-auto mt-20">
				<h1 className="text-center mx-auto">Pages</h1>
			</header>
			<section>
				<PageGrid data={pages} />
			</section>
		</Layout>
	)
}

export default PageIndexTemplate

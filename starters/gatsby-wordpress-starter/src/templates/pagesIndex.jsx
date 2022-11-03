import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { PageGridItem, withGrid } from '../components/grid'
import Paginator from '../components/paginator'

const PageIndexTemplate = ({
	pageContext: { itemsPerPage, routing, pages },
	location,
}) => {
	const PageGrid = withGrid(PageGridItem)

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

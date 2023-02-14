import React from 'react'
import Paginator from '../components/paginator'

import Layout from '../components/layout'
import Seo from '../components/seo'

const PaginationPostsExample = ({
	pageContext: { pagPosts, postsPerPage, routing, breakpoints },
	location,
}) => {
	const RenderCurrentItems = ({ currentItems }) => {
		return currentItems.map(item => {
			return (
				<article key={item.title} className="flex flex-col p-3 mb-10">
					<h2 className="justify-start my-auto text-2xl mb-2">{item.title}</h2>
					<div
						className="max-w-prose my-2 [&>p]:my-0"
						dangerouslySetInnerHTML={{ __html: item.excerpt }}
					/>
				</article>
			)
		})
	}

	return (
		<Layout isHomePage>
			<div className="prose max-w-screen mx-auto">
				<section className="flex flex-col">
					<h1 className="my-10">Pagination example</h1>
					<Paginator
						data={pagPosts}
						itemsPerPage={postsPerPage}
						location={location}
						breakpoints={breakpoints}
						routing={routing}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	)
}

export default PaginationPostsExample

export function Head() {
	return <Seo title="Paginated Posts Example" />
}

import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const ExamplesPageTemplate = ({ footerMenu, pageContext: { routing } }) => {
	return (
		<Layout footerMenu={footerMenu}>
			<div className="prose lg:prose-xl mt-10 flex flex-col mx-auto max-h-screen">
				<h1>Examples</h1>

				<Link to="/">
					<span className="w-full underline cursor-pointer">Home &rarr;</span>
				</Link>

				<div className="max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
					<p>
						This page outlines a growing list of common use cases that can be
						used as a reference when building using this starter kit. If you
						don&apos;t need them for your site, feel free to delete the
						`pages/examples` directory in your codebase.
					</p>
					<ul>
						<li>
							<Link to={`/examples/pagination${routing ? '/1' : ''}`}>
								Pagination
							</Link>{' '}
							- a paginated list with a large dataset.
						</li>
						<li>
							<Link to={`/examples/auth-api`}>API Authorization</Link> -
							confirms that Gatsby is able to make authenticated requests to
							WordPress&apos; API.
						</li>
					</ul>
				</div>
			</div>
		</Layout>
	)
}

export default ExamplesPageTemplate

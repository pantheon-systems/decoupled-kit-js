import React from 'react'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Page = ({
	page: { title, date, featuredImage, content },
	next,
	previous,
}) => {
	return (
		<article className="prose lg:prose-xl mt-10 mx-auto">
			<h1>{title}</h1>
			<p className="text-sm text-gray-600">{new Date(date).toDateString()}</p>

			<Link className="font-normal" to="/pages">
				Pages &rarr;
			</Link>

			<div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
				{featuredImage && (
					<div className="relative w-full rounded-lg shadow-lg overflow-hidden mb-10">
						<GatsbyImage
							priority
							image={
								featuredImage.node.localFile.childImageSharp.gatsbyImageData
							}
							layout="fill"
							objectFit="cover"
							alt={featuredImage.node.altText || title}
						/>
					</div>
				)}
			</div>

			{content ? (
				<div
					className="break-words mt-12"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			) : (
				<p>Sorry, no page data was found at this route.</p>
			)}

			<hr className="mt-10" />

			<nav className="flex flex-wrap px-6">
				{previous && (
					<Link className="underline font-medium" to={`/pages${previous.uri}`}>
						← {previous.title}
					</Link>
				)}
				{next && (
					<Link
						className="underline font-medium ml-auto"
						to={`/pages${next.uri}`}
					>
						{next.title} →
					</Link>
				)}
			</nav>
		</article>
	)
}

export default Page

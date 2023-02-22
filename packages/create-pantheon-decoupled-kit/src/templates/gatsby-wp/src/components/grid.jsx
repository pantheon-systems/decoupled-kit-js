import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const GradientPlaceholder = () => (
	<div className="w-full h-full bg-gradient-to-b from-blue-100 to-blue-500" />
)

export const withGrid = Component => {
	const GridedComponent = ({ data, ...props }) => {
		if (!data || !data.length) {
			return props.contentType ? (
				<h2 className="text-xl text-center mt-14">
					No {props.contentType} found 🏜
				</h2>
			) : null
		}

		return (
			<div
				className={`mt-12 grid gap-5 max-w-content mx-auto lg:grid-cols-3 lg:max-w-screen-lg`}
			>
				{data.map((content, i) => {
					return <Component key={i} content={content} {...props} />
				})}
			</div>
		)
	}

	return GridedComponent
}

export const PostGridItem = ({ content: { post } }) => {
	const imageData =
		post?.featuredImage?.node.localFile.childImageSharp.gatsbyImageData || ''
	const altText = post?.featuredImage?.node.altText || post.title

	return (
		<Link to={`/posts${post.uri}`}>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
				<div className="flex-shrink-0 relative h-40">
					{imageData !== '' ? (
						<GatsbyImage
							image={imageData}
							className="h-full w-full"
							objectFit="fit"
							alt={altText}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
					{post.title} &rarr;
				</h2>
			</div>
		</Link>
	)
}

export const PageGridItem = ({ content: { page } }) => {
	const imageData =
		page?.featuredImage?.node.localFile.childImageSharp.gatsbyImageData || ''
	const altText = page?.featuredImage?.node.altText || page.title

	return (
		<Link to={`/pages${page.uri}`}>
			<div className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer border-2 h-full hover:border-indigo-500">
				<div className="flex-shrink-0 relative h-40">
					{imageData !== '' ? (
						<GatsbyImage
							image={imageData}
							className="h-full w-full"
							objectFit="fit"
							alt={altText}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className="my-4 mx-6 text-xl leading-7 font-semibold text-gray-900">
					{page.title} &rarr;
				</h2>
			</div>
		</Link>
	)
}

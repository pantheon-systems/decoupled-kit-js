/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, lang, meta, title }) => {
	const { wp, wpUser } = useStaticQuery(
		graphql`
			query {
				wp {
					generalSettings {
						title
						description
					}
				}

				# if there's more than one user this would need to be filtered to the main user
				wpUser {
					twitter: name
				}
			}
		`,
	)

	const metaDescription = description || wp.generalSettings?.description
	const defaultTitle = wp.generalSettings?.title

	const titleTemplate = defaultTitle ? `${title} | ${defaultTitle}` : null

	return (
		<>
			{/* TODO- Find a way to pass it to the gatsby-ssr.js
			htmlAttributes={{
				lang,
			}} */}
			<title>{titleTemplate}</title>
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={wpUser?.twitter || ''} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={metaDescription} />
		</>
	)
}

Seo.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
}

Seo.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default Seo

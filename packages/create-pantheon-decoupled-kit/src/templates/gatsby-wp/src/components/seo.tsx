import { graphql, useStaticQuery } from 'gatsby';

/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * @see {@link https://www.gatsbyjs.com/docs/use-static-query/}
 */
const Seo = ({
	title,
	description,
}: {
	title: string;
	description?: string;
}) => {
	const {
		wp: { generalSettings },
		wpUser,
	} = useStaticQuery<{
		wp: { generalSettings: Queries.WpGeneralSettings };
		wpUser: Queries.WpUser;
	}>(graphql`
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
	`);

	const metaDescription = description || String(generalSettings?.description);
	const defaultTitle = generalSettings?.title;
	const titleTemplate = defaultTitle ? `${title} | ${defaultTitle}` : null;

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
			<meta name="twitter:creator" content={String(wpUser?.twitter) || ''} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={metaDescription} />
		</>
	);
};

export default Seo;

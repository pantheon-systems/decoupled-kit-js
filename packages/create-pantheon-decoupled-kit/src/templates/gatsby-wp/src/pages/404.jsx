import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './404.module.css'
const NotFoundPage = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title

	return (
		<Layout location={location} title={siteTitle}>
			<div className={styles.container}>
				<h2>404: Could not find the requested page</h2>
			</div>
		</Layout>
	)
}

export default NotFoundPage

export function Head() {
	return <Seo title="404: Not Found" />
}

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

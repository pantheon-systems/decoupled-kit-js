import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './authApi.module.css'

const AuthApiExampleTemplate = ({ pageContext: { privatePosts } }) => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1 className={styles.containerTitle}>API Authorization Example</h1>

				<Link to="/">
					<span>Home &rarr;</span>
				</Link>

				<div className={styles.content}>
					{privatePosts?.length > 0 ? (
						<p>
							🎉 Gatsby was able to successfully make an authenticated request
							to WordPress! 🎉
						</p>
					) : (
						<>
							<p>
								Gatsby was unable to make an authorized request to the WordPress
								API. Please check your .env.development.local file to ensure
								that your <code>WP_APPLICATION_USERNAME</code> and{' '}
								<code>WP_APPLICATION_PASSWORD</code> are set correctly.
							</p>
							<p>
								For more information on how to set these values, please see{' '}
								<a href="https://decoupledkit.pantheon.io/docs/frontend-starters/gatsby/gatsby-wordpress/setting-environment-variables">
									Setting Environment Variables
								</a>
							</p>
						</>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default AuthApiExampleTemplate

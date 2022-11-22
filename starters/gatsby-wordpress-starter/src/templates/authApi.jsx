import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AuthApiExampleTemplate = ({ pageContext: { privatePosts } }) => {
	return (
		<Layout>
			<div className="prose lg:prose-xl mt-10 flex flex-col mx-auto max-h-screen">
				<h1>API Authorization Example</h1>

				<Link to="/">
					<span className="w-full underline cursor-pointer">Home &rarr;</span>
				</Link>

				<div className="mt-12 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-screen-lg">
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
								that your <code>WP_APPLICATION_USERNAME</code> and
								<code>WP_APPLICATION_PASSWORD</code> are set correctly.
							</p>
							<p>
								For more information on how to set these values, please see{' '}
								<a href="https://github.com/pantheon-systems/decoupled-kit-js/blob/canary/web/docs/Frontend%20Starters/Gatsby/Gatsby%20%2B%20WordPress/setting-environment-variables.md">
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

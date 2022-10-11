import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
	const {
		wpMenu: {
			menuItems: { nodes },
		},
	} = useStaticQuery(graphql`
		query MenuQuery {
			wpMenu(name: { eq: "Example Menu" }) {
				id
				menuItems {
					nodes {
						id
						path
						label
					}
				}
			}
		}
	`)

	const FooterMenu = () => (
		<nav className="flex flex-col max-w-lg mx-auto lg:max-w-screen-lg">
			<ul>
				{nodes.map(({ id, label, path }, i) => {
					return (
						<li
							key={id + i}
							className="ml-3 list-disc text-blue-300 hover:text-blue-100"
						>
							<Link
								className="text-blue-300 hover:text-blue-100 focus:text-purple-600 active:text-purple-300 "
								to={`/posts${path}`}
							>
								{label}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)

	return (
		<footer className="w-full text-white bg-black p-4 mt-12">
			<FooterMenu />
			<div className="flex my-4 p-2">
				<span className="mx-auto">
					© {new Date().getFullYear()} Built with{' '}
					<a
						className="text-purple-300 underline hover:text-blue-100"
						href="https://www.gatsbyjs.com"
					>
						Gatsby
					</a>{' '}
					and{' '}
					<a
						className="text-blue-200 underline hover:text-blue-100"
						href="https://wordpress.org/"
					>
						WordPress
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer

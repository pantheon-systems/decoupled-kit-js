import React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
const Layout = ({ isHomePage, children }) => {
	return (
		<div className="min-h-screen max-h-screen min-w-screen max-w-screen flex flex-col">
			<div className="my-0 pt-10 px-5 text-xl" data-is-root-path={isHomePage}>
				<nav>
					<ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between max-w-screen-sm mx-auto">
						{[
							['🏠 Home', '/'],
							['📰 Posts', '/posts'],
							['📑 Pages', '/pages'],
							['⚛️ Examples', '/examples'],
						].map(([title, href], i) => (
							<li
								className={`${href === '/' ? 'mr-auto' : 'mx-4'}`}
								key={`key-${i}`}
							>
								<Link className="font-sans hover:underline" to={href}>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<main className="mb-auto">{children}</main>

			<Footer />
		</div>
	)
}

export default Layout

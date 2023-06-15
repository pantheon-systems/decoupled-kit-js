import { Link } from 'gatsby';
import Footer from './footer';
import * as styles from './layout.module.css';

const Layout = ({
	isHomePage = false,
	children,
}: {
	isHomePage?: boolean;
	children: React.ReactNode;
}) => {
	const navItems = [
		['🏠 Home', '/'],
		['📰 Posts', '/posts'],
		['📑 Pages', '/pages'],
		['⚛️ Examples', '/examples'],
	];
	return (
		<div className={styles.layout} data-is-root-path={isHomePage}>
			<nav>
				<ul className={styles.navLinks}>
					{navItems.map(([title, href], i) => (
						<li key={`key-${i}`}>
							<Link className={styles.links} to={href}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<main className={styles.layoutMain}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;

import { graphql, Link, useStaticQuery } from 'gatsby';
import * as styles from './footer.module.css';

const Footer = () => {
	const menuQuery = useStaticQuery<Queries.MenuQueryQuery>(graphql`
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
	`);
	const nodes = menuQuery?.wpMenu?.menuItems?.nodes
		? menuQuery.wpMenu.menuItems.nodes
		: [];

	const FooterMenu = () => (
		<nav className={styles.footerNav}>
			<ul className={styles.footerUl}>
				{nodes.map(({ id, label, path }) => {
					return (
						<li key={id} className={styles.navItem}>
							<Link className={styles.navItemLink} to={`/posts${path || ''}`}>
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);

	return (
		<footer className={styles.footer}>
			<FooterMenu />
			<div className={styles.footerCopy}>
				<span>
					© {new Date().getFullYear()} Built with{' '}
					<a className={styles.footerCopyLink} href="https://www.gatsbyjs.com">
						Gatsby
					</a>{' '}
					and{' '}
					<a className={styles.footerCopyLink} href="https://wordpress.org/">
						WordPress
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;

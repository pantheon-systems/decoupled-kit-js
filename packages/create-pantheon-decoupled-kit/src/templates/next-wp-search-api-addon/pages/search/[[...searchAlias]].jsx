import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Layout from '../../components/layout';
import PageHeader from '../../components/page-header';
import { getFooterMenu } from '../../lib/Menus';
import { getSearchResults } from '../../lib/Search';
import styles from './searchPage.module.css';

export default function PageTemplate({
	menuItems,
	searchResults,
	error,
	expectedResults,
}) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Decoupled Next WordPress - Search"
				description="Generated by create-pantheon-decoupled-kit."
			/>
			<PageHeader title="Search Results" />
			{error ? (
				<div className={styles.altResult}>
					<span>An error occurred while fetching search results</span>
				</div>
			) : (
				<section className={styles.section}>
					<div className={styles.container}>
						{searchResults?.length > 0 ? (
							<ul>
								{searchResults?.map(
									({ title, summary, uri, databaseId, contentType }) => (
										<li key={databaseId}>
											<h2 className={styles.listTitle}>{title}</h2>
											{summary ? (
												<div
													dangerouslySetInnerHTML={{
														__html: `${summary.substr(0, 150)}...`,
													}}
												/>
											) : null}
											<Link
												passHref
												href={
													contentType.node.name === 'post'
														? `/posts${uri}`
														: `/pages${uri}`
												}
												className={styles.link}
											>
												Read more →
											</Link>
										</li>
									),
								)}
							</ul>
						) : (
							<div className={styles.altResult}>
								{expectedResults
									? 'No Results Found'
									: 'Enter a term to start searching'}
							</div>
						)}
					</div>
				</section>
			)}
		</Layout>
	);
}

export async function getServerSideProps(context) {
	let expectedResults = false;
	const {
		query: { searchAlias },
	} = context;

	try {
		const searchTerm = searchAlias ? searchAlias : null;

		const { menuItems } = await getFooterMenu();

		let res = [];
		if (searchTerm) {
			expectedResults = true;
			const { searchResults } = await getSearchResults(searchTerm[0]);
			res = searchResults;
		}

		return {
			props: {
				menuItems,
				searchResults: res,
				expectedResults,
			},
		};
	} catch (error) {
		console.error('Unable to fetch search page: ', error);
		return {
			props: {
				error: true,
			},
		};
	}
}

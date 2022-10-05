import { NextSeo } from 'next-seo';
import { setEdgeHeader } from '@pantheon-systems/wordpress-kit';

import { PageGridItem, withGrid } from '../../components/grid';
import Layout from '../../components/layout';
import PageHeader from '../../components/page-header';
import { Paginator } from '@pantheon-systems/nextjs-kit';
import { useRouter } from 'next/router';
import Page from '../../components/page';

import { getFooterMenu } from '../../lib/Menus';
import { getLatestPages, getPageByUri } from '../../lib/Pages';

export default function PageHandler({ menuItems, pages }) {
	const router = useRouter();
	const { uri = [] } = router.query;

	// render page list if multiple pages were passed
	if (pages.length !== undefined) {
		return (
			<PageListTemplate menuItems={menuItems} pages={pages} pageNum={uri[0]} />
		);
	} else {
		return <PageTemplate menuItems={menuItems} page={pages} />;
	}
}

export function PageListTemplate({ menuItems, pages, pageNum }) {
	const PagesGrid = withGrid(PageGridItem);

	const RenderCurrentItems = ({ currentItems }) => {
		return (
			<PagesGrid contentType="pages" data={currentItems} pageNum={pageNum} />
		);
	};

	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Decoupled Next WordPress Demo"
				description="Generated by create next app."
			/>
			<div className="max-w-screen-lg mx-auto">
				<section>
					<PageHeader title="Pages" />
					<Paginator
						data={pages}
						itemsPerPage={10}
						routing
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
}

export function PageTemplate({ menuItems, page }) {
	return (
		<Layout footerMenu={menuItems}>
			<NextSeo
				title="Decoupled Next WordPress Demo"
				description="Generated by create next app."
			/>
			<Page page={page} />
		</Layout>
	);
}

export async function getServerSideProps({ params: { uri }, res }) {
	const menuItems = await getFooterMenu();
	let pages = await getLatestPages();

	if (uri !== undefined) {
		// check if a specific page was requested
		pages = await getPageByUri(uri[uri.length - 1]);
		if (pages === null) {
			pages = await getLatestPages();
		}
	}

	setEdgeHeader({ res });

	return {
		props: {
			menuItems,
			pages,
		},
	};
}

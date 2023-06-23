import { PaginatorLocation } from '../../lib/types';
import { PageGrid } from '../components/grid';
import Layout from '../components/layout';
import Paginator from '../components/paginator';
import Seo from '../components/seo';
import * as styles from './pagesOrPostsIndex.module.css';

const PageIndexTemplate = ({
	pageContext: { pages, routing, itemsPerPage },
	location,
}: {
	pageContext: {
		pages: Queries.WpPageEdge[];
		routing: boolean;
		itemsPerPage: number;
	};
	location: PaginatorLocation;
}) => {
	const RenderCurrentItems = ({
		currentItems,
	}: {
		currentItems: Queries.WpPage[];
	}) => {
		return <PageGrid data={currentItems} contentType="pages" />;
	};

	return (
		<Layout>
			<header className={styles.header}>
				<h1 className={styles.headerTitle}>Pages</h1>
			</header>
			<div>
				<section>
					<Paginator
						data={pages.map(({ node }) => node)}
						itemsPerPage={itemsPerPage}
						location={location}
						routing={routing}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
};

export default PageIndexTemplate;

export function Head() {
	return <Seo title="Pages" description="All pages" />;
}

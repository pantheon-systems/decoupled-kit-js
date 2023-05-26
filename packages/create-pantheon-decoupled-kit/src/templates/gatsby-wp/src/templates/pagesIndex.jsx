import { PageGrid } from '../components/grid';
import Layout from '../components/layout';
import Paginator from '../components/paginator';
import Seo from '../components/seo';
import * as styles from './pagesOrPostsIndex.module.css';

const PageIndexTemplate = ({
	pageContext: { itemsPerPage, routing, pages },
	location,
}) => {
	const RenderCurrentItems = ({ currentItems }) => {
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
						data={pages}
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
	return <Seo title="All pages" />;
}

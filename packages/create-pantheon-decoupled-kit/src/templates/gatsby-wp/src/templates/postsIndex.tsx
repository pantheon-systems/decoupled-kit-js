import { PaginatorLocation } from '../../lib/types';
import { PostGrid } from '../components/grid';
import Layout from '../components/layout';
import Paginator from '../components/paginator';
import Seo from '../components/seo';
import * as styles from './pagesOrPostsIndex.module.css';

const PostIndexTemplate = ({
	pageContext: { posts, routing, itemsPerPage },
	location,
}: {
	pageContext: {
		posts: Queries.WpPostEdge[];
		routing: boolean;
		itemsPerPage: number;
	};
	location: PaginatorLocation;
}) => {
	const RenderCurrentItems = ({
		currentItems,
	}: {
		currentItems: Queries.WpPost[];
	}) => {
		return <PostGrid data={currentItems} contentType="posts" />;
	};

	return (
		<Layout>
			<header className={styles.header}>
				<h1 className={styles.headerTitle}>Posts</h1>
			</header>
			<div>
				<section>
					<Paginator
						data={posts.map(({ node }) => node)}
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

export default PostIndexTemplate;

export function Head() {
	return <Seo title="Posts" description="All posts" />;
}

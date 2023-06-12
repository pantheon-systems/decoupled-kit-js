import type { WindowLocation } from '@reach/router';
import type { Breakpoints, PostsQuery } from '../../lib/types';
import Layout from '../components/layout';
import Paginator from '../components/paginator';
import Seo from '../components/seo';
import * as styles from './pagination.module.css';

const PaginationPostsExample = ({
	pageContext: { posts, postsPerPage, routing, breakpoints },
	location,
}: {
	pageContext: {
		posts: PostsQuery;
		postsPerPage: number;
		routing: boolean;
		breakpoints: Breakpoints;
	};
	location: WindowLocation;
}) => {
	const RenderCurrentItems = ({ currentItems }) => {
		return currentItems?.length > 0
			? currentItems.map((item) => {
					return (
						<article key={item.title} className={styles.item}>
							<h2 className={styles.itemTitle}>{item.title}</h2>
							<div dangerouslySetInnerHTML={{ __html: item.excerpt }} />
						</article>
					);
			  })
			: null;
	};

	return (
		<Layout>
			<div className={styles.container}>
				<section className={styles.content}>
					<h1 className={styles.title}>Pagination example</h1>
					<Paginator
						data={posts}
						itemsPerPage={postsPerPage}
						location={location}
						breakpoints={breakpoints}
						routing={routing}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	);
};

export default PaginationPostsExample;

export function Head() {
	return <Seo title="Paginated Posts Example" />;
}

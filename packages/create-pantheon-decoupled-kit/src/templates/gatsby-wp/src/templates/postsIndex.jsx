import { PostGrid } from '../components/grid'
import Layout from '../components/layout'
import Paginator from '../components/paginator'
import Seo from '../components/seo'
import * as styles from './pagesOrPostsIndex.module.css'

const PostIndexTemplate = ({
	pageContext: { posts, routing, itemsPerPage },
	location,
}) => {
	const RenderCurrentItems = ({ currentItems }) => {
		return <PostGrid data={currentItems} contentType="posts" />
	}

	return (
		<Layout>
			<header className={styles.header}>
				<h1 className={styles.headerTitle}>Posts</h1>
			</header>
			<div>
				<section>
					<Paginator
						data={posts}
						itemsPerPage={itemsPerPage}
						location={location}
						routing={routing}
						Component={RenderCurrentItems}
					/>
				</section>
			</div>
		</Layout>
	)
}

export default PostIndexTemplate

export function Head() {
	return <Seo title="All posts" />
}

import Layout from '../components/layout';
import Post from '../components/post';
import Seo from '../components/seo';

const PostTemplate = ({
	pageContext: { node, previous, next },
}: {
	pageContext: Queries.WpPostEdge;
}) => {
	return (
		<Layout isHomePage={false}>
			<Post post={node} next={next} previous={previous} />
		</Layout>
	);
};

export default PostTemplate;

export function Head({
	pageContext: { node: post },
}: {
	pageContext: { node: Queries.WpPost };
}) {
	return (
		<Seo title={String(post?.title)} description={String(post?.excerpt)} />
	);
}

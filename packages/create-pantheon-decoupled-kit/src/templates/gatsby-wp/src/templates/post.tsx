import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/post';
import Seo from '../components/seo';

const PostTemplate = ({
	pageContext: { node, previous, next },
}: {
	pageContext: Queries.WpPostEdge;
}) => {
	console.log(node, previous, next);
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
	pageContext: { node: Queries.WpPostEdge['node'] };
}) {
	return <Seo title={post?.title} description={post?.excerpt} />;
}

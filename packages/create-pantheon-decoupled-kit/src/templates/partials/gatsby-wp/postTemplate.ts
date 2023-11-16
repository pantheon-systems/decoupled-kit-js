import { taggedTemplateHelpers as utils } from '@cli/utils';

const relatedContentJSX = /* tsx */ `{node?.relatedContent?.relatedPosts ? (
				<section>
					<header className={styles.header}>
						<h2 className={styles.headerTitle}>Related Content</h2>
					</header>
					<PostGrid 
						data={node.relatedContent.relatedPosts as Queries.WpPost[]}
					/>
				</section>
			) : null}`;

export const postTemplate = (relatedContent: boolean) => /* tsx */ `${utils.if(
	relatedContent,
	/* ts */ `import { PostGrid } from '../components/grid';`,
)}
import Layout from '../components/layout';
import Post from '../components/post';
import Seo from '../components/seo';
${utils.if(
	relatedContent,
	/* ts */ `import * as styles from './postTemplate.module.css';`,
)}
const PostTemplate = ({
	pageContext: { node, previous, next },
}: {
	pageContext: Queries.WpPostEdge;
}) => {
	return (
		<Layout isHomePage={false}>
			<Post post={node} next={next} previous={previous} />
			${utils.if(relatedContent, relatedContentJSX)}
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
`;

import Layout from '../components/layout';
import Page from '../components/page';
import Seo from '../components/seo';

const PageTemplate = ({
	pageContext: { node, next, previous },
}: {
	pageContext: Queries.WpPageEdge;
}) => {
	return (
		<Layout isHomePage={false}>
			<Page page={node} next={next} previous={previous} />
		</Layout>
	);
};

export default PageTemplate;

export function Head({
	pageContext: { node: page },
}: {
	pageContext: { node: Queries.WpPage };
}) {
	// Todo - add truncated content as description
	return <Seo title={String(page?.title)} />;
}

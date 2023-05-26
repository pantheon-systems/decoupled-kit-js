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

export function Head({ data }: { data: Queries.PostByIdQuery }) {
	return <Seo title={data?.post?.title} description={data?.post?.excerpt} />;
}

// export const query = graphql`
// 	query PostById(
// 		# these variables are passed in via createPage.pageContext in gatsby-node.js
// 		$id: String!
// 		$previousPostId: String
// 		$nextPostId: String
// 	) {
// 		# selecting the current post by id
// 		post: wpPost(id: { eq: $id }) {
// 			id
// 			excerpt
// 			content
// 			title
// 			date(formatString: "MMMM DD, YYYY")
// 			featuredImage {
// 				node {
// 					altText
// 					localFile {
// 						childImageSharp {
// 							gatsbyImageData(
// 								quality: 100
// 								placeholder: TRACED_SVG
// 								layout: FULL_WIDTH
// 							)
// 						}
// 					}
// 				}
// 			}
// 		}
// 		# this gets us the previous post by id (if it exists)
// 		previous: wpPost(id: { eq: $previousPostId }) {
// 			uri
// 			title
// 		}
// 		# this gets us the next post by id (if it exists)
// 		next: wpPost(id: { eq: $nextPostId }) {
// 			uri
// 			title
// 		}
// 	}
// `;

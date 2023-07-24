import { graphql } from 'gatsby';

import { PostGrid } from '../components/grid';
import Layout from '../components/layout';
import Post from '../components/post';
import Seo from '../components/seo';
import * as styles from './post.module.css';

const PostTemplate = ({ data: { previous, next, post } }) => {
	return (
		<Layout>
			<Post post={post} next={next} previous={previous} />
			{post.relatedContent?.relatedPosts ? (
				<section>
					<header className={styles.header}>
						<h2 className={styles.headerTitle}>Related Content</h2>
					</header>
					<PostGrid
						data={post.relatedContent.relatedPosts.map((item) => ({
							post: item,
						}))}
					/>
				</section>
			) : null}
		</Layout>
	);
};

export default PostTemplate;

export function Head({ data: { post } }) {
	return <Seo title={post.title} description={post.excerpt} />;
}

export const pageQuery = graphql`
	query PostById(
		# these variables are passed in via createPage.pageContext in gatsby-node.js
		$id: String!
		$previousPostId: String
		$nextPostId: String
	) {
		# selecting the current post by id
		post: wpPost(id: { eq: $id }) {
			id
			excerpt
			content
			title
			date(formatString: "MMMM DD, YYYY")
			featuredImage {
				node {
					altText
					localFile {
						childImageSharp {
							gatsbyImageData(
								quality: 100
								placeholder: TRACED_SVG
								layout: FULL_WIDTH
							)
						}
					}
				}
			}
			relatedContent {
				fieldGroupName
				relatedPosts {
					... on WpPost {
						id
						content
						title
						excerpt
						uri
						date(formatString: "MMMM DD, YYYY")
						featuredImage {
							node {
								altText
								localFile {
									childImageSharp {
										gatsbyImageData(
											quality: 100
											placeholder: TRACED_SVG
											layout: FULL_WIDTH
										)
									}
								}
							}
						}
					}
				}
			}
		}
		# this gets us the previous post by id (if it exists)
		previous: wpPost(id: { eq: $previousPostId }) {
			uri
			title
		}
		# this gets us the next post by id (if it exists)
		next: wpPost(id: { eq: $nextPostId }) {
			uri
			title
		}
	}
`;

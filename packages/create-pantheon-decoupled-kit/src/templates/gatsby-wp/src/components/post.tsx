import { sanitize } from 'dompurify';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './post.module.css';

const Post = ({
	post,
	next,
	previous,
}: {
	post: Queries.WpPostEdge['node'];
	next: Queries.WpPostEdge['next'];
	previous: Queries.WpPostEdge['previous'];
}) => {
	const title = post?.title;
	const featuredImage =
		post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData;
	const altText = post?.featuredImage?.node?.altText || title;
	console.log(featuredImage);
	return (
		<article className={styles.container}>
			<h1 className={styles.mainTitle}>{post?.title}</h1>
			<p className={styles.date}>{new Date(post?.date).toDateString()}</p>

			<Link className={styles.link} to="/posts">
				Posts &rarr;
			</Link>
			<div className={styles.content}>
				{featuredImage ? (
					<div className={styles.img}>
						<GatsbyImage
							className={styles.img}
							priority="true"
							image={featuredImage}
							layout="fill"
							objectFit="cover"
							alt={altText}
						/>
					</div>
				) : null}
			</div>

			{post?.content ? (
				<div
					className={styles.paragraphContent}
					dangerouslySetInnerHTML={{ __html: sanitize(post.content) }}
				/>
			) : (
				<p>Sorry, no post data was found at this route.</p>
			)}
			<hr className={styles.hr} />
			<nav className={styles.nav}>
				{previous ? (
					<Link className={styles.prev} to={`/posts${previous?.uri}`}>
						← {previous.title}
					</Link>
				) : null}
				{next ? (
					<Link className={styles.next} to={`/posts${next?.uri}`}>
						{next.title} →
					</Link>
				) : null}
			</nav>
		</article>
	);
};

export default Post;

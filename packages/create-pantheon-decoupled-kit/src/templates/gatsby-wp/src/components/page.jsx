import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './page.module.css'

const Page = ({
	page: { title, date, featuredImage, content },
	next,
	previous,
}) => {
	const imageData = {
		gatsbyImage:
			featuredImage?.node?.localFile?.childImageSharp.gatsbyImageData,
		altText: featuredImage?.node?.altText || title,
	}

	return (
		<article className={styles.container}>
			<h1 className={styles.mainTitle}>{title}</h1>
			<p className={styles.date}>{new Date(date).toDateString()}</p>
			<Link className={styles.link} to="/pages">
				Pages &rarr;
			</Link>
			<div className={styles.content}>
				{featuredImage && (
					<div>
						<GatsbyImage
							className={styles.img}
							priority
							image={imageData.featuredImage}
							layout="fill"
							objectFit="cover"
							alt={imageData.altText}
						/>
					</div>
				)}
			</div>
			{content ? (
				<div
					className={styles.paragraphContent}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			) : (
				<p>Sorry, no page data was found at this route.</p>
			)}
			<hr className={styles.hr} />
			<nav className={styles.nav}>
				{previous ? (
					<Link className={styles.next} to={`/pages${previous.uri}`}>
						← {previous.title}
					</Link>
				) : null}
				{next ? (
					<Link className={styles.prev} to={`/pages${next.uri}`}>
						{next.title} →
					</Link>
				) : null}
			</nav>
		</article>
	)
}

export default Page

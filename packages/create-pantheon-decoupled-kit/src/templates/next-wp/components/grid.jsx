import { withGrid } from '@pantheon-systems/nextjs-kit';
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URL } from '../lib/constants';
import { getUrlPath } from '../lib/getUrlPath';
import styles from './grid.module.css';

const GradientPlaceholder = () => (
	<div className={styles.gradientPlaceholder} />
);

const GridItem = ({ href, imgSrc, altText, title }) => {
	return (
		<Link passHref href={href}>
			<div className={styles.card}>
				<div className={styles.cardImg}>
					{imgSrc !== null ? (
						<Image
							src={IMAGE_URL + imgSrc}
							fill
							alt={altText}
							style={{ objectFit: 'cover' }}
						/>
					) : (
						<GradientPlaceholder />
					)}
				</div>
				<h2 className={styles.cardTitle}>{title} &rarr;</h2>
			</div>
		</Link>
	);
};

const PostGridItem = ({ content: post }) => {
	const imgSrc = getUrlPath(post?.featuredImage?.node?.sourceUrl);
	const altText = post?.featuredImage?.node.altText || post.title;

	return (
		<GridItem
			href={`/posts${post.uri}`}
			imgSrc={imgSrc}
			altText={altText}
			title={post.title}
		/>
	);
};

const PageGridItem = ({ content: page }) => {
	const imgSrc = getUrlPath(page?.featuredImage?.node?.sourceUrl);
	const altText = page?.featuredImage?.node.altText || page.title;

	return (
		<GridItem
			href={`/pages${page.uri}`}
			imgSrc={imgSrc}
			altText={altText}
			title={page.title}
		/>
	);
};

export const PostGrid = withGrid(PostGridItem);
export const PageGrid = withGrid(PageGridItem);

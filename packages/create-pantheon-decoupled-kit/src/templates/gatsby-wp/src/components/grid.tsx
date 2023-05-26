import { Link } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image';
import * as styles from './grid.module.css';

const GradientPlaceholder = () => (
	<div className={styles.gradientPlaceholder} />
);

const withGrid = <Props,>(Component: React.ElementType) => {
	const GridedComponent = <DataType,>({
		data,
		FallbackComponent,
		...props
	}: {
		data?: DataType[];
		FallbackComponent?: React.ElementType;
	} & { [Property in keyof Props]: Props[Property] }) => {
		return (
			<div className={styles.container}>
				{data ? (
					data.map((content, i) => {
						return <Component key={i} content={content} {...props} />;
					})
				) : FallbackComponent ? (
					<FallbackComponent />
				) : null}
			</div>
		);
	};

	return GridedComponent;
};

const GridItem = ({
	href,
	imgSrc,
	altText,
	title,
}: {
	[key in 'href' | 'altText' | 'title']: string | null;
} & { imgSrc: IGatsbyImageData | null }) => {
	if (!href || !altText || !title) {
		return (
			<div className={styles.cardImg}>
				<GradientPlaceholder />
			</div>
		);
	}
	return (
		<Link to={href} className={styles.card}>
			<div className={styles.cardImg}>
				{imgSrc ? (
					<GatsbyImage
						image={imgSrc}
						style={{ height: '100%', width: '100%' }}
						objectFit="fill"
						alt={altText}
					/>
				) : (
					<GradientPlaceholder />
				)}
			</div>
			<h2 className={styles.cardTitle}>{title} &rarr;</h2>
		</Link>
	);
};

const PostGridItem = ({
	content: { node },
}: {
	content: { node: Queries.WpPostEdge['node'] };
}) => {
	const imgSrc =
		node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData ||
		null;
	const altText = node?.featuredImage?.node.altText || node?.title || '';
	const path = node?.uri || '';
	return (
		<GridItem
			href={`/posts${path}`}
			imgSrc={imgSrc}
			altText={altText}
			title={node?.title}
		/>
	);
};

const PageGridItem = ({
	content: { node },
}: {
	content: { node: Queries.WpPageEdge['node'] };
}) => {
	const imgSrc =
		node?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData ||
		null;
	const altText = node?.featuredImage?.node.altText || node.title;
	const path = node?.uri || '';

	return (
		<GridItem
			href={`/pages${path}`}
			imgSrc={imgSrc}
			altText={altText}
			title={node?.title}
		/>
	);
};

export const PostGrid = withGrid(PostGridItem);
export const PageGrid = withGrid(PageGridItem);

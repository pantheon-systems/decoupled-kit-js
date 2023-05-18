/**
 *
 * @param props.cols - The number of columns in the grid, this is an optional prop which will default to 3 if not provided
 * @param props.children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component that can be used with the withGrid HOC component
 */

export const Grid = ({
	cols = 3,
	children,
}: {
	cols?: number;
	children?: JSX.Element[];
}) => {
	return (
		<div
			className={`ps-mt-12 ps-grid ps-gap-5 ps-max-w-content ps-mx-auto lg:ps-max-w-screen-lg lg:ps-grid-cols-${String(
				cols,
			)}`}
		>
			{children}
		</div>
	);
};

/**
 *
 * @param Component - A component that takes in content that is to be displayed on the grid
 * @remarks
 * The Component used must accept the data to be displayed as `content` to function properly
 * @example
 * ```
 * const ArticleCard= ({ content }) => {
 * 	return (
 * 		<div>
 * 			<h2>{content.title}</h2>
 * 			<div>{content.excerpt}</div>
 * 		</div>
 * 	)
 * }
 * ```
 * @returns A Higher Order Component that returns the data mapped to the Component in a grid
 * @example
 * ```
 * const MyPage = ({ myArticles }) => {
 *  const ArticleGrid = withGrid(ArticleCard)
 * 	 return (
 * 		 <>
 * 			 <ArticleGrid
 * 				 data={myArticles}
 * 				 cols={4}
 * 				 FallbackComponent={() => <span>No Data Found</span>}
 * 			 />
 * 		 </>
 * 	 )
 * }
 * ```
 */
export const withGrid = <Props extends object>(
	Component: React.ElementType,
) => {
	/**
	 * @param props.data - The to be passed to the Component as the content prop
	 * @param props.cols - The number of columns to build a grid with. This is an optional prop which will default to 3 if not provided
	 * @default 3
	 * @param props.FallbackComponent -  Component to be rendered if data is undefined
	 * @returns The component passed to withGrid in a grid with the given number of columns
	 */
	const GridedComponents = <Type extends object>({
		data,
		cols,
		FallbackComponent,
		...props
	}: {
		data?: Type[];
		cols?: number;
		FallbackComponent?: React.ElementType;
	} & { [Property in keyof Props]: Props[Property] }): JSX.Element => {
		return (
			<>
				{data ? (
					<Grid cols={cols}>
						{data.map((content, i) => {
							return <Component key={i} content={content} {...props} />;
						})}
					</Grid>
				) : FallbackComponent ? (
					<FallbackComponent />
				) : null}
			</>
		);
	};

	return GridedComponents;
};

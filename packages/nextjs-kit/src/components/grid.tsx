import React from 'react';

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
 * @param props - props to spread onto the passed component
 * @param Component - Element to be passed to the Grid component
 * @param data - The data that will be displayed in the grid
 * @param props.FallbackComponent -  Component to be rendered if data is undefined
 * @param props.cols - The number of columns to build a grid with. This is an optional prop which will default to 3 if not provided
 * @returns A Higher Order Component that returns the data mapped to the Component in a grid
 */
export const withGrid = (Component: React.ElementType) => {
	const GridedComponent = <Type extends object>({
		data,
		FallbackComponent,
		cols,
		...props
	}: {
		data: Type[];
		FallbackComponent?: React.ElementType;
		cols?: number;
	}): JSX.Element => {
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

	return GridedComponent;
};

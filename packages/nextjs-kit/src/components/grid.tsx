import React from 'react';

/**
 *
 * @param cols - The number of columns to build the grid with
 * @param children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component meant to be used with the withGrid component
 * @remarks
 */

export const Grid = ({
	cols = '3',
	children,
}: {
	cols?: string;
	children?: JSX.Element | JSX.Element[];
}) => {
	return (
		<div
			className={`mt-12 grid gap-5 max-w-content mx-auto lg:grid-cols-${String(
				cols,
			)} lg:max-w-screen-lg`}
		>
			{children}
		</div>
	);
};

/**
 *
 * @param props - props to spread on
 * @param children - The JSX elements used as the content of the grid
 * @returns A style and positioning helper grid component meant to be used with the withGrid component
 * @remarks
 */
// a Higher Order Component to use Grid
export const withGrid = (Component: React.ElementType) => {
	const GridedComponent = ({
		data,
		...props
	}: {
		data: Record<string, string | number>[];
		contentType: string;
	}): JSX.Element => {
		return (
			<>
				{data ? (
					<Grid>
						{data.map((content, i) => {
							return <Component key={i} content={content} {...props} />;
						})}
					</Grid>
				) : props.contentType ? (
					<h2 className="text-xl text-center mt-14">
						No {props.contentType} found 🏜
					</h2>
				) : null}
			</>
		);
	};

	return GridedComponent;
};

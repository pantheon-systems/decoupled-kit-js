import clsx from 'clsx';
import React from 'react';
import { RowElement, RowProps } from './props';

/**
 * @see {@link https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/row--docs}
 */
export const Row = React.forwardRef<RowElement, RowProps>(
	(
		{
			type,
			className,
			flexOptions: { direction, wrap, shrink, grow, reverse } = {
				direction: 'row',
				wrap: false,
				shrink: false,
				grow: false,
				reverse: false,
			},
			children,
		},
		forwardedRef,
	) => {
		const ROW_STYLES = {
			margin: clsx(
				'rk-max-w-[1920px] rk-w-full rk-px-4',
				'sm:rk-px-6',
				'lg:rk-px-12',
			),
			grid: clsx(
				'rk-grid-cols-4 rk-gap-6 rk-grid',
				'sm:rk-grid-cols-8',
				'lg:rk-grid-cols-12',
				'2xl:rk-grid-cols-16',
			),
			flex: clsx(
				'rk-flex',
				`rk-flex-${direction}`,
				wrap && 'rk-flex-wrap',
				grow && 'rk-flex-grow',
				shrink && 'rk-flex-shrink',
				reverse && `rk-flex-${direction}-reverse`,
			),
		};

		return (
			<div
				ref={forwardedRef}
				className={clsx(className, ROW_STYLES[type], ROW_STYLES.margin)}
			>
				{children}
			</div>
		);
	},
);

Row.displayName = 'Row';

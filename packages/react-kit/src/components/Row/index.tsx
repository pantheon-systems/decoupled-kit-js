import clsx from 'clsx';
import React from 'react';
import { RowProps } from './props';

type RowElement = React.ElementRef<'div'>;

export const Row = React.forwardRef<RowElement, RowProps>(
	(
		{
			type,
			className,
			flexOptions: { direction, wrap, shrink, grow } = {
				direction: 'row',
				wrap: false,
				shrink: false,
				grow: false,
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
				`rk-flex-${direction}`,
				wrap && 'rk-flex-wrap',
				grow && 'rk-flex-grow',
				shrink && 'rk-flex-shrink',
			),
		};

		return (
			<div
				ref={forwardedRef}
				className={clsx(ROW_STYLES[type], ROW_STYLES.margin, className)}
			>
				{children}
			</div>
		);
	},
);

Row.displayName = 'Row';

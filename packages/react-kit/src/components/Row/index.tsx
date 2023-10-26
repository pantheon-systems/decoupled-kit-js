import clsx from 'clsx';
import React from 'react';
import { RowProps } from './props';

type RowElement = React.ElementRef<'div'>;

export const Row = React.forwardRef<RowElement, RowProps>(
	(
		{
			type,
			className,
			flexOptions: { direction, wrap } = { direction: 'row', wrap: false },
			children,
		},
		forwardedRef,
	) => {
		const ROW_STYLES = {
			margin: clsx('rk-px-4', 'sm:rk-px-6', 'lg:rk-px-12', 'rk-max-w-[1920px]'),
			grid: clsx(
				'rk-grid-cols-4 rk-gap-6',
				'sm:rk-grid-cols-8',
				'lg:rk-grid-cols-12',
				'2xl:rk-grid-cols-16',
			),
			flex: clsx(`rk-flex-${direction} rk-flex-wrap`, wrap && 'rk-flex-wrap'),
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

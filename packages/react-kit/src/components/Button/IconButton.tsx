import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import React from 'react';
import { BaseButtonElement, BaseButtonProps } from './props';

/**
 *
 * @see {@link https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/button--docs}
 * @param IconButtonProps - {@link IconButtonProps}
 */
export const IconButton = React.forwardRef<BaseButtonElement, BaseButtonProps>(
	({ children, asChild, className, ...props }, forwardedRef) => {
		const Component = asChild ? Slot : 'button';
		return (
			<Component
				ref={forwardedRef}
				className={clsx(
					'rk-btn',
					'rk-h-10 rk-max-h-10 rk-min-h-fit rk-rounded-full rk-border-none rk-bg-white rk-p-2 rk-text-black	hover:rk-bg-neutral-100 hover:rk-text-neutral-900 active:rk-bg-neutral-300 [&>*:first-child]:rk-w-6',
					className,
				)}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

IconButton.displayName = 'IconButton';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import React from 'react';
import { ButtonElement, ButtonProps } from './props';

/**
 *
 * @see {@link https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/button--docs}
 * @param ButtonProps - {@link ButtonProps}
 */
export const Button = React.forwardRef<ButtonElement, ButtonProps>(
	(
		{
			Element = 'button',
			type = 'primary',
			size = 'small',
			children,
			asChild,
			className,
			...props
		},
		forwardedRef,
	) => {
		const Component = asChild ? Slot : Element;

		const BUTTON_STYLES = {
			base: 'rk-btn rk-capitalize',
			type: {
				primary: clsx(
					'rk-bg-neutral-900 rk-text-white rk-rounded-lg hover:rk-bg-neutral-700 hover:rk-border-neutral-700 hover:rk-text-white active:rk-bg-neutral-500',
				),
				secondary: clsx(
					'rk-bg-white rk-text-neutral-900 rk-rounded-lg rk-btn-outline hover:rk-bg-neutral-100 hover:rk-text-neutral-900 hover:rk-border-neutral-900 active:rk-bg-neutral-300',
				),
			},
			size: {
				small: clsx('rk-px-4 rk-h-10'),
				large: clsx('rk-px-8 rk-h-12'),
			},
		};

		return (
			<Component
				ref={forwardedRef}
				className={clsx(
					BUTTON_STYLES.base,
					BUTTON_STYLES.type[type],
					BUTTON_STYLES.size[size],
					className,
				)}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

Button.displayName = 'Button';

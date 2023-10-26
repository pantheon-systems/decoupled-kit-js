import { Slot } from '@radix-ui/react-slot';

export interface BaseButtonProps {
	/**
	 * Use the child element as the element rendered for the button.
	 * Useful for a styling Link components as buttons.
	 * @example
	 * ```tsx
	 * import Link from 'next/link';
	 * import { Button } from '@pantheon-systems/react-kit/components/Button'
	 *
	 * // ...
	 * <Button asChild>
	 * 	<Link href="/about">About</Link>
	 * </Button>
	 * ```
	 */
	readonly asChild?: boolean;
	/**
	 * Button content
	 */
	readonly children?: React.ReactNode;
	readonly className?: string;
	/**
	 * other props like onClick etc.
	 */
	readonly [key: string]: unknown;
}

export interface ButtonProps extends BaseButtonProps {
	/**
	 * Sometimes we want a button style but semantically need a link.
	 * @remarks Use asChild to use the child component as rendered element.
	 */
	readonly Element?: 'button' | 'a';
	/**
	 * Button type
	 */
	readonly type?: 'primary' | 'secondary';
	/**
	 * Button size
	 */
	readonly size?: 'small' | 'large';
}

export type BaseButtonElement = React.ElementRef<'button'> &
	React.ElementRef<typeof Slot>;

export type ButtonElement = BaseButtonElement & React.ElementRef<'a'>;

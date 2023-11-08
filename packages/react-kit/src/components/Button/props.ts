import { Slot } from '@radix-ui/react-slot';

export type BaseButtonProps = Readonly<{
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
	asChild?: boolean;
	/**
	 * Button content
	 */
	children?: React.ReactNode;
	className?: string;
	/**
	 * other props like onClick etc.
	 */
	[key: string]: unknown;
}>;

export type ButtonProps = BaseButtonProps &
	Readonly<{
		/**
		 * Sometimes we want a button style but semantically need a link.
		 * @remarks Use asChild to use the child component as rendered element.
		 */
		Element?: 'button' | 'a';
		/**
		 * Button type
		 */
		type?: 'primary' | 'secondary';
		/**
		 * Button size
		 */
		size?: 'small' | 'large';
	}>;

export type BaseButtonElement = React.ElementRef<'button'> &
	React.ElementRef<typeof Slot>;

export type ButtonElement = BaseButtonElement & React.ElementRef<'a'>;

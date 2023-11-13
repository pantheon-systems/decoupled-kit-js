import { Props as FocusTrapProps } from 'focus-trap-react';

/**
 * A navigation item is a tuple of a label and a href.
 * @example
 * ```ts
 * const navItems = [['Home', '/', 'About', '/about',]]
 * ```
 */
export type NavItem = [string, string];

export type NavHeaderProps = Readonly<{
	/**
	 * A logo component to render in the header.
	 * @remarks should be wrapped in a link to the homepage or other relevant page.
	 * @example
	 * ```tsx
	 * export const Logo = ({ exampleLogo }: { exampleLogo: string }) => {
	 * 	// use the link and image component from your framework if applicable.
	 * 	return (
	 * 		<a href="/">
	 * 			<img src={exampleLogo} width="48" height="48" alt="Example Logo" />
	 * 		</a>
	 * 	);
	 * };
	 * ```
	 *
	 */
	Logo: React.ElementType;
	/**
	 * Items to render for the main navigation. Can be a tuple of label and href or a ReactNode.
	 */
	mainNavItems?: NavItem[] | React.ReactNode;
	/**
	 * Secondary navigation menu. Can be a tuple of label and href or a ReactNode
	 */
	secondaryNavItems?: NavItem[] | React.ReactNode;
	/**
	 * Styles to be applied to the mobile nav overlay.
	 */
	overlayStyles?: string;
	/**
	 * Styles to be applied to the omnipresent navbar.
	 */
	navbarStyles?: string;
	/**
	 * Options to pass to the FocusTrap component used to trap focus within the mobile nav overlay.
	 */
	focusTrapOptions?: FocusTrapProps['focusTrapOptions'];
}>;

/**
 * Type guard for NavItem
 * @param arg the argument to check
 * @returns true if the arg is a {@link NavItem}
 */
export const isNavTuple = (arg: unknown): arg is NavItem => {
	if (arg instanceof Array) {
		return arg
			.map((item) => {
				return (
					item instanceof Array &&
					item.length === 2 &&
					typeof item[0] === 'string' &&
					typeof item[1] === 'string'
				);
			})
			.reduce((acc, curr) => acc && curr, true);
	}
	return false;
};

import { Props as FocusTrapProps } from 'focus-trap-react';
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
	 * Items to render for the main navigation. Should be <li></li> elements.
	 */
	mainNavItems?: React.ReactNode;
	/**
	 * Secondary navigation menu. Should be <li></li> elements.
	 */
	secondaryNavItems?: React.ReactNode;
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

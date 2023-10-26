import { Props } from 'focus-trap-react';
export interface NavHeaderProps {
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
	 * the nav items. Should be <li> elements.
	 */
	children?: React.ReactNode;
	/**
	 * Styles to be applied to the mobile nav overlay.
	 */
	overlayStyles?: string;
	/**
	 * Styles to be applied to the omnipresent navbar.
	 */
	navbarStyles?: string;
	focusTrapOptions?: Props['focusTrapOptions'];
}

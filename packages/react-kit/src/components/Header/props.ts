import { Props as FocusTrapProps } from 'focus-trap-react';
import { type Dispatch } from 'react';
/**
 * A navigation item is a tuple of a label and a href.
 * @example
 * ```ts
 * const navItems = [['Home', '/', 'About', '/about',]]
 * ```
 */
export type NavItem = {
	linkText: string;
	href: string;
};

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
	Logo:
		| { src: string; alt: string; href: string; styles?: string }
		| React.ReactElement
		| JSX.Element;
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
	/**
	 * If a custom link component is required, like for metaframework, pass it here, otherwise an anchor tag will be used.
	 */
	linkComponent?: React.ElementType;

	/**
	 * State and setter for the open state of the mobile nav overlay.
	 * @example
	 * ```tsx
	 * const [isOpen, setIsOpen] = useState(false);
	 * const handleOpen = () => setIsOpen((prev) => !prev);
	 *
	 * <NavHeader
	 * 	mobileNavHandler={[isOpen, handleOpen]}
	 * 	...
	 * />
	 * ```
	 */
	mobileNavHandler: [boolean, Dispatch<boolean>];
}>;

/**
 * Type guard for NavItem
 * @param arg the argument to check
 * @returns true if the arg is a {@link NavItem}
 */
export const isNavItemArray = (arg: unknown): arg is NavItem[] => {
	if (arg instanceof Array) {
		return arg
			.map((item) => {
				return (
					typeof item === 'object' &&
					item !== null &&
					'linkText' in item &&
					'href' in item
				);
			})
			.reduce((acc, curr) => acc && curr, true);
	}
	return false;
};

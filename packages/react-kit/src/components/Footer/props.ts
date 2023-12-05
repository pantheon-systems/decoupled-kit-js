export type FooterProps = Readonly<{
	/**
	 * A logo component to render in the footer.
	 * @remarks should be wrapped in a link to the homepage or other relevant page.
	 * @example
	 * ```tsx
	 * export const Logo = ({ exampleLogo }: { exampleLogo: string }) => {
	 * 	// use the link and image component from your framework if applicable.
	 * 	return (
	 * 		<img src={exampleLogo} width="48" height="48" alt="Example Logo" />
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
	 * Link used for company website.
	 */
	Link: string;
}>;

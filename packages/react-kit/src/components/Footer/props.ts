export type FooterProps = Readonly<{
	/**
	 * A logo component to render in the footer.
	 * @example
	 * ```tsx
	 * export const Logo = ({ exampleLogo }: { exampleLogo: string }) => {
	 * 	// use the image component from your framework if applicable.
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
	 * Styles to be passed to the footer component.
	 */
	className?: string;
	/**
	 *  An instance of React.ReactChild
	 */
	children: JSX.Element;
}>;

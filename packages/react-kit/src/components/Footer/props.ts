export type FooterProps = Readonly<{
	/**
	 * A logo component to render in the footer.
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
	 * Styles to be passed to the footer component.
	 */
	className?: string;
	/**
	 * Content to be displayed in footer.
	 * @example
	 * ```tsx
	 * const Content = () => {
	 * 	return (
	 * 		<>
	 * 			<div className="rk-text-lg rk-font-bold">Example Company</div>
	 * 			<div className="rk-pb-8 rk-text-sm">© Example Copyright</div>
	 * 		</>
	 * )};
	 * ```
	 */
	Content:
		| { title: string; copy: string; builtWith: string; builtWithLink: string }
		| React.ReactElement
		| JSX.Element;
}>;

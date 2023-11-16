export type RowProps = Readonly<{
	/**
	 * The content to render within the row.
	 */
	children?: React.ReactNode;
	/**
	 * The styles to apply to the row.
	 */
	className?: string;
	/**
	 * Options for flex
	 */
	flexOptions?: {
		direction: 'row' | 'col';
		grow?: boolean;
		reverse?: boolean;
		shrink?: boolean;
		wrap?: boolean;
	};
	/**
	 * The type of container to use for the row.
	 */
	type: 'flex' | 'grid';
}>;

export type RowElement = React.ElementRef<'div'>;

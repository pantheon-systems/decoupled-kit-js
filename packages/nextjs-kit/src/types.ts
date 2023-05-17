/**
 * Describes the options for sortChar and sortData
 */
export interface SortOptions {
	/**
	 * The data to be sorted
	 */
	data: Record<string, string | number>[];
	/**
	 * The key on which to sort
	 */
	key: string;
	/**
	 * The direction to sort the data
	 */
	direction: 'asc' | 'ASC' | 'desc' | 'DESC';
}

/**
 * Describes required props for a link
 */
export interface LinkProps {
	/**
	 * The text to display in the link
	 */
	linkText: string;
	/**
	 * The href to apply to the link.
	 */
	href: string;
}

export type Parent = 'parent' | 'parentId';

/**
 * An item in a footer menu.
 * @remarks This should account for Drupal and WordPress menus
 */
export type FooterMenuItem = LinkProps & {
	[key in Parent]?: string | null;
};

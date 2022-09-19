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

type Parent = 'parent' | 'parentId';

/**
 * An item in a footer menu.
 * @remarks This should account for Drupal and WordPress menus
 */
export type FooterMenuItem = LinkProps & {
	[key in Parent]?: string | null;
};

/**
 * Type predicate to determine if a FooterMenuItem has a parent or parentId
 * @param {FooterMenuItem} item a `FooterMenuItem`
 * @returns true if `parentId` or `parent` properties are found on the `FooterMenuItem`
 */
export const hasParent = (item: FooterMenuItem): item is FooterMenuItem =>
	item.parentId ? true : item.parent ? true : false;

/**
 * Type predicate to determine if an item is a number
 * @param {number | null | undefined} item an item
 * @returns true if the item is a number
 */
export const isNumber = (item: number | null | undefined): item is number =>
	typeof item === 'number';

/**
 * Type predicate to determine if an item is a number
 * @param {unknown} element some type of HTMLElement
 * @returns true if the element is an HTMLElement
 */
export const isHTMLElement = (element: unknown): element is HTMLElement => {
	return element instanceof HTMLElement;
};

export interface LinkProps {
  linkText: string;
  href: string;
}

type Parent = 'parent' | 'parentId';

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

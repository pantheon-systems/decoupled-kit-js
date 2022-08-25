export interface DataToSort {
  data: Record<string, string | number>[];
  key: string;
  direction: 'asc' | 'ASC' | 'desc' | 'DESC';
}
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

export const isNumber = (item: number | null | undefined): item is number =>
  typeof item === 'number';
export interface PaginatorObj {
  id: string;
  title: string;
  body: {
    value: string;
  };
}

export interface Pagination {
  data: PaginatorObj[];
  itemsPerPage: number;
  breakpoints: {
    start: number;
    end: number;
    add: number;
  };
  routing: boolean;
  Component: React.ElementType;
}

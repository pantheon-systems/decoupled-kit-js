export interface LinkProps {
  linkText: string;
  href: string;
}
type Parent = 'parent' | 'parentId';

export type FooterMenuItem = LinkProps & {
  [key in Parent]?: string | null;
};

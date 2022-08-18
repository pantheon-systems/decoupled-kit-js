export interface HeaderData {
  title: string;
  href: string;
  align?: string;
}

export interface FooterProps {
  linkText: string;
  href: string;
}
type Parent = 'parent' | 'parentId';

export type FooterMenuItem = FooterProps & {
  [key in Partial<Parent>]?: string | null;
};

import React from 'react';
import Link from 'next/link';
import type { FooterMenuItem } from '../types';

export interface FooterMenuProps {
	footerMenuItems: FooterMenuItem[];
	children: JSX.Element;
}

/**
 * Type predicate to determine if a FooterMenuItem has a parent or parentId
 * @param {FooterMenuItem} item a `FooterMenuItem`
 * @returns true if `parentId` or `parent` properties are found on the `FooterMenuItem`
 */
const hasParent = (item: FooterMenuItem): item is FooterMenuItem =>
	item.parentId ? true : item.parent ? true : false;

/**
 * This is a Footer component.
 *
 * @param {FooterMenuProps} props - The props needed for the footer component
 * @param {FooterMenuItem[]} props.footerMenuItems - An array of footer menu items
 * @example
 * ```
 * const footerMenuItems = [
 *  {
 *   href: '/',
 *   linkText: 'Home',
 *  },
 * {
 *  href: '/articles',
 *  linkText: 'Articles',
 *  parent: 'home',
 * },
 * ...
 *  ]
 * ```
 * @param {React.ReactChild} props.children - an instance of React.ReactChild
 * @returns {JSX.Element} A footer component with a nav menu
 */
export const Footer: React.FC<FooterMenuProps> = ({
	footerMenuItems,
	children,
}: FooterMenuProps) => {
	const FooterMenu = () => {
		const menuArr = [];
		if (footerMenuItems) {
			// some not so great code to account for nested menu elements
			for (let i = 0; i < footerMenuItems.length; i++) {
				if (footerMenuItems[i + 1] && hasParent(footerMenuItems[i + 1])) {
					menuArr.push(
						<ul key={i}>
							<li className="ps-list-disc ps-text-blue-300">
								<Link href={footerMenuItems[i].href}>
									<a className="ps-text-blue-300 hover:ps-underline hover:ps-text-blue-100 focus:ps-text-purple-600 active:ps-text-purple-300">
										{footerMenuItems[i].linkText}
									</a>
								</Link>
							</li>
							<li className="ps-list-disc ps-text-blue-300 ps-ml-3">
								<Link href={footerMenuItems[i + 1].href}>
									<a className="ps-text-blue-300 hover:ps-underline hover:ps-text-blue-100 focus:ps-text-purple-600 active:ps-text-purple-300">
										{footerMenuItems[i + 1].linkText}
									</a>
								</Link>
							</li>
						</ul>,
					);
					// increment iterator to skip the next render
					i++;
				} else {
					menuArr.push(
						<li key={i} className="ps-list-disc ps-text-blue-300">
							<Link href={footerMenuItems[i].href}>
								<a className="ps-text-blue-300 hover:ps-underline hover:ps-text-blue-100 focus:ps-text-purple-600 active:ps-text-purple-300">
									{footerMenuItems[i].linkText}
								</a>
							</Link>
						</li>,
					);
				}
			}
		}
		return (
			<nav className="ps-flex ps-flex-col ps-max-w-lg ps-mx-auto lg:ps-max-w-screen-lg">
				<ul>{menuArr?.map((menu) => menu)}</ul>
			</nav>
		);
	};
	return (
		<footer className="ps-w-full ps-text-white ps-bg-black ps-p-4 ps-mt-12">
			<FooterMenu />
			<div className="ps-flex ps-my-4 ps-p-2">{children}</div>
		</footer>
	);
};

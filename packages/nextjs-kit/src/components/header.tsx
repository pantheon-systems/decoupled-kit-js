import React from 'react';
import Link from 'next/link';
import { LinkProps } from '../types';

interface HeaderProps {
	navItems: LinkProps[];
}

/**
 * This is a Footer component.
 *
 * @param {HeaderProps} props - The props needed for the header component
 * @param {LinkProps[]} props.navItems - An array of header menu items
 * @example
 * ```
 * const navItems = [
 * {
 *   linkText: 'Home',
 *   href: '/',
 * },
 * {
 *   linkText: 'Posts',
 *   href: '/posts',
 * },
 * ...
 *  ]
 * ```
 * @param {React.ReactChildren} props.children - an instance of React.ReactChildren
 * @returns {JSX.Element} A header component with a nav menu
 */

const Header: React.FC<HeaderProps> = ({
	navItems,
}: HeaderProps): JSX.Element => {
	return (
		<div className="my-0 pt-10 px-5 text-xl">
			<nav>
				<ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between max-w-screen-sm mx-auto">
					{navItems.map((item) => {
						return (
							<li
								className={`${item.href === '/' ? 'mr-auto' : 'mx-4'}`}
								key={item.href}
							>
								<Link className="font-sans" href={item.href}>
									<a className="hover:underline">{item.linkText}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Header;

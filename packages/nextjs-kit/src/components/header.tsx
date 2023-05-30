import Link from 'next/link.js';
import { LinkProps } from '../types';

export interface HeaderProps {
	navItems: LinkProps[];
}

/**
 * This is a Header component.
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

export const Header: React.FC<HeaderProps> = ({
	navItems,
}: HeaderProps): JSX.Element => {
	return (
		<div className="ps-my-0 ps-pt-10 ps-px-5 ps-text-xl">
			<nav>
				<ul className="ps-flex ps-flex-row ps-flex-wrap sm:ps-flex-nowrap ps-list-none ps-justify-between ps-max-w-screen-sm ps-mx-auto">
					{navItems.map((item) => {
						return (
							<li
								className={`${item.href === '/' ? 'ps-mr-auto' : 'ps-mx-4'}`}
								key={item.href}
							>
								<Link
									className="ps-font-sans hover:ps-underline"
									href={item.href}
								>
									{item.linkText}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

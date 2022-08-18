import React from 'react';
import Link from 'next/link';
import { HeaderData } from '../types/index';

interface HeaderProps {
  navItems: HeaderData[];
}

/**
 * This is a Header component.
 *
 * @param {HeaderProps} headers holds the title and href of each route to be displayed
 * @returns {React.JSX.Element}
 */

const Header: React.FC<HeaderProps> = ({
  navItems,
}: HeaderProps): JSX.Element => {
  return (
    <div className="my-0 pt-10 px-5 text-xl">
      <nav>
        <ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between max-w-screen-sm mx-auto">
          {navItems.map(item => {
            item.align = item.align !== undefined ? item.align : 'right';
            return (
              <li
                className={`${item.align === 'right' ? 'mr-auto' : 'mx-4'}`}
                key={item.href}
              >
                <Link className="font-sans" href={item.href}>
                  <a className="hover:underline">{item.title}</a>
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

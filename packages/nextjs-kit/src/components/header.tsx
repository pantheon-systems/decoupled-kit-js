import React from 'react';
import Link from 'next/link';
import { Headers } from '../index';

interface HeaderProps {
  headers: Headers[];
}

/**
 * This is a Header component.
 *
 * @param {Props} headers holds the title and href of each route to be displayed
 * @returns {React.JSX.Element}
 */

const Header: React.FC<HeaderProps> = ({ headers }: HeaderProps) => {
  return (
    <div className="my-0 pt-10 px-5 text-xl">
      <nav>
        <ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between max-w-screen-sm mx-auto">
          {headers.map(item => (
            <li
              className={`${item.href === '/' ? 'mr-auto' : 'mx-4'}`}
              key={item.href}
            >
              <Link className="font-sans" href={item.href}>
                <a className="hover:underline">{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

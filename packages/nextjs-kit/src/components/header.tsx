import React from 'react';
import Link from 'next/link';

interface Props {
  contentType: string;
}

/**
 * This is a test component. This is an example typedoc comment
 *
 * @param {Props} props
 * @returns React.JSX.Element
 */

const Header: React.FC<Props> = (props: Props) => {
  return (
    <div className="my-0 pt-10 px-5 text-xl">
      <nav>
        <ul className="flex flex-row flex-wrap sm:flex-nowrap list-none justify-between max-w-screen-sm mx-auto">
          {[
            ['🏠 Home', '/'],
            [`📰 ${props.contentType}`, `/${props.contentType.toLowerCase()}`],
            ['📑 Pages', '/pages'],
          ].map(([title, href]) => (
            <li className={`${href === '/' ? 'mr-auto' : 'mx-4'}`} key={href}>
              <Link className="font-sans" href={href}>
                <a className="hover:underline">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

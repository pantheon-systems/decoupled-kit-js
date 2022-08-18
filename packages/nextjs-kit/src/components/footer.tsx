import React from 'react';
import Link from 'next/link';
import { FooterMenuItem } from '../types/index';

interface FooterMenuProps {
  footerMenuItems: FooterMenuItem[];
  children: JSX.Element;
}

/**
 * This is a Footer component.
 *
 * @param {Props} footerMenuItems holds the linkText, href, and parent of each route to be displayed
 * @param {Props} children  copyright display and information to be passed in by the user
 * @returns {React.JSX.Element}
 */
const Footer: React.FC<FooterMenuProps> = ({
  footerMenuItems,
  children,
}: FooterMenuProps) => {
  const FooterMenu = () => {
    const menuArr = [];
    if (footerMenuItems) {
      // some not so great code to account for nested menu elements
      for (let i = 0; i < footerMenuItems.length; i++) {
        if (footerMenuItems[i + 1] && footerMenuItems[i + 1].parent) {
          menuArr.push(
            <ul key={i}>
              <li className="list-disc text-blue-300 ml-3">
                <Link href={footerMenuItems[i].href}>
                  <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300">
                    {footerMenuItems[i].linkText}
                  </a>
                </Link>
              </li>
              <li className="list-disc text-blue-300 ml-8">
                <Link href={footerMenuItems[i + 1].href}>
                  <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300">
                    {footerMenuItems[i + 1].linkText}
                  </a>
                </Link>
              </li>
            </ul>
          );
          // increment iterator to skip the next render
          i++;
        } else {
          menuArr.push(
            <li key={i} className="list-disc text-blue-300 ml-3">
              <Link href={footerMenuItems[i].href}>
                <a className="text-blue-300 hover:underline hover:text-blue-100 focus:text-purple-600 active:text-purple-300">
                  {footerMenuItems[i].linkText}
                </a>
              </Link>
            </li>
          );
        }
      }
    }
    return (
      <nav className="flex flex-col max-w-lg mx-auto lg:max-w-screen-lg">
        <ul>{menuArr?.map(menu => menu)}</ul>
      </nav>
    );
  };
  return (
    <footer className="w-full text-white bg-black p-4 mt-12">
      <FooterMenu />
      <div className="flex my-4 p-2">{children}</div>
    </footer>
  );
};

export default Footer;

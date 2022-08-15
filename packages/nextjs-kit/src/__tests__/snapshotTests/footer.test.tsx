import { render } from '@testing-library/react';

import Footer from '../../components/footer';

/**
 * @vitest-environment jsdom
 */

const footerMenu = [
  {
    label: 'Home',
    path: '/',
    id: 'homeTest',
  },
  {
    label: 'Posts',
    path: '/posts',
    id: 'postsTest',
  },
  {
    label: 'HPagesome',
    path: '/pages',
    id: 'homePages',
  },
];

describe('<Header />', () => {
  it("should render 'header'", () => {
    const { asFragment } = render(
      <Footer menuItems={footerMenu}>
        <span className="mx-auto">
          © {new Date().getFullYear()} Built with{' '}
          <a
            className="text-white hover:text-blue-100 underline"
            href="https://nextjs.org/"
          >
            Next.js
          </a>{' '}
          and{' '}
          <a
            className="text-blue-500 underline hover:text-blue-100"
            href="https://www.wordpress.com/"
          >
            Wordpress
          </a>
        </span>
      </Footer>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

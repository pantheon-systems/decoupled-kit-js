import { render } from '@testing-library/react';

import Header from '../../components/header';

/**
 * @vitest-environment jsdom
 */

const headerData = [
  {
    title: 'Home',
    href: '/',
    align: 'right',
  },
  {
    title: 'Posts',
    href: '/posts',
    align: 'left',
  },
  {
    title: 'Pages',
    href: '/pages',
    align: 'left',
  },
];

describe('<Header />', () => {
  it("should render 'header'", () => {
    const { asFragment } = render(<Header navItems={headerData} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

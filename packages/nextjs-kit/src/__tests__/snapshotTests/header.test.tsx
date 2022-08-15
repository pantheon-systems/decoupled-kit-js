import { render } from '@testing-library/react';

import Header from '../../components/header';

/**
 * @vitest-environment jsdom
 */

const headerData = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Posts',
    href: '/posts',
  },
  {
    title: 'Pages',
    href: '/pages',
  },
];

describe('<Header />', () => {
  it("should render 'header'", () => {
    const { asFragment } = render(<Header headers={headerData} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

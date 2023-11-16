import { render } from '@testing-library/react';
import { Header } from '../../src/components/Header/index';
import Link from 'next/link';
/**
 * @vitest-environment jsdom
 */

const navItems = [
	{
		linkText: 'Home',
		href: '/',
	},
	{
		linkText: 'Posts',
		href: '/posts',
	},
	{
		linkText: 'Pages',
		href: '/pages',
	},
];

describe('<Header />', () => {
	it("should render 'header'", () => {
		const { asFragment } = render(
			<Header
				Logo={
					<Link href="/">
						<img src={'/test-img-src'} alt="PantheonLogo" />
					</Link>
				}
				mainNavItems={navItems}
			/>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});

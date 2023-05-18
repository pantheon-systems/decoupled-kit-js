import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '../../src/components/header';

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
		const { asFragment } = render(<Header navItems={navItems} />);

		expect(asFragment()).toMatchSnapshot();
	});
});

import { render } from '@testing-library/react';

import { Footer } from '../../components/footer';

/**
 * @vitest-environment jsdom
 */

const footerMenuData = [
	{
		linkText: 'Home',
		href: '/',
		parent: '',
	},
	{
		linkText: 'Articles',
		href: '/articles',
		parent: 'Home',
	},
	{
		linkText: 'Pages',
		href: '/pages',
		parent: null,
	},
];

describe('<Footer />', () => {
	it("should render 'footer'", () => {
		const { asFragment } = render(
			<Footer footerMenuItems={footerMenuData}>
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
						WordPress
					</a>
				</span>
			</Footer>,
		);

		expect(asFragment()).toMatchSnapshot();
	});
});

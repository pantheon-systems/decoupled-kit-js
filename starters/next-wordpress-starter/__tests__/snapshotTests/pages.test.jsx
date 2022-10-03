import { render } from '@testing-library/react';
import PageHandler from '../../pages/pages/[[...uri]]';

import pages from '../data/pagesData.json';
import page from '../data/pageData.json';
import footerMenu from '../data/footerMenuData.json';

vi.mock('next/image');
vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
		pathname: 'test/path',
		push: vi.fn(),
		query: {
			uri: '/pages/[[...uri]]',
		},
	}),
}));

/**
 * @vitest-environment jsdom
 */

describe('<PageListTemplate />', () => {
	it('should render with pages', () => {
		const { asFragment } = render(
			<PageHandler pages={pages} menuItems={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
describe('<PageTemplate />', () => {
	it('should render a page', () => {
		const { asFragment } = render(
			<PageHandler pages={page} menuItems={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

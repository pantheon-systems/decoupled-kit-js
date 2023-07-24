import { render } from '@testing-library/react';
import PageListTemplate from '../../pages/pages';
import PageTemplate from '../../pages/pages/[...alias]';

import defaultProfilePagesData from '../data/defaultProfilePagesData.json';
import defaultProfileFooterMenu from '../data/defaultProfileMenuItemsMainData.json';

vi.mock('next/image');
vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
	}),
}));

/**
 * @vitest-environment jsdom
 */

describe('<PageListTemplate />', () => {
	it('should render pages', () => {
		const data = {
			pages: defaultProfilePagesData,
			footerMenu: defaultProfileFooterMenu,
		};

		const { asFragment } = render(
			<PageListTemplate
				sortedPages={data.pages}
				footerMenu={data.footerMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
describe('<PageTemplate />', () => {
	it('should render a page', () => {
		const data = {
			page: defaultProfilePagesData[0],
			footerMenu: defaultProfileFooterMenu,
		};

		const { asFragment } = render(
			<PageTemplate page={data.page} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

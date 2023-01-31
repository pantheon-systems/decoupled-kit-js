import { render } from '@testing-library/react';
import PageListTemplate from '../../pages/pages';
import PageTemplate from '../../pages/pages/[...alias]';

import umamiEnPagesData from '../data/umamiEnPagesData.json';
import umamiFooterMenu from '../data/umamiMenuItemsMainData.json';
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

describe(`${PROFILE} <PageListTemplate />`, () => {
	it(`should render with ${PROFILE} profile pages`, () => {
		const data =
			PROFILE === 'umami'
				? { pages: umamiEnPagesData, footerMenu: umamiFooterMenu }
				: {
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
describe(`${PROFILE} <PageTemplate />`, () => {
	it(`should render with ${PROFILE} profile page`, () => {
		const data =
			PROFILE === 'umami'
				? { page: umamiEnPagesData[0], footerMenu: umamiFooterMenu }
				: {
						page: defaultProfilePagesData[0],
						footerMenu: defaultProfileFooterMenu,
				  };

		const { asFragment } = render(
			<PageTemplate page={data.page} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

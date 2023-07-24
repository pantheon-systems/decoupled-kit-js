import { render } from '@testing-library/react';
import CatchAllRoute from '../../pages/[...alias]';

import topLevelArticleData from '../data/topLevelArticleData.json';
import topLevelPageData from '../data/topLevelPageData.json';
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

describe('<CatchAllRoute />', () => {
	const footerMenu = defaultProfileFooterMenu;
	it(`should render an article`, () => {
		const data = { pageData: topLevelArticleData, footerMenu: footerMenu };

		const { asFragment } = render(
			<CatchAllRoute pageData={data.pageData} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it(`should render a page`, () => {
		const data = { pageData: topLevelPageData, footerMenu: footerMenu };

		const { asFragment } = render(
			<CatchAllRoute pageData={data.pageData} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

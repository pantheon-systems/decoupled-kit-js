import { render } from '@testing-library/react';
import CatchAllRoute from '../../pages/[...alias]';

import topLevelArticleData from '../data/topLevelArticleData.json';
import topLevelPageData from '../data/topLevelPageData.json';
import topLevelRecipeData from '../data/topLevelRecipeData.json';

import umamiFooterMenu from '../data/umamiMenuItemsMainData.json';

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
	const footerMenu = umamiFooterMenu;
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

	it(`should render a recipe`, () => {
		const data = { pageData: topLevelRecipeData, footerMenu: footerMenu };

		const { asFragment } = render(
			<CatchAllRoute pageData={data.pageData} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

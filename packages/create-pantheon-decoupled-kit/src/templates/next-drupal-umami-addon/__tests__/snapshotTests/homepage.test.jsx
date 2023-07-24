import { render } from '@testing-library/react';
import HomepageTemplate from '../../pages/index';

import umamiEnArticlesData from '../data/umamiEnArticlesData.json';
import umamiFooterMenu from '../data/umamiMenuItemsMainData.json';

vi.mock('next/image');

/**
 * @vitest-environment jsdom
 */

describe('<HomepageTemplate />', () => {
	it(`should render articles`, () => {
		const data = { articles: umamiEnArticlesData, footerMenu: umamiFooterMenu };

		const { asFragment } = render(
			<HomepageTemplate
				sortedArticles={data.articles}
				footerMenu={data.footerMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

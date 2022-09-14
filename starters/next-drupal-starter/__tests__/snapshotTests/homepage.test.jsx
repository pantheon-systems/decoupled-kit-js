import { render } from '@testing-library/react';
import HomepageTemplate from '../../pages/index';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
import defaultProfileFooterMenu from '../data/defaultProfileMenuItemsMainData.json';
import umamiEnArticlesData from '../data/umamiEnArticlesData.json';
import umamiFooterMenu from '../data/umamiMenuItemsMainData.json';

vi.mock('next/image');

/**
 * @vitest-environment jsdom
 */

describe(`${PROFILE} <HomepageTemplate />`, () => {
	it(`should render with ${PROFILE} profile articles`, () => {
		const data =
			PROFILE === 'umami'
				? { articles: umamiEnArticlesData, footerMenu: umamiFooterMenu }
				: {
						articles: defaultProfileArticlesData,
						footerMenu: defaultProfileFooterMenu,
				  };

		const { asFragment } = render(
			<HomepageTemplate
				sortedArticles={data.articles}
				footerMenu={data.footerMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

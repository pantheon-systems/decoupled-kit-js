import { render } from '@testing-library/react';
import HomepageTemplate from '../../pages/index';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
import defaultProfileFooterMenu from '../data/defaultProfileMenuItemsMainData.json';

vi.mock('next/image');

/**
 * @vitest-environment jsdom
 */

vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
	}),
}));

describe('<HomepageTemplate />', () => {
	it('should render articles', () => {
		const data = {
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

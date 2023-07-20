import { render } from '@testing-library/react';
import SSRArticlesListTemplate from '../../pages/articles/index';
import ArticleTemplate from '../../pages/articles/[...slug]';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
import defaultProfileFooterMenu from '../data/defaultProfileMenuItemsMainData.json';
import umamiEnArticlesData from '../data/umamiEnArticlesData.json';
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

describe('<SSRArticlesListTemplate />', () => {
	it(`should render articles`, () => {
		const data = { articles: umamiEnArticlesData, footerMenu: umamiFooterMenu };

		const { asFragment } = render(
			<SSRArticlesListTemplate
				sortedArticles={data.articles}
				footerMenu={data.footerMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
describe('<ArticleTemplate />', () => {
	it(`should render articles`, () => {
		const data = {
			article: umamiEnArticlesData[0],
			footerMenu: umamiFooterMenu,
		};

		const { asFragment } = render(
			<ArticleTemplate article={data.article} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

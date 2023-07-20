import { render } from '@testing-library/react';
import SSRArticlesListTemplate from '../../pages/articles/index';
import ArticleTemplate from '../../pages/articles/[...slug]';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
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

describe('<SSRArticlesListTemplate />', () => {
	it('should render articles', () => {
		const data = {
			articles: defaultProfileArticlesData,
			footerMenu: defaultProfileFooterMenu,
		};

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
	it('should render articles', () => {
		const data = {
			article: defaultProfileArticlesData[0],
			footerMenu: defaultProfileFooterMenu,
		};

		const { asFragment } = render(
			<ArticleTemplate article={data.article} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

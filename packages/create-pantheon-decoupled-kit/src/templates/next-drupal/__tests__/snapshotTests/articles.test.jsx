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

describe(`${PROFILE} <SSRArticlesListTemplate />`, () => {
	it(`should render with ${PROFILE} profile articles`, () => {
		const data =
			PROFILE === 'umami'
				? { articles: umamiEnArticlesData, footerMenu: umamiFooterMenu }
				: {
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
describe(`${PROFILE} <ArticleTemplate />`, () => {
	it(`should render with ${PROFILE} profile articles`, () => {
		const data =
			PROFILE === 'umami'
				? { article: umamiEnArticlesData[0], footerMenu: umamiFooterMenu }
				: {
						article: defaultProfileArticlesData[0],
						footerMenu: defaultProfileFooterMenu,
				  };

		const { asFragment } = render(
			<ArticleTemplate article={data.article} footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

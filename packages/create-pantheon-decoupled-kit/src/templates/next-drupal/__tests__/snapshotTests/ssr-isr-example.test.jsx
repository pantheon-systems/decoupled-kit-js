import { render } from '@testing-library/react';
import SSGISRExampleTemplate from '../../pages/examples/ssg-isr';

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

describe(`${PROFILE} <SSGISRExampleTemplate />`, () => {
	it(`should render with ${PROFILE} profile articles`, () => {
		const data =
			PROFILE === 'umami'
				? { articles: umamiEnArticlesData, footerMenu: umamiFooterMenu }
				: {
						articles: defaultProfileArticlesData,
						footerMenu: defaultProfileFooterMenu,
				  };

		const { asFragment } = render(
			<SSGISRExampleTemplate
				articles={data.articles}
				footerMenu={data.footerMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

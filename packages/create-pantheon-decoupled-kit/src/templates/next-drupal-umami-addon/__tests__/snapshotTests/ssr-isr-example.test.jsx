import { render } from '@testing-library/react';
import SSGISRExampleTemplate from '../../pages/examples/ssg-isr';

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

describe('<SSGISRExampleTemplate />', () => {
	it(`should render articles`, () => {
		const data = { articles: umamiEnArticlesData, footerMenu: umamiFooterMenu };

		const { asFragment } = render(
			<SSGISRExampleTemplate
				articles={data.articles}
				footerMenu={data.footerMenu}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

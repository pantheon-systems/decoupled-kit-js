import { render } from '@testing-library/react';
import SSGISRExampleTemplate from '../../pages/examples/ssg-isr';

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

describe('<SSGISRExampleTemplate />', () => {
	it(`should render articles`, () => {
		const data = {
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

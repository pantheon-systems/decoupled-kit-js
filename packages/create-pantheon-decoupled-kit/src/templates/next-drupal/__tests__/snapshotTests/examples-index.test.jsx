import { render } from '@testing-library/react';
import ExamplesPageTemplate from '../../pages/examples/index';

import defaultProfileFooterMenu from '../data/defaultProfileMenuItemsMainData.json';
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

describe(`${PROFILE} <ExamplesPageTemplate />`, () => {
	it(`should render`, () => {
		const data =
			PROFILE === 'umami'
				? { footerMenu: umamiFooterMenu }
				: {
						footerMenu: defaultProfileFooterMenu,
				  };

		const { asFragment } = render(
			<ExamplesPageTemplate footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

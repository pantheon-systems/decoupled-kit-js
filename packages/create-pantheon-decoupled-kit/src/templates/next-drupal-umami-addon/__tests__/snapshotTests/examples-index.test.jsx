import { render } from '@testing-library/react';
import ExamplesPageTemplate from '../../pages/examples/index';

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

describe(`Umami <ExamplesPageTemplate />`, () => {
	it(`should render`, () => {
		const data = { footerMenu: umamiFooterMenu };

		const { asFragment } = render(
			<ExamplesPageTemplate footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

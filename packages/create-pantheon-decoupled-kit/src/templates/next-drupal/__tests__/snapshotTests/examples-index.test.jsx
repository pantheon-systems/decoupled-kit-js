import { render } from '@testing-library/react';
import ExamplesPageTemplate from '../../pages/examples/index';

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

describe('<ExamplesPageTemplate />', () => {
	it('should render the examples page', () => {
		const data = {
			footerMenu: defaultProfileFooterMenu,
		};

		const { asFragment } = render(
			<ExamplesPageTemplate footerMenu={data.footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

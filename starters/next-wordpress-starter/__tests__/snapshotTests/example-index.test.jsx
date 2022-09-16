import { render } from '@testing-library/react';
import ExamplesPageTemplate from '../../pages/examples/index';

import footerMenu from '../data/footerMenuData.json';

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
	it('should render the examples list page', () => {
		const { asFragment } = render(
			<ExamplesPageTemplate footerMenu={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

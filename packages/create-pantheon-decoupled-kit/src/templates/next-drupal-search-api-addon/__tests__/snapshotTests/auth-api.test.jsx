import { render } from '@testing-library/react';
import AuthApiExampleTemplate from '../../pages/examples/auth-api';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
import defaultProfileFooterMenu from '../data/defaultProfileMenuItemsMainData.json';

/**
 * @vitest-environment jsdom
 */

vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
	}),
}));

describe('<AuthApiExampleTemplate />', () => {
	const footerMenu = defaultProfileFooterMenu;
	it('should render a success message if authenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate
				footerMenu={footerMenu}
				articles={defaultProfileArticlesData}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it('should render a failure message if unauthenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate footerMenu={footerMenu} articles={[]} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

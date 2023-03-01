import { render } from '@testing-library/react';
import AuthApiExampleTemplate from '../../pages/examples/auth-api';

import defaultProfileArticlesData from '../data/defaultProfileArticlesData.json';
import umamiFooterMenu from '../data/umamiMenuItemsMainData.json';

/**
 * @vitest-environment jsdom
 */

describe('<AuthApiExampleTemplate />', () => {
	const footerMenu = umamiFooterMenu;
	it('should render a success message if authenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate
				footerMenu={footerMenu}
				// using default articles for both profiles as the content
				// does not matter here.
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

import { render } from '@testing-library/react';
import AuthApiExampleTemplate from '../../pages/examples/auth-api';

import posts from '../data/postsData.json';
import footerMenu from '../data/footerMenuData.json';

/**
 * @vitest-environment jsdom
 */

describe('<AuthApiExampleTemplate />', () => {
	it('should render a success message if authenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate
				footerMenu={footerMenu}
				// using default articles for both profiles as the content
				// does not matter here.
				privatePosts={posts}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it('should render a failure message if unauthenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate footerMenu={footerMenu} privatePosts={[]} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

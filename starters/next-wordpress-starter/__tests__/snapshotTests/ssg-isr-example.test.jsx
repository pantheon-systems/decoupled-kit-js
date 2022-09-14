import { render } from '@testing-library/react';
import SSGISRExampleTemplate from '../../pages/examples/ssg-isr';

import posts from '../data/postsData.json';
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

describe('<SSGISRExampleTemplate />', () => {
	it('should render with posts', () => {
		const { asFragment } = render(
			<SSGISRExampleTemplate posts={posts} footerMenu={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

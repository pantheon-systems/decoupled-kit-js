import { render } from '@testing-library/react';
import PostHandler from '../../pages/posts/[[...page]]';

import posts from '../data/postsData.json';
import post from '../data/postData.json';
import footerMenu from '../data/footerMenuData.json';

vi.mock('next/image');
vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
		pathname: 'test/path',
		push: vi.fn(),
		query: {
			page: '/posts/[[...page]]',
		},
	}),
}));

/**
 * @vitest-environment jsdom
 */

describe('<PostHandler />', () => {
	it('should render with multiple posts in grid', () => {
		const { asFragment } = render(
			<PostHandler posts={posts} menuItems={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
describe('<PostHandler />', () => {
	it('should render a post', () => {
		const { asFragment } = render(
			<PostHandler posts={post} menuItems={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

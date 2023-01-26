import { render } from '@testing-library/react';
import PostsListTemplate from '../../pages/posts/index';
import PostTemplate from '../../pages/posts/[...slug]';

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
			slug: '/posts/[slug]',
		},
	}),
}));

/**
 * @vitest-environment jsdom
 */

describe('<PostListTemplate />', () => {
	it('should render with posts', () => {
		const { asFragment } = render(
			<PostsListTemplate posts={posts} footerMenu={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
describe('<PostTemplate />', () => {
	it('should render a post', () => {
		const { asFragment } = render(
			<PostTemplate post={post} footerMenu={footerMenu} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

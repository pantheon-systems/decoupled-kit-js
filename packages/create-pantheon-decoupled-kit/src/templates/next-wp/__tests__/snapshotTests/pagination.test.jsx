import { render } from '@testing-library/react';
import PaginationExampleTemplate from '../../pages/examples/pagination/[[...page]]';

import examplePaginationData from '../data/examplePaginationData.json';
import defaultFooterMenu from '../data/footerMenuData.json';

vi.mock('next/router', () => ({
	useRouter: () => ({
		locale: 'en',
		pathname: 'test/path',
		push: vi.fn(),
		query: {
			page: '/examples/pagination/[[...page]]',
		},
	}),
}));
/**
 * @vitest-environment jsdom
 */

describe(`<PaginationExampleTemplate />`, () => {
	it('should render the Pagination Example page', () => {
		const { asFragment } = render(
			<PaginationExampleTemplate
				footerMenu={defaultFooterMenu}
				posts={examplePaginationData}
			/>,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

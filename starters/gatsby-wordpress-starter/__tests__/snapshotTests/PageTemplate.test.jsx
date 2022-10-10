import { render } from '@testing-library/react'
import Index from '../../src/templates/index'
import posts from '../data/postsData.json'
import footerMenu from '../data/footerMenuData.json'

vi.mock('next/image')

/**
 * @vitest-environment jsdom
 */

describe('<HomepageTemplate />', () => {
	it('should render with posts', () => {
		const { asFragment } = render(
			<Index data={posts} menuItems={footerMenu} />,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})

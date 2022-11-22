import { render } from '@testing-library/react'
import AuthApiExampleTemplate from '../../src/templates/authApi'

import posts from '../data/examplePaginationData.json'

/**
 * @vitest-environment jsdom
 */

describe('<AuthApiExampleTemplate />', () => {
	it('should render a success message if authenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate
				pageContext={{
					privatePosts: posts,
				}}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
	it('should render a failure message if unauthenticated', () => {
		const { asFragment } = render(
			<AuthApiExampleTemplate
				pageContext={{
					privatePosts: [],
				}}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
})

import { render } from '@testing-library/react'

import Index from '../../src/templates/index'
import data from '../data/allWpPost.json'

describe('<Index />', () => {
	it('should render with posts', () => {
		const { asFragment } = render(
			<Index
				pageContext={{
					nextPagePath: null,
					previousPagePath: null,
					posts: [{ post: data.allWpPost.nodes[0] }],
				}}
			/>,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

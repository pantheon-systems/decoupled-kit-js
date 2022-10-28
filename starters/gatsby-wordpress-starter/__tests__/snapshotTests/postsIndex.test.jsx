import { render } from '@testing-library/react'

import PostIndexTemplate from '../../src/templates/postsIndex'
import data from '../data/allWpPost.json'

describe('<PostIndexTemplate />', () => {
	beforeEach(() => {
		location = {
			pathname: '/posts/1',
			state: { breakOpen: false },
		}
	})

	it('should render with posts', () => {
		const { asFragment } = render(
			<PostIndexTemplate
				location={location}
				pageContext={{
					itemsPerPage: 2,
					routing: true,
					posts: [{ post: data.allWpPost.nodes[0] }],
				}}
			/>,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

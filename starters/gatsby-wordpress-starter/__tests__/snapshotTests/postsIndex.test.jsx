import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import PostIndexTemplate from '../../src/templates/postsIndex'
import data from '../data/allWpPost.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe('<PostIndexTemplate />', () => {
	beforeEach(() => {
		StaticQuery.mockImplementation(() => {
			location = {
				pathname: '/posts/1',
				state: { breakOpen: false },
			}
			return {
				data,
			}
		})
	})

	it('should render with posts', () => {
		const { asFragment } = render(
			<PostIndexTemplate
				data={data}
				location={location}
				pageContext={{ itemsPerPage: 2, routing: true }}
			/>,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

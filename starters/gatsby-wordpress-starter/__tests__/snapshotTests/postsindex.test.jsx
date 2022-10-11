import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import PostIndexTemplate from '../../src/templates/postsIndex'
import data from '../data/allWpPost.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe('<PostIndexTemplate />', () => {
	beforeEach(() => {
		StaticQuery.mockImplementation(() => {
			return {
				data,
			}
		})
	})

	it('should render with posts', () => {
		const { asFragment } = render(
			<PostIndexTemplate
				data={data}
				pageContext={{ nextPagePath: null, previousPagePath: null }}
			/>,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

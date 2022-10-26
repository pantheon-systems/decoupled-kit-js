import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import Index from '../../src/templates/index'
import data from '../data/allWpPost.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe('<Index />', () => {
	beforeEach(() => {
		StaticQuery.mockImplementation(() => {
			return {
				data,
			}
		})
	})

	it('should render with posts', () => {
		const { asFragment } = render(
			<Index
				data={data}
				pageContext={{ nextPagePath: null, previousPagePath: null }}
			/>,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

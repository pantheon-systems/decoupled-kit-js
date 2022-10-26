import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import PageIndexTemplate from '../../src/templates/pagesIndex'
import data from '../data/pages.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe('<PageIndexTemplate />', () => {
	beforeEach(() => {
		StaticQuery.mockImplementationOnce(() => {
			location = {
				pathname: '/pages/1',
				state: { breakOpen: false },
			}
			return {
				data,
			}
		})
	})
	it('should render with pages', () => {
		const { asFragment } = render(
			<PageIndexTemplate
				data={data}
				location={location}
				pageContext={{ itemsPerPage: 2, routing: true }}
			/>,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

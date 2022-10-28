import { render } from '@testing-library/react'

import PageIndexTemplate from '../../src/templates/pagesIndex'
import pages from '../data/pages.json'

describe('<PageIndexTemplate />', () => {
	beforeEach(() => {
		location = {
			pathname: '/pages/1',
			state: { breakOpen: false },
		}
	})
	it('should render with pages', () => {
		const { asFragment } = render(
			<PageIndexTemplate
				pageContext={{ itemsPerPage: 2, routing: true, pages }}
				location={location}
			/>,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

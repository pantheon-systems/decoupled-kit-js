import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import PageIndexTemplate from '../../src/templates/pagesIndex'
import pages from '../data/pages.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe('<PageTemplate />', () => {
	it('should render with pages', () => {
		const { asFragment } = render(
			<PageIndexTemplate pageContext={pages} />,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

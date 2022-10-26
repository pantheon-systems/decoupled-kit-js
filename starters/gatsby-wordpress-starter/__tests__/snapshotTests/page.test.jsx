import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import PageTemplate from '../../src/templates/page'
import pages from '../data/pages.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')
const page = pages[0]
const next = pages[1]
const previous = null
describe('<PostTemplate />', () => {
	beforeEach(() => {
		StaticQuery.mockImplementation(() => ({ data: { page } }))
	})

	it('should render with a page', () => {
		const { asFragment } = render(
			<PageTemplate data={page} pageContext={{ next, previous }} />,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

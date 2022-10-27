import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import PageTemplate from '../../src/templates/page'
import data from '../data/pageTemplateData.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')
const page = data[0]
const next = data[1]
const previous = null
describe('<PageTemplate />', () => {
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

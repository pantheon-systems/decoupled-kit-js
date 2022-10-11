import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'
import Index from '../../src/templates/index'
import posts from '../data/allWpPost.json'
import wpMenu from '../data/wpMenu.json'
import { vi } from 'vitest'

vi.mock('gatsby')


const mockUseStaticQuery = {
	data: posts,
	wpMenu,
}

describe('<Index />', () => {
	beforeEach(() => {
		console.log('hello')
		useStaticQuery.mockImplementation(() => mockUseStaticQuery)
	})
	afterEach(() => {
		vi.restoreAllMocks()
	})

	it('should render with posts', () => {
		const { asFragment } = render(<Index />)

		expect(asFragment()).toMatchSnapshot()
	})
})

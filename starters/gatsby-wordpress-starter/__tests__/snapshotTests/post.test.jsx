import * as Gatsby from 'gatsby'
import { render } from '@testing-library/react'

import PostTemplate from '../../src/templates/post'
import data from '../data/allWpPost.json'

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')
const post = data.allWpPost.nodes[0]
const next = data.allWpPost.nodes[1]
const previous = null

describe('<PostTemplate />', () => {
	beforeEach(() => {
		StaticQuery.mockImplementation(() => ({ data: { post, next, previous } }))
	})

	it('should render with a post', () => {
		const { asFragment } = render(
			<PostTemplate data={{ post, next, previous }} />,
		)

		expect(asFragment()).toMatchSnapshot()
	})
})

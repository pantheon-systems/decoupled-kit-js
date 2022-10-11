import * as Gatsby from 'gatsby'
import React from 'react'
import { render } from '@testing-library/react'
import Index from '../../src/templates/index'
import data from '../data/allWpPost.json'
import { wpMenu } from '../data/wpMenu.json'
import { vi } from 'vitest'

const useStaticQuery = vi.spyOn(Gatsby, 'useStaticQuery')
const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe('<Index />', () => {
	beforeEach(() => {
		useStaticQuery.mockImplementation(() => {
			return {
				wpMenu,
			}
		})
		StaticQuery.mockImplementation(({ render }) => {
			render({
				data,
			})
		})
	})
	afterEach(() => {
		vi.restoreAllMocks()
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

import * as Gatsby from 'gatsby'
import { screen, render, fireEvent } from '@testing-library/react'
import data from '../data/examplePaginationData.json'
import PaginationPostsExample from '../../src/templates/pagination'
import React from 'react'

/**
 * @vitest-environment jsdom
 */

const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe(`<PaginationPostsExample />`, () => {
	beforeEach(() => {
		location = {
			pathname: '/examples/pagination/1',
			state: { breakOpen: false },
		}
		StaticQuery.mockImplementationOnce(() => {
			return {
				data,
			}
		})
	})
	it('should render the paginated data', () => {
		const { asFragment } = render(
			<PaginationPostsExample
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 5, end: 8, add: 3 },
				}}
				location={location}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
	it('back button is disabled on first page', () => {
		render(
			<PaginationPostsExample
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 5, end: 8, add: 3 },
				}}
				location={location}
			/>,
		)
		expect(screen.getByTestId('link-wrapper true false')).not.toBe(null)
	})

	it('next button is disabled on last page', () => {
		render(
			<PaginationPostsExample
				pageContext={{
					postsPerPage: 60,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 5, end: 8, add: 3 },
				}}
				location={location}
			/>,
		)
		fireEvent.click(screen.getByText('>'))
		fireEvent.click(screen.getByText('>'))
		expect(screen.getByTestId('link-wrapper false true')).not.toBe(null)
	})

	it('check breakpoints', () => {
		render(
			<PaginationPostsExample
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 5, end: 8, add: 3 },
				}}
				location={location}
			/>,
		)
		expect(screen.queryAllByText('6')).toHaveLength(0)
		fireEvent.click(screen.getByText('...'))
		expect(screen.queryAllByText('6')).toHaveLength(1)
	})
	it('check next button works', () => {
		const { asFragment } = render(
			<PaginationPostsExample
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 5, end: 8, add: 3 },
				}}
				location={location}
			/>,
		)
		fireEvent.click(screen.getByText('>'))
		expect(asFragment()).toMatchSnapshot()
	})
	it('check back button works', () => {
		const { asFragment } = render(
			<PaginationPostsExample
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 5, end: 8, add: 3 },
				}}
				location={location}
			/>,
		)
		fireEvent.click(screen.getByText('>'))
		fireEvent.click(screen.getByText('<'))
		expect(asFragment()).toMatchSnapshot()
	})
})

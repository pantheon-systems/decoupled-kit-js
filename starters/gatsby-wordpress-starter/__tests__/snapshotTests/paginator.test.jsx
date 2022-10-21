import * as Gatsby from 'gatsby'
import { screen, render, fireEvent } from '@testing-library/react'
import data from '../data/examplePaginationData.json'
import PaginationTemplate from '../../src/templates/pagination'
import React from 'react'

/**
 * @vitest-environment jsdom
 */

// const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')

describe(`<PaginationTemplate />`, () => {
	const StaticQuery = vi.spyOn(Gatsby, 'StaticQuery')
	beforeEach(() => {
		StaticQuery.mockImplementationOnce(() => {
			return {
				data,
			}
		})
	})
	it('should render the paginated data', () => {
		window.location = new URL('http://localhost:8000/examples/pagination/1')
		const { asFragment } = render(
			<PaginationTemplate
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 6, end: 12, add: 6 },
				}}
				location={window.location}
			/>,
		)
		expect(asFragment()).toMatchSnapshot()
	})
	it('back button is disabled on first page', () => {
		render(
			<PaginationTemplate
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 6, end: 12, add: 6 },
				}}
				location={window.location}
			/>,
		)
		expect(document.getElementById('back-btn').disabled).toBe(true)
	})

	it('next button is disabled on last page', () => {
		render(
			<PaginationTemplate
				pageContext={{
					postsPerPage: 60,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 6, end: 12, add: 6 },
				}}
				location={window.location}
			/>,
		)
		fireEvent.click(screen.getByText('>'))
		fireEvent.click(screen.getByText('>'))
		expect(document.getElementById('next-btn').disabled).toBe(true)
	})

	it('check breakpoints', () => {
		render(
			<PaginationTemplate
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 6, end: 12, add: 6 },
				}}
				location={window.location}
			/>,
		)
		expect(screen.queryAllByText('6')).toHaveLength(0)
		fireEvent.click(screen.getByText('...'))
		expect(screen.queryAllByText('6')).toHaveLength(1)
	})
	it('check next button works', () => {
		const { asFragment } = render(
			<PaginationTemplate
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 6, end: 12, add: 6 },
				}}
				location={window.location}
			/>,
		)
		fireEvent.click(screen.getByText('>'))
		expect(asFragment()).toMatchSnapshot()
	})
	it('check back button works', () => {
		const { asFragment } = render(
			<PaginationTemplate
				pageContext={{
					postsPerPage: 10,
					routing: true,
					pagPosts: data,
					breakpoints: { start: 6, end: 12, add: 6 },
				}}
				location={window.location}
			/>,
		)
		fireEvent.click(screen.getByText('>'))
		fireEvent.click(screen.getByText('<'))
		expect(asFragment()).toMatchSnapshot()
	})
})

import React from 'react'
import * as Gatsby from 'gatsby'
import { vi } from 'vitest'

import { wpMenu } from './data/wpMenu.json'

vi.mock(`gatsby`, async () => {
	const gatsby = await vi.importActual(`gatsby`)

	return {
		...gatsby,
		graphql: vi.fn(),
		Link: vi.fn().mockImplementation(({ to, ...rest }) =>
			React.createElement(`a`, {
				...rest,
				href: to,
			}),
		),
		StaticQuery: vi.fn(),
		useStaticQuery: vi.fn(),
	}
})

const useStaticQuery = vi.spyOn(Gatsby, 'useStaticQuery')
beforeEach(() => {
	useStaticQuery.mockImplementation(() => {
		return {
			wpMenu,
		}
	})
})

afterEach(() => {
	vi.restoreAllMocks()
})

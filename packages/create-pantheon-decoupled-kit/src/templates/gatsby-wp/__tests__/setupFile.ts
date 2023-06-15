import React from 'react';
import * as Gatsby from 'gatsby';
import { vi } from 'vitest';

import { data } from './data/wpMenu.json';

vi.mock('gatsby', async () => {
	const gatsby = await vi.importActual<typeof Gatsby>('gatsby');

	return {
		...gatsby,
		graphql: vi.fn(),
		Link: vi.fn().mockImplementation(({ to, ...rest }: { to: string }) =>
			React.createElement(`a`, {
				...rest,
				href: to,
			}),
		),
		StaticQuery: vi.fn(),
		useStaticQuery: vi.fn(),
	};
});

/**
 * Mock static query
 */
const useStaticQuery = vi.spyOn(Gatsby, 'useStaticQuery');
beforeEach(() => {
	// fetch the wpMenu data before each test
	// to simulate the Footer menu query
	useStaticQuery.mockImplementation(() => {
		return {
			wpMenu: data.wpMenu,
		};
	});
});

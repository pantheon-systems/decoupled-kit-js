import { setupServer } from 'msw/node';
import { drupalStateResponseHandlers } from './drupalStateResponseHandlers';
import { getDrupalSearchResultsResponseHandlers } from './getDrupalSearchResultsResponseHandlers';

const responseHandlers = [
	...drupalStateResponseHandlers,
	...getDrupalSearchResultsResponseHandlers,
];

export const server = setupServer(...responseHandlers);

import { setupServer } from 'msw/node';
import { basicPostsQuery } from './basicPostsQuery';

export const server = setupServer(basicPostsQuery);

import { setupServer } from 'msw/node';
import { drupalRequestHandlers } from './drupal/requestHandlers';
import { wordpressRequestHandlers } from './wordpress/requestHandlers';

const handlers = [...drupalRequestHandlers, ...wordpressRequestHandlers];

export const server = setupServer(...handlers);

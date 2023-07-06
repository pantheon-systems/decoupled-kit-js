import { setupServer } from 'msw/node';
import { drupalRequestHandlers } from './drupal/requestHandlers';

const handlers = [...drupalRequestHandlers];

export const server = setupServer(...handlers);

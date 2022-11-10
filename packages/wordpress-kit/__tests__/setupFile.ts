import { server } from '../__mocks__/server';
//import fetch from 'node-fetch';

//global.fetch = fetch;
// Start server before all tests
beforeAll(() => {
	// console.log('hello');
	server.listen({ onUnhandledRequest: 'error' });
});

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

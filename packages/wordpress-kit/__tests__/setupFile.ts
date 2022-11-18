import { server } from '../__mocks__/server';

// Start server before all tests
beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });
});

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

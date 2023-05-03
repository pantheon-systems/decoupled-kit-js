import { server } from '../__mocks__/server';

beforeAll(() => {
	server.listen({ onUnhandledRequest: 'error' });
});

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());

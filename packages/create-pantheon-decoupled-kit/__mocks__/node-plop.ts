export default () => ({
	setPlopfilePath: vi.fn(),
	getGenerator: vi.fn().mockImplementation(() => ({
		runActions: vi.fn().mockReturnValue({ changes: [], failures: [] }),
	})),
	setActionType: vi.fn(),
	setGenerator: vi.fn(),
	getGeneratorList: vi
		.fn()
		.mockImplementation(() => [{ name: 'test-add' }, { name: 'test-append' }]),
});

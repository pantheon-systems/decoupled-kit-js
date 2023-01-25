import Handlebars from 'handlebars';
export default async () => ({
	setPlopfilePath: vi.fn(),
	getPlopfilePath: vi
		.fn()
		.mockImplementation(() => `${process.cwd()}/__tests__/testGenerators`),
	renderString: vi.fn().mockImplementation((template, data) => {
		const t = Handlebars.compile(template);
		return t(data);
	}),
	getGenerator: vi.fn().mockImplementation(() => ({
		runActions: vi.fn().mockReturnValue({ changes: [], failures: [] }),
	})),
	setActionType: vi.fn(),
	setGenerator: vi.fn(),
	getGeneratorList: vi
		.fn()
		.mockImplementation(() => [
			{ name: 'test-add' },
			{ name: 'test-append' },
			{ name: 'test-diff' },
		]),
});

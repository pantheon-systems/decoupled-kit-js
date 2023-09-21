describe('NO_DKHC', () => {
	beforeEach(() => {
		delete process.env['NO_DKHC'];
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});
	it.fails(
		'should skip the health check if the NO_DKHC env var is set',
		async () => {
			process.env['NO_DKHC'] = '1';
			const logSpy = vi.spyOn(console, 'log');

			const processSpy = vi
				.spyOn(process, 'exit')
				.mockImplementation((code) => {
					throw code as never;
				});

			// runs the script
			await import('../src/bin');

			expect(logSpy).toHaveBeenLastCalledWith(
				'⏭ Skipping Decoupled Kit Health Check: NO_DKHC is set',
			);
			expect(processSpy).toHaveBeenCalledWith(0);
		},
	);
});

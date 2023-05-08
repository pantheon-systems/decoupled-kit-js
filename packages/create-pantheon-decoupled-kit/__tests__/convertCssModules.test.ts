import * as actions from '../src/actions/convertCSSModules';
import { execSync } from 'child_process';
import type { ParsedArgs } from 'minimist';

vi.mock('child_process');

const outDir = `${process.cwd()}/__tests__/fixtures/convertCSSModules/empty`;

describe('convertCSSModules()', () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it('convertCSSModules to have called css-modules-to-tailwind', async () => {
		await actions.convertCSSModules({
			data: {
				_: ['test-module-conversion'],
				outDir: outDir,
				silent: false,
				tailwindcss: true,
				convertCSSModules: true,
			},
		});

		expect(vi.mocked(execSync)).toHaveBeenCalledWith(
			'npx css-modules-to-tailwind pages/**/*.jsx components/*.jsx --force',
			{
				stdio: 'inherit',
				cwd: outDir,
			},
		);
	});

	it.fails('should throw if outDir is not defined', async () => {
		const convertCSSModulesSpy = vi.spyOn(actions, 'convertCSSModules');

		await actions.convertCSSModules({
			data: {
				_: ['test-module-conversion'],
				tailwindcss: true,
				convertCSSModules: true,
			},
		});
		expect(convertCSSModulesSpy).toThrow('fail: outDir required');
	});

	it.fails('should throw if there is an error', async () => {
		const data: ParsedArgs = { _: [], outDir: outDir };

		const convertCSSModulesSpy = vi.spyOn(actions, 'convertCSSModules');
		vi.mocked(execSync).mockImplementationOnce(() => {
			throw new Error('Some error happened');
		});

		await actions.convertCSSModules({ data });
		expect(convertCSSModulesSpy).toThrowError();
		expect(convertCSSModulesSpy).toThrow('Some error happened');
	});
});

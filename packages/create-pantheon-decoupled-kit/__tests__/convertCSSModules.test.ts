import { execSync } from 'child_process';
import type { ParsedArgs } from 'minimist';
import * as actions from '../src/actions/convertCSSModules';

vi.mock('child_process');

const outDir = `${process.cwd()}/__tests__/fixtures/convertCSSModules/empty`;

describe('convertCSSModules()', () => {
	afterEach(() => {
		vi.resetAllMocks();
	});

	it('should call css-modules-to-tailwind@0.1.9 with ./pages and ./components with next generators', async () => {
		await actions.convertCSSModules({
			data: {
				_: ['next-wp'],
				outDir: outDir,
				silent: false,
				tailwindcss: true,
			},
		});

		expect(vi.mocked(execSync)).toHaveBeenCalledWith(
			'npx --prefer-online --yes css-modules-to-tailwind@0.1.9 ./pages/**/*.jsx ./pages/*.jsx ./components/*.jsx --force',
			{
				stdio: 'inherit',
				encoding: 'utf-8',
				cwd: outDir,
			},
		);
	});

	it('should call css-modules-to-tailwind@0.1.9 with ./src with gatsby generators', async () => {
		await actions.convertCSSModules({
			data: {
				_: ['gatsby-wp'],
				outDir: outDir,
				silent: false,
				tailwindcss: true,
				gatsby: true,
			},
		});

		expect(vi.mocked(execSync)).toHaveBeenCalledWith(
			'npx --prefer-online --yes css-modules-to-tailwind@0.1.9 ./src/**/*.jsx ./src/**/*.tsx --force',
			{
				stdio: 'inherit',
				encoding: 'utf-8',
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

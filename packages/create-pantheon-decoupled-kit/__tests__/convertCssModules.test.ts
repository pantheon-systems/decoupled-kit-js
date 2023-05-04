import * as actions from '../src/actions/convertCssModules';
import chalk from 'chalk';
import whichPMRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import type { ParsedArgs } from 'minimist';

vi.mock('child_process');
vi.mock('which-pm-runs');

const outDir = (dir: 'withScripts' | 'withoutScripts') =>
	`${process.cwd()}/__tests__/fixtures/convertCssModules/${dir}`;

describe('convertCssModules()', () => {
	afterEach(() => {
		vi.resetAllMocks();
	});
	it('convert CSS modules using the detected package manager: pnpm', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'pnpm',
			version: 'x',
		}));

		await actions.convertCssModules({
			data: {
				_: ['test-module-conversion'],
				outDir: outDir('withScripts'),
				force: false,
				silent: false,
				tailwindcss: true,
				convertCssModules: true,
			},
		});
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('pnpm translate-vars', {
			stdio: 'inherit',
			cwd: outDir('withScripts'),
		});
		expect(vi.mocked(execSync)).toHaveBeenCalledWith(
			'pnpm convert-to-tailwind',
			{
				stdio: 'inherit',
				cwd: outDir('withScripts'),
			},
		);
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('convert CSS modules using the detected package manager: npm', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.convertCssModules({
			data: {
				_: ['test-module-conversion'],
				outDir: outDir('withScripts'),
				force: false,
				silent: false,
				tailwindcss: true,
				convertCssModules: true,
			},
		});
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npm run translate-vars', {
			stdio: 'inherit',
			cwd: outDir('withScripts'),
		});
		expect(vi.mocked(execSync)).toHaveBeenCalledWith(
			'npm run convert-to-tailwind',
			{
				stdio: 'inherit',
				cwd: outDir('withScripts'),
			},
		);
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('will not execute commands if postcss scripts are not found in project', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'pnpm',
			version: 'x',
		}));

		await actions.convertCssModules({
			data: {
				_: ['test-module-conversion'],
				outDir: outDir('withoutScripts'),
				force: false,
				silent: false,
				tailwindcss: true,
				convertCssModules: true,
			},
		});
		expect(vi.mocked(execSync)).toHaveBeenCalledTimes(0);
	});

	it.fails('should throw if outDir is not defined', async () => {
		const convertCssModulesSpy = vi.spyOn(actions, 'convertCssModules');

		await actions.convertCssModules({
			data: {
				_: ['test-module-conversion'],
				tailwindcss: true,
				convertCssModules: true,
			},
		});
		expect(convertCssModulesSpy).toThrow('fail: outDir required');
	});

	it.fails('should throw if there is an error', async () => {
		const data: ParsedArgs = { _: [], outDir: outDir('withScripts') };

		const convertCssMoudlesSpy = vi.spyOn(actions, 'convertCssModules');
		const errorLogSpy = vi.spyOn(console, 'error');
		vi.mocked(execSync).mockImplementationOnce(() => {
			throw new Error('Some error happened');
		});

		await actions.convertCssModules({ data });
		expect(errorLogSpy).toHaveBeenCalledWith(
			chalk.red('There was a problem linting:'),
		);
		expect(convertCssMoudlesSpy).toThrowError();
		expect(convertCssMoudlesSpy).toThrow('Some error happened');
	});
});

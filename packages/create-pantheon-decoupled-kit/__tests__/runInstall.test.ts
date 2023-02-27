import * as actions from '../src/actions/index';
import chalk from 'chalk';
import fs from 'fs-extra';
import whichPMRuns from 'which-pm-runs';
import * as child_process from 'child_process';
import type { ParsedArgs } from 'minimist';

vi.mock('inquirer');
vi.mock('which-pm-runs');
vi.mock('child_process');

const outDir = `${process.cwd()}/__tests__/fixtures/runInstall`;

describe('runInstall()', () => {
	beforeEach(async (context) => {
		vi.restoreAllMocks();
		// dynamically creating the package.json, otherwise
		// pnpm install adds this test package to the workspace
		// and with the workspace filter, it won't
		// pnpm install at all.
		fs.writeFileSync(
			`${outDir}/package.json`,
			JSON.stringify(
				{
					name: 'runinstall-test',
					version: '0.0.0',
					private: true,
					description: 'testing the runInstall action',
					main: 'index.js',
					scripts: {
						test: 'node ./test.js',
					},
					author: '',
					license: 'GPL-3.0-or-later',
					type: 'module',
					dependencies: {
						'cli-color': '2.0.3',
					},
				},
				null,
				2,
			),
		);
		// adding spies to context
		context.logSpy = vi.spyOn(console, 'log');
		context.runInstallSpy = vi.spyOn(actions, 'runInstall');
		context.execSyncSpy = vi.spyOn(child_process, 'execSync');
	});

	afterEach(() => {
		[
			'package.json',
			'package-lock.json',
			'yarn.lock',
			'pnpm-lock.yaml',
			'node_modules',
		].forEach((path) => {
			fs.rmSync(`${outDir}/${path}`, {
				force: true,
				recursive: true,
			});
		});
	});

	it('should install dependencies with npm', async ({
		runInstallSpy,
		logSpy,
		execSyncSpy,
	}) => {
		const data: ParsedArgs = { _: [], outDir };
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));
		execSyncSpy.mockImplementationOnce((_command, _options) => {
			fs.writeFileSync(`${outDir}/package-lock.json`, 'success');
			fs.mkdirSync(`${outDir}/node_modules`);
			return 'success';
		});

		actions.runInstall({ data });

		expect(runInstallSpy).toHaveBeenCalledOnce();
		expect(runInstallSpy).toHaveBeenLastCalledWith({ data });
		expect(logSpy).toHaveBeenCalledOnce();
		expect(logSpy).toHaveBeenLastCalledWith(
			`${chalk.green('Installing dependencies with')} ${chalk.bold.white(
				'npm',
			)}${chalk.green('...')}`,
		);
		expect(fs.existsSync(`${outDir}/package-lock.json`)).toBeTruthy();
		expect(fs.existsSync(`${outDir}/node_modules`)).toBeTruthy();
	});

	it('should install dependencies with yarn', async ({
		runInstallSpy,
		logSpy,
		execSyncSpy,
	}) => {
		const data: ParsedArgs = { _: [], outDir };
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'yarn',
			version: 'x',
		}));
		execSyncSpy.mockImplementationOnce((_command, _options) => {
			fs.writeFileSync(`${outDir}/yarn.lock`, 'success');
			fs.mkdirSync(`${outDir}/node_modules`);
			return 'success';
		});

		actions.runInstall({ data });

		expect(runInstallSpy).toHaveBeenCalledOnce();
		expect(runInstallSpy).toHaveBeenLastCalledWith({ data });
		expect(logSpy).toHaveBeenCalledOnce();
		expect(logSpy).toHaveBeenLastCalledWith(
			`${chalk.green('Installing dependencies with')} ${chalk.bold.white(
				'yarn',
			)}${chalk.green('...')}`,
		);
		expect(fs.existsSync(`${outDir}/yarn.lock`)).toBeTruthy();
		expect(fs.existsSync(`${outDir}/node_modules`)).toBeTruthy();
	});

	it('should install dependencies with pnpm', async ({
		runInstallSpy,
		logSpy,
		execSyncSpy,
	}) => {
		const data: ParsedArgs = { _: [], outDir };
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'pnpm',
			version: 'x',
		}));
		execSyncSpy.mockImplementationOnce((_command, _options) => {
			fs.writeFileSync(`${outDir}/pnpm-lock.yaml`, 'success');
			fs.mkdirSync(`${outDir}/node_modules`);
			return 'success';
		});

		actions.runInstall({ data });

		expect(runInstallSpy).toHaveBeenCalledOnce();
		expect(runInstallSpy).toHaveBeenLastCalledWith({ data });
		expect(logSpy).toHaveBeenCalledOnce();
		expect(logSpy).toHaveBeenLastCalledWith(
			`${chalk.green('Installing dependencies with')} ${chalk.bold.white(
				'pnpm',
			)}${chalk.green('...')}`,
		);
		expect(fs.existsSync(`${outDir}/pnpm-lock.yaml`)).toBeTruthy();
		expect(fs.existsSync(`${outDir}/node_modules`)).toBeTruthy();
	});

	it('should fall back to npm if no package manager is detected', async ({
		runInstallSpy,
		logSpy,
		execSyncSpy,
	}) => {
		const data: ParsedArgs = { _: [], outDir };
		vi.mocked(whichPMRuns).mockImplementationOnce(() => undefined);
		execSyncSpy.mockImplementationOnce((_command, _options) => {
			fs.writeFileSync(`${outDir}/package-lock.json`, 'success');
			fs.mkdirSync(`${outDir}/node_modules`);
			return 'success';
		});

		actions.runInstall({ data });

		expect(runInstallSpy).toHaveBeenCalledOnce();
		expect(runInstallSpy).toHaveBeenLastCalledWith({ data });
		expect(logSpy).toHaveBeenCalledOnce();
		expect(logSpy).toHaveBeenLastCalledWith(
			`${chalk.green('Installing dependencies with')} ${chalk.bold.white(
				'npm',
			)}${chalk.green('...')}`,
		);
		expect(fs.existsSync(`${outDir}/package-lock.json`)).toBeTruthy();
		expect(fs.existsSync(`${outDir}/node_modules`)).toBeTruthy();
	});

	it.fails('should fail if no outDir is given', async ({ runInstallSpy }) => {
		const data: ParsedArgs = { _: [] };
		vi.mocked(whichPMRuns).mockImplementationOnce(() => undefined);

		actions.runInstall({ data });
		expect(runInstallSpy).toThrowError('fail: outDir required');
		expect(runInstallSpy).toHaveBeenCalledOnce();
		expect(runInstallSpy).toHaveBeenLastCalledWith({ data });
	});

	it('should return if noInstall is true', async ({ runInstallSpy }) => {
		const data: ParsedArgs = { _: [], noInstall: true };

		const result = actions.runInstall({ data });

		expect(runInstallSpy).toHaveBeenCalledOnce();
		expect(runInstallSpy).toHaveBeenLastCalledWith({ data });
		expect(result).toEqual('skipping install');
	});
});

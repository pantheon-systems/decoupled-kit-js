import chalk from 'chalk';
import fs from 'fs-extra';
import { globSync } from 'glob';
import * as child_process from 'node:child_process';
import path from 'node:path';
import * as actions from '../src/actions';

const fixtures = path.join(
	process.cwd(),
	'__tests__',
	'fixtures',
	'convertTStoJS',
);
const outDir = path.join(fixtures, 'empty');
const populated = path.join(fixtures, 'populated');

describe('convertTStoJS()', () => {
	beforeEach(() => {
		fs.ensureDirSync(outDir);
		fs.copySync(populated, outDir);
	});
	afterEach(() => {
		vi.resetAllMocks();
		fs.rmSync(outDir, { force: true, recursive: true });
	});

	it('should convert the typescript files to javascript and remove the typescript files', () => {
		actions.convertTStoJS({
			data: {
				outDir,
				ts: false,
			},
		});
		const files = globSync(`${outDir}/**/*.*`);
		const onlyJSFilesExist = files.every((file) => /(json|js|jsx)$/.test(file));

		expect(onlyJSFilesExist).toBeTruthy();
	});

	it('should not run if the ts option is true', () => {
		vi.mock('child_process');
		const spawnSyncSpy = vi.spyOn(child_process, 'spawnSync');

		const result = actions.convertTStoJS({
			data: {
				outDir,
				ts: true,
			},
		});

		expect(result).toEqual(chalk.cyan('Using TypeScript'));
		expect(spawnSyncSpy).toHaveBeenCalledTimes(0);
	});

	it.fails('throws an error if the action fails', () => {
		vi.spyOn(child_process, 'spawnSync').mockImplementationOnce(() => {
			throw new Error('npx tsc failed!');
		});
		const logSpy = vi.spyOn(console, 'error');

		const result = actions.convertTStoJS({
			data: {
				outDir,
				ts: false,
			},
		});
		expect(logSpy).toHaveBeenLastCalledWith(
			chalk.red('There was a problem converting the project to JS:'),
		);
		expect(result).toThrowError();
	});
});

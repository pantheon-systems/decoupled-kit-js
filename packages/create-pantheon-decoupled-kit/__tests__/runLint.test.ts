import chalk from 'chalk';
import { execSync } from 'child_process';
import whichPMRuns from 'which-pm-runs';
import * as actions from '../src/actions/runLint';
import { globalData } from './sharedTestData';

vi.mock('child_process');
vi.mock('which-pm-runs');

const outDir = (dir: 'withLint' | 'withoutLint' | 'withLintFix') =>
	`${process.cwd()}/__tests__/fixtures/runESLint/${dir}`;

const dataWithLint = {
	...globalData,
	outDir: outDir('withLint'),
};
const dataWithLintFix = {
	...globalData,
	outDir: outDir('withLintFix'),
};
const dataWithoutLint = {
	...globalData,
	outDir: outDir('withoutLint'),
};

describe('runEsLint()', () => {
	afterEach(() => {
		vi.resetAllMocks();
	});
	it('should lint and format the outDir using the detected package manager: pnpm', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'pnpm',
			version: 'x',
		}));

		await actions.runLint({ data: dataWithLintFix });
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('pnpm lint:fix', {
			stdio: 'inherit',
			cwd: outDir('withLintFix'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('should lint and format the outDir using the detected package manager: npm', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.runLint({ data: dataWithLintFix });
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npm run lint:fix', {
			stdio: 'inherit',
			cwd: outDir('withLintFix'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('should lint and format the outDir with no lint script installed', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.runLint({ data: dataWithoutLint });
		expect(vi.mocked(execSync)).toHaveBeenCalledWith(
			'npx eslint --ext {js,ts} --fix',
			{
				stdio: 'inherit',
				cwd: outDir('withoutLint'),
			},
		);
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('should use the lint command if it is found but not lint:fix script is available', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.runLint({ data: dataWithLint });
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npm run lint', {
			stdio: 'inherit',
			cwd: outDir('withLint'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it.fails('should throw if outDir is not defined', async () => {
		const data = Object.assign({ _: [] }, globalData);

		const runESLintSpy = vi.spyOn(actions, 'runLint');

		await actions.runLint({ data });
		expect(runESLintSpy).toThrow('fail: outDir required');
	});

	it.fails('should throw if there is an error', async () => {
		const runESLintSpy = vi.spyOn(actions, 'runLint');
		const errorLogSpy = vi.spyOn(console, 'error');
		vi.mocked(execSync).mockImplementationOnce(() => {
			throw new Error('Some error happened');
		});

		await actions.runLint({ data: dataWithLint });
		expect(errorLogSpy).toHaveBeenCalledWith(
			chalk.red('There was a problem linting:'),
		);
		expect(runESLintSpy).toThrowError();
		expect(runESLintSpy).toThrow('Some error happened');
	});
});

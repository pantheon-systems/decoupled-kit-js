import * as actions from '../src/actions/runLint';
import chalk from 'chalk';
import whichPMRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import type { ParsedArgs } from 'minimist';

vi.mock('child_process');
vi.mock('which-pm-runs');

const outDir = (dir: 'withLint' | 'withoutLint') =>
	`${process.cwd()}/__tests__/fixtures/runESLint/${dir}`;

describe('runEsLint()', () => {
	afterEach(() => {
		vi.resetAllMocks();
	});
	it('should lint and format the outDir using the detected package manager: pnpm', async () => {
		const data: ParsedArgs = { _: [], outDir: outDir('withLint') };
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'pnpm',
			version: 'x',
		}));

		await actions.runLint({ data });
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('pnpm lint', {
			stdio: 'inherit',
			cwd: outDir('withLint'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('should lint and format the outDir using the detected package manager: npm', async () => {
		const data: ParsedArgs = { _: [], outDir: outDir('withLint') };

		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.runLint({ data });
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npm run lint', {
			stdio: 'inherit',
			cwd: outDir('withLint'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});
	it('should lint and format the outDir with no lint script installed', async () => {
		const data: ParsedArgs = { _: [], outDir: outDir('withoutLint') };

		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.runLint({ data });
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npx eslint  ', {
			stdio: 'inherit',
			cwd: outDir('withoutLint'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it.fails('should throw if outDir is not defined', async () => {
		const data: ParsedArgs = { _: [] };

		const runESLintSpy = vi.spyOn(actions, 'runLint');

		await actions.runLint({ data });
		expect(runESLintSpy).toThrow('fail: outDir required');
	});

	it.fails('should throw if there is an error', async () => {
		const data: ParsedArgs = { _: [], outDir: outDir('withLint') };

		const runESLintSpy = vi.spyOn(actions, 'runLint');
		const errorLogSpy = vi.spyOn(console, 'error');
		vi.mocked(execSync).mockImplementationOnce(() => {
			throw new Error('Some error happened');
		});

		await actions.runLint({ data });
		expect(errorLogSpy).toHaveBeenCalledWith(
			chalk.red('There was a problem linting:'),
		);
		expect(runESLintSpy).toThrowError();
		expect(runESLintSpy).toThrow('Some error happened');
	});
});

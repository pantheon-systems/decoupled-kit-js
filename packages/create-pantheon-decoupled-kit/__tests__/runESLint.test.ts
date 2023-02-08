import * as actions from '../src/utils/runESLint';
import * as nodePlop from 'node-plop';
import whichPMRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import type { ParsedArgs } from 'minimist';
import type { CustomActionConfig } from 'node-plop';

vi.mock('node-plop');
vi.mock('child_process');
vi.mock('which-pm-runs');

const config: CustomActionConfig<'runLint'> & {
	ignorePattern: string;
	plugins: string;
} = {
	type: 'runLint',
	ignorePattern: '',
	plugins: '',
};
const outDir = (dir: 'withLint' | 'withoutLint') =>
	`${process.cwd()}/__tests__/fixtures/runESLint/${dir}`;
const plop = await nodePlop.default();

describe('runEsLint()', () => {
	afterEach(async () => {
		vi.resetAllMocks();
	});
	it('should lint and format the outDir using the detected package manager: pnpm', async () => {
		const answers: ParsedArgs = { _: [], outDir: outDir('withLint') };
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'pnpm',
			version: 'x',
		}));

		await actions.runESLint(answers, config, plop);
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('pnpm lint .', {
			stdio: 'inherit',
			cwd: outDir('withLint'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('should lint and format the outDir using the detected package manager: npm', async () => {
		const answers: ParsedArgs = { _: [], outDir: outDir('withLint') };

		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.runESLint(answers, config, plop);
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npm run lint .', {
			stdio: 'inherit',
			cwd: outDir('withLint'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});
	it('should lint and format the outDir with no lint script installed', async () => {
		const answers: ParsedArgs = { _: [], outDir: outDir('withoutLint') };

		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		await actions.runESLint(answers, config, plop);
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npx eslint  ', {
			stdio: 'inherit',
			cwd: outDir('withoutLint'),
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it.fails('should throw if outDir is not defined', async () => {
		const answers: ParsedArgs = { _: [] };

		const runESLintSpy = vi.spyOn(actions, 'runESLint');

		await actions.runESLint(answers, config, plop);
		expect(runESLintSpy).toThrow('fail: outDir required');
	});

	it.fails('should throw if there is an error', async () => {
		const answers: ParsedArgs = { _: [], outDir: outDir('withLint') };

		const runESLintSpy = vi.spyOn(actions, 'runESLint');
		vi.mocked(execSync).mockImplementationOnce(() => {
			throw new Error('Some error happened');
		});

		await actions.runESLint(answers, config, plop);
		expect(runESLintSpy).toThrowError();
		expect(runESLintSpy).toThrow('fail: there was a problem linting');
	});
});

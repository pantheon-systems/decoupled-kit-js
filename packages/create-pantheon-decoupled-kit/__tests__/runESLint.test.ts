import * as actions from '../src/utils/runESLint';
import * as nodePlop from 'node-plop';
import whichPMRuns from 'which-pm-runs';
import { execSync } from 'child_process';
import type { ParsedArgs } from 'minimist';
import type { CustomActionConfig } from 'node-plop';

vi.mock('node-plop');
vi.mock('child_process');
vi.mock('which-pm-runs');

const config: CustomActionConfig<'runLint'> = {
	type: 'runLint',
};
const outDir = `${process.cwd()}/__tests__/fixtures/runESLint`;
const answers: ParsedArgs = { _: [], outDir };
const plop = await nodePlop.default();

describe('runEsLint()', () => {
	afterEach(() => {
		vi.resetAllMocks();
	});
	it('should lint and format the outDir using the detected package manager: pnpm', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'pnpm',
			version: 'x',
		}));

		actions.runESLint(answers, config, plop);
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('pnpm lint', {
			stdio: 'inherit',
			cwd: outDir,
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it('should lint and format the outDir using the detected package manager: npm', async () => {
		vi.mocked(whichPMRuns).mockImplementationOnce(() => ({
			name: 'npm',
			version: 'x',
		}));

		actions.runESLint(answers, config, plop);
		expect(vi.mocked(execSync)).toHaveBeenCalledWith('npm run lint', {
			stdio: 'inherit',
			cwd: outDir,
		});
		expect(whichPMRuns).toHaveBeenCalledOnce();
	});

	it.fails('should throw if there is an error', () => {
		const runESLintSpy = vi.spyOn(actions, 'runESLint');
		vi.mocked(execSync).mockImplementationOnce(() => {
			throw new Error('Some error happened');
		});

		actions.runESLint(answers, config, plop);
		expect(runESLintSpy).toThrowError();
	});

	it.fails('should throw if there is an error', () => {
		const runESLintSpy = vi.spyOn(actions, 'runESLint');
		delete answers.outDir;

		actions.runESLint(answers, config, plop);
		expect(runESLintSpy).toThrow('fail: outDir required');
	});
});

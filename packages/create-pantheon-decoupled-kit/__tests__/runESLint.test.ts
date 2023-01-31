import * as actions from '../src/utils/runESLint';
import * as nodePlop from 'node-plop';
import { execSync } from 'child_process';
import type { ParsedArgs } from 'minimist';
import type { RunESLintActionConfig } from '@cli/src/types';

vi.mock('node-plop');
vi.mock('child_process');

const config: RunESLintActionConfig = {
	type: 'runLint',
	ignorePattern: 'ignored/*',
	plugins: '',
};
const outDir = `${process.cwd()}/__tests__/fixtures/runESLint`;

describe('runEsLint()', () => {
	it('should lint and format the outDir', async () => {
		const answers: ParsedArgs = { _: [], outDir };
		const plop = await nodePlop.default();

		actions.runESLint(answers, config, plop);
		expect(vi.mocked(execSync)).toHaveBeenCalled();
	});
});

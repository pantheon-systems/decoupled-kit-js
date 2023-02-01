import path from 'path';
import type { ParsedArgs } from 'minimist';
export const watchOptions: ParsedArgs = {
	_: ['test-add'],
	input: 'hello',
	outDir: path.resolve('../../test'),
	choice: 'one',
	choice2: 'four',
	force: true,
	silent: true,
};

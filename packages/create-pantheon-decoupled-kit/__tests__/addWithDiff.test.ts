import * as actions from '../src/actions/addWithDiff';
import chalk from 'chalk';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import * as nodePlop from 'node-plop';
import { ParsedArgs } from 'minimist';
import path from 'path';
import process from 'process';
import { rimraf } from 'rimraf';
import type { CustomActionConfig } from 'node-plop';

vi.mock('node-plop');
vi.mock('inquirer');

const config: CustomActionConfig<'addWithDiff'> & {
	templates: string;
	path: string;
} = {
	type: 'addWithDiff',
	templates: './templates/test/addWithDiff',
	path: '{{outDir}}',
	force: false,
};

const outDir = (dir: 'empty' | 'populated') =>
	`${process.cwd()}/__tests__/fixtures/addWithDiff/${dir}`;

describe('addWithDiff()', () => {
	beforeEach(async (context) => {
		// serialized data for the 'populated' test fixture
		const populated: { [key: string]: string } = {
			'test-anotherFileWithDiff.js': `console.log(\`
This is a multiline input!
test input
\`)`,
			'test-toBeCopiedWithDiff.json': `{
	"test": "this template doesn't need to be rendered but should still check if there is a diff!"
}
`,
			'test-withDiff.js': `console.log('Hello World')`,
		};
		await fs.ensureDir(path.resolve(outDir('populated')));
		Object.keys(populated).forEach((key) => {
			fs.writeFileSync(
				`${outDir('populated').toString()}/${key}`,
				populated[key],
				'utf-8',
			);
		});

		// adding spies to context
		context.logSpy = vi.spyOn(console, 'log');
		context.addWithDiffSpy = vi.spyOn(actions, 'addWithDiff');
		context.promptSpy = vi.spyOn(inquirer, 'prompt');
		context.plopSpy = vi.spyOn(nodePlop, 'default');
		context.processSpy = vi
			.spyOn(process, 'exit')
			.mockImplementationOnce(vi.fn());
	});

	afterEach(async () => {
		vi.restoreAllMocks();
		// empty out the 'empty' fixture
		// using rimraf because fs.unlink throws permission error
		await rimraf(path.resolve(outDir('empty')));
		await fs.ensureDir(outDir('empty'));
	});

	it('should show a diff and prompt for each file when the target dir is empty', async ({
		logSpy,
		addWithDiffSpy,
		plopSpy,
		promptSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'yes',
		}));
		const plop = await nodePlop.default();
		const [fileOneJs, fileTwoJs, fileThreeJson] = [
			`${outDir('empty')}/test-anotherFileWithDiff.js`,
			`${outDir('empty')}/test-withDiff.js`,
			`${outDir('empty')}/test-toBeCopiedWithDiff.json`,
		];
		const answers: ParsedArgs = {
			_: ['test-diff'],
			anotherInput: 'Testing the diff',
			diffInput: 'this line will be rendered to the template',
			outDir: outDir('empty'),
		};

		await actions.addWithDiff(answers, config, plop);

		expect(addWithDiffSpy).toHaveBeenLastCalledWith(answers, config, plop);
		expect(plopSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(3);

		// Maybe there is a way to be less verbose here?
		// it's probably worth testing either way, at least for
		// the cases where there is a diff involved.
		expect(logSpy).toHaveBeenNthCalledWith(
			1,
			chalk.bold(`Listing changes for ${chalk.magenta(`${fileOneJs}`)}:`),
		);
		expect(logSpy).toHaveBeenNthCalledWith(2, chalk.green('+ console.log(`'));
		expect(logSpy).toHaveBeenNthCalledWith(
			3,
			chalk.green('+ This is a multiline input!'),
		);
		expect(logSpy).toHaveBeenNthCalledWith(
			4,
			chalk.green('+ Testing the diff'),
		);
		expect(logSpy).toHaveBeenNthCalledWith(5, chalk.green('+ `)'));
		expect(logSpy).toHaveBeenNthCalledWith(
			6,
			chalk.bold(`Listing changes for ${chalk.magenta(`${fileThreeJson}`)}:`),
		);
		expect(logSpy).toHaveBeenNthCalledWith(2, chalk.green('+ console.log(`'));
		expect(logSpy).toHaveBeenNthCalledWith(7, chalk.green('+ {'));
		expect(logSpy).toHaveBeenNthCalledWith(
			8,
			chalk.green(
				`+ 	"test": "this template doesn't need to be rendered but should still check if there is a diff!"`,
			),
		);
		expect(logSpy).toHaveBeenNthCalledWith(9, chalk.green('+ }'));
		expect(logSpy).toHaveBeenNthCalledWith(
			10,
			chalk.bold(`Listing changes for ${chalk.magenta(`${fileTwoJs}`)}:`),
		);
		expect(logSpy).toHaveBeenNthCalledWith(
			11,
			chalk.green`+ console.log('this line will be rendered to the template')`,
		);
		expect(logSpy).toHaveBeenLastCalledWith(`
	Written: 
		${chalk.green([fileOneJs, fileThreeJson, fileTwoJs].join('\n\t\t') || 'none')}
	Skipped: 
		${chalk.yellow([].join('\n\t\t') || 'none')}
	Skipped (same content): 
		${chalk.gray([].join('\n\t\t') || 'none')}
	`);
	});

	it('should should a diff and prompt for each different file when the target exists', async ({
		logSpy,
		addWithDiffSpy,
		plopSpy,
		promptSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'yes',
		}));
		const plop = await nodePlop.default();
		const [fileOneJs, fileTwoJs, fileThreeJson] = [
			`${outDir('populated')}/test-anotherFileWithDiff.js`,
			`${outDir('populated')}/test-withDiff.js`,
			`${outDir('populated')}/test-toBeCopiedWithDiff.json`,
		];
		const answers: ParsedArgs = {
			_: ['test-diff'],
			anotherInput: 'Testing a different output',
			diffInput: 'this input is also different',
			outDir: outDir('populated'),
		};

		const config: CustomActionConfig<'addWithDiff'> & {
			templates: string;
			path: string;
		} = {
			type: 'addWithDiff',
			templates: './templates/test/addWithDiff',
			path: '{{outDir}}',
			force: false,
		};

		await actions.addWithDiff(answers, config, plop);

		expect(addWithDiffSpy).toHaveBeenLastCalledWith(answers, config, plop);
		expect(promptSpy).toHaveBeenCalledTimes(2);
		expect(plopSpy).toHaveBeenCalledOnce();

		expect(logSpy).toHaveBeenNthCalledWith(
			1,
			chalk.bold(`Listing changes for ${chalk.magenta(`${fileOneJs}`)}:`),
		);
		expect(logSpy).toHaveBeenNthCalledWith(
			3,
			chalk.gray('= This is a multiline input!'),
		);
		expect(logSpy).toHaveBeenNthCalledWith(4, chalk.red('- test input'));
		expect(logSpy).toHaveBeenNthCalledWith(
			5,
			chalk.green('+ Testing a different output'),
		);
		expect(logSpy).toHaveBeenNthCalledWith(6, chalk.gray('= `)'));
		expect(logSpy).toHaveBeenNthCalledWith(
			7,
			chalk.bold(`Listing changes for ${chalk.magenta(`${fileTwoJs}`)}:`),
		);
		expect(logSpy).toHaveBeenNthCalledWith(
			8,
			chalk.red(`- console.log('Hello World')`),
		);
		expect(logSpy).toHaveBeenNthCalledWith(
			9,
			chalk.green(`+ console.log('this input is also different')`),
		);
		expect(logSpy).toHaveBeenLastCalledWith(`
	Written: 
		${chalk.green([fileOneJs, fileTwoJs].join('\n\t\t') || 'none')}
	Skipped: 
		${chalk.yellow([].join('\n\t\t') || 'none')}
	Skipped (same content): 
		${chalk.gray([fileThreeJson].join('\n\t\t') || 'none')}
	`);
	});

	it('should only prompt the user once if answer is "yes to all"', async ({
		promptSpy,
		logSpy,
		plopSpy,
		addWithDiffSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'yes to all',
		}));
		const plop = await nodePlop.default();
		const [fileOneJs, fileTwoJs, fileThreeJson] = [
			`${outDir('empty')}/test-anotherFileWithDiff.js`,
			`${outDir('empty')}/test-withDiff.js`,
			`${outDir('empty')}/test-toBeCopiedWithDiff.json`,
		];
		const answers: ParsedArgs = {
			_: ['test-diff'],
			anotherInput: 'Testing a different output',
			diffInput: 'this input is also different',
			outDir: outDir('empty'),
		};

		const config: CustomActionConfig<'addWithDiff'> & {
			templates: string;
			path: string;
		} = {
			type: 'addWithDiff',
			templates: './templates/test/addWithDiff',
			path: '{{outDir}}',
		};

		await actions.addWithDiff(answers, config, plop);
		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(plopSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(1);
		expect(logSpy).toHaveBeenCalledTimes(6);
		expect(logSpy).toHaveBeenLastCalledWith(`
	Written: 
		${chalk.green([fileOneJs, fileThreeJson, fileTwoJs].join('\n\t\t') || 'none')}
	Skipped: 
		${chalk.yellow([].join('\n\t\t') || 'none')}
	Skipped (same content): 
		${chalk.gray([].join('\n\t\t') || 'none')}
	`);
	});

	it('should write files without prompts if --force is true', async ({
		promptSpy,
		logSpy,
		plopSpy,
		addWithDiffSpy,
	}) => {
		const plop = await nodePlop.default();
		const [fileOneJs, fileTwoJs, fileThreeJson] = [
			`${outDir('empty')}/test-anotherFileWithDiff.js`,
			`${outDir('empty')}/test-withDiff.js`,
			`${outDir('empty')}/test-toBeCopiedWithDiff.json`,
		];
		const answers: ParsedArgs = {
			_: ['test-diff'],
			anotherInput: 'Testing a different output',
			diffInput: 'this input is also different',
			outDir: outDir('empty'),
			force: true,
		};

		await actions.addWithDiff(answers, config, plop);

		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(plopSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(0);
		expect(logSpy).toHaveBeenLastCalledWith(`
	Written: 
		${chalk.green([fileOneJs, fileThreeJson, fileTwoJs].join('\n\t\t') || 'none')}
	Skipped: 
		${chalk.yellow([].join('\n\t\t') || 'none')}
	Skipped (same content): 
		${chalk.gray([].join('\n\t\t') || 'none')}
	`);
	});

	it('should not log or prompt if --silent and --force are true', async ({
		promptSpy,
		logSpy,
		plopSpy,
		addWithDiffSpy,
	}) => {
		const plop = await nodePlop.default();
		const answers: ParsedArgs = {
			_: ['test-diff'],
			anotherInput: 'Testing a different output',
			diffInput: 'this input is also different',
			outDir: outDir('empty'),
			force: true,
			silent: true,
		};

		const config: CustomActionConfig<'addWithDiff'> & {
			templates: string;
			path: string;
		} = {
			type: 'addWithDiff',
			templates: './templates/test/addWithDiff',
			path: '{{outDir}}',
			force: true,
		};

		await actions.addWithDiff(answers, config, plop);

		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(plopSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(0);
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	it('should list changes but skip when answer is skip and remove dangling files', async ({
		promptSpy,
		logSpy,
		plopSpy,
		addWithDiffSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'skip',
		}));
		const unlinkSyncSpy = vi.spyOn(fs, 'unlinkSync');
		const plop = await nodePlop.default();
		const [fileOneJs, fileTwoJs, fileThreeJson] = [
			`${outDir('empty')}/test-anotherFileWithDiff.js`,
			`${outDir('empty')}/test-withDiff.js`,
			`${outDir('empty')}/test-toBeCopiedWithDiff.json`,
		];
		const answers: ParsedArgs = {
			_: ['test-diff'],
			anotherInput: 'Testing a different output',
			diffInput: 'this input is also different',
			outDir: outDir('empty'),
		};

		const config: CustomActionConfig<'addWithDiff'> & {
			templates: string;
			path: string;
		} = {
			type: 'addWithDiff',
			templates: './templates/test/addWithDiff',
			path: '{{outDir}}',
		};

		await actions.addWithDiff(answers, config, plop);

		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(plopSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(3);
		expect(unlinkSyncSpy).toHaveBeenCalledTimes(3);
		expect(logSpy).toHaveBeenCalledTimes(12);
		expect(logSpy).toHaveBeenLastCalledWith(`
	Written: 
		${chalk.green([].join('\n\t\t') || 'none')}
	Skipped: 
		${chalk.yellow([fileOneJs, fileThreeJson, fileTwoJs].join('\n\t\t') || 'none')}
	Skipped (same content): 
		${chalk.gray([].join('\n\t\t') || 'none')}
	`);
	});

	it('should exit on abort', async ({
		promptSpy,
		logSpy,
		plopSpy,
		addWithDiffSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'abort',
		}));
		const plop = await nodePlop.default();
		const answers: ParsedArgs = {
			_: ['test-diff'],
			anotherInput: 'Testing a different output',
			diffInput: 'this input is also different',
			outDir: outDir('empty'),
		};

		const config: CustomActionConfig<'addWithDiff'> & {
			templates: string;
			path: string;
		} = {
			type: 'addWithDiff',
			templates: './templates/test/addWithDiff',
			path: '{{outDir}}',
		};

		await actions.addWithDiff(answers, config, plop);

		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(plopSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(1);
		expect(logSpy).toHaveBeenLastCalledWith(chalk.red('Aborting!'));
	});
});

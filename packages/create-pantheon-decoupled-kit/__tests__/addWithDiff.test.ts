import * as actions from '../src/actions/index';
import * as utils from '../src/utils/index';
import chalk from 'chalk';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';
import process from 'process';
import { rimraf } from 'rimraf';

vi.mock('inquirer');

const outDir = (dir: 'empty' | 'populated') =>
	`${process.cwd()}/__tests__/fixtures/addWithDiff/${dir}`;
const handlebars = await utils.getHandlebarsInstance(
	`${process.cwd()}/__tests__/`,
);
const templateData = [
	{
		addon: false,
		templateDirs: [`${process.cwd()}/__tests__/templates/addWithDiff`],
	},
];
const globalData = {
	_: ['test-diff'],
	anotherInput: 'Testing the diff',
	diffInput: 'this line will be rendered to the template',
	// 'workaround' for tests to work
	templateRootDir: `${process.cwd()}/__tests__/`,
	outDir: outDir('empty'),
	force: false,
	silent: false,
};

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
		context.handlebarsSpy = vi.spyOn(handlebars, 'compile');
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

	it.fails(
		'should throw an error if outDir is not valid',
		async ({ addWithDiffSpy }) => {
			const data = Object.assign({}, globalData);
			data.outDir = '';
			await actions.addWithDiff({ data, handlebars, templateData });
			expect(addWithDiffSpy).toThrowError('outDir is not valid');
		},
	);

	it.fails(
		'should throw an error if templateData is not valid',
		async ({ addWithDiffSpy }) => {
			await actions.addWithDiff({
				data: globalData,
				handlebars,
				templateData: [],
			});
			expect(addWithDiffSpy).toThrowError(
				'templateData is missing from the call to this action',
			);
		},
	);

	it.fails(
		'should throw an error if handlebars is not valid',
		async ({ addWithDiffSpy }) => {
			await actions.addWithDiff({
				data: globalData,
				handlebars: {} as any,
				templateData,
			});
			expect(addWithDiffSpy).toThrowError(
				'handlebars is missing from the call to this action.',
			);
		},
	);

	it('should show a diff and prompt for each file when the target dir is empty', async ({
		addWithDiffSpy,
		promptSpy,
		handlebarsSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'yes',
		}));
		const data = Object.assign({}, globalData);
		data.outDir = outDir('empty');

		await actions.addWithDiff({ data, handlebars, templateData });

		expect(addWithDiffSpy).toHaveBeenLastCalledWith({
			data,
			handlebars,
			templateData,
		});
		expect(handlebarsSpy).toHaveBeenCalledTimes(2);
		expect(promptSpy).toHaveBeenCalledTimes(4);
	});

	it('should should a diff and prompt for each different file when the target exists', async ({
		addWithDiffSpy,
		promptSpy,
		handlebarsSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'yes',
		}));
		const data = Object.assign({}, globalData);
		data.outDir = outDir('populated');
		data.anotherInput = 'Testing a different output';
		data.diffInput = 'this input is also different';
		await actions.addWithDiff({ data, templateData, handlebars });

		expect(addWithDiffSpy).toHaveBeenLastCalledWith({
			data,
			templateData,
			handlebars,
		});
		expect(handlebarsSpy).toHaveBeenCalledTimes(2);
		expect(promptSpy).toHaveBeenCalledTimes(2);
	});

	it('should only prompt the user once if answer is "yes to all"', async ({
		promptSpy,
		addWithDiffSpy,
		handlebarsSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'yes to all',
		}));
		const data = Object.assign({}, globalData);
		data.anotherInput = 'Testing a different output';
		data.diffInput = 'this input is also different';
		data.outDir = outDir('empty');

		await actions.addWithDiff({ data, templateData, handlebars });
		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(handlebarsSpy).toHaveBeenCalledTimes(2);
		expect(promptSpy).toHaveBeenCalledTimes(1);
	});

	it('should write files without prompts if --force is true', async ({
		promptSpy,
		addWithDiffSpy,
	}) => {
		const data = Object.assign({}, globalData);
		data.anotherInput = 'Testing a different output';
		data.diffInput = 'this input is also different';
		data.outDir = outDir('empty');
		data.force = true;

		await actions.addWithDiff({ data, templateData, handlebars });

		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(0);
	});

	it('should not log or prompt if --silent and --force are true', async ({
		promptSpy,
		logSpy,
		addWithDiffSpy,
	}) => {
		const data = Object.assign({}, globalData);
		data.anotherInput = 'Testing a different output';
		data.diffInput = 'this input is also different';
		data.outDir = outDir('empty');
		data.force = true;
		data.silent = true;

		await actions.addWithDiff({ data, templateData, handlebars });

		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(0);
		expect(logSpy).toHaveBeenCalledTimes(0);
	});

	it('should list changes but skip when answer is skip and remove dangling files', async ({
		addWithDiffSpy,
	}) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'skip',
		}));
		const unlinkSyncSpy = vi.spyOn(fs, 'unlinkSync');

		const data = Object.assign({}, globalData);
		data.anotherInput = 'Testing a different output';
		data.diffInput = 'this input is also different';
		data.outDir = outDir('empty');

		await actions.addWithDiff({ data, templateData, handlebars });

		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(unlinkSyncSpy).toHaveBeenCalledTimes(4);
	});

	it('should exit on abort', async ({ promptSpy, logSpy, addWithDiffSpy }) => {
		vi.mocked(inquirer.prompt).mockImplementation(async () => ({
			writeFile: 'abort',
		}));
		const data = Object.assign({}, globalData);
		data.anotherInput = 'Testing a different output';
		data.diffInput = 'this input is also different';
		data.outDir = outDir('empty');

		await actions.addWithDiff({ data, templateData, handlebars });
		expect(addWithDiffSpy).toHaveBeenCalledOnce();
		expect(promptSpy).toHaveBeenCalledTimes(1);
		expect(logSpy).toHaveBeenLastCalledWith(chalk.red('Aborting!'));
	});
});

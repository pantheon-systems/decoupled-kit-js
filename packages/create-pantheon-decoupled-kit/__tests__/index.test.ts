// import like this so we can vi.spyOn
import * as bin from '../src/index';
import * as utils from '../src/utils/index';
const { parseArgs, main } = bin;
import chalk from 'chalk';
import inquirer from 'inquirer';
import { decoupledKitGenerators } from '../src/generators';
import versions from '../src/pkgVersions.json';

import pkg from '../package.json' assert { type: 'json' };

vi.mock('inquirer');

describe('parseArgs()', () => {
	it('should parse args from the command line', () => {
		process.argv = [
			'node',
			'bin.js',
			'sample',
			'test',
			'--input',
			'test input',
			'--outDir',
			`${process.cwd()}/temp`,
			'--message',
			'test message',
			'--choice',
			'one',
			'--choice2',
			'four',
		];

		const parsedArgs = parseArgs();

		expect(parsedArgs._).toEqual(['sample', 'test']);
		expect(parsedArgs.input).toEqual('test input');
		expect(parsedArgs.outDir).toEqual(`${process.cwd()}/temp`);
		expect(parsedArgs.message).toEqual('test message');
		expect(parsedArgs.choice).toEqual('one');
		expect(parsedArgs.choice2).toEqual('four');
	});
});

describe('main()', () => {
	beforeEach((context) => {
		context.parseSpy = vi.spyOn(bin, 'parseArgs');
		context.mainSpy = vi.spyOn(bin, 'main');
		context.actionRunnerSpy = vi.spyOn(utils, 'actionRunner');
		context.promptSpy = vi.spyOn(inquirer, 'prompt');
		context.logSpy = vi.spyOn(console, 'log');
		context.errorSpy = vi.spyOn(console, 'error');

		context.actionRunnerSpy.mockImplementation(vi.fn());
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('should show the help menu if --help or -h is in the args', async ({
		logSpy,
	}) => {
		// --help
		process.argv = ['node', 'bin.js', '--help'];

		await main(parseArgs(), decoupledKitGenerators);

		expect(logSpy).toHaveBeenLastCalledWith(
			utils.helpMenu(decoupledKitGenerators),
		);

		// -h
		process.argv = ['node', 'bin.js', '-h'];

		await main(parseArgs(), decoupledKitGenerators);

		expect(logSpy).toHaveBeenLastCalledWith(
			utils.helpMenu(decoupledKitGenerators),
		);
	});

	it('should show the version if --version or -v is in the args', async ({
		logSpy,
	}) => {
		// --version
		process.argv = ['node', 'bin.js', '--version'];

		await main(parseArgs(), decoupledKitGenerators);

		expect(logSpy).toHaveBeenLastCalledWith(`v${pkg.version}`);

		// -v
		process.argv = ['node', 'bin.js', '-v'];

		await main(parseArgs(), decoupledKitGenerators);

		expect(logSpy).toHaveBeenLastCalledWith(`v${pkg.version}`);
	});

	it('should accept any number of positional arguments as generators to run', async ({
		parseSpy,
		mainSpy,
		promptSpy,
	}) => {
		process.argv = ['node', 'bin.js', 'next-drupal', 'next-drupal-umami-addon'];
		promptSpy.mockImplementationOnce(() => ({ outDir: 'test' }));
		promptSpy.mockImplementationOnce(() => ({ appName: 'test' }));

		await bin.main(
			bin.parseArgs(process.argv.slice(2)),
			decoupledKitGenerators,
		);

		expect(parseSpy).toBeCalled;
		expect(parseSpy).toBeCalledWith(process.argv.slice(2));
		expect(mainSpy).toHaveBeenLastCalledWith(
			{
				_: ['next-drupal', 'next-drupal-umami-addon'],
				appName: 'test',
				drupalKitVersion: versions['drupal-kit'],
				outDir: 'test',
				force: false,
				silent: false,
				help: false,
				nextjsKitVersion: versions['nextjs-kit'],
				h: false,
				version: false,
				v: false,
			},
			decoupledKitGenerators,
		);
		expect(promptSpy).toHaveBeenCalledTimes(2);
	});

	it('should ask for user input if there is no valid generator to run', async ({
		logSpy,
		promptSpy,
	}) => {
		process.argv = ['node', 'bin.js', 'not-valid-generator-name'];

		promptSpy.mockImplementationOnce(() => ({
			generators: ['next-wp'],
		}));

		await bin.main(parseArgs(), decoupledKitGenerators);

		expect(logSpy).toHaveBeenCalledWith(
			chalk.yellow('No generator found with name not-valid-generator-name.'),
		);
		// We expect 2 calls, the first prompts with the list of available generators
		// the second runs the generator prompts
		expect(promptSpy).toHaveBeenCalledTimes(2);
	});

	it.fails(
		'should throw error if there is no valid generator selected to run',
		async ({ mainSpy, promptSpy }) => {
			process.argv = ['node', 'bin.js', 'not-valid-generator-name'];
			promptSpy.mockImplementationOnce(() => ({
				generators: [],
			}));
			await bin.main(parseArgs(), decoupledKitGenerators);

			expect(promptSpy).toHaveBeenCalledOnce();
			expect(mainSpy).toThrowError(`
			${chalk.red(
				'No generators were selected. Use positional arguments or choose from the prompt.',
			)}
Valid generators: ${decoupledKitGenerators.map(({ name }) => name).join(', ')}
To see this list at any time, use the --help command.`);
		},
	);

	it.fails(
		'should throw an error if message if no valid generators are selected',
		async ({ promptSpy, mainSpy }) => {
			process.argv = ['node', 'bin.js', 'not-valid-generator-name'];
			promptSpy.mockImplementationOnce(() => ({
				generators: [],
			}));

			await bin.main(parseArgs(), decoupledKitGenerators);

			expect(mainSpy).toThrowErrorMatchingInlineSnapshot(
				chalk.red('Could not find any generators to run.'),
			);
			expect(promptSpy).toHaveBeenCalledTimes(1);
		},
	);

	it('should add arbitrary from generator.data to the args', async ({
		actionRunnerSpy,
	}) => {
		// gatsby-wp has arbitrary data used to determine
		// adding the pnpm plugin
		process.argv = ['node', 'bin.js', 'gatsby-wp'];
		const data = {
			_: ['gatsby-wp'],
			eslintConfigVersion: versions['eslint'],
			force: false,
			gatsbyPnpmPlugin: true,
			h: false,
			help: false,
			otherConfigsVersion: versions['other'],
			silent: false,
			v: false,
			version: false,
			wordpressKitVersion: versions['wordpress-kit'],
		};

		await main(parseArgs(), decoupledKitGenerators);

		expect(
			actionRunnerSpy.mock.lastCall && actionRunnerSpy.mock.lastCall[0].data,
		).toEqual(data);
	});

	it('should log changes', async ({ logSpy, promptSpy }) => {
		process.argv = ['node', 'bin.js', 'next-drupal'];
		promptSpy.mockImplementationOnce(() => ({ outDir: 'test' }));
		promptSpy.mockImplementationOnce(() => ({ appName: 'test' }));
		await main(parseArgs(), decoupledKitGenerators);

		expect(logSpy).toHaveBeenLastCalledWith(
			`${chalk.yellow('cd')} into ${chalk.bold.magenta(
				'test',
			)} to start developing!`,
		);
	});

	it('should not console.log if "silent" arg is true', async ({ logSpy }) => {
		process.argv = ['node', 'bin.js', 'next-wp', '--silent'];

		await main(parseArgs(), decoupledKitGenerators);

		expect(logSpy).toHaveBeenCalledTimes(0);
	});
});

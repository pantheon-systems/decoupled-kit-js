import chalk from 'chalk';
import inquirer, { QuestionCollection } from 'inquirer';
import minimist, { Opts as MinimistOptions, ParsedArgs } from 'minimist';
import {
	type DecoupledKitGenerator,
	type TemplateData,
	isDrupalCms,
	isString,
	isWpCms,
} from './types';
import { actionRunner, getHandlebarsInstance, helpMenu } from './utils/index';

import pkg from '../package.json' assert { type: 'json' };
export const rootDir = new URL('.', import.meta.url).pathname;

/**
 *  Parses CLI arguments using `minimist`
 * @see {@link https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts}
 * @param cliArgs - an array of strings.
 * @defaultValue `process.argv.slice(2)`
 */
export const parseArgs = (
	cliArgs: string[] = process.argv.slice(2),
): ParsedArgs => {
	// parse any command line arguments passed into the create command
	// to pass to the generator prompts and skip them.
	// useful for CI and testing purposes
	const options: MinimistOptions = {
		// these options tell minimist which --args are
		// booleans and which are strings.
		boolean: ['force', 'silent', 'help', 'version', 'noTailwindcss'],
		string: ['appName', 'outDir', 'cmsEndpoint', 'cmsType'],
		alias: {
			help: ['h', 'help'],
			version: ['v', 'version'],
		},
	};
	const args: ParsedArgs = minimist(cliArgs, options);

	return args;
};

/**
 * Initializes the CLI prompts based on parsed arguments
 * @param args - {@link ParsedArgs}
 * @param DecoupledKitGenerators - An array of decoupledKitGenerators. @see {@link decoupledKitGenerators}.
 * @remarks positional args are assumed to be generator names. Multiple generators can be queued up this way. Any number of prompts may be skipped by passing in the prompt name via flag.
 * @returns Runs the actions for the generators given as positional params or if none are found, prompts user to select valid generator from list of DecoupledKitGenerators
 */
export const main = async (
	args: ParsedArgs,
	DecoupledKitGenerators: DecoupledKitGenerator[],
): Promise<void> => {
	process.on('beforeExit', () => {
		console.log(chalk.yellow('Goodbye.'));
	});

	// display the help menu
	if (args?.help || args?.h) {
		console.log(helpMenu(DecoupledKitGenerators));
		return;
	}

	// display the current version
	if (args?.v || args?.version) {
		console.log(`v${pkg.version}`);
		return;
	}

	// because minimist booleans must be false by default,
	// we can use noTailwind as a flag to turn off the prompt for
	// tailwindcss in the generators. This allows for a more intuitive flag,
	// and a way to get the tailwind-less starter via flag.
	if (args.noTailwindcss) {
		args.tailwindcss = false;
	}

	// get a list of generators to map against positional arguments from the cli
	const generators: DecoupledKitGenerator[] = DecoupledKitGenerators.map(
		(generator) => generator,
	);
	const generatorNames = generators.map(({ name }) => name);
	// take positional params from minimist args and
	// check them against valid generators
	const foundGenerators = args?._.filter((arg) => {
		if (generators.find(({ name }) => arg === name)) {
			return arg;
		}
		args.silent ||
			console.log(chalk.yellow(`No generator found with name ${arg}.`));
		return;
	});

	const generatorsToRun: string[] = [];
	// If no generators are found in positional params
	// ask which generators should be run
	if (!foundGenerators || !foundGenerators.length) {
		let generatorsOfCmsType: string[] = [];
		const cmsType = isString(args.cmsType) ? args.cmsType.toLowerCase() : null;

		if (cmsType) {
			const cmsTypeOptions = ['wp', 'wordpress', 'drupal', 'd9', 'd10', 'any'];
			if (cmsTypeOptions.indexOf(cmsType) === -1) {
				console.log(
					chalk.yellow(`Invalid cmsType: ${cmsType}. Showing all generators.`),
				);
			} else {
				generatorsOfCmsType = generators
					.filter((generator) => {
						return (
							isDrupalCms(generator.cmsType) === isDrupalCms(cmsType) ||
							isWpCms(generator.cmsType) === isWpCms(cmsType) ||
							generator.cmsType === 'any'
						);
					})
					.map(({ name }) => name);
			}
		}
		const whichGenerators: QuestionCollection<{
			generators: string[];
		}> = {
			name: 'generators',
			type: 'checkbox',
			message: 'Which generator(s) would you like to run?',
			choices:
				generatorsOfCmsType.length > 0 ? generatorsOfCmsType : generatorNames,
		};
		const answers = await inquirer.prompt(whichGenerators);
		if (Array.isArray(answers?.generators)) {
			generatorsToRun.push(...answers.generators);
			args._.push(...answers.generators);
		}
	} else {
		generatorsToRun.push(...foundGenerators);
	}

	if (!generatorsToRun || !generatorsToRun?.length) {
		throw `${chalk.red(
			'No valid generators were selected. Use positional arguments or choose from the prompt.',
		)}
Valid generators are: ${generatorNames.join(', ')}
To see this list at any time, use the --help command.`;
	}

	const actions = [];
	const templateData: TemplateData[] = [];
	const generatorsRan: string[] = [];
	const nextSteps: string[] = [];
	// gather actions and template data from user input/prompts
	for (const g of generatorsToRun) {
		const generator = DecoupledKitGenerators.find(({ name }) => name === g);
		if (!generator) {
			continue;
		}

		if (!args.cmsType) {
			args.cmsType = generator.cmsType;
		}
		const answers = await inquirer.prompt(generator.prompts, args);
		// Add any prompts to args object so we don't ask the same
		// prompt twice
		Object.assign(args, answers);

		// if generator data exists, add it to the args object
		generator.data && Object.assign(args, generator.data);

		// filter out shared tailwind templates if needed
		if (!args.tailwindcss) {
			generator.templates = generator.templates.filter(
				(template) => template !== 'tailwind-shared',
			);
		}

		// this object is used to deduplicate the templates
		const templateObj: TemplateData = {
			templateDirs: [...generator.templates],
			addon: generator.addon || false,
		};
		// gather all actions and templates
		actions.push(...generator.actions);
		templateData.push(templateObj);

		// gather all nextSteps
		generator.nextSteps && nextSteps.push(...generator.nextSteps);
		generatorsRan.push(generator.name);
	}

	// pass the handlebars instance into data so it is available
	// to any action that needs it
	const hbs = await getHandlebarsInstance(rootDir);
	// run the actions
	const actionsResult = await actionRunner({
		actions,
		templateData,
		data: args,
		handlebars: hbs,
	});
	args?.silent || console.log(chalk.blueBright(actionsResult));
	args?.silent ||
		console.log(
			chalk.bgGreen.black('Your project was generated with:'),
			`\n\t${chalk.cyan(generatorsRan.join('\n\t'))}`,
		);
	args?.silent || nextSteps.forEach((step) => console.log(`➡️ ${step}`));
	args?.silent ||
		console.log(
			`${chalk.yellow('cd')} into ${chalk.bold.magenta(
				args?.outDir || 'the outDir',
			)} to start developing!`,
		);
};

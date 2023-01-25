import chalk from 'chalk';
import inquirer from 'inquirer';
import nodePlop, { CustomActionFunction, NodePlopAPI } from 'node-plop';
import minimist from 'minimist';
import type { Answers, QuestionCollection } from 'inquirer';
import type { ParsedArgs, Opts as MinimistOptions } from 'minimist';
import type { DecoupledKitGenerator } from '@cli/src/types';
import { addWithDiff } from './utils/addWithDiff';

const __filename = new URL('.', import.meta.url).pathname;

/**
 * Set generator based on exports from src/generators
 * @param generators An array of plop Generators with an added name field. @see {@link DecoupledKitGenerator}.
 * @returns An instance of plop @see {@link NodePlopAPI}
 */
export const setGenerators = async (
	generators: DecoupledKitGenerator[],
): Promise<NodePlopAPI> => {
	const plop = await nodePlop();
	for (const generator of Object.values(generators)) {
		plop.setGenerator(generator.name, generator);
	}
	// Living with the type coercion here since we're close enough and it doesn't break.
	// We could go around plop when running actions
	// but this way we are still able to run valid plop generators
	plop.setActionType('addWithDiff', addWithDiff as CustomActionFunction);
	return plop;
};

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
		// we will probably want these soon
		boolean: ['force', 'silent' /**noInstall */],
		// might want these too
		//string: ['appName', 'directory'],
	};
	const args: ParsedArgs = minimist(cliArgs, options);

	return args;
};

/**
 * Initializes the CLI prompts based on parsed arguments
 * @param args - {@link minimist.ParsedArgs}
 * @param DecoupledKitGenerators - An array of plop Generators with an added name field. @see {@link DecoupledKitGenerator}.
 * @remarks positional args are assumed to be generator names. Multiple generators can be queued up this way. Any number of prompts may be skipped by passing in the prompt name via flag.
 * @returns Runs the actions for the generators given as positional params or if none are found, prompts user to select valid generator from list of DecoupledKitGenerators
 */
export const main = async (
	args: ParsedArgs,
	DecoupledKitGenerators: DecoupledKitGenerator[],
): Promise<void> => {
	// get the node-plop instance
	const plop = await setGenerators(DecoupledKitGenerators);
	// without setting the plopfile path, the templates can't be found
	// when trying to run the actions
	plop.setPlopfilePath(__filename);
	// get a list of generators to map against positional arguments from the cli
	const generators = plop.getGeneratorList();
	// take positional params from minimist args and
	// parse them for matching generator names
	const foundGenerators = args._.filter((arg) => {
		if (
			generators.find(({ name }) => {
				return arg.toString() === name.toString();
			})
		) {
			return arg;
		}
		args.silent ||
			console.log(chalk.yellow(`No generator found with name ${arg}.`));
		return;
	});
	// remove the positional parameters
	const generatorsToRun = [];
	// If no generators are found in positional params
	// ask which generators should be run
	if (!foundGenerators.length) {
		const generatorNames = generators.map(({ name }) => name);
		const whichGenerators: QuestionCollection<{ generators: string[] }> = {
			name: 'generators',
			type: 'checkbox',
			message: 'Which generator(s) would you like to run?',
			choices: () => generatorNames,
		};
		const answers = await inquirer.prompt(whichGenerators);
		Array.isArray(answers?.generators) &&
			generatorsToRun.push(...answers.generators);
	} else {
		generatorsToRun.push(...foundGenerators);
	}

	if (!generatorsToRun.length) {
		args.silent ||
			console.error(
				chalk.red(
					'No generators were selected. Use positional arguments or choose from the prompt.',
				),
			);
	}

	for (const generator of generatorsToRun) {
		// use instance of plop and get the current generator
		const plopGenerator = plop.getGenerator(generator);
		// use inquirer directly for prompts because node-plop does not
		// play nicely with ParsedArgs and inquirer does <3
		const answers: Answers = await inquirer.prompt(
			plopGenerator.prompts as QuestionCollection,
			args,
		);
		// use the harvested answers (if any) to run the plop actions
		// aka the meat of the generators
		const { changes, failures } = await plopGenerator.runActions(answers);
		if (failures.length) {
			args.silent ||
				failures.forEach(({ error }) => console.error(chalk.red(error)));
		}
		if (changes.length) {
			args.silent ||
				changes.forEach(({ type, path }) =>
					console.log(chalk.green(type), chalk.cyan(path)),
				);
		}
	}
};

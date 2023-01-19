import minimist from 'minimist';
import inquirer from 'inquirer';
import chalk from 'chalk';
import nodePlop, { NodePlopAPI } from 'node-plop';
import * as generators from './generators/index';
import type { ParsedArgs, Opts as MinimistOptions } from 'minimist';
import type { Answers, QuestionCollection } from 'inquirer';
export const __filename = new URL('.', import.meta.url).pathname;

/**
 * Set generator based on exports from src/generators
 * @returns {Promise<NodePlopAPI>} plop
 */
const setGenerators = async (): Promise<NodePlopAPI> => {
	const plop = await nodePlop();
	for (const generator of Object.values(generators)) {
		plop.setGenerator(generator.name, generator);
	}
	return plop;
};

/**
 *  Parses CLI arguments using `minimist`
 * @see {@link https://www.npmjs.com/package/minimist#var-argv--parseargsargs-opts}
 * @param cliArgs - an array of strings.
 * @defaultValue `process.argv.slice(2)`
 * @returns minimist parsed args
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
 * @param args - {@link typeof ParsedArgs}
 * @remarks positional args are assumed to be generator names. Multiple generators can be queued up this way. Any number of prompts may be skipped by passing in the prompt name via flag.
 * @returns Promise<void>
 */
export const main = async (args: ParsedArgs): Promise<void> => {
	// get the node-plop instance
	const plop = await setGenerators();
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
		args.silent ??
			console.log(chalk.yellow(`No generator found with name ${arg}.`));
		return;
	});
	// remove the positional parameters
	const generatorsToRun = [];
	// If no generators are found in positional params
	// ask which generators should be run
	if (!foundGenerators.length) {
		const generatorNames = generators.map(({ name }) => name);
		const answers: Answers = await inquirer.prompt({
			name: 'generators',
			type: 'checkbox',
			message: 'Which generator(s) would you like to run?',
			choices: () => generatorNames,
		});
		typeof answers.generators === 'string' &&
			generatorsToRun.push(answers.generators);
	} else {
		generatorsToRun.push(...foundGenerators);
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
			args.silent ?? console.error('The following errors occurred: ', failures);
		} else if (changes.length) {
			args.silent ?? console.log('The following changes took place: ', changes);
		}
	}
};

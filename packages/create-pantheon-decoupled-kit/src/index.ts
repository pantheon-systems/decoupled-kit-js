import minimist from 'minimist';
import inquirer from 'inquirer';
import nodePlop, { NodePlopAPI } from 'node-plop';
import * as generators from './generators/index';
import type { ParsedArgs, Opts as MinimistOptions } from 'minimist';
import type { Answers, QuestionCollection } from 'inquirer';
export const __filename = new URL('.', import.meta.url).pathname;
console.log(__filename);

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
 *  Parses CLI arguments using `minimist`ƒ
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
		//boolean: ['force', 'noInstall'],
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
	// get a list of generators to map against positinal arguments from the cli
	const generators = plop.getGeneratorList();
	const generatorNames = generators.map(({ name }) => name);
	console.log('generators:', generators);
	// take positional params from minimist args and
	// parse them for matching generator names
	const foundGenerators = args._.filter((arg) => {
		if (
			generators.find(({ name }) => {
				console.log(name, arg);
				return arg.toString() === name.toString();
			})
		) {
			return arg;
		}
		console.log(`No generator found with name ${arg}.`);
		return;
	});
	const namedArgs: Partial<ParsedArgs> = args;
	// remove the positional parameters
	delete namedArgs._;
	const generatorsToRun = [];
	// If no generators are found in positional params
	// ask which generators should be run
	if (!foundGenerators.length) {
		const answers: Answers = await inquirer.prompt({
			name: 'generators',
			type: 'checkbox',
			message: 'Which generator(s) would you like to run?',
			choices: () => generatorNames,
		});
		generatorsToRun.push(...(answers.generators as string[]));
	} else {
		generatorsToRun.push(...foundGenerators);
	}
	console.log('generatorsToRun:', generatorsToRun);

	for (const generator of generatorsToRun) {
		if (generator === '') return;
		// use instance of plop and get the current generator
		const plopGenerator = plop.getGenerator(generator);
		// use inquirer directly for prompts because node-plop does not
		// play nicely with ParsedArgs and inquirer does <3
		const answers: Answers = await inquirer.prompt(
			plopGenerator.prompts as QuestionCollection,
			namedArgs,
		);
		console.log('answers:', answers);
		// use the harvested answers (if any) to run the plop actions
		// aka the meat of the generators
		const { changes, failures } = await plopGenerator.runActions(answers);
		if (failures.length) {
			console.error('The following errors occurred: ', failures);
		} else if (changes.length) {
			console.log('The following changes took place: ', changes);
		}
	}
};

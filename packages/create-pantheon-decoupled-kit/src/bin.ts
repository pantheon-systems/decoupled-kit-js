#!/usr/bin/env node
import minimist from 'minimist';
import inquirer from 'inquirer';
import nodePlop from 'node-plop';
import path from 'path';
import type { ParsedArgs, Opts as MinimistOptions } from 'minimist';
import type { Answers, QuestionCollection } from 'inquirer';

// esm 'polyfill' for __dirname
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const plopfile = path.resolve(__dirname, './generators/plopfile.js');

export const parseArgs = (cliArgs: string[]) => {
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
export const main = async (args: ParsedArgs): Promise<void> => {
	console.log('parsedArgs: ', args);

	// create an instance of the NodePlopAPI
	const plop = await nodePlop(plopfile);
	// get a list of generators to map against positinal arguments from the cli
	const generators = plop.getGeneratorList();
	const generatorNames = generators.map(({ name }) => name);
	console.log('generators:', generators);
	// take positional params from minimist args and
	// parse them for matching generator names
	const foundGenerators = args._.filter((arg) => {
		if (generators.find(({ name }) => arg === name)) {
			return arg;
		}
		console.log(`No generator found with name ${arg}.`);
		// we should have a default entrypoint, if no generators are supplied,
		// that guides user through the "wizard" with as
		// many options as possible(?)
		return;
	});
	const namedArgs: Partial<ParsedArgs> = args;
	// remove the positional parameters
	delete namedArgs._;
	console.log('namedArgs', namedArgs);
	const generatorsToRun = [];
	console.log('foundGenerators', foundGenerators);
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
		const result = await plopGenerator.runActions(answers);
		console.log(result);
	}
};

await main(parseArgs(process.argv.slice(2)));

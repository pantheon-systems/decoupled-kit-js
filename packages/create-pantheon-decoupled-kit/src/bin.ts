#!/usr/bin/env node
import minimist from 'minimist';
import type { ParsedArgs, Opts as MinimistOptions } from 'minimist';

export const parseArgs = (): ParsedArgs => {
	// parse any command line arguments passed into the create command
	// to pass to the generator prompts and skip them.
	// useful for CI and testing purposes
	const options: MinimistOptions = {
		boolean: ['force', 'noInstall', 'silent'],
		string: ['appName', 'destination', 'templates'],
	};
	const cliArgs: string[] = process.argv.slice(2);
	const args: ParsedArgs = minimist(cliArgs, options);

	return args;
};

export const main = (args: ParsedArgs): void => {
	console.log(args);
	console.log('Helloooo World');
	// dynamicaly import generator?
	// run that generator with the given prompts
	// ???
	// profit
};

main(parseArgs());

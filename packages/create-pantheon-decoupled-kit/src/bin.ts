#!/usr/bin/env node
import { decoupledKitGenerators } from './generators';
import { main, parseArgs } from './index';

try {
	await main(parseArgs(), decoupledKitGenerators);
} catch (error) {
	console.log(error);
}

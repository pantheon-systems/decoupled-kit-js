#!/usr/bin/env node
import { parseArgs, main } from './index';
import {
	decoupledKitGenerators,
	sharedDecoupledKitGenerators,
} from './generators';

await main(parseArgs(), decoupledKitGenerators, sharedDecoupledKitGenerators);

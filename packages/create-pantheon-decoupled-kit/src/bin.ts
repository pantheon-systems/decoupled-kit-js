#!/usr/bin/env node
import { parseArgs, main } from './index';
import { decoupledKitGenerators } from './generators';

await main(parseArgs(), decoupledKitGenerators);

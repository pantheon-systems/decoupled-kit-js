import type { NodePlopAPI } from 'node-plop';
import { test } from './test.generator.js';
import { simple } from './simple.generator.js';
export default (plop: NodePlopAPI) => {
	// gather all generators
	plop.setGenerator('test', test);
	plop.setGenerator('simple', simple);
};

import type { PlopGeneratorConfig } from 'node-plop';
import { SpyInstance } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		[key: string]: SpyInstance;
	}
}

export interface DecoupledKitGenerator extends Partial<PlopGeneratorConfig> {
	name: string;
}

export type Json =
	| boolean
	| number
	| string
	| null
	| { [key: string]: Json }
	| Array<Json>;

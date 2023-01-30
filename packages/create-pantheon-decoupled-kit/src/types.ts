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

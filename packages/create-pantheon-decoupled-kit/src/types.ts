import type { PlopGeneratorConfig } from 'node-plop';
import { SpyInstance } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		[key: string]: SpyInstance;
	}
}

/**
 * @see PlopGeneratorConfig {@link https://github.com/plopjs/plop/blob/973c1ce566db6fc754af55672b47ae4ed80ae4d0/packages/node-plop/types/index.d.ts#L114}
 */
export interface DecoupledKitGenerator extends Partial<PlopGeneratorConfig> {
	name: string;
}

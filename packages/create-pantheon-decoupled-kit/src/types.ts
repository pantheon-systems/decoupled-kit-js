import type { PlopGeneratorConfig } from 'node-plop';

export interface DecoupledKitGenerator extends Partial<PlopGeneratorConfig> {
	name: string;
}

import type {
	CustomActionConfig,
	PlopGeneratorConfig,
	NodePlopAPI,
} from 'node-plop';
import type { Answers } from 'inquirer';

export interface DecoupledKitGenerator extends Partial<PlopGeneratorConfig> {
	name: string;
}

export interface AddWithDiffActionConfig
	extends CustomActionConfig<'addWithDiff'> {
	/** destination path */
	path: string;
	/** relative path to the directory with the templates to render */
	templates: string;
}

/**
 * overriding the CustomAction
 */
export type AddWithDiffAction = (
	Answers: Answers,
	config: AddWithDiffActionConfig,
	plop: NodePlopAPI,
) => Promise<string | void>;

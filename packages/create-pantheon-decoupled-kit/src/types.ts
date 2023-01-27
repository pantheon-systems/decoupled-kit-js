import type {
	CustomActionConfig,
	PlopGeneratorConfig,
	NodePlopAPI,
} from 'node-plop';
import type { Answers } from 'inquirer';
import { SpyInstance } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		[key: string]: SpyInstance;
	}
}

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

export interface RunInstallActionConfig
	extends CustomActionConfig<'runInstall'> {
	pkgManager: 'yarn' | 'pnpm' | 'npm';
}

export interface RunESLintActionConfig extends CustomActionConfig<'runLint'> {
	ignorePattern: string;
	plugins: string;
}

/**
 * overriding the CustomAction
 */
export type CustomActionFn<Config> = (
	Answers: Answers,
	// need a better solution for the types here and for the configs...
	// look into adding a patch for node-plop types
	config: Config extends RunInstallActionConfig
		? RunInstallActionConfig
		: AddWithDiffActionConfig,
	plop: NodePlopAPI,
) => Promise<string | void> | string | undefined;

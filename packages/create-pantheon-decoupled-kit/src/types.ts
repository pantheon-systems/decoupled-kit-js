import type { Answers, QuestionCollection } from 'inquirer';
import type { ParsedArgs } from 'minimist';
import type { SpyInstance } from 'vitest';

declare module 'vitest' {
	export interface TestContext {
		[key: string]: SpyInstance;
	}
}

/**
 * Generators need prompts to get user data not provided by CLI arguments
 */
export interface DecoupledKitGenerator<Prompts extends Answers> {
	/**
	 * Generator's name. This should be kebab case.
	 */
	name: string;
	/**
	 * Description of the generator
	 */
	description: string;
	/**
	 * An array of inquirer prompts
	 */
	prompts: QuestionCollection<Prompts>[];
	/**
	 * An array of paths to the generator's templates.
	 * This should be empty if the generator does not have templates.
	 */
	templates: string[];
	/**
	 * An array of actions to run with the prompts and templates
	 */
	actions: Action[];
	/**
	 * Any extra data that should be passed from the generator to the actions
	 */
	data?: DataRecord;
	/**
	 * Set to true if the generator is considered an addon.
	 * This will give priority to the templates when de-duping.
	 */
	addon?: boolean;
	/**
	 * Any message(s) to be rendered after actions are successfully completed.
	 */
	nextSteps?: string[];
}

/**
 * An action that takes in the data, templates, and an instance of handlebars
 * and does an action, like installing dependencies or formatting generated code
 */
export type Action = (config: ActionConfig) => Promise<string> | string;

export type ActionRunner = (config: ActionRunnerConfig) => Promise<string>;

type InputIndex = ParsedArgs & Answers & DataRecord;
/**
 * Input from command line arguments, prompts, and generator data
 */
export type Input = {
	[Property in keyof InputIndex]: InputIndex[Property];
};
export interface TemplateData {
	templateDirs: string[];
	addon: boolean;
}

export interface MergedPaths {
	[key: string]: { addon: boolean; base: string };
}

export interface DefaultAnswers extends Input {
	outDir: string;
}

interface ActionConfig {
	data: Input;
	templateData?: TemplateData[];
	handlebars?: typeof Handlebars;
}

interface ActionRunnerConfig extends ActionConfig {
	actions: Action[];
}

type DataMember = string | number | boolean;
type DataRecord = {
	[key: string]: DataMember | Record<string, DataRecord | DataMember>;
};

// TYPE PREDICATES

/**
 * @param arg a variable
 * @returns true if the variable is a string, false otherwise
 */
export const isString = (arg: unknown): arg is string => {
	if (typeof arg === 'string') {
		return true;
	}
	return false;
};

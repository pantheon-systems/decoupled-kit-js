import type { Answers, QuestionCollection } from 'inquirer';
import type { SpyInstance } from 'vitest';
import { taggedTemplateHelpers as helpers } from './utils';

declare module 'vitest' {
	export interface TestContext {
		[key: string]: SpyInstance;
	}
}

type DrupalOrWP = {
	[key in 'drupal' | 'wp']?: boolean;
};

/**
 * @example
 * ```
 * {
 * 	drupalKitVersion: versions['drupal-kit'],
 * 	drupal: true
 * }
 * ```
 */
export type BaseGeneratorData = {
	[key: `${string}Version`]: string;
} & DrupalOrWP;

export interface GatsbyWPData extends BaseGeneratorData {
	gatsbyPnpmPlugin: boolean;
	gatsby: true;
}

export interface SearchApiData extends BaseGeneratorData {
	search: boolean;
}

export interface WPAcfData extends BaseGeneratorData {
	wpAcfAddon: boolean;
}

/**
 * Generators need prompts to get user data not provided by CLI arguments
 */
export interface DecoupledKitGenerator<
	Prompts = DefaultAnswers,
	Data = unknown,
> {
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
	 * @template Prompts - the type of the required user input
	 * @default DefaultAnswers - { outDir: string }
	 */
	prompts: QuestionCollection<
		Prompts[] extends DefaultAnswers ? Prompts : DefaultAnswers
	>[];
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
	data?: Data;
	/**
	 * Set to true if the generator is considered an addon.
	 * This will give priority to the templates when de-duping.
	 */
	addon?: boolean;
	/**
	 * Any message(s) to be rendered after actions are successfully completed.
	 */
	nextSteps?: string[];
	/**
	 * Identifies a generators compatible CMS(s).
	 */
	cmsType: CMSType['Drupal'] | CMSType['WordPress'] | 'any';
}

/**
 * Valid CMS Type Options
 */
type CMSType = {
	Drupal: 'd9' | 'd10' | 'drupal';
	WordPress: 'wp' | 'wordpress';
};

/**
 * An action that takes in the data, templates, and an instance of handlebars
 * and does an action, like installing dependencies or formatting generated code
 */
export type Action = (config: ActionConfig) => Promise<string> | string;

export type ActionRunner = (config: ActionRunnerConfig) => Promise<string>;

type InputIndex = BaseGeneratorData &
	GatsbyWPData &
	SearchApiData &
	WPAcfData & {
		_: string[];
		appName: string;
		outDir: string;
		templateRootDir: string;
		cmsEndpoint: string;
		noInstall: boolean;
		noLint: boolean;
		force: boolean;
		silent: boolean;
		tailwindcss: boolean;
		cmsType: CMSType['Drupal'] | CMSType['WordPress'];
	};

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

export interface DefaultAnswers extends Answers {
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

/**
 * Helper utilities for template literal templates
 */
type Helpers = typeof helpers;

/**
 * Arguments for the {@link TemplateFn}
 */
interface TemplateFnArgs<Data extends Input> {
	data: Data;
	utils: Helpers;
}

/**
 * A tagged template literal function with data and utils context
 */
export declare type TemplateFn = <Data extends Input>({
	data,
	utils,
}: TemplateFnArgs<Data>) => string;

export interface TemplateImport {
	default: TemplateFn;
}

/**
 * @param arg a variable
 * @returns true if the variable is a string, false otherwise
 */
export const isString = (arg: unknown): arg is string => {
	return typeof arg === 'string';
};

/**
 * @param value a string
 * @returns true if the variable matches a Drupal alias in {@link CMSType['Drupal']}, false otherwise
 */
export const isDrupalCms = (value: string): value is CMSType['Drupal'] => {
	return ['drupal', 'd9', 'd10'].includes(value);
};

/**
 * @param value a string
 * @returns true if the variable matches a WordPress alias in {@link CMSType['WordPress']}, false otherwise
 */
export const isWpCms = (value: string): value is CMSType['WordPress'] => {
	return ['wordpress', 'wp'].includes(value);
};

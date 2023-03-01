import chalk from 'chalk';
import path from 'path';
import klaw from 'klaw';
import type { TemplateData, MergedPaths } from '../types';

const rootDir = new URL('.', import.meta.url).pathname;

interface Template {
	addon: boolean;
	template: string;
	base: string;
}

export const getAllTemplates = async (
	templateDir: string,
	addon: boolean,
): Promise<Template[]> => {
	const templates: Template[] = [];
	const base = path.basename(templateDir);
	const fullTemplateDirPath = path.resolve(rootDir, 'templates', templateDir);

	// loop through each template dir and gather all of the templates
	// include the base and if it is an addon on the object
	for await (const file of klaw(fullTemplateDirPath)) {
		if (file.stats.isDirectory()) continue;
		const tempObj: { addon: boolean; template: string; base: string } = {
			addon,
			base,
			template: '',
		};
		const templateName = file.path.split(templateDir)[1];
		tempObj.template = templateName;

		templates.push(tempObj);
	}
	return templates;
};

/**
 * @param unmergedTemplates an array of objects. Each object includes
 * the template name, its base directory, and a boolean indicating whether
 * this template is an addon or not
 * @returns an object with keys equal to the paths merged. The value of
 * each key includes the baseDir of the template, and the addon status
 */
export const mergeTemplatePaths = (unmergedTemplates: Template[]) => {
	const mergedPaths: MergedPaths = {};

	for (const { addon, template, base } of unmergedTemplates) {
		if (!mergedPaths[template]) {
			// set the template as the key and if it is an addon as the value
			mergedPaths[template] = { addon, base };
			// if we find the template already added to mergedPaths
			// and it is an addon
		} else if (mergedPaths[template] && !mergedPaths[template].addon) {
			// if the current template is an addon, set the base to that template
			delete mergedPaths[template];
			mergedPaths[template] = { base, addon };
		}
	}
	return mergedPaths;
};

/**
 * In case there is a template path that exists in two or more generators,
 * we want to favor the addon. This way, we avoid writing to a
 * file multiple times
 * @param templateData An array of Templates @see {@link Template}
 * @returns MergedPaths @see {@link MergedPaths}
 */
export const dedupeTemplates = async (
	templateData: TemplateData[],
): Promise<MergedPaths> => {
	const allTemplates: Template[] = [];

	for (const { templateDirs, addon } of templateData) {
		for await (const dir of templateDirs) {
			try {
				const templates = await getAllTemplates(dir, addon);
				allTemplates.push(...templates);
			} catch (error) {
				console.error(chalk.red('Failed to read templates:\n'));
				throw error;
			}
		}
	}

	const dedupedTemplates = mergeTemplatePaths(allTemplates);

	return dedupedTemplates;
};

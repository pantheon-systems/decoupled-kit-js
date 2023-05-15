import chalk from 'chalk';
import type { ActionRunner } from '../types';

export const actionRunner: ActionRunner = async ({
	actions,
	templateData,
	data,
	handlebars,
}) => {
	// remove duplicate actions
	actions = [...new Set(actions)];
	// run each action sequentially
	for await (const action of actions) {
		try {
			const result = await action({ data, templateData, handlebars });
			data.silent || console.log(result);
		} catch (error) {
			console.log(chalk.red('Something went wrong: '));
			if (error instanceof Error) {
				console.log(error.message);
			}
			process.exit(1);
		}
	}
	return 'All actions successfully completed.';
};

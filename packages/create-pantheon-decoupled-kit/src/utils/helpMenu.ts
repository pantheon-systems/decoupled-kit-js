import type { DecoupledKitGenerator } from '../types';

export const helpMenu = (generators: DecoupledKitGenerator[]) => {
	const generatorsList = Object.values(generators).map(({ name }) => name);
	return `Usage: create-pantheon-decoupled-kit <generator(s) space separated> [options]
	
Note: Options may differ depending on the generator. The following options should be available on most generators

Generators: ${generatorsList.join(', ')}

Options:
        --help, -h             Show this menu.
        --version, -v          Shows version number.

    [boolean] - true if present, omit for false
        --silent               Prevent most terminal output.
        --force                Skips show diff for each file and overwrite any files. Useful for CI
        --noInstall            Prevents package manager from installing dependencies after running a generator.
        --noLint               Prevents linting after generating a project.

    [string]
        --outDir               The directory where the output is generated.
        --appName              The name of the new app.
        --cmsEndpoint          The URL of your CMS backend.
        --cmsType              The name of your CMS provider. As of now, wp, wordpress, drupal, d9, and d10 are all valid options.`;
};

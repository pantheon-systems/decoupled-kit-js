import { decoupledKitGenerators } from '../generators';
const generatorsList = Object.values(decoupledKitGenerators).map(
	({ name }) => name,
);
export const helpMenu = `Usage: create-pantheon-decoupled-kit <generator(s) space separated> [options]
	
Note: Options may differ depending on the generator. The following options should be available on most generators

Generators: ${generatorsList.join(', ')}

Options:
        --help, -h          Show this menu.
        --version, -v       Shows version number.
        --silent            Prevent most terminal output.
        --force             Skips show diff for each file and overwrite any files. Useful for CI
        --noInstall         Prevents package manager from installing dependencies after running a generator.
        --noLint            Prevents linting after generating a project.

        --outDir <path>     The directory where the output is generated.
        --appName <string>  The name of the new app.`;

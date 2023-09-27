import { TemplateFn } from '@cli/types';
import { sharedPkgJsonField } from '@partials/pkg-shared/sharedPkgJsonFields';
import { tailwindcssDeps } from '@partials/pkg-shared/tailwindcssDeps';

const json: TemplateFn = ({ data, utils }) => /* JSON */ `{
	${sharedPkgJsonField(utils.pkgName(data.appName))}
	"scripts": {
		"dev": "next dev",
		"build": "npm run decoupled-kit-health-check && next build && cp -r .next/static .next/standalone/.next && cp -r public .next/standalone",
		"start": "node .next/standalone/server.js",
		"build:mono": "next build",
		"start:mono": "next start",
		"lint": "next lint",
		"lint:fix": "next lint --fix && npm run prettier:fix",
		"prettier": "prettier '**/*.{js,jsx,md}' --check --ignore-path .prettierignore",
		"prettier:fix": "prettier '**/*.{js,jsx,,md}' --write --ignore-path .prettierignore",
		"test": "vitest run",
		"update-snapshots": "vitest run --update --silent",
		"coverage": "vitest run --coverage",
		"decoupled-kit-health-check": "npx --prefer-offline @pantheon-systems/decoupled-kit-health-check drupal"
	},
	"dependencies": {
		"@pantheon-systems/drupal-kit": "${data.drupalKitVersion}",
		"@pantheon-systems/nextjs-kit": "${data.nextjsKitVersion}",
		${utils.if(data.tailwindcss, tailwindcssDeps(false))}
		"dotenv": "^16.0.2",
		"next": "13.4.7",
		"next-seo": "^6.1.0",
		"react": "18.2.0",
		"react-dom": "18.2.0",
		"sharp": "^0.32.6"
	},
	"devDependencies": {
		"@pantheon-systems/decoupled-kit-health-check": "${
			data.decoupledKitHealthCheckVersion
		}",
		${utils.if(data.tailwindcss, tailwindcssDeps(true))}
		"@testing-library/react": "14.0.0",
		"@vitejs/plugin-react": "^4.1.0",
		"@vitest/coverage-v8": "^0.34.5",
		"eslint": "^8.24.0",
		"eslint-config-next": "13.4.7",
		"jsdom": "^22.1.0",
		"msw": "^1.0.0",
		"prettier": "^3.0.3",
		"typescript": "5.2.2",
		"vite": "^4.0.4",
		"vitest": "^0.34.5"
	}
}`;

export default json;

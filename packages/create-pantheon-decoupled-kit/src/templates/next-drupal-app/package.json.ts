import { TemplateFn } from '@cli/types';
import { sharedPkgJsonField } from '@partials/pkg-shared/sharedPkgJsonFieldsT';

const json: TemplateFn = ({ data, utils }) => /* JSON */ `{
	${sharedPkgJsonField(utils.pkgName(data.appName))}
	"scripts": {
		"dev": "next dev",
		"build": "next build && cp -r .next/static .next/standalone/.next && cp -r public .next/standalone",
		"start": "node .next/standalone/server.js",
		"build:mono": "next build",
		"start:mono": "next start",
		"lint": "next lint",
		"lint:fix": "next lint --fix && npm run prettier:fix",
		"prettier": "prettier '**/*.{js,jsx,md}' --check --ignore-path .prettierignore",
		"prettier:fix": "prettier '**/*.{js,jsx,,md}' --write --ignore-path .prettierignore",
		"test": "vitest run",
		"update-snapshots": "vitest run --update --silent",
		"coverage": "vitest run --coverage"
	},
	"dependencies": {
		"@pantheon-systems/drupal-kit": "${String(data.drupalKitVersion)}",
		"@pantheon-systems/nextjs-kit":  "${String(data.nextjsKitVersion)}",
		"dotenv": "^16.0.2",
		"@formatjs/intl-localematcher": "^0.4.0",
		"negotiator": "^0.6.3",
		"next": "^13.4.4",
		"next-seo": "^5.15.0",
		"react": "18.2.0",
		"react-dom": "18.2.0",
		"sharp": "^0.31.3"
	},
	"devDependencies": {
		"@types/negotiator": "0.6.1",
		"@types/node": "20.2.5",
		"@types/react": "18.2.9",
		"@types/react-dom": "18.2.4",
		"@testing-library/react": "13.4.0",
		"@vitejs/plugin-react": "^3.0.1",
		"c8": "^7.12.0",
		"encoding": "^0.1.13",
		"eslint": "^8.42.0",
		"eslint-config-next": "^13.4.4",
		"msw": "^1.0.0",
		"prettier": "^2.7.1",
		"typescript": "5.1.3",
		"vite": "^4.0.4",
		"vitest": "^0.28.3"
	}
}`;

export default json;

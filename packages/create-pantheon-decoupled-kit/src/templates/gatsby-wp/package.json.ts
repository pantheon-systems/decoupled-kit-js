import { tailwindcssDeps } from '@partials/pkg-shared/tailwindcssDeps';
import { TemplateFn } from '@cli/types';
import { sharedPkgJsonField } from '@partials/pkg-shared/sharedPkgJsonFields';

const json: TemplateFn = ({ data, utils }) => /* JSON */ `{
	${sharedPkgJsonField(utils.pkgName(data.appName))}
	"scripts": {
		"build": "npm run decoupled-kit-health-check && gatsby build",
		"develop": "ENABLE_GATSBY_REFRESH_ENDPOINT=true gatsby develop -H 0.0.0.0",
		"format": "prettier --write '**/*.{js,jsx,ts,tsx,json,md}'",
		"start": "npm run develop",
		"serve": "gatsby serve -p 8000",
		"clean": "gatsby clean",
		"prettier": "prettier '**/*.{js,jsx,md}' --check --ignore-path .prettierignore",
		"prettier:fix": "prettier '**/*.{js,jsx,,md}' --write --ignore-path .prettierignore",
		"test": "vitest run",
		"test:watch": "vitest",
		"update-snapshots": "vitest run --update --silent",
		"coverage": "vitest run --coverage",
		"lint:fix": "eslint --ext .js,.ts,.jsx,.tsx src --fix --ignore-path .gitignore",
		"lint": "eslint --ext .js,.ts,.jsx,.tsx src --ignore-path .gitignore",
		"decoupled-kit-health-check": "npx --prefer-offline @pantheon-systems/decoupled-kit-health-check wordpress"
	},
	"dependencies": {
		${utils.if(data.tailwindcss, tailwindcssDeps(false))}
		"gatsby": "^5.11.0",
		"gatsby-plugin-dts-css-modules": "^3.0.0",
		"gatsby-plugin-image": "^3.11.0",
		${utils.if(data.gatsbyPnpmPlugin, `"gatsby-plugin-pnpm": "^1.2.10",`)}
		"gatsby-plugin-postcss": "^6.11.0",
		"gatsby-plugin-sharp": "^5.11.0",
		"gatsby-plugin-typescript": "^5.11.0",
		"gatsby-source-filesystem": "^5.11.0",
		"gatsby-source-wordpress": "^7.11.0",
		"gatsby-transformer-sharp": "^5.11.0",
		"graphql": "^16.6.0",
		"isomorphic-dompurify": "^1.6.0",
		"lodash": "^4.17.21",
		"mitt": "^3.0.0",
		"react": "18.2.0",
		"react-dom": "18.2.0"
	},
	"devDependencies": {
		${utils.if(data.tailwindcss, tailwindcssDeps(true))}
		"@pantheon-systems/decoupled-kit-configs": "${data.otherVersion}",
		"@pantheon-systems/decoupled-kit-health-check": "${
			data.decoupledKitHealthCheckVersion
		}",
		"@pantheon-systems/eslint-config-decoupled-kit": "${data.eslintVersion}",
		"@pantheon-systems/wordpress-kit": "${data.wordpressKitVersion}",
		"@testing-library/react": "13.4.0",
		"@types/dompurify": "^3.0.2",
		"@types/gatsbyjs__reach-router": "^2.0.0",
		"@types/lodash": "^4.14.195",
		"@types/node": "^18.16.16",
		"@types/react": "^18.2.13",
		"@types/react-dom": "^18.2.6",
		"@typescript-eslint/eslint-plugin": "^5.60.0",
		"@typescript-eslint/parser": "^5.60.0",
		"@vitejs/plugin-react": "^4.0.1",
		"@vitest/coverage-c8": "^0.32.2",
		"dotenv": "^16.3.1",
		"eslint": "^8.43.0",
		"eslint-config-prettier": "^8.8.0",
		"eslint-plugin-jsx-a11y": "^6.7.1",
		"eslint-plugin-prettier": "^4.2.1",
		"eslint-plugin-react": "^7.32.2",
		"eslint-plugin-react-hooks": "^4.6.0",
		"jsdom": "^22.1.0",
		"prettier": "^2.8.8",
		"typescript": "4.9.4",
		"vitest": "^0.32.2"
	}
}`;

export default json;

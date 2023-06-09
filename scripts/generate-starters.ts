#!/usr/bin/env tsx
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

const generateStarters = () => {
	const cmsEndpoint = '';
	const options = '--force --noInstall --tailwindcss';
	const inputs = [
		{
			appName: 'next-drupal-starter',
			outDir: './starters/next-drupal-app-starter',
			generators: 'next-drupal-app',
			cmsEndpoint,
			options,
		},
		{
			appName: 'next-wordpress-starter',
			outDir: './starters/next-wordpress-starter',
			generators: 'next-wp',
			cmsEndpoint,
			options,
		},
		{
			appName: 'gatsby-wordpress-starter',
			outDir: './starters/gatsby-wordpress-starter',
			generators: 'gatsby-wp',
			cmsEndpoint,
			options,
		},
	];

	inputs.forEach(({ appName, outDir, generators, options }) => {
		try {
			execSync(
				`node ./packages/create-pantheon-decoupled-kit/dist/bin.js ${generators} \
--appName ${appName} \
--outDir ${outDir} \
--cmsEndpoint ${cmsEndpoint} \
${options}`,
				{ cwd: resolve(process.cwd()), encoding: 'utf-8' },
			);
			console.log(`${appName} generated`);
		} catch (error) {
			console.error(error);
		}
	});
};

generateStarters();

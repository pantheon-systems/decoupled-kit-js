#!/usr/bin/env tsx
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

const generateStarters = () => {
	const cmsEndpoint = '';
	const options = '--force --noInstall --tailwindcss';
	const tailwindless = '--force --noInstall --no-tailwindcss';

	const inputs = [
		{
			appName: 'next-drupal-starter',
			outDir: './starters/next-drupal-starter',
			generators: 'next-drupal next-drupal-umami-addon',
			cmsEndpoint,
			options: tailwindless,
		},
		{
			appName: 'next-wordpress-starter',
			outDir: './starters/next-wordpress-starter',
			generators: 'next-wp',
			cmsEndpoint,
			options: tailwindless,
		},
		{
			appName: 'gatsby-wordpress-starter',
			outDir: './starters/gatsby-wordpress-starter',
			generators: 'gatsby-wp',
			cmsEndpoint,
			options: tailwindless,
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

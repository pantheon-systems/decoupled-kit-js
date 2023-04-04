#!/usr/bin/env tsx
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';

const generateStarters = () => {
	const inputs = [
		{
			appName: 'next-drupal-starter',
			outDir: './starters/next-drupal-starter',
			generators: 'next-drupal next-drupal-umami-addon',
			options: '--force --noInstall --tailwindcss',
		},
		{
			appName: 'next-wordpress-starter',
			outDir: './starters/next-wordpress-starter',
			generators: 'next-wp',
			options: '--force --noInstall --tailwindcss',
		},
		{
			appName: 'gatsby-wordpress-starter',
			outDir: './starters/gatsby-wordpress-starter',
			generators: 'gatsby-wp',
			options: '--force --noInstall --tailwindcss',
		},
	];

	inputs.forEach(({ appName, outDir, generators, options }) => {
		try {
			execSync(
				`node ./packages/create-pantheon-decoupled-kit/dist/bin.js ${generators} \
--appName ${appName} \
--outDir ${outDir} \
${options}`,
				{ cwd: resolve(process.cwd()), encoding: 'utf-8' },
			);
		} catch (error) {
			console.error(error);
		}
	});
};

generateStarters();

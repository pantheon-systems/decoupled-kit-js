/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { Input } from '@cli/types';
import pkgs from '@cli/pkgVersions.json';

// object that is passed as Data to the action runner tests
// override properties in individual tests as needed.
export const sharedTestData: Input = {
	_: ['test-diff'],
	templateRootDir: `${process.cwd()}/__tests__/`,
	outDir: '',
	force: false,
	silent: false,
	tailwindcss: true,
	noInstall: false,
	noLint: false,
	gatsbyPnpmPlugin: false,
	gatsby: true,
	appName: 'test',
	cmsEndpoint: 'https://example.test',
	decoupledKitHealthCheckVersion: pkgs['decoupled-kit-health-check'] as string,
	drupalKitVersion: pkgs['drupal-kit'] as string,
	wordpressKitVersion: pkgs['wordpress-kit'] as string,
	cmsKitVersion: pkgs['cms-kit'] as string,
	nextjsKitVersion: pkgs['nextjs-kit'] as string,
	eslintVersion: pkgs['eslint'] as string,
	otherVersion: pkgs['other'] as string,
};

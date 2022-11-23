// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const generateTypeDocOptions = require('./generateTypedocOptions.js');

const drupalKitTypedocOptions = generateTypeDocOptions('drupal-kit', 0);
const wordpressKitTypedocOptions = generateTypeDocOptions('wordpress-kit', 1);
const nextjskitTypedocOptions = generateTypeDocOptions('nextjs-kit', 2);
const environmentUrl = process.env.PANTHEON_ENVIRONMENT_URL;

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Pantheon Decoupled Kit',
	tagline:
		'Utilities for building a decoupled front end that sources data from a CMS back end.',
	url: environmentUrl ? `https://${environmentUrl}` : 'http://localhost:3000',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'pantheon-systems', // Usually your GitHub org/user name.
	projectName: 'decoupled-kit-js', // Usually your repo name.

	plugins: [
		// Prevent trying to generate api reference when building on the platform
		...(environmentUrl
			? []
			: [
					[
						'docusaurus-plugin-typedoc',
						{
							id: 'api-1',
							...drupalKitTypedocOptions,
							cleanOutputDir: true,
						},
					],
					[
						'docusaurus-plugin-typedoc',
						{
							id: 'api-2',
							...wordpressKitTypedocOptions,
						},
					],
					[
						'docusaurus-plugin-typedoc',
						{
							id: 'api-3',
							...nextjskitTypedocOptions,
						},
					],
			  ]),
	],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl:
						'https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=doc-update-template.md&labels=documentation&title=Update+docs',
				},
				// blog: {
				//   showReadingTime: true,
				//   editUrl:
				//     "https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=doc-update-template.md&labels=documentation&title=Update+docs",
				// },
				theme: {
					customCss: [require.resolve('./src/css/custom.css')],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Decoupled Kit',
				logo: {
					alt: 'Pantheon Logo',
					src: 'img/pantheon_logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'decoupled-kit-overview',
						position: 'left',
						label: 'Docs',
					},
					{
						href: 'https://github.com/pantheon-systems/decoupled-kit-js',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				links: [
					{
						title: 'Backend Starters',
						items: [
							{
								label: 'Create a Decoupled Drupal Backend',
								to: '/docs/Backend%20Starters/Decoupled%20Drupal/Creating%20a%20New%20Project',
							},
							{
								label: 'Create a Decoupled WordPress Backend',
								to: '/docs/Backend%20Starters/Decoupled%20WordPress/Creating%20a%20New%20Project',
							},
						],
					},
					{
						title: 'Frontend Starters',
						items: [
							{
								label: 'Gatsby + WordPress',
								to: '/docs/Frontend%20Starters/Gatsby%20WordPress/Introduction',
							},
							{
								label: 'Next.js + WordPress',
								to: '/docs/Frontend%20Starters/Next.js/Next.js%20+%20WordPress/Introduction',
							},
							{
								label: 'Next.js + Drupal',
								to: '/docs/Frontend%20Starters/Next.js/Next.js%20+%20Drupal/Introduction',
							},
						],
					},
					{
						title: 'npm Packages',
						items: [
							{
								label: 'wordpress-kit',
								to: '/docs/Packages/wordpress-kit',
							},
							{
								label: 'drupal-kit',
								to: '/docs/Packages/drupal-kit',
							},
							{
								label: 'nextjs-kit',
								to: '/docs/Packages/nextjs-kit',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Pantheon Community Forum',
								href: 'https://discuss.pantheon.io/',
							},
							{
								label: 'Slack',
								href: 'https://slackin.pantheon.io/',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/getpantheon',
							},
						],
					},
				],
				logo: {
					src: 'img/B_Fist-Tagline.png',
					srcDark: 'img/W_Fist-Tagline.png',
					alt: 'Pantheon Systems Logo',
				},
				copyright: `Copyright © ${new Date().getFullYear()} Pantheon. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;

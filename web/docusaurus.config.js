// @ts-check
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const typeDocOptions = require('./generateTypedocOptions.js');

const environmentUrl = process.env.PANTHEON_ENVIRONMENT_URL;

// Prevent trying to generate api reference when building on the platform:
// if the PANTHEON_ENVIRONMENT_URL is set, we won't generate new API reference
const typedocPlugins = environmentUrl ? [] : [...typeDocOptions];

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Pantheon Decoupled Kit',
	tagline:
		'Utilities for building a decoupled front end that sources data from a CMS back end.',
	url: environmentUrl
		? `https://decoupledkit.pantheon.io`
		: 'http://localhost:3000',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'pantheon-systems', // Usually your GitHub org/user name.
	projectName: 'decoupled-kit-js', // Usually your repo name.
	markdown: {
		mermaid: true,
	},
	themes: ['@docusaurus/theme-mermaid'],

	plugins: [...typedocPlugins, require.resolve('docusaurus-lunr-search')],

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl:
						'https://github.com/pantheon-systems/decoupled-kit-js/edit/canary/web/',
					path: 'docs',
					// overwrite admonitions to add custom 'pantheon' keyword
					admonitions: {
						tag: ':::',
						keywords: [
							'info',
							'success',
							'danger',
							'note',
							'tip',
							'warning',
							'important',
							'caution',
							'pantheon',
						],
					},
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
			metadata: [
				{
					name: 'keywords',
					content: 'headless, jamstack, decoupled, wordpress, drupal, webops',
				},
			],
			image: 'img/decoupled.png',
			navbar: {
				title: 'Decoupled Kit',
				logo: {
					alt: 'Pantheon Logo',
					src: 'img/pantheon_logo.png',
				},
				items: [
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
								to: '/docs/backend-starters/decoupled-drupal/creating-a-new-project',
							},
							{
								label: 'Create a Decoupled WordPress Backend',
								to: '/docs/backend-starters/decoupled-wordpress/creating-a-new-project',
							},
						],
					},
					{
						title: 'Frontend Starters',
						items: [
							{
								label: 'Gatsby + WordPress',
								to: '/docs/frontend-starters/gatsby/gatsby-wordpress/introduction',
							},
							{
								label: 'Next.js + WordPress',
								to: '/docs/frontend-starters/nextjs/nextjs-wordpress/introduction',
							},
							{
								label: 'Next.js + Drupal',
								to: '/docs/frontend-starters/nextjs/nextjs-drupal/introduction',
							},
						],
					},
					{
						title: 'npm Packages',
						items: [
							{
								label: 'create-pantheon-decoupled-kit',
								to: '/docs/Packages/create-pantheon-decoupled-kit',
							},
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
						title: 'Pantheon',
						items: [
							{
								label: 'Slack',
								href: 'https://slackin.pantheon.io/',
							},
							{
								label: 'Pantheon decoupled-kit-js GitHub Discussions',
								href: 'https://github.com/pantheon-systems/decoupled-kit-js/discussions',
							},
							{
								label: 'Pantheon Community Hub',
								href: 'https://community.pantheon.io/forum/',
							},
							{
								label: 'Pantheon Platform Documentation',
								href: 'https://docs.pantheon.io',
							},
						],
					},
				],
				logo: {
					src: 'img/B_Fist-Tagline.png',
					srcDark: 'img/W_Fist-Tagline.png',
					alt: 'Pantheon Systems Logo',
					width: 200,
				},
				copyright: `Copyright © ${new Date().getFullYear()} Pantheon. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			mermaid: {
				theme: { light: 'neutral', dark: 'dark' },
			},
		}),
};

module.exports = config;

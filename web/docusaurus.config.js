// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pantheon Decoupled Kit",
  tagline:
    "Utilities for building a decoupled front end that sources data from a CMS back end.",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pantheon-systems", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        id: "api-1",
        entryPoints: ["../packages/drupal-kit/src"],
        tsconfig: "../packages/drupal-kit/tsconfig.json",
        entryPointStrategy: "expand",
        out: "Packages/drupal-kit",
        sidebar: {
          categoryLabel: "drupal-kit",
        },
      },
    ],
    // Plugin supposedly has a monorepo-friendly config, but it isn't working for me.
    // https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/docusaurus-plugin-typedoc#monorepo-setup
    // Multi instance approach is more verbose, but may provide more control
    // https://github.com/tgreyuk/typedoc-plugin-markdown/tree/master/packages/docusaurus-plugin-typedoc#multi-instance
    [
      "docusaurus-plugin-typedoc",
      {
        id: "api-2",
        entryPoints: ["../packages/wordpress-kit/src"],
        tsconfig: "../packages/wordpress-kit/tsconfig.json",
        entryPointStrategy: "expand",
        out: "Packages/wordpress-kit",
        sidebar: {
          categoryLabel: "wordpress-kit",
        },
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
          // TODO: Update with Doc Edit template
          "https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=doc-update-template.md&labels=documentation&title=Update+docs",
        },
        blog: {
          showReadingTime: true,
          // TODO: Update with Doc Edit template
          editUrl:
            "https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=doc-update-template.md&labels=documentation&title=Update+docs",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("@codesandbox/sandpack-react/dist/index.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Decoupled Kit",
        logo: {
          alt: "Pantheon Logo",
          src: "img/pantheon_logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/pantheon-systems/decoupled-kit-js",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

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
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pantheon-systems", // Usually your GitHub org/user name.
  projectName: "decoupled-kit-js", // Usually your repo name.

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      // TODO: this works, but squashes everything into one category/package. Maybe this is ok?
      // FIXME: needs work - it's reading node_modules for 'defined in'. Can we ignore this?
      // It's also making the namespaces weird.
      {
        entryPoints: [
          "../packages/drupal-kit",
          "../packages/wordpress-kit",
        ],
        tsconfig: "../tsconfig.json",
        entryPointStrategy: "packages",
        sidebar: {
          fullNames: true,
        },
        out: "Packages"
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
        // blog: {
        //   showReadingTime: true,
        //   // TODO: Update with Doc Edit template
        //   editUrl:
        //     "https://github.com/pantheon-systems/decoupled-kit-js/issues/new?template=doc-update-template.md&labels=documentation&title=Update+docs",
        // },
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

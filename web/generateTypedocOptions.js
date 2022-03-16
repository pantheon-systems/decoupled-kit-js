// @ts-check
/**
 * Generates options for docusaurus-plugin-typedoc
 * given a package name and position for the sidebar.
 * @param {string} packageName
 * @param {number} position
 * @returns TypeDocOptions
 */
const generateTypedocOptions = (packageName, position) => {
  const options = {
    entryPoints: [`../packages/${packageName}`],
    tsconfig: `../packages/${packageName}/tsconfig.json`,
    out: `Packages/${packageName}`,
    entryPointStrategy: "expand",
    exclude: ["main.ts", "**/node_modules/**"],
    sidebar: {
      categoryLabel: `${packageName}`,
      position: position,
    },
  };

  /** @type {import('typedoc').Options} */
  return options;
};

module.exports = generateTypedocOptions;

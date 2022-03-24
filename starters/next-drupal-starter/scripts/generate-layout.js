const fs = require("fs");
const { DrupalState } = require("@pantheon-systems/drupal-kit");

/**
 * Fetch menu_items--main from Drupal instance and write the data
 * to a local file. This allows us to presist the menuData for the whole site at build time.
 * @see https://maxkarlsson.dev/blog/layout-in-next-js-from-external-source
 * @see https://github.com/vercel/next.js/discussions/10949#discussioncomment-958694
 */
const getLayoutData = async () => {
  const locales = ["en", "es"];
  const drupalUrl = process.env.BACKEND_URL;

  locales.forEach(async (locale) => {
    const store = new DrupalState({
      apiBase: drupalUrl,
      defaultLocale: locale,
    });

    try {
      console.log(`Fetching ${locale} menuData...`);
      const menuData = await store.getObject({
        objectName: "menu_items--main",
      });

      if (menuData) {
        console.log(`Writing menuData to public/${locale}-menuData.json...`);
        fs.writeFileSync(
          `public/${locale}-menuData.json`,
          JSON.stringify(menuData, null, 2)
        );
      }
    } catch (error) {
      throw new Error(
        "There was a problem fetching menu data from Drupal: ",
        error
      );
    }
  });
};

module.exports = getLayoutData;

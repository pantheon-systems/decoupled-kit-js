const fs = require("fs");
const { DrupalState } = require("@pantheon-systems/drupal-kit");
const getLocales = require("./get-locales");
/**
 * Fetch menu_items--main from Drupal instance and write the data
 * to a local file. This allows us to presist the menuData for the whole site at build time.
 * @see https://maxkarlsson.dev/blog/layout-in-next-js-from-external-source
 * @see https://github.com/vercel/next.js/discussions/10949#discussioncomment-958694
 */
const getLayoutData = async () => {
  const locales = await getLocales();

  try {
    locales.forEach(async (locale) => {
      const store = new DrupalState({
        apiBase: process.env.BACKEND_URL,
        defaultLocale: locales.length <= 1 ? "" : locale,
      });
      let menuData;
      console.log(`Fetching ${locale} menuData...`);
      try {
        menuData = await store.getObject({
          objectName: "menu_items--main",
        });
      } catch (error) {
        console.error("Unable to fetch menu data: ", error.message);
      }

      if (menuData) {
        console.log(`Writing menuData to public/${locale}-menuData.json...`);
        fs.writeFileSync(
          `public/${locale}-menuData.json`,
          JSON.stringify(menuData, null, 2)
        );
      }
    });
  } catch (error) {
    console.error("There was an error fetching menu data: ", error.message);
  }
};

module.exports = getLayoutData;

import { globalDrupalStateAuthStores } from "../../lib/drupalStateContext";

const preview = async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.slug) {
    return res.redirect("/500", 401);
  }

  // returns the store that matches the locale found in the requested url
  // or the only store if using a monolingual backend
  const [store] = globalDrupalStateAuthStores.filter(({ defaultLocale }) => {
    const regex = new RegExp(`/${defaultLocale}/`);
    return defaultLocale ? regex.test(req.url) : true;
  });

  // get the object name from the slug
  const regex = new RegExp(
    `^(?:/${store.defaultLocale}/|/)(?<objectName>.*)/.*$`
  );
  const matches = req.query.slug.match(regex);

  const objectName = matches.groups.objectName.replace(/s$/, ""); // remove plural

  // verify the content exists
  let content;
  try {
    content = await store.getObjectByPath({
      objectName: `node--${objectName}`,
      path: req.query.slug,
    });
  } catch (error) {
    return res.redirect("/500", 400);
  }

  // If the content doesn't exist prevent preview mode from being enabled
  if (!content) {
    return res.redirect("/500", 404);
  }

  // Enable Preview Mode by setting a cookie
  if (req.query.resourceVersionId) {
    res.setPreviewData({
      resourceVersionId: req.query.resourceVersionId,
      previewLang: store.defaultLocale || "en",
    });
  } else if (req.query.key) {
    res.setPreviewData({
      key: req.query.key,
      previewLang: store.defaultLocale || "en",
    });
  } else {
    res.setPreviewData({});
  }

  // Redirect to the path from the fetched content
  res.redirect(content.path.alias);
};

export default preview;

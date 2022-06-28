import { globalDrupalStateAuthStores } from "../../lib/drupalStateContext";

const preview = async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.slug) {
    return res.redirect("/500");
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
  let objectName = matches.groups.objectName.replace(/s$/, ""); // remove plural
  // SERIOUS ASSUMPTIONS BEGIN HERE:
  // objectName will match `en` if previewing a page like about-umami
  // so the getObjectByPath and the redirect will fail.
  // This is a temporary workaround:
  objectName = objectName === store.defaultLocale ? "page" : objectName;

  // verify the content exists
  let content;
  try {
    content = await store.getObjectByPath({
      objectName: `node--${objectName}`,
      path: req.query.slug,
    });
  } catch (error) {
    return res.redirect("/500");
  }

  // If the content doesn't exist prevent preview mode from being enabled
  if (!content) {
    return res.redirect("/500");
  }

  // Enable Preview Mode by setting a cookie
  if (req.query.resourceVersionId) {
    res.setPreviewData({
      key: req.query.key,
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
  res.redirect(
    objectName === "page"
      ? `/${content.path.langcode}/pages/${content.path.alias}`
      : content.path.alias
  );
};

export default preview;

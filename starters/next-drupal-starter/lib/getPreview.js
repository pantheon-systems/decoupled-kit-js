import {
  globalDrupalStateAuthStores,
  getCurrentLocaleStore,
} from "./drupalStateContext";
import { fetchJsonapiEndpoint } from "@pantheon-systems/drupal-kit";
/**
 *
 * @param {import('next').GetServerSidePropsContext |
 * import('next').GetStaticPropsContext} previewData Nextjs context
 * @param {string} node The node to be previewed example 'node--article'
 */
export async function getPreview(context, node) {
  // preview language may not match the current locale.
  // Get language from context.previewData
  const { previewLang } = context.previewData;

  // Get the store for the preview language.
  const store = getCurrentLocaleStore(previewLang, globalDrupalStateAuthStores);
  try {
    if (context.previewData.key) {
      process.env.DEBUG_MODE &&
        console.log("Fetching preview data from Drupal and adding to state...");
      // set the auth headers
      let requestInit = {};
      if (process.env.CLIENT_ID && process.env.CLIENT_SECRET) {
        requestInit = {
          headers: {
            Authorization: await store.getAuthHeader(),
          },
        };
      }

      // get params from store
      const params = store.params.getQueryString()
        ? `?${store.params.getQueryString()}`
        : "";
      const fetchedPreviewData = await fetchJsonapiEndpoint(
        `${store.apiRoot}decoupled-preview/${context.previewData.key}${params}`,
        requestInit
      );

      if (fetchedPreviewData.errors) {
        throw fetchedPreviewData?.errors.forEach(({ detail }) => detail);
      }
      const uuid = fetchedPreviewData.data.id;

      // set the preview data in the store
      store.setState({ [`${node}Resources`]: { [uuid]: fetchedPreviewData } });
    }
  } catch (error) {
    throw error;
  }
  // if a revision, pass resourceVersion parameter.
  if (context?.previewData?.resourceVersionId) {
    process.env.DEBUG_MODE &&
      console.log(
        `Adding recource version ID param ${
        context?.previewData?.resourceVersionId}...`
      );

    store.params.addCustomParam({
      resourceVersion: `id:${context.previewData.resourceVersionId}`,
    });
  }
}

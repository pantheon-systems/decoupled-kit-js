import {
  globalDrupalStateAuthStores,
  getCurrentLocaleStore,
} from "./drupalStateContext";
import { fetchJsonapiEndpoint } from "@pantheon-systems/drupal-kit";
/**
 *
 * @param {import('next').GetServerSidePropsContext |
 * import('next').GetStaticPropsContext} previewData - Nextjs context
 * @param {string} node - The node to be previewed example 'node--article'
 * @param {string | undefined} params - JSON:API params to include on the fetched Drupal JSON:API endpoint
 * @see https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/fetching-resources-get for more information on constructing valid JSON:API querystring
 * @returns {Promise<string>} params - The JSON:API params to include on the fetched Drupal JSON:API endpoint in case of a revision
 */
export async function getPreview(context, node, params) {
  // preview language may not match the current locale.
  // Get language from context.previewData
  const { previewLang } = context.previewData;

  // Get the store for the preview language.
  const store = getCurrentLocaleStore(previewLang, globalDrupalStateAuthStores);
  try {
    if (context.previewData) {
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

      // if a revision, pass resourceVersion parameter.
      if (context?.previewData?.resourceVersionId) {
        process.env.DEBUG_MODE &&
          console.log(
            `Adding resource version ID param ${context?.previewData?.resourceVersionId}...`
          );
        const leadingChar = params ? "&" : "";
        params += `${leadingChar}resourceVersion=id:${context.previewData.resourceVersionId}`;
      }

      const fetchedPreviewData = await fetchJsonapiEndpoint(
        `${store.apiRoot}decoupled-preview/${context.previewData.key}${
          params ? `?${params}` : ""
        }`,
        requestInit
      );

      if (fetchedPreviewData.errors) {
        throw fetchedPreviewData?.errors.forEach(({ detail }) => detail);
      }
      const uuid = fetchedPreviewData.data.id;

      // set the preview data in the store
      store.setState({ [`${node}Resources`]: { [uuid]: fetchedPreviewData } });
    }
    return params;
  } catch (error) {
    throw error;
  }
}

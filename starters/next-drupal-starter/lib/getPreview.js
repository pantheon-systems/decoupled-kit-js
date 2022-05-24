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
  const store = getCurrentLocaleStore(
    context.locale,
    globalDrupalStateAuthStores
  );
  let requestInit = {};
  if (process.env.CLIENT_ID && process.env.CLIENT_SECRET) {
    requestInit = {
      headers: {
        Authorization: await store.getAuthHeader(),
      },
    };
  }
  const fetchedPreviewData = await fetchJsonapiEndpoint(
    `${store.apiRoot}decoupled-preview/${context.previewData.key}?include=${store.params.getQueryObject().include}`,
    requestInit
  );
  if (fetchedPreviewData.errors) {
    throw fetchedPreviewData.errors[0].detail;
  }
  const uuid = fetchedPreviewData.data.id;

  store.setState({ [`${node}Resources`]: { [uuid]: fetchedPreviewData } });
  // if a revision, pass resourceVersion parameter.
  if (context?.previewData?.resourceVersionId) {
    store.params.addCustomParam({
      resourceVersion: `id:${context?.previewData?.resourceVersionId}`,
    });
  }
}

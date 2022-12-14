import { globalDrupalStateStores, getCurrentLocaleStore } from './stores';
import { fetchJsonapiEndpoint } from '@pantheon-systems/drupal-kit';
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
	const store = getCurrentLocaleStore(previewLang, globalDrupalStateStores);
	try {
		if (context.previewData) {
			process.env.DEBUG_MODE &&
				console.log('Fetching preview data from Drupal and adding to state...');
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
						`Adding resource version ID param ${context.previewData.resourceVersionId}...`,
					);
				if (params === undefined) {
					params = '';
				}
				const leadingChar = params ? '&' : '';
				params += `${leadingChar}resourceVersion=id:${context.previewData.resourceVersionId}`;
			}

			// Only fetch preview data if it is not a revision
			else {
				const fetchedPreviewData = await fetchJsonapiEndpoint(
					`${store.apiRoot}decoupled-preview/${context.previewData.key}${
						params ? `?${params}` : ''
					}`,
					requestInit,
				);
				if (!fetchedPreviewData?.data?.id) {
					throw new Error(
						'Unable to fetch preview data. Previewing drafts is currently not supported. As an alternative, either preview while editing, or preview a saved revision.',
					);
				}

				if (fetchedPreviewData.errors) {
					throw new Error(
						fetchedPreviewData?.errors.map(({ detail }) => detail).join('\n'),
					);
				}

				const resourceKey = params
					? `${fetchedPreviewData.data.id}-${params}`
					: fetchedPreviewData.data.id;

				// set the preview data in the store
				store.setState({
					[`${node}Resources`]: { [resourceKey]: fetchedPreviewData },
				});
			}
		}
		return params;
	} catch (error) {
		process.env.DEBUG_MODE &&
			console.error('Error verifying preview content in getPreview: ', error);

		const [statusCode] = error.message.match(/([0-5]{3})$/gm) || [null];

		if (statusCode === '403') {
			return {
				error: true,
				redirect: `/preview-error?error=${encodeURIComponent(
					'Could not verify preview content',
				)}&message=${encodeURIComponent(
					'You are not authorized to view this content, check your credentials.',
				)}`,
			};
		}

		if (statusCode === '404') {
			return {
				error: true,
				redirect: `/preview-error?error=${encodeURIComponent(
					'Could not verify preview content',
				)}&message=${encodeURIComponent('Check your preview URL')}`,
			};
		}

		return {
			error: true,
			redirect: `/preview-error?error=${encodeURIComponent(
				'Could not verify preview content',
			)}&message=${encodeURIComponent(error.message || 'Unexpected error')}`,
		};
	}
}

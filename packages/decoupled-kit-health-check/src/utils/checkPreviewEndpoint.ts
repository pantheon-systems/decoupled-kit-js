/**
 *
 * @param cmsEndpoint - the cmsEndpoint
 * @param access_token - the oauth access token required to fetch private data from the cmsEndpoint
 * @returns an object with a boolean indicating if the preview was valid. If there was an error, a cause will be included with extra information.
 */
export const checkDrupalPreviewEndpoint = async ({
	cmsEndpoint,
	access_token,
}: {
	cmsEndpoint: URL;
	access_token: string;
}) => {
	try {
		cmsEndpoint.pathname = '/node/1/preview';

		const res = await fetch(cmsEndpoint, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});
		if (res.ok) {
			return { preview: true };
		}
	} catch (error) {
		if (error instanceof Error) {
			if (
				// @ts-expect-error - cannot easily check for instanceof SystemError
				error?.cause?.code === 'ENOTFOUND' &&
				// @ts-expect-error - cannot easily check for instanceof SystemError
				typeof error?.cause?.hostname === 'string'
			) {
				return {
					preview: false,
					// @ts-expect-error - cannot easily check for instanceof SystemError
					cause: `Attempted to preview "${String(error?.cause?.hostname)}".
|____ Ensure there is a preview site with that hostname configured. at 🔗 https://${
						cmsEndpoint.host
					}/admin/structure/dp-preview-site`,
				};
			}
			return { preview: false, cause: error?.message };
		}
	}
	return { preview: false };
};

/**
 *
 * @param cmsEndpoint - the cmsEndpoint
 * @param access_token - the oauth access token required to fetch private data from the cmsEndpoint
 * @returns an object with a boolean indicating if the preview was valid. If there was an error, a cause will be included with extra information.
 */
export const checkWPPreviewEndpoint = async ({
	cmsEndpoint,
	credentials,
}: {
	cmsEndpoint: URL;
	credentials: string;
}) => {
	try {
		const query = /* graphql */ `query PostPreviewQuery {
			post(id: 1, idType: DATABASE_ID, asPreview: true) {
				title
				date
				featuredImage {
					node {
						altText
						sourceUrl
					}
				}
				content
			}
		}`;
		cmsEndpoint.searchParams.set('query', query);
		const res = await fetch(cmsEndpoint, {
			headers: {
				Authorization: `Basic ${credentials}`,
			},
		});
		const payload = (await res.json()) as {
			errors?: unknown[];
			data?: { post: unknown };
		};
		if (payload?.data?.post) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
};

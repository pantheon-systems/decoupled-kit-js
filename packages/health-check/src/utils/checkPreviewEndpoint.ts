/**
 *
 * @param cmsEndpoint - the cmsEndpoint
 * @param access_token - the oauth access token required to fetch private data from the cmsEndpoint
 * @returns an object with a boolean indicating if the preview was valid. If there was an error, a cause will be included with extra information.
 */
export const checkPreviewEndpoint = async ({
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
				error?.cause?.code === 'ENOTFOUND' &&
				typeof error?.cause?.hostname === 'string'
			) {
				return {
					preview: false,
					cause: `Attempted to preview "${String(error?.cause?.hostname)}".
|____💡 Ensure there is a preview site with that hostname configured.`,
				};
			}
			return { preview: false, cause: error?.message };
		}
	}
	return { preview: false };
};

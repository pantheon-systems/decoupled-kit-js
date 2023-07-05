import { log } from './logger';
/**
 * Checks for CLIENT_ID and CLIENT_SECRET on process.env, then tries to fetch the access_token
 * from the cmsEndpoint.
 * @param env - process.env
 * @param cmsEndpoint - the cmsEndpoint
 * @returns the access_token if authorized, else an empty string.
 */
export const checkAuthentication = async ({
	env,
	cmsEndpoint,
}: {
	env: typeof process.env;
	cmsEndpoint: URL;
}) => {
	const clientID = env['CLIENT_ID'];
	if (!clientID) {
		log.warn('CLIENT_ID is required but not set.');
		log.suggest(
			`Get the CLIENT_ID here:\n🔗 ${cmsEndpoint.host}/admin/config/services/consumer`,
		);
	}
	const clientSecret = env['CLIENT_SECRET'];
	if (!clientSecret) {
		log.warn('CLIENT_SECRET is required but not set.');
		log.suggest(
			`Set a new CLIENT_SECRET here by clicking edit:\n🔗 https://${cmsEndpoint.host}/admin/config/services/consumer`,
		);
	}
	try {
		const tokenRequestBody = {
			grant_type: 'client_credentials',
			client_id: clientID,
			client_secret: clientSecret,
		};

		cmsEndpoint.pathname = '/oauth/token';
		Object.entries(tokenRequestBody).forEach(([key, value]) => {
			value && cmsEndpoint.searchParams.set(key, value);
		});
		const res = await fetch(cmsEndpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: cmsEndpoint.searchParams,
		});
		const { access_token } = (await res.json()) as { access_token?: string };
		if (access_token) {
			return {
				access_token,
			};
		} else {
			throw 'Unauthorized';
		}
	} catch (error) {
		return { access_token: '' };
	}
};

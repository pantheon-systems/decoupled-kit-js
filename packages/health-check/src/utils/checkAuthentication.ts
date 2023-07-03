import { CMSEndpointObject } from '../types';

export const checkAuthentication = async (
	env: typeof process.env,
	endpoints: CMSEndpointObject<'isValid'>[],
) => {
	const results = [];

	const clientID = env['CLIENT_ID'];
	const clientSecret = env['CLIENT_SECRET'];
	for await (const { endpoint, envVar } of endpoints) {
		try {
			const tokenRequestBody = {
				grant_type: 'client_credentials',
				client_id: clientID,
				client_secret: clientSecret,
			};

			const url = new URL(endpoint);
			url.pathname = '/oauth/token';
			Object.entries(tokenRequestBody).forEach(([key, value]) => {
				value && url.searchParams.set(key, value);
			});
			const res = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: url.searchParams,
			});
			const { access_token } = (await res.json()) as { access_token?: string };
			results.push({
				endpoint,
				envVar,
				auth: access_token ? true : false,
			});
		} catch (error) {
			results.push({ endpoint, envVar, auth: false });
		}
	}

	return results;
};

import { log } from './logger';
/**
 * Checks for CLIENT_ID and CLIENT_SECRET on process.env, then tries to fetch the access_token
 * from the cmsEndpoint.
 * @param env - process.env
 * @param cmsEndpoint - the cmsEndpoint
 * @returns the access_token if authorized, else an empty string.
 */
export const checkDrupalAuthentication = async ({
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
			`Get the CLIENT_ID here: 🔗 https://${cmsEndpoint.host}/admin/config/services/consumer`,
		);
	}
	const clientSecret = env['CLIENT_SECRET'];
	if (!clientSecret) {
		log.warn('CLIENT_SECRET is required but not set.');
		log.suggest(
			`Set a new CLIENT_SECRET here by clicking edit: 🔗 https://${cmsEndpoint.host}/admin/config/services/consumer`,
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

/**
 * Checks for WP_APPLICATION_USERNAME and WP_APPLICATION_PASSWORD on
 * process.env, and attempts to fetch a private post to determine if
 * credentials are correct.
 * @param env - process.env
 * @param cmsEndpoint - the cmsEndpoint
 * @returns true if the credentials can fetch authorized content, else false.
 */
export const checkWPAuthentication = async ({
	env,
	cmsEndpoint,
}: {
	env: typeof process.env;
	cmsEndpoint: URL;
}) => {
	const wpUsername = env['WP_APPLICATION_USERNAME'];
	if (!wpUsername) {
		log.warn('WP_APPLICATION_USERNAME is required but not set.');
		log.suggest(
			`Get the WP_APPLICATION_USERNAME here: 🔗 https://${cmsEndpoint.host}/wp/wp-admin/users.php`,
		);
	}
	const wpSecret = env['WP_APPLICATION_PASSWORD'];
	if (!wpSecret) {
		log.warn('WP_APPLICATION_PASSWORD is required but not set.');
		log.suggest(
			`Set a new WP_APPLICATION_PASSWORD here by clicking edit: 🔗 https://${cmsEndpoint.host}/wp/wp-admin/users.php`,
		);
	}
	try {
		const credentials = `${wpUsername}:${wpSecret}`;
		const encodedCredentials = Buffer.from(credentials, 'binary').toString(
			'base64',
		);
		const query = /* graphql */ `query LatestPostsQuery {
			posts(where: { status: PRIVATE }) {
				edges {
					node {
						id
					}
				}
			}
		}`;
		cmsEndpoint.searchParams.set('query', query);
		const res = await fetch(cmsEndpoint, {
			headers: { Authorization: `Basic ${encodedCredentials}` },
		});
		const payload = (await res.json()) as {
			data: { posts: { edges: unknown[] } };
		};
		if (payload.data.posts.edges.length > 0) {
			return { credentials: encodedCredentials };
		} else {
			return { credentials: '' };
		}
	} catch (error) {
		return { credentials: '' };
	}
};

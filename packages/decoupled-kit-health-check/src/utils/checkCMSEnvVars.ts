type CMS_ENV_VARS = 'BACKEND_URL' | 'PANTHEON_CMS_ENDPOINT';

/**
 * Check that at least one of the required env vars is set
 * @param env - process.env
 * @returns an object with a boolean if at least one of the required backendVars is set, and the endpoints that are set
 */
export const checkCMSEnvVars = ({
	env,
	keys,
}: {
	env: typeof process.env;
	keys: string[];
}) => {
	const backendVars: {
		[key in CMS_ENV_VARS]?: string;
	} = {};
	Object.entries(env)
		.filter(([key]) => {
			if (keys.includes(key)) {
				return true;
			}
			return false;
		})
		.forEach(([key, value]) => {
			Object.assign(backendVars, { [key]: value });
		});

	return {
		isSet: Object.keys(backendVars).length > 0,
		endpoints: backendVars,
	};
};

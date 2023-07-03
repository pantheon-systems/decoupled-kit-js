import { CMS_ENV_VARS } from '../constants';

export const checkCMSEnvVars = (env: typeof process.env) => {
	const backendVars = Object.entries(env)
		.filter(([key]) => {
			if (Object.keys(CMS_ENV_VARS).includes(key)) {
				return true;
			}
			return false;
		})
		.map(([key, value]) => ({ [key]: value })) as {
		[key in keyof typeof CMS_ENV_VARS]?: string;
	}[];

	return {
		isSet: backendVars.length > 0,
		endpoints: backendVars,
	};
};

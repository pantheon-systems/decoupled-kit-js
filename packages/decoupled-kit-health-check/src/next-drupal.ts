import dotenv from 'dotenv';
import {
	BackendNotSetError,
	DecoupledMenuError,
	DecoupledRouterError,
	InvalidCMSEndpointError,
} from './errors';
import { checkDrupalAuthentication } from './utils/checkAuthentication';
import { checkCMSEndpoint } from './utils/checkCMSEndpoint';
import { checkCMSEnvVars } from './utils/checkCMSEnvVars';
import { checkDecoupledRouter } from './utils/checkDecoupledRouter';
import { checkLanguageSettings } from './utils/checkLanguageSettings';
import { checkMenuItemEndpoint } from './utils/checkMenuItemEndpoint';
import { checkDrupalPreviewEndpoint } from './utils/checkPreviewEndpoint';
import { checkPreviewSecret } from './utils/checkPreviewSecret';
import { log } from './utils/logger';
import { resolveDotenvFile } from './utils/resolveDotenvFile';

export const nextDrupalHealthCheck = async () => {
	// resolve .env if it exists or not NODE_ENV=production
	if (process.env.NODE_ENV !== 'production') {
		dotenv.config({
			path: resolveDotenvFile(),
		});
	} else {
		console.log('Production environment detected, skipping .env* resolution.');
	}

	console.log('Checking for PANTHEON_CMS_ENDPOINT or BACKEND_URL...');
	const cmsEnvVars = checkCMSEnvVars({
		env: process.env,
		keys: ['BACKEND_URL', 'PANTHEON_CMS_ENDPOINT'],
	});

	if (!cmsEnvVars.isSet) {
		throw new BackendNotSetError();
	} else {
		const setEndpoints = Object.keys(cmsEnvVars.endpoints);
		log.success(
			`${setEndpoints.join(' and ')} ${
				setEndpoints.length > 1 ? 'are' : 'is'
			} set!`,
		);
		if (Object.keys(cmsEnvVars.endpoints).length > 1) {
			log.warn(
				`Both PANTHEON_CMS_ENDPOINT and BACKEND_URL are set.\n|____Using BACKEND_URL for remaining checks.`,
			);
		}
	}

	// Use BACKEND_URL only if both are set.
	const [[envVar, endpoint]] =
		Object.keys(cmsEnvVars.endpoints).length > 1
			? Object.entries(cmsEnvVars.endpoints).filter(
					([key]) => key === 'BACKEND_URL',
			  )
			: Object.entries(cmsEnvVars.endpoints);
	const getCmsEndpoint = () =>
		/^https:\/\//.test(endpoint)
			? new URL(endpoint)
			: new URL(`https://${endpoint}`);

	console.log('Validating CMS endpoint...');
	const isValidEndpoint = await checkCMSEndpoint({
		cmsEndpoint: getCmsEndpoint(),
		type: 'rest',
	});
	if (!isValidEndpoint) {
		throw new InvalidCMSEndpointError({
			endpoint: getCmsEndpoint().host,
			endpointType: envVar,
		});
	} else {
		log.success(`${envVar} is valid!`);
	}

	// determines which article to attempt to fetch with
	// the decoupledRouter and decoupledMenu checks
	const hasUmami = await checkLanguageSettings(getCmsEndpoint());
	console.log('Validating Decoupled Router endpoint...');
	const decoupledRouterIsValid = await checkDecoupledRouter({
		cmsEndpoint: getCmsEndpoint(),
		hasUmami,
	});
	if (!decoupledRouterIsValid) {
		throw new DecoupledRouterError({
			endpoint: getCmsEndpoint().host,
			endpointType: envVar,
		});
	} else {
		log.success('Decoupled Router is valid!');
	}

	console.log('Validating Menu Item endpoint...');
	const menuItemEndpointIsValid = await checkMenuItemEndpoint({
		cmsEndpoint: getCmsEndpoint(),
		type: 'rest',
	});
	if (!menuItemEndpointIsValid) {
		throw new DecoupledMenuError({
			endpoint: getCmsEndpoint().host,
			endpointType: envVar,
		});
	} else {
		log.success('Menu Items endpoint is valid!');
	}

	console.log('Validating authentication...');
	const { access_token } = await checkDrupalAuthentication({
		env: process.env,
		cmsEndpoint: getCmsEndpoint(),
	});
	if (!access_token) {
		log.warn('Auth not valid.');
		log.suggest('Ensure the CLIENT_ID and CLIENT_SECRET are correct.');
		console.log(
			'⏭  Skipping preview endpoint validation -- authorization required.',
		);
	} else {
		log.success('Auth is valid!');
		console.log('Checking for PREVIEW_SECRET...');
		const previewSecretIsSet = checkPreviewSecret(process.env);
		if (!previewSecretIsSet) {
			log.warn('PREVIEW_SECRET env var is not set.');
			log.suggest(
				`To set a new secret, go to 🔗 https://${
					getCmsEndpoint().host
				}/admin/structure/dp-preview-site and edit the preview site you want to use.`,
			);
		} else {
			log.success('PREVIEW_SECRET is set.');
		}
		console.log('Validating preview endpoint...');
		const previewCheck = await checkDrupalPreviewEndpoint({
			cmsEndpoint: getCmsEndpoint(),
			access_token,
		});
		if (!previewCheck.preview) {
			previewCheck.cause
				? log.warn(previewCheck.cause)
				: log.warn('Could not fetch preview site.');
		} else {
			log.success('Preview is valid!');
		}
	}

	console.log('🚀 Ready to build!');
};

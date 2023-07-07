#!/usr/bin/env node
import dotenv from 'dotenv';
import {
	BackendNotSetError,
	DecoupledMenuError,
	DecoupledRouterError,
	InvalidCMSEndpointError,
} from './errors';
import { checkAuthentication } from './utils/checkAuthentication';
import { checkCMSEndpoint } from './utils/checkCMSEndpoint';
import { checkCMSEnvVars } from './utils/checkCMSEnvVars';
import { checkDecoupledRouter } from './utils/checkDecoupledRouter';
import { checkLanguageSettings } from './utils/checkLanguageSettings';
import { checkMenuItemEndpoint } from './utils/checkMenuItemEndpoint';
import { checkPreviewEndpoint } from './utils/checkPreviewEndpoint';
import { log } from './utils/logger';
import { resolveDotenvFile } from './utils/resolveDotenvFile';

const main = async () => {
	// resolve .env if it exists or not NODE_ENV=production
	if (process.env.NODE_ENV !== 'production') {
		dotenv.config({
			path: resolveDotenvFile(),
		});
	} else {
		console.log('Production environment detected, skipping .env* resolution.');
	}

	console.log('⏳ Checking for PANTHEON_CMS_ENDPOINT or BACKEND_URL...');
	const cmsEnvVars = checkCMSEnvVars(process.env);

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
	const cmsEndpoint = new URL(endpoint);

	console.log('⏳ Validating CMS endpoint...');
	const isValidEndpoint = await checkCMSEndpoint(cmsEndpoint);
	if (!isValidEndpoint) {
		throw new InvalidCMSEndpointError(envVar);
	} else {
		log.success(`${envVar} is valid!`);
	}

	// determines which article to attempt to fetch with
	// the decoupledRouter and decoupledMenu checks
	const hasUmami = await checkLanguageSettings(cmsEndpoint);
	console.log('⏳ Validating Decoupled Router endpoint...');
	const decoupledRouterIsValid = await checkDecoupledRouter({
		cmsEndpoint,
		hasUmami,
	});
	if (!decoupledRouterIsValid) {
		throw new DecoupledRouterError(envVar);
	} else {
		log.success('Decoupled Router is valid!');
	}

	console.log('⏳ Validating Menu Item endpoint...');
	const menuItemEndpointIsValid = await checkMenuItemEndpoint(cmsEndpoint);
	if (!menuItemEndpointIsValid) {
		throw new DecoupledMenuError(envVar);
	} else {
		log.success('Menu Items endpoint is valid!');
	}

	console.log('⏳ Validating authentication...');
	const { access_token } = await checkAuthentication({
		env: process.env,
		cmsEndpoint,
	});
	if (!access_token) {
		log.warn('Auth not valid.');
		log.suggest('Ensure the CLIENT_ID and CLIENT_SECRET are correct.');
	} else {
		log.success('Auth is valid!');
	}

	if (!access_token) {
		console.log(
			'⏭  Skipping preview endpoint validation -- authorization required.',
		);
	} else {
		console.log('⏳ Validating preview endpoint...');
		const previewCheck = await checkPreviewEndpoint({
			cmsEndpoint,
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
try {
	await main();
} catch (error) {
	if (error instanceof Error) {
		console.log(error.message);
	}
	process.exit(1);
}

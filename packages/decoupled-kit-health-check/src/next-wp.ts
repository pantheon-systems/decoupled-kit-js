import dotenv from 'dotenv';
import {
	BackendNotSetError,
	DecoupledMenuError,
	InvalidCMSEndpointError,
} from './errors';
import { checkWPAuthentication } from './utils/checkAuthentication';
import { checkCMSEndpoint } from './utils/checkCMSEndpoint';
import { checkCMSEnvVars } from './utils/checkCMSEnvVars';
import { checkMenuItemEndpoint } from './utils/checkMenuItemEndpoint';
import { checkWPPreviewEndpoint } from './utils/checkPreviewEndpoint';
import { checkPreviewSecret } from './utils/checkPreviewSecret';
import { log } from './utils/logger';
import { resolveDotenvFile } from './utils/resolveDotenvFile';

export const nextWPHealthCheck = async () => {
	// resolve .env if it exists or not NODE_ENV=production
	if (process.env.NODE_ENV !== 'production') {
		dotenv.config({
			path: resolveDotenvFile(),
		});
	} else {
		console.log('Production environment detected, skipping .env* resolution.');
	}

	console.log('Checking for PANTHEON_CMS_ENDPOINT or WPGRAPHQL_URL...');
	const cmsEnvVars = checkCMSEnvVars({
		env: process.env,
		keys: ['WPGRAPHQL_URL', 'PANTHEON_CMS_ENDPOINT'],
	});

	if (!cmsEnvVars.isSet) {
		throw new BackendNotSetError('WPGRAPHQL_URL');
	} else {
		const setEndpoints = Object.keys(cmsEnvVars.endpoints);
		log.success(
			`${setEndpoints.join(' and ')} ${
				setEndpoints.length > 1 ? 'are' : 'is'
			} set!`,
		);
		if (Object.keys(cmsEnvVars.endpoints).length > 1) {
			log.warn('Both PANTHEON_CMS_ENDPOINT and WPGRAPHQL_URL are set');
			log.suggest('Using WPGRAPHQL_URL for remaining checks.');
		}
	}

	// Use WPGRAPHQL_URL only if both are set.
	const [[envVar, endpoint]] =
		Object.keys(cmsEnvVars.endpoints).length > 1
			? Object.entries(cmsEnvVars.endpoints).filter(
					([key]) => key === 'WPGRAPHQL_URL',
			  )
			: Object.entries(cmsEnvVars.endpoints);
	const getCmsEndpoint = () => {
		let url;
		url = /^https:\/\//.test(endpoint) ? endpoint : `https://${endpoint}`;
		// ensure the url ends with /wp/graphql
		url = /\/wp\/graphql$/.test(url) ? url : `${url}/wp/graphql`;
		return new URL(url);
	};
	console.log('Validating CMS endpoint...');
	const isValidEndpoint = await checkCMSEndpoint({
		cmsEndpoint: getCmsEndpoint(),
		type: 'graphql',
	});
	if (!isValidEndpoint) {
		throw new InvalidCMSEndpointError({
			endpoint: getCmsEndpoint().host,
			endpointType: envVar,
		});
	} else {
		log.success(`${envVar} is valid!`);
	}

	console.log('Validating Example Menu query...');
	const menuItemEndpointIsValid = await checkMenuItemEndpoint({
		cmsEndpoint: getCmsEndpoint(),
		type: 'graphql',
	});
	if (!menuItemEndpointIsValid) {
		throw new DecoupledMenuError({
			endpoint: getCmsEndpoint().host,
			endpointType: envVar,
		});
	} else {
		log.success('Example Menu query is valid!');
	}

	console.log('Validating authentication...');
	const { credentials } = await checkWPAuthentication({
		env: process.env,
		cmsEndpoint: getCmsEndpoint(),
	});
	if (!credentials) {
		log.warn('Auth not valid.');
		log.suggest(
			'Ensure the WP_APPLICATION_USERNAME and WP_APPLICATION_PASSWORD are correct.',
		);
		console.log(
			'⏭  Skipping preview endpoint validation -- authorization required.',
		);
	} else {
		log.success('Auth is valid!');
		const previewSecretIsSet = checkPreviewSecret(process.env);
		if (!previewSecretIsSet) {
			log.warn('PREVIEW_SECRET env var is not set.');
			log.suggest(
				`To set a new secret, go to 🔗 https://${
					getCmsEndpoint().host
				}/wp/wp-admin/options-general.php?page=preview_sites and edit the preview site you want to use.`,
			);
		} else {
			log.success('PREVIEW_SECRET is set.');
		}
		console.log('Validating preview endpoint...');
		const previewCheck = await checkWPPreviewEndpoint({
			cmsEndpoint: getCmsEndpoint(),
			credentials,
		});
		if (!previewCheck) {
			log.warn('Could not fetch preview site.');
		} else {
			log.success('Preview data can be fetched!');
		}
	}

	console.log('🚀 Ready to build!');
};

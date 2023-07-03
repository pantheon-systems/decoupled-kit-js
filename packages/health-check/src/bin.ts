#!/usr/bin/env tsx
import dotenv from 'dotenv';
import {
	BackendNotSetError,
	DecoupledRouterError,
	InvalidCMSEndpointError,
} from './errors';
import { checkAuthentication } from './utils/checkAuthentication';
import { checkCMSEndpoints } from './utils/checkCMSEndpoints';
import { checkCMSEnvVars } from './utils/checkCMSEnvVars';
import { checkDecoupledRouter } from './utils/checkDecoupledRouter';
import { checkLanguageSettings } from './utils/checkLanguageSettings';
import { checkMenuItemEndpoints } from './utils/checkMenuItemEndpoint';
import { resolveDotenvFile } from './utils/dotenvUtils';

const logSuccess = (message: string) => console.log(`|__✅ ${message}`);
const logWarn = (message: string) => console.log(`|__⛔️ ${message}`);

const main = async () => {
	dotenv.config({
		path: resolveDotenvFile(),
	});

	console.log('⏳ Checking for a CMS endpoint(s)...');
	const cmsEnvVars = checkCMSEnvVars(process.env);

	if (!cmsEnvVars.isSet) {
		throw new BackendNotSetError();
	} else {
		const setEndpoints = cmsEnvVars.endpoints.map((obj) => Object.keys(obj));
		logSuccess(
			`${setEndpoints.join(' and ')} ${
				setEndpoints.length > 1 ? 'are' : 'is'
			} set!`,
		);
	}

	const CMSEndpoints = await checkCMSEndpoints(cmsEnvVars.endpoints);
	console.log('⏳ Validating CMS endpoint...');
	const invalidEndpoints: string[] = [];
	CMSEndpoints.forEach(({ isValid, envVar }) => {
		if (!isValid) {
			invalidEndpoints.push(envVar);
		} else {
			logSuccess(`${envVar} is valid!`);
		}
	});

	if (invalidEndpoints.length > 0) {
		throw new InvalidCMSEndpointError(invalidEndpoints.join(' and '));
	}

	// determines which article to attempt to fetch with
	// the decoupledRouter and decoupledMenu checks
	const cmsEnvVarsLangCheck = await checkLanguageSettings(CMSEndpoints);

	// TODO:
	console.log('⏳ Validating Decoupled Router endpoint...');
	const decoupledRouterCheck = await checkDecoupledRouter(cmsEnvVarsLangCheck);
	decoupledRouterCheck.forEach(({ isValid, envVar }) => {
		if (!isValid) {
			invalidEndpoints.push(envVar);
		} else {
			logSuccess(`${envVar} Decoupled Router is valid!`);
		}
	});
	if (invalidEndpoints.length > 0) {
		throw new DecoupledRouterError(invalidEndpoints.join(' and '));
	}
	// TODO:
	console.log('⏳ Validating Menu Item endpoint...');
	const menuItemEndpointCheck = await checkMenuItemEndpoints(
		cmsEnvVarsLangCheck,
	);
	menuItemEndpointCheck.forEach(({ isValid, envVar }) => {
		if (!isValid) {
			invalidEndpoints.push(envVar);
		} else {
			logSuccess(`${envVar} Menu Items endpoint is valid!`);
		}
	});
	// TODO:
	console.log('⏳ (optional) Validating authentication...');
	const authCheck = await checkAuthentication(process.env, CMSEndpoints);
	const unauthorizedEndpoints: string[] = [];
	authCheck.forEach(({ envVar, auth }) => {
		if (!auth) {
			unauthorizedEndpoints.push(envVar);
		} else {
			logSuccess(`${envVar} auth is valid!`);
		}
	});
	if (unauthorizedEndpoints.length > 0) {
		unauthorizedEndpoints.forEach((v) => {
			logWarn(`Auth not valid for ${v}`);
		});
	}
	// TODO:
	console.log('⏳ Validating preview endpoint...');
	console.log('🚀 Ready to launch!');
};

try {
	await main();
} catch (error) {
	if (error instanceof Error) {
		console.log(error.message);
	}
	process.exit(1);
}

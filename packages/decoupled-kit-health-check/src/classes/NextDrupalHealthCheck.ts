import dotenv from 'dotenv';
import { logger } from '../utils/logger';
import { resolveDotenvFile } from '../utils/resolveDotenvFile';
import {
	BackendNotSetError,
	DecoupledMenuError,
	DecoupledRouterError,
	InvalidCMSEndpointError,
} from './errors';
import { DrupalHealthCheck } from './HealthCheckBase';

export class NextDrupalHealthCheck extends DrupalHealthCheck {
	endpoint: string;
	envVar: string;
	clientID: string | undefined;
	#clientSecret: string | undefined;
	#previewSecret: string | undefined;
	log = logger;
	hasUmami = false;
	#access_token: string | undefined = undefined;
	/**
	 * Resolves .env file if it exists and check for
	 * required environment variables, and sets the endpoint
	 * @param env - process.env
	 */
	constructor({ env }: { env: typeof process.env }) {
		super();
		this.clientID = env['CLIENT_ID'];
		this.#clientSecret = env['CLIENT_SECRET'];
		this.#previewSecret = env['PREVIEW_SECRET'];

		console.log('Checking for PANTHEON_CMS_ENDPOINT or BACKEND_URL...');
		if (process.env.NODE_ENV !== 'production') {
			dotenv.config({
				path: resolveDotenvFile(),
			});
		} else {
			console.log(
				'Production environment detected, skipping .env* resolution.',
			);
		}
		const keys = ['BACKEND_URL', 'PANTHEON_CMS_ENDPOINT'];
		const backendVars: {
			[key in 'BACKEND_URL' | 'PANTHEON_CMS_ENDPOINT']?: string;
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

		const isVarSet = Object.keys(backendVars).length > 0;
		const areMultipleVarsSet = Object.keys(backendVars).length > 1;

		if (!isVarSet) {
			throw new BackendNotSetError('BACKEND_URL');
		} else {
			const setEndpoints = Object.keys(backendVars);
			this.log.success(
				`${setEndpoints.join(' and ')} ${
					areMultipleVarsSet ? 'are' : 'is'
				} set!`,
			);
			if (areMultipleVarsSet) {
				this.log.warn(
					`Both PANTHEON_CMS_ENDPOINT and BACKEND_URL are set.\n|____Using BACKEND_URL for remaining checks.`,
				);
			}
		}

		const [[envVar, endpoint]] = areMultipleVarsSet
			? Object.entries(backendVars).filter(([key]) => key === 'BACKEND_URL')
			: Object.entries(backendVars);
		this.endpoint = /^https:\/\//.test(endpoint)
			? endpoint
			: `https://${endpoint}`;
		this.envVar = envVar;
	}
	getURL() {
		return new URL(this.endpoint);
	}
	async checkFor200(url: URL) {
		try {
			const res = await fetch(url);
			if (res.status === 200) {
				return true;
			} else {
				return false;
			}
		} catch (error) {
			return false;
		}
	}
	async checkForUmami() {
		const cmsEndpoint = this.getURL();
		cmsEndpoint.pathname =
			'/jsonapi/configurable_language/configurable_language';
		this.hasUmami = await this.checkFor200(cmsEndpoint);
	}
	async validateEndpoint() {
		console.log('Validating CMS endpoint...');
		const endpointIsValid = await this.checkFor200(this.getURL());
		if (endpointIsValid) {
			this.log.success(`${this.envVar} is valid!`);
			return this;
		}
		throw new InvalidCMSEndpointError({
			endpointType: this.envVar,
			endpoint: this.getURL().host,
		});
	}
	async validateMenu() {
		console.log('Validating Menu Item endpoint...');
		const cmsEndpoint = this.getURL();
		cmsEndpoint.pathname = '/jsonapi/menu_items/footer';
		const menuIsValid = await this.checkFor200(cmsEndpoint);
		if (menuIsValid) {
			this.log.success('Menu Items endpoint is valid!');
			return this;
		}
		throw new DecoupledMenuError({
			endpointType: this.envVar,
			endpoint: this.getURL().host,
		});
	}
	async validateRouter() {
		await this.checkForUmami();
		const cmsEndpoint = this.getURL();
		cmsEndpoint.pathname = '/router/translate-path';
		cmsEndpoint.searchParams.set('format', '_json');
		this.hasUmami
			? cmsEndpoint.searchParams.set(
					'path',
					'articles/lets-hear-it-for-carrots',
			  )
			: cmsEndpoint.searchParams.set('path', 'articles/example-article');

		const isDecoupledRouterValid = await this.checkFor200(cmsEndpoint);
		if (isDecoupledRouterValid) {
			this.log.success('Decoupled Router is valid!');
			return this;
		}
		throw new DecoupledRouterError({
			endpoint: this.getURL().host,
			endpointType: this.envVar,
		});
	}

	async validateAuth() {
		console.log('Validating authentication...');
		const cmsEndpoint = this.getURL();
		if (!this.clientID) {
			this.log.warn('CLIENT_ID is required for preview but is not set.');
			this.log.suggest(
				`Get the CLIENT_ID here: 🔗 https://${cmsEndpoint.host}/admin/config/services/consumer`,
			);
		}
		if (!this.#clientSecret) {
			this.log.warn('CLIENT_SECRET is required for preview but is not set.');
			this.log.suggest(
				`Set a new CLIENT_SECRET here by clicking edit: 🔗 https://${cmsEndpoint.host}/admin/config/services/consumer`,
			);
		}
		try {
			const tokenRequestBody = {
				grant_type: 'client_credentials',
				client_id: this.clientID,
				client_secret: this.#clientSecret,
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
			const { access_token } = (await res.json()) as {
				access_token?: string;
			};
			if (access_token) {
				this.#access_token = access_token;
				this.log.success('Auth is valid!');
			} else {
				this.#access_token = '';
			}
		} catch (error) {
			void error;
		}
		this.log.warn('Auth not valid.');
		this.log.suggest('Ensure the CLIENT_ID and CLIENT_SECRET are correct.');

		return this;
	}
	async validatePreview() {
		if (!this.#access_token) {
			console.log(
				'⏭  Skipping preview endpoint validation -- authorization required.',
			);
			return this;
		}
		console.log('Checking for PREVIEW_SECRET...');
		if (!this.#previewSecret) {
			this.log.warn('PREVIEW_SECRET env var is not set.');
			this.log.suggest(
				`To set a new secret, go to 🔗 https://${
					this.getURL().host
				}/admin/structure/dp-preview-site and edit the preview site you want to use.`,
			);
		} else {
			this.log.success('PREVIEW_SECRET is set.');
		}

		const cmsEndpoint = this.getURL();
		try {
			cmsEndpoint.pathname = '/node/1/preview';

			const res = await fetch(cmsEndpoint, {
				headers: {
					Authorization: `Bearer ${this.#access_token}`,
				},
			});
			if (res.ok) {
				this.log.success('Preview is valid!');
			}
		} catch (error) {
			if (error instanceof Error) {
				if (
					// @ts-expect-error - cannot easily check for instanceof SystemError
					error?.cause?.code === 'ENOTFOUND' &&
					// @ts-expect-error - cannot easily check for instanceof SystemError
					typeof error?.cause?.hostname === 'string'
				) {
					this.log.warn(`Attempted to preview "${String(
						// @ts-expect-error - cannot easily check for instanceof SystemError
						error?.cause?.hostname,
					)}".
						|____ Ensure there is a preview site with that hostname configured. at 🔗 https://${
							cmsEndpoint.host
						}/admin/structure/dp-preview-site`);
				}
			}
		}
		this.log.warn('Could not fetch preview site.');
		return this;
	}
}

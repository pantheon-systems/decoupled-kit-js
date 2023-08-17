import dotenv from 'dotenv';
import { logger } from '../utils/logger';
import { resolveDotenvFile } from '../utils/resolveDotenvFile';
import {
	BackendNotSetError,
	DecoupledMenuError,
	InvalidCMSEndpointError,
	WPGatsbyPluginError,
} from './errors';
import { WordPressHealthCheck } from './HealthCheckBase';

export class GatsbyWordPressHealthCheck extends WordPressHealthCheck {
	endpoint: string;
	envVar: string;
	appUsername: string | undefined;
	#appPassword: string | undefined;
	log = logger;
	/**
	 * Resolves .env file if it exists and check for
	 * required environment variables, and sets the endpoint
	 * @param env - process.env
	 */
	constructor({ env }: { env: typeof process.env }) {
		super();
		if (process.env.NODE_ENV !== 'production') {
			dotenv.config({
				path: resolveDotenvFile(),
			});
		} else {
			console.log(
				'Production environment detected, skipping .env* resolution.',
			);
		}
		this.appUsername = env['WP_APPLICATION_USERNAME'];
		this.#appPassword = env['WP_APPLICATION_PASSWORD'];

		console.log('Checking for PANTHEON_CMS_ENDPOINT or WPGRAPHQL_URL...');
		const keys = ['WPGRAPHQL_URL', 'PANTHEON_CMS_ENDPOINT'];
		const backendVars: {
			[key in 'WPGRAPHQL_URL' | 'PANTHEON_CMS_ENDPOINT']?: string;
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
			throw new BackendNotSetError({ envVar: 'WPGRAPHQL_URL' });
		} else {
			const setEndpoints = Object.keys(backendVars);
			this.log.success(
				`${setEndpoints.join(' and ')} ${
					areMultipleVarsSet ? 'are' : 'is'
				} set!`,
			);
			if (areMultipleVarsSet) {
				this.log.warn(
					`Both PANTHEON_CMS_ENDPOINT and WPGRAPHQL_URL are set.\n|____Using WPGRAPHQL_URL for remaining checks.`,
				);
			}
		}

		const [[envVar, endpoint]] = areMultipleVarsSet
			? Object.entries(backendVars).filter(([key]) => key === 'WPGRAPHQL_URL')
			: Object.entries(backendVars);

		const url = /^https:\/\//.test(endpoint) ? endpoint : `https://${endpoint}`;

		this.endpoint = url;
		this.envVar = envVar;
	}
	getURL() {
		const url = new URL(this.endpoint);
		url.pathname = '/wp/graphql';
		return url;
	}
	async checkFor200(url: URL) {
		try {
			const res = await fetch(url);
			const payload = (await res.json()) as {
				errors?: unknown[];
				data?: unknown;
			};
			if (payload.errors) {
				return false;
			} else if (payload.data) {
				return true;
			}
		} catch (error) {
			void error;
		}
		return false;
	}
	async validateEndpoint() {
		console.log('Validating CMS endpoint...');
		const cmsEndpoint = this.getURL();
		cmsEndpoint.searchParams.set('query', '{__typename}');
		const endpointIsValid = await this.checkFor200(cmsEndpoint);
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
		const footerMenuQuery = /* graphql */ `query FooterMenuQuery {
			menu(idType: NAME, id: "Example Menu") {
				menuItems {
					edges {
						node {
							id
							path
							label
						}
					}
				}
			}
		}`;
		cmsEndpoint.searchParams.set('query', footerMenuQuery);
		const menuIsValid = await this.checkFor200(cmsEndpoint);
		if (menuIsValid) {
			this.log.success('Menu Items endpoint is valid!');
			return this;
		}
		throw new DecoupledMenuError({
			endpointType: this.envVar,
			endpoint: cmsEndpoint.host,
		});
	}
	async validateAuth() {
		console.log('Validating authentication...');
		const cmsEndpoint = this.getURL();

		if (!this.appUsername || !this.#appPassword) {
			this.log.warn('Auth not valid.');
			if (!this.appUsername) {
				this.log.warn('WP_APPLICATION_USERNAME is not set.');
				this.log.suggest(
					`Get the WP_APPLICATION_USERNAME here: 🔗 https://${cmsEndpoint.host}/wp/wp-admin/users.php`,
				);
			}
			if (!this.#appPassword) {
				this.log.warn('WP_APPLICATION_PASSWORD is not set.');
				this.log.suggest(
					`Set a new WP_APPLICATION_PASSWORD here by clicking edit: 🔗 https://${cmsEndpoint.host}/wp/wp-admin/users.php`,
				);
			}
			return this;
		}
		try {
			const credentials = `${String(this.appUsername)}:${String(
				this.#appPassword,
			)}`;
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
				this.log.success('Auth is valid!');
				return this;
			}
		} catch (error) {
			void error;
		}
		this.log.warn('Auth not valid.');
		this.log.suggest(
			'Ensure the WP_APPLICATION_USERNAME and WP_APPLICATION_PASSWORD are correct.',
		);
		return this;
	}
	async validateWPGatsbyPlugin() {
		const cmsEndpoint = this.getURL();
		const query = /* graphql */ `query checkWpGatsby {
			isWpGatsby
		}`;
		cmsEndpoint.searchParams.set('query', query);
		const res = await fetch(cmsEndpoint);
		const payload = (await res.json()) as {
			data?: { isWpGatsby: boolean };
			errors?: unknown[];
		};
		if (payload.errors) {
			throw new WPGatsbyPluginError({
				envVar: this.envVar,
				endpoint: cmsEndpoint.host,
			});
		} else if (payload?.data?.isWpGatsby) {
			this.log.success('WP Gatsby plugin is active!');
			return this;
		}
		return this;
	}
	// eslint-disable-next-line @typescript-eslint/require-await
	async validatePreview() {
		return this;
	}
}

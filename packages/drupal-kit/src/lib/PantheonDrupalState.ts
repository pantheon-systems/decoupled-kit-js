import { ServerResponse } from 'node:http';
import { DrupalState } from '@gdwc/drupal-state';
import { defaultFetch } from './defaultFetch';

import type { TJsonApiBody } from 'jsona/lib/JsonaTypes';
import type {
	DrupalStateConfig,
	GetObjectByPathParams,
	GetObjectParams,
} from '@gdwc/drupal-state/src/types/types';

/**
 * Configures DrupalState to integrate
 * with a Decoupled Drupal CMS on Pantheon
 * @see {@link DrupalStateConfig} for the full list parameters
 */
class PantheonDrupalState extends DrupalState {
	constructor({
		apiBase,
		apiPrefix = 'jsonapi',
		defaultLocale,
		clientId,
		clientSecret,
		fetchAdapter = defaultFetch,
		debug = false,
		onError,
	}: DrupalStateConfig) {
		super({
			apiBase,
			apiPrefix,
			defaultLocale,
			clientId,
			clientSecret,
			fetchAdapter,
			debug,
			onError,
		});
	}

	/**
	 * If a query is provided, fetches data using apollo-link-json-api, otherwise uses out fetch method.
	 * @param endpoint the assembled JSON:API endpoint
	 * @param res response object
	 * @returns data fetched from JSON:API endpoint
	 */
	async fetchData(
		endpoint: string,
		res: ServerResponse | boolean = false,
		anon = false,
	): Promise<TJsonApiBody | void> {
		let requestInit = {};
		let authHeader = '';
		if (this.auth && !anon) {
			const headers = new Headers();
			authHeader = await this.getAuthHeader();
			headers.append('Authorization', authHeader);
			requestInit = {
				headers: headers,
			};
		}

		return (await this.fetchJsonapiEndpoint(
			endpoint,
			requestInit,
			this.onError,
			res,
		)) as TJsonApiBody;
	}

	async getObject<ReturnedData>(
		args: GetObjectParams,
	): Promise<ReturnedData | void> {
		return (await super.getObject({ ...args })) as ReturnedData | void;
	}
	async getObjectByPath<ReturnedData>(
		args: GetObjectByPathParams,
	): Promise<ReturnedData | void> {
		return (await super.getObjectByPath({ ...args })) as ReturnedData | void;
	}
}

export { PantheonDrupalState as DrupalState };

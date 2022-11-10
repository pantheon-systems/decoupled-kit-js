import { ServerResponse } from 'http';
import { DrupalState } from '@gdwc/drupal-state';
import defaultFetch from './defaultFetch';

import type { TJsonApiBody } from 'jsona/lib/JsonaTypes';
import type { DrupalStateConfig } from '@gdwc/drupal-state/src/types/types';

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
	): Promise<TJsonApiBody> {
		let requestInit = {};
		let authHeader = '';
		if (this.auth) {
			// TODO - remove eslint disable. Not sure why eslint can't pick up on
			// this.getAuthHeader() from the parent class
			const headers = new Headers();
			// eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
}

export default PantheonDrupalState;

import { logger } from '../utils/logger';
import {
	DecoupledMenuError,
	DecoupledRouterError,
	InvalidCMSEndpointError,
} from './errors';

export abstract class HealthCheckBase {
	abstract endpoint: string;
	abstract envVar: string;
	abstract log: typeof logger;
	/**
	 * Validate the set endpoint
	 */
	abstract validateEndpoint(): Promise<this | InvalidCMSEndpointError>;
	/**
	 * Uses `this.endpoint` to return a new URL
	 */
	abstract getURL(): URL;
	/**
	 * Check the url for a 200 response
	 * @param url - a URL with defined pathname and/or search params
	 */
	abstract checkFor200(url: URL): Promise<boolean>;
	/**
	 * Validate the menu query or endpoint
	 */
	abstract validateMenu(): Promise<this | DecoupledMenuError>;
	/**
	 * Validate the provided credentials
	 */
	abstract validateAuth(): Promise<this>;
	/**
	 * Validate the preview secret is set and preview is configured at the endpoint by fetching preview content.
	 * Should be skipped if credentials are not validated in `this.validateAuth()`.
	 */
	abstract validatePreview(): Promise<this>;
}
export abstract class DrupalHealthCheck extends HealthCheckBase {
	/**
	 * True if the Drupal instance has umami demo data
	 */
	abstract hasUmami: boolean;
	/**
	 * The clientID of the Drupal OAuth client
	 */
	abstract clientID: string | undefined;
	/**
	 * Sets `this.hasUmami` by checking the language settings endpoint
	 */
	abstract checkForUmami(): Promise<void>;
	/**
	 * Validates that the Decoupled Router module is enabled and working
	 */
	abstract validateRouter(): Promise<this | DecoupledRouterError>;
}
export abstract class WordPressHealthCheck extends HealthCheckBase {
	abstract appUsername: string | undefined;
}

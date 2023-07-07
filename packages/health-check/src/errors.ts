class HealthCheckError extends Error {
	constructor(message: string) {
		super(`|__❌ ${message}`);
		// no need to show the stack for these errors
		this.stack = undefined;
	}
}

export class BackendNotSetError extends HealthCheckError {
	constructor(
		message = `No backend set: 
	The PANTHEON_CMS_ENDPOINT or BACKEND_URL environment variable must be set to fetch data.
{insert helpful message}`,
	) {
		super(message);
	}
}

export class InvalidCMSEndpointError extends HealthCheckError {
	constructor(
		endpointType: string,
		message = `${endpointType} could not be fetched from.
{insert helpful message}`,
	) {
		super(message);
	}
}

export class DecoupledRouterError extends HealthCheckError {
	constructor(
		endpointType: string,
		message = `Decoupled Router not detected for ${endpointType}.
		{insert helpful message}`,
	) {
		super(message);
	}
}

export class DecoupledMenuError extends HealthCheckError {
	constructor(
		endpointType: string,
		message = `Decoupled Menu Endpoint not valid for ${endpointType}.
		{insert helpful message}`,
	) {
		super(message);
	}
}

export class AuthorizationError extends HealthCheckError {
	constructor(
		varName: string,
		message = `${varName} is required but not set.
		Set ${varName} as an environment variable`,
	) {
		super(message);
	}
}

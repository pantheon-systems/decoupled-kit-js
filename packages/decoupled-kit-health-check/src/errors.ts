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
		{ endpointType, endpoint }: { endpointType: string; endpoint: string },
		message = `${endpointType} could not be fetched from.
Check that ${endpoint} is valid and provides a 200 response`,
	) {
		super(message);
	}
}

export class DecoupledRouterError extends HealthCheckError {
	constructor(
		{ endpointType, endpoint }: { endpointType: string; endpoint: string },
		message = `Decoupled Router not detected for ${endpointType}.
Check that ${endpoint} is valid and provides a 200 response.
Also ensure that the Decoupled Router module is enabled.`,
	) {
		super(message);
	}
}

export class DecoupledMenuError extends HealthCheckError {
	constructor(
		{ endpointType, endpoint }: { endpointType: string; endpoint: string },
		message = `Decoupled Menu Endpoint not valid for ${endpointType}.
Check that ${endpoint} is valid and provides a 200 response.
Also ensure that the JSON:API Menu Items module is enabled.`,
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

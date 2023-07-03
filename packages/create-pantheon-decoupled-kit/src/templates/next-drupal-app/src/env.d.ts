export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			locales: string[];
			DEBUG_MODE: boolean;
			backendUrl: string;
		}
	}
}

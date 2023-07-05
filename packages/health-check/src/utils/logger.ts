export const log = {
	success: (message: string) => console.log(`|__✅ ${message}`),
	warn: (message: string) => console.log(`|__⛔️ ${message}`),
	suggest: (message: string) => console.log(`|____💡 ${message}`),
};

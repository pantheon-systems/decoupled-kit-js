export const fetcher = async (endpoint: string | URL, envVar: string) => {
	try {
		const res = await fetch(endpoint);
		await res.json();
		if (res.status === 200) {
			return { isValid: true, envVar };
		} else {
			return { isValid: false, envVar };
		}
	} catch (error) {
		return { isValid: false, envVar };
	}
};

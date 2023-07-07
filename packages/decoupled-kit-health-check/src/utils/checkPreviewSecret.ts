export const checkPreviewSecret = (env: typeof process.env) => {
	const previewSecret = env['PREVIEW_SECRET'];
	if (!previewSecret) {
		return false;
	} else {
		return true;
	}
};

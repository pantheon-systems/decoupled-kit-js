export default function handler(req, res) {
	let redirect = new URL(req.headers.referer).pathname;
	redirect = redirect === '/preview-error' ? '/' : redirect;
	console.log('Clearing preview data...');
	// clear the previewData cookie and redirect back to the page
	res.clearPreviewData();
	res.redirect(redirect);
}

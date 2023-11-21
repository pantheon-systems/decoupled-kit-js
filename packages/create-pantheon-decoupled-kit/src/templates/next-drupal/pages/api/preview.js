import { globalDrupalStateStores } from '../../lib/stores';

const PREVIEW_SECRET_DOES_NOT_MATCH = {
	error: 'Preview secret does not match',
	message:
		'Check that your PREVIEW_SECRET environment variable matches the preview secret generated when creating the preview site in Drupal.',
};
const CONTENT_NOT_FOUND = {
	error: 'Requested preview path does not exist',
	message: 'Make sure the content is published',
};

const preview = async (req, res) => {
	const { secret, slug, objectName, test, locale } = req.query;
	// returns the store that matches the locale found in the accept-language header
	// or the only store if using a monolingual backend
	const [store] = globalDrupalStateStores.filter(({ defaultLocale }) => {
		const regex = new RegExp(`/${defaultLocale}/`);
		const detectedLocale = locale ? `/${locale}/` : decodeURIComponent(req.url);
		return defaultLocale ? regex.test(detectedLocale) : true;
	});

	if (test) {
		// validate the secret
		if (secret !== process.env.PREVIEW_SECRET) {
			return res.status(401).json(PREVIEW_SECRET_DOES_NOT_MATCH);
		}

		// validate the content
		let content;
		try {
			//  Clear access token
			Object.keys(store.token).forEach((v) => (store.token[v] = ''));
			content = await store.getObjectByPath({
				objectName,
				path: slug,
				refresh: true,
			});
		} catch (error) {
			process.env.DEBUG_MODE &&
				console.error(
					'Error verifying preview content in pages/api/preview:\n',
					error,
				);
			return res.status(404).json({
				error: 'Could not verify preview content',
				message: error.message,
			});
		}

		if (!content) {
			return res.status(404).json(CONTENT_NOT_FOUND);
		}
		return res.status(200).json({
			message: `Preview is valid for ${slug}`,
		});
	}
	// Check the secret and next parameters
	// This secret should only be known to this API route and the CMS
	if (secret !== process.env.PREVIEW_SECRET) {
		return res.redirect(
			`/preview-error/?error=${encodeURIComponent(
				PREVIEW_SECRET_DOES_NOT_MATCH.error,
			)}&message=${encodeURIComponent(PREVIEW_SECRET_DOES_NOT_MATCH.message)}`,
		);
	}

	if (!slug) {
		return res.redirect(
			`/preview-error/?error=${encodeURIComponent(
				CONTENT_NOT_FOUND.error,
			)}&message=${encodeURIComponent(CONTENT_NOT_FOUND.message)}`,
		);
	}

	// verify the content exists
	let content;
	try {
		content = await store.getObjectByPath({
			objectName,
			path: slug,
		});
	} catch (error) {
		process.env.DEBUG_MODE &&
			console.error(
				'Error verifying preview content in pages/api/preview: ',
				error,
			);
		return res.redirect(
			`/preview-error/?error=${encodeURIComponent(
				'Could not verify preview content',
			)}&message=${encodeURIComponent(error.message)}`,
		);
	}

	// If the content doesn't exist prevent preview mode from being enabled
	if (!content) {
		return res.redirect(
			`/preview-error/?error=${encodeURIComponent(
				CONTENT_NOT_FOUND.error,
			)}&message=${encodeURIComponent(CONTENT_NOT_FOUND.message)}`,
		);
	}

	// Enable Preview Mode by setting a cookie
	if (req.query.resourceVersionId) {
		res.setPreviewData({
			key: req.query.key,
			resourceVersionId: req.query.resourceVersionId,
			previewLang: store.defaultLocale || 'en',
		});
	} else if (req.query.key) {
		res.setPreviewData({
			key: req.query.key,
			previewLang: store.defaultLocale || 'en',
		});
	} else {
		res.setPreviewData({});
	}

	// Redirect to the path from the fetched content
	res.redirect(`${content.path.alias || slug}?timestamp=${Date.now()}`);
};

export default preview;

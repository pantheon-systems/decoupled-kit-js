import { getPostPreview } from '../../lib/Posts';
import { getPagePreview } from '../../lib/Pages';

const PREVIEW_SECRET_DOES_NOT_MATCH = {
	error: 'Preview secret does not match',
	message:
		'Check that your PREVIEW_SECRET environment variable matches the preview secret generated when creating the preview site in WordPress.',
};
const CONTENT_NOT_FOUND = {
	error: 'Requested preview path does not exist',
	message: 'Make sure the content is published',
};

const preview = async (req, res) => {
	const { secret, uri, id, content_type, test } = req.query;

	if (test) {
		if (secret !== process.env.PREVIEW_SECRET) {
			return res.status(401).json(PREVIEW_SECRET_DOES_NOT_MATCH);
		}

		try {
			if (content_type === 'post') {
				const { post } = await getPostPreview(id);
				if (!post) {
					return res.status(404).json(CONTENT_NOT_FOUND);
				}
			}
			if (content_type === 'page') {
				const { page } = await getPagePreview(id);
				if (!page) {
					return res.status(404).json(CONTENT_NOT_FOUND);
				}
			}
			return res.status(200).json({ message: `Preview successful for ${uri}` });
		} catch (error) {
			return res.status(404).json(CONTENT_NOT_FOUND);
		}
	}

	if (!secret || !uri || !id || !content_type) {
		return res.redirect('/500');
	}

	if (secret !== process.env.PREVIEW_SECRET) {
		return res.redirect('/500');
	}

	if (content_type !== 'post' && content_type !== 'page') {
		return res.redirect('/500');
	}

	if (content_type === 'post') {
		const { post } = await getPostPreview(id);
		if (!post) {
			return res.redirect('/500');
		}

		res.setPreviewData({
			key: id,
		});
	}
	if (content_type === 'page') {
		const { page } = await getPagePreview(id);
		if (!page) {
			return res.redirect('/500');
		}

		res.setPreviewData({
			key: id,
		});
	}

	res.redirect(`/${content_type}s/${uri}?timestamp=${Date.now()}`);
};

export default preview;

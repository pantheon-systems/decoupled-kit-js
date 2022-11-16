import { getPostPreview } from '../../lib/Posts';
import { getPagePreview } from '../../lib/Pages';
import { getAuthCredentials } from '../../lib/WordPressClient';

const preview = async (req, res) => {
	const { secret, uri, id, content_type } = req.query;

	if (!secret || !uri || !id || !content_type) {
		return res.redirect('/500');
	}

	if (secret !== process.env.PREVIEW_SECRET || !uri) {
		return res.redirect('/500');
	}

	if (content_type !== 'posts' && content_type !== 'pages') {
		return res.redirect('/500');
	}

	const credentials = getAuthCredentials();
	if (content_type === 'posts') {
		const post = await getPostPreview(id, credentials);
		if (!post) {
			return res.redirect('/500');
		}

		res.setPreviewData({
			key: id,
		});
	}
	if (content_type === 'pages') {
		const page = await getPagePreview(id, credentials);
		if (!page) {
			return res.redirect('/500');
		}

		res.setPreviewData({
			key: id,
		});
	}

	res.redirect(`/${content_type}/${uri}?timestamp=${Date.now()}`);
};

export default preview;

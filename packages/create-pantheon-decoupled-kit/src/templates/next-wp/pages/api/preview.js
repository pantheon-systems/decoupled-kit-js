import { getPostPreview } from '../../lib/Posts';
import { getPagePreview } from '../../lib/Pages';

const preview = async (req, res) => {
	const { secret, uri, id, content_type } = req.query;

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
		const post = await getPostPreview(id);
		if (!post) {
			return res.redirect('/500');
		}

		res.setPreviewData({
			key: id,
		});
	}
	if (content_type === 'page') {
		const page = await getPagePreview(id);
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

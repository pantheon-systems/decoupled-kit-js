import { getPostPreview } from '../../lib/Posts';
// http://localhost:3000/api/preview?secret=secret&id=7&content_type=post&uri=/example-post-with-image
const getAuthCredentials = () => {
	const credentials = `${process.env.WP_APPLICATION_USERNAME}:${process.env.WP_APPLICATION_PASSWORD}`;
	const encodedCredentials = Buffer.from(credentials, 'binary').toString(
		'base64',
	);
	return encodedCredentials;
};

const preview = async (req, res) => {
	const { secret, uri, id, content_type } = req.query;

	if (!secret || !uri || !id || !content_type) {
		return res.redirect('/500');
	}

	if (secret !== process.env.PREVIEW_SECRET || !uri) {
		return res.redirect('/500');
	}

	const credentials = getAuthCredentials();
	if (content_type === 'post') {
		const post = await getPostPreview(id, credentials);
		if (!post) {
			return res.redirect('/500');
		}

		res.setPreviewData({
			...post,
		});
	}

	res.redirect(`/posts/${uri}?timestamp=${Date.now()}`);
};

export default preview;

const preview = async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // TODO - Fetch the headless CMS to check if the provided `slug` exists
  // getPostBySlug would implement the required fetching logic to the headless CMS
  // const post = await getPostBySlug(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  // if (!post) {
  //   return res.status(401).json({ message: 'Invalid slug' })
  // }

  // Enable Preview Mode by setting a cookie
  if (req.query.resourceVersionId) {
    res.setPreviewData({ resourceVersionId: req.query.resourceVersionId });
  }
  else if (req.query.key) {
    res.setPreviewData({ key: req.query.key });
  }
  else {
    res.setPreviewData({});
  }

  // Redirect to the path from the fetched post
  // Long term we shouldn't redirect to req.query.slug as that might lead to
  // open redirect vulnerabilities
  res.redirect(req.query.slug);
}

export default preview;
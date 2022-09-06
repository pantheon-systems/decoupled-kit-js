export default function handler(req, res) {
  const redirect = new URL(req.headers.referer).pathname;
  console.log("Clearing preview data...");
  // clear the previewData cookie and redirect to homepage
  res.clearPreviewData();
  res.redirect(redirect);
}

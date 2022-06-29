export default function handler(req, res) {
  console.log('Clearing preview data...')
  // clear the previewData cookie and redirect to homepage
  res.clearPreviewData();
  res.redirect("/");
}

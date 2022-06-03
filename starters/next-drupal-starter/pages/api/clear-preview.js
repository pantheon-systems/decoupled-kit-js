export default function handler(req, res) {
  // clear the previewData cookie and redirect to homepage
  res.clearPreviewData();
  res.redirect("/");
}

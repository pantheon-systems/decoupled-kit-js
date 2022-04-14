const DRUPAL_URL = process.env.backendUrl;
const IMAGE_URL = process.env.imageUrl || DRUPAL_URL;

module.exports = {
  DRUPAL_URL,
  IMAGE_URL,
};

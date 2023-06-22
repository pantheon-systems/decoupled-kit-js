export const DRUPAL_URL = process.env.backendUrl || 'undefined';
export const IMAGE_URL = process.env.imageUrl || DRUPAL_URL;
export const BUILD_MODE =
	process.env.npm_lifecycle_script?.includes('next build');
export const LOCALES = process.env.locales as unknown as string[];


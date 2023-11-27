import { type TemplateFn } from '@cli/types';
import { catchAll } from '@partials/next-drupal/catchAllView';

const jsx: TemplateFn = () => catchAll(false);

export default jsx;

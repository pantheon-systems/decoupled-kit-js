import { type TemplateFn } from '@cli/types';
import { nextDrupalLayout } from '@partials/next-drupal/layout';

const jsx: TemplateFn = () => nextDrupalLayout(true);

export default jsx;

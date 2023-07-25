import { layoutTemplate } from '@cli/templates/partials/nextjs-shared/layoutT';
import { TemplateFn } from '@cli/types';

const jsx: TemplateFn = () => /* jsx */ `${layoutTemplate(false, 'drupal')}`;

export default jsx;

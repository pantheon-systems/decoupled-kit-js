import { layoutTemplate } from '@cli/templates/partials/nextjs-shared/layoutT';
import { TemplateFn } from '@cli/types';

const jsx: TemplateFn = () => /* jsx */ `${layoutTemplate(true, 'drupal')}`;

export default jsx;

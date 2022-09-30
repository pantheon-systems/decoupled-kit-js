import { Config } from 'tailwindcss';
import {
	colorList,
	fontSizeList,
	gradientList,
	proseOverride,
} from './Constants';

const colorClasses = colorList.map((color) => `.has-${color.name}-color`);

const backgroundColorClasses = colorList.map(
	(color) => `.has-${color.name}-background-color`,
);

const borderColorClasses = colorList.map(
	(color) => `.has-${color.name}-border-color`,
);

const fontSizeClasses = fontSizeList.map(
	(fontSize) => `.has-${fontSize.name}-font-size`,
);

const gradientClasses = gradientList.map(
	(gradient) => `.has-${gradient.name}-gradient-background`,
);

export const mergeToConfig: Config = {
	content: [],
	safelist: [
		'.has-text-color',
		...colorClasses,
		...gradientClasses,
		...borderColorClasses,
		'.has-background',
		...backgroundColorClasses,
		...fontSizeClasses,
		'.wp-block-table',
		'.has-drop-cap',
		'.has-text-align-center',
		'.has-text-align-right',
		'.has-text-align-left',
		'.wp-block-quote',
		'.is-style-plain',
		'.is-style-large',
		'.wp-block-pullquote',
		'.wp-block-image',
		'.wp-block-gallery',
		'.wp-block-audio',
		'.wp-block-cover',
		'.wp-block-media-text',
		'.wp-block-buttons',
		'.wp-block-file',
	],
	...proseOverride,
};

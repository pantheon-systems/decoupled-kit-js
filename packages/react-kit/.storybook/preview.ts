import type { Preview } from '@storybook/react';
import '../src/styles.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		viewport: {
			viewports: { ...INITIAL_VIEWPORTS },
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
} satisfies Preview;

export default preview;

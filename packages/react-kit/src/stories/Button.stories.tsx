import type { Meta, StoryObj } from '@storybook/react';

// @components alias works for build and dev but eslint complains
import { DemoButton } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Button',
	component: DemoButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
} satisfies Meta<typeof DemoButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
	args: {
		children: 'Example text',
	},
};

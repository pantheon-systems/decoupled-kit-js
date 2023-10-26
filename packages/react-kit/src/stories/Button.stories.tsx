import { Button } from '@components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
	title: 'Button/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		children: 'Button',
	},
	argTypes: {
		type: {
			control: {
				type: 'radio',
			},
			options: ['primary', 'secondary'],
		},
		size: {
			defaultValue: 'large',
			control: {
				type: 'radio',
			},
			options: ['small', 'large'],
		},
		className: {
			if: { arg: 'type', neq: 'icon' },
			control: {
				type: 'text',
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'primary',
		children: 'Button Text',
	},
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
	},
};

export const Secondary: Story = {
	args: {
		type: 'secondary',
		children: 'Button Text',
	},
	argTypes: {
		children: {
			control: {
				type: 'text',
			},
		},
	},
};

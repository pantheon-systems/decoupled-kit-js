import { Row } from '@components/Row';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Row',
	component: Row,
	parameters: {
		layout: 'centered',
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['grid', 'flex'],
		},
		className: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Row>;

export default meta;

type Story = StoryObj<typeof meta>;

const TestChildren = ({ items = 16 }: { items?: number }) => {
	const itemArray = Array.from(Array(items).keys()).map((item, i) => (
		<div
			key={item}
			className="rk-mx-auto rk-flex rk-h-12 rk-w-12 rk-justify-center rk-border-2 rk-border-emerald-400 rk-bg-gray-200 rk-p-3 rk-text-neutral-800"
		>
			{i + 1}
		</div>
	));

	return <>{itemArray}</>;
};

export const Grid: Story = {
	args: {
		type: 'grid',
		children: <TestChildren />,
	},
};

export const Flex_Wrap: Story = {
	args: {
		type: 'flex',
		flexOptions: {
			wrap: true,
			direction: 'row',
			shrink: false,
			grow: false,
			reverse: false,
		},
		children: <TestChildren />,
	},
};
export const Flex_Col: Story = {
	args: {
		type: 'flex',
		flexOptions: {
			wrap: true,
			direction: 'col',
			shrink: true,
			grow: false,
			reverse: false,
		},
		children: <TestChildren />,
	},
};

export const Flex_No_Wrap: Story = {
	args: {
		type: 'flex',
		flexOptions: {
			wrap: false,
			direction: 'row',
			shrink: false,
			grow: false,
			reverse: false,
		},
		children: <TestChildren />,
	},
};

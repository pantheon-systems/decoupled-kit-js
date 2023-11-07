import CloseIcon from '@assets/icons/close.svg';
import HamburgerMenu from '@assets/icons/hamburger-menu.svg';
import SearchIcon from '@assets/icons/search.svg';
import { IconButton } from '@components/Button';
import type { Meta, StoryObj } from '@storybook/react';

const Icon = ({
	src,
	alt,
	ariaLabel,
}: { [key in 'src' | 'alt' | 'ariaLabel']?: string }) => {
	return <img src={src} alt={alt} aria-label={ariaLabel} width="16" />;
};

const SearchIconComponent = () => (
	<Icon src={SearchIcon} key="2" alt="Search" ariaLabel="search" />
);
const CloseIconComponent = () => (
	<Icon src={CloseIcon} key="2" alt="Close" ariaLabel="close" />
);
const HMIconComponent = () => (
	<Icon src={HamburgerMenu} key="4" alt="Menu" ariaLabel="open menu" />
);

const meta: Meta<typeof IconButton> = {
	title: 'Button/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			control: {
				type: 'select',
			},
			options: ['Search', 'Close', 'Hamburger_Menu'],
			defaultValue: 'Search',
			mapping: {
				Text: 'Button',
				Search: <SearchIconComponent />,
				Close: <CloseIconComponent />,
				Hamburger_Menu: <HMIconComponent />,
			},
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

export const Search: Story = {
	args: {
		children: <SearchIconComponent />,
	},
};
export const Close: Story = {
	args: {
		children: <CloseIconComponent />,
	},
};
export const Hamburger_Menu: Story = {
	args: {
		children: <HMIconComponent />,
	},
};

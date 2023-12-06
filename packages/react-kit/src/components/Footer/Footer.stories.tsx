import PantheonLogo from '@assets/pantheon-fist-white.svg';
import { Footer as BottomSignature } from '@components/Footer';
import type { Meta, StoryObj } from '@storybook/react';
import { type FooterProps } from './props';

const Footer = ({ Logo, Content }: Pick<FooterProps, 'Logo' | 'Content'>) => {
	return (
		<div>
			<BottomSignature Logo={Logo} Content={Content} />
		</div>
	);
};

const meta: Meta<typeof Footer> = {
	title: 'Footer/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		Logo: { src: PantheonLogo, alt: 'Pantheon Systems', href: '/' },
		Content: {
			title: 'Pantheon Decoupled Kit',
			copy: '© Pantheon 2023',
			builtWith: 'Pantheon.io',
			builtWithLink: 'https://pantheon.io/',
		},
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

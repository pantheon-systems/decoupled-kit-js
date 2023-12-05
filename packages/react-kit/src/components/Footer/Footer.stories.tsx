import PantheonLogo from '@assets/pantheon-fist-blk.svg';
import { Footer as BottomSignature } from '@components/Footer';
import type { Meta, StoryObj } from '@storybook/react';
import { type FooterProps } from './props';

const Footer = ({ Logo, Link }: Pick<FooterProps, 'Logo' | 'Link'>) => {
	return (
		<div>
			<BottomSignature Logo={Logo} Link={Link} />
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
		Link: 'https://pantheon.io/',
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

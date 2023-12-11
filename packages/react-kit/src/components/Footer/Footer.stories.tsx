import PantheonLogo from '@assets/pantheon-fist-white.svg';
import { Footer as BottomSignature } from '@components/Footer';
import type { Meta, StoryObj } from '@storybook/react';
import { type FooterProps } from './props';

const Footer = ({ Logo }: Pick<FooterProps, 'Logo'>) => {
	return (
		<div>
			<BottomSignature Logo={Logo}>
				<FooterContent />
			</BottomSignature>
		</div>
	);
};

const FooterContent = () => {
	return (
		<>
			<div className="rk-text-base rk-font-bold">Pantheon Decoupled Kit</div>

			<div className="rk-pb-8 rk-text-base">© Pantheon 2023</div>

			<div className="rk-pb-16 rk-text-sm">
				Built with{' '}
				<a href="https://pantheon.io/" className={'rk-underline'}>
					Pantheon.io
				</a>
			</div>
		</>
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
	},
	argTypes: {},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

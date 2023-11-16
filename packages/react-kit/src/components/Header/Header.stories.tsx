import PantheonLogo from '@assets/pantheon-fist-blk.svg';
import { Button } from '@components/Button';
import { Header as NavHeader } from '@components/Header';
import { Row } from '@components/Row';
import type { Meta, StoryObj } from '@storybook/react';
import { type NavHeaderProps } from './props';

const Header = ({
	mainNavItems,
	secondaryNavItems,
	Logo,
	linkComponent,
}: Pick<
	NavHeaderProps,
	'mainNavItems' | 'secondaryNavItems' | 'Logo' | 'linkComponent'
> & {
	manyItems: boolean;
}) => {
	return (
		<Row type="flex" className="rk-mx-auto rk-bg-white">
			<NavHeader
				linkComponent={linkComponent}
				overlayStyles="rk-bg-white"
				Logo={Logo}
				mainNavItems={mainNavItems}
				secondaryNavItems={secondaryNavItems}
			/>
		</Row>
	);
};

const MainNavItems = ({ manyItems }: { manyItems?: boolean }) => {
	const navItems = [
		{ linkText: 'Home', href: '/' },
		{ linkText: 'Articles', href: '/articles' },
		{ linkText: 'Pages', href: '/pages' },
	];
	if (manyItems) {
		navItems.push(
			{ linkText: 'About', href: '/about' },
			{ linkText: 'Services', href: '/services' },
			{ linkText: 'Contact', href: '/contact' },
			{ linkText: 'Blog', href: '/blog' },
			{ linkText: 'Portfolio', href: '/portfolio' },
			{ linkText: 'FAQ', href: '/faq' },
			{ linkText: 'Shop', href: '/shop' },
			{ linkText: 'Events', href: '/events' },
			{ linkText: 'Gallery', href: '/gallery' },
			{ linkText: 'Team', href: '/team' },
			{ linkText: 'Testimonials', href: '/testimonials' },
			{ linkText: 'Career', href: '/career' },
			{ linkText: 'Terms of Service', href: '/terms' },
			{ linkText: 'Privacy Policy', href: '/privacy' },
			{ linkText: 'Support', href: '/support' },
			{ linkText: 'Login', href: '/login' },
			{ linkText: 'Register', href: '/register' },
			{ linkText: 'Dashboard', href: '/dashboard' },
			{ linkText: 'Logout', href: '/logout' },
		);
	}

	return navItems;
};

const NoFollowLink = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<a rel="nofollow" className={className} href="javascript:void(0)">
			{children}
		</a>
	);
};
const SecondaryNavItems = () => {
	return (
		<>
			<li
				className="rk-mb-8 rk-mr-auto lg:rk-mb-0 lg:rk-ml-auto lg:rk-mr-0"
				key="docs"
			>
				<Button
					Element={NoFollowLink}
					href="https://decoupledkit.pantheon.io"
					type="secondary"
				>
					Docs
				</Button>
			</li>
			<li className="rk-mr-auto lg:rk-mx-3 lg:rk-mr-0" key="examples">
				<Button Element={NoFollowLink} href="/examples">
					Examples
				</Button>
			</li>
		</>
	);
};

const meta: Meta<typeof Header> = {
	title: 'Header/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		Logo: { src: PantheonLogo, alt: 'Pantheon Systems', href: '/' },
		mainNavItems: MainNavItems({ manyItems: false }),
		secondaryNavItems: <SecondaryNavItems />,
		linkComponent: NoFollowLink,
	},
	argTypes: {
		mainNavItems: {
			control: {
				type: 'radio',
			},
			options: ['Default', 'Many'],
			mapping: {
				Default: MainNavItems({ manyItems: false }),
				Many: MainNavItems({ manyItems: true }),
			},
		},
		secondaryNavItems: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

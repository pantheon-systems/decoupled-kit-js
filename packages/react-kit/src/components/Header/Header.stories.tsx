import PantheonLogo from '@assets/pantheon-fist-blk.svg';
import { Button } from '@components/Button';
import { Header as NavHeader } from '@components/Header';
import { Row } from '@components/Row';
import type { Meta, StoryObj } from '@storybook/react';

const Logo = () => {
	return (
		<>
			<a href="/">
				<img src={PantheonLogo} alt="Pantheon Systems" />
			</a>
		</>
	);
};

const Header = ({
	mainNavItems,
	secondaryNavItems,
	Logo,
}: {
	mainNavItems: React.ReactNode | [string, string][];
	secondaryNavItems: React.ReactNode | [string, string][];
	Logo: React.ElementType;
	manyItems?: boolean;
}) => {
	return (
		<Row type="flex" className="rk-mx-auto rk-bg-white">
			<NavHeader
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
		['Home', '/'],
		['Articles', '/articles'],
		['Pages', '/pages'],
	];
	if (manyItems) {
		navItems.push(
			['About', '/about'],
			['Services', '/services'],
			['Contact', '/contact'],
			['Blog', '/blog'],
			['Portfolio', '/portfolio'],
			['FAQ', '/faq'],
			['Shop', '/shop'],
			['Events', '/events'],
			['Gallery', '/gallery'],
			['Team', '/team'],
			['Testimonials', '/testimonials'],
			['Career', '/career'],
			['Terms of Service', '/terms'],
			['Privacy Policy', '/privacy'],
			['Support', '/support'],
			['Login', '/login'],
			['Register', '/register'],
			['Dashboard', '/dashboard'],
			['Logout', '/logout'],
		);
	}

	return navItems;
};

const SecondaryNavItems = () => {
	return (
		<>
			<li>
				<hr
					className="divide-x rk-my-8 rk-ml-auto rk-flex rk-w-full rk-min-w-full lg:rk-hidden"
					key="hr"
				/>
			</li>
			<li
				className="rk-mb-3 rk-mr-auto lg:rk-mb-0 lg:rk-ml-auto lg:rk-mr-0"
				key="docs"
			>
				<Button
					Element="a"
					href="https://decoupledkit.pantheon.io"
					type="secondary"
				>
					Docs
				</Button>
			</li>
			<li className="rk-mr-auto lg:rk-mx-3 lg:rk-mr-0" key="examples">
				<Button Element="a" href="/examples">
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
		Logo,
		mainNavItems: MainNavItems({ manyItems: false }),
		secondaryNavItems: <SecondaryNavItems />,
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

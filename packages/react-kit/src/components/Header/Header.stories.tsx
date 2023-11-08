import PantheonLogo from '@assets/pantheon-fist-blk.png';
import { Button } from '@components/Button';
import { Header as NavHeader } from '@components/Header';
import { Row } from '@components/Row';
import type { Meta, StoryObj } from '@storybook/react';
import clsx from 'clsx';

const Logo = () => {
	return (
		<>
			<a href="/">
				<img
					src={PantheonLogo}
					width="40"
					height="40"
					alt="Pantheon Systems"
					className="lg:rk-mr-8"
				/>
			</a>
		</>
	);
};

const Header = ({
	mainNavItems,
	secondaryNavItems,
	Logo,
}: {
	mainNavItems: React.ReactNode;
	secondaryNavItems: React.ReactNode;
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
	const Items = navItems.map(([label, href]) => (
		<li
			className="rk-mx-2 rk-mb-8 rk-w-full rk-justify-start rk-text-lg rk-text-black lg:rk-mb-0 lg:rk-w-fit"
			key={label}
		>
			<a
				className={clsx(
					'rk-link-hover rk-w-full rk-text-left',
					'rk-flex rk-w-full rk-min-w-full sm:rk-w-fit',
					href === '/' && 'rk-font-bold',
				)}
				href={href}
			>
				{label}
			</a>
		</li>
	));

	return Items;
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
		mainNavItems: <MainNavItems />,
		secondaryNavItems: <SecondaryNavItems />,
	},
	argTypes: {
		mainNavItems: {
			control: {
				type: 'radio',
			},
			options: ['Default', 'Many'],
			mapping: {
				Default: <MainNavItems />,
				Many: <MainNavItems manyItems />,
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

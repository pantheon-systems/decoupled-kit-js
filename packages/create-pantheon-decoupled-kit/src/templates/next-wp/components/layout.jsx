import {
	Button,
	Footer,
	Header,
	PreviewRibbon,
	Row,
} from '@pantheon-systems/nextjs-kit';
import Link from 'next/link';

export default function Layout({
	children,
	mainNavItems: navItems,
	footerMenu,
	preview,
}) {
	const mainNavItems = navItems?.map(({ path, label }) => ({
		linkText: label,
		href: `/posts${path}`,
	}));
	const secondaryNavItems = (
		<>
			<li className="mb-8 mr-auto lg:mb-0 lg:ml-auto lg:mr-0" key="docs">
				<Button
					Element="a"
					href="https://decoupledkit.pantheon.io"
					type="secondary"
				>
					Docs
				</Button>
			</li>
			<li className="mr-auto lg:mx-3 lg:mr-0" key="examples">
				<Button asChild>
					<Link href="/examples">Examples</Link>
				</Button>
			</li>
		</>
	);

	const footerMenuItems = footerMenu?.map(({ path, label }) => ({
		linkText: label,
		href: path,
		parent: null,
	}));

	return (
		<div className="bg-white min-w-full w-full min-h-screen flex flex-col">
			<Row
				className="flex text-neutral-900 max-w-[1920px] mx-auto mb-auto"
				type="flex"
				flexOptions={{ direction: 'col' }}
			>
				{preview && <PreviewRibbon />}
				<Header
					mainNavItems={mainNavItems}
					secondaryNavItems={secondaryNavItems}
					overlayStyles={'bg-white'}
					className="max-w-[1920px]"
					Logo={{
						src: '/pantheon-fist-blk.svg',
						href: '/',
						alt: 'Pantheon Logo',
					}}
				/>
				<main className="mb-auto">{children}</main>
			</Row>

			<Footer footerMenuItems={footerMenuItems}>
				<span className="my-0 mx-auto">
					© {new Date().getFullYear()} Built with{' '}
					<a
						className="text-white hover:text-blue-100 underline"
						href="https://nextjs.org/"
					>
						Next.js
					</a>{' '}
					and{' '}
					<a
						className="text-blue-500 underline hover:text-blue-100"
						href="https://wordpress.com/"
					>
						WordPress
					</a>
				</span>
			</Footer>
		</div>
	);
}

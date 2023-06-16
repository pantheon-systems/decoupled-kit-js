import '@pantheon-systems/nextjs-kit/style.css';

import { Header } from '@pantheon-systems/nextjs-kit/dist/components/header';

import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const navItems = [
		{ linkText: '🏠 Home', href: '/' },
		{ linkText: '📰 Articles', href: '/articles' },
		{ linkText: '📑 Pages', href: '/pages' },
		{ linkText: '⚛️ Examples', href: '/examples' },
	];
	return (
		<html lang="en">
			<body>
				<Header navItems={navItems} />
				<div>{children}</div>
			</body>
		</html>
	);
}

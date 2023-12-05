import { Header } from '@components/Header';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import clsx from 'clsx';
import { useState } from 'react';

const Logo = () => {
	return <span>ExampleLogo</span>;
};

const NavItems = [
	['Home', '/'],
	['Articles', '/articles'],
	['Pages', '/pages'],
].map(([label, href]) => (
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

const TestHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen((prev) => !prev);
	return (
		<Header
			mobileNavHandler={[isOpen, handleOpen]}
			mainNavItems={NavItems}
			secondaryNavItems={[
				{
					linkText: 'a secondary nav item',
					href: '/secondary-nav-item',
				},
			]}
			Logo={Logo}
			/** https://github.com/focus-trap/focus-trap-react/issues/1002 */
			focusTrapOptions={{
				tabbableOptions: {
					displayCheck: 'none',
				},
			}}
		/>
	);
};
describe('<Header />', () => {
	it('should render Header', () => {
		const { asFragment } = render(<TestHeader />);

		expect(asFragment()).toMatchSnapshot();
	});
	it('should open the nav overlay', async () => {
		window.innerWidth = 640;
		const { asFragment } = render(<TestHeader />);

		const openBtn = await screen.findByTestId('open-nav');
		expect(openBtn).toBeVisible();
		expect(asFragment()).toMatchSnapshot();

		fireEvent.click(openBtn);

		waitFor(() => {
			const closeBtn = screen.findByTestId('close-nav');
			expect(asFragment()).toMatchSnapshot();
			expect(closeBtn).toBeVisible();
		});
	});
	it('the escape key should close the nav', async () => {
		window.innerWidth = 640;
		const { asFragment } = render(<TestHeader />);

		const openBtn = await screen.findByTestId('open-nav');
		expect(openBtn).toBeVisible();
		expect(asFragment()).toMatchSnapshot();

		fireEvent.click(openBtn);

		waitFor(() => {
			const closeBtn = screen.findByTestId('close-nav');
			expect(asFragment()).toMatchSnapshot();
			expect(closeBtn).toBeVisible();
		});
		waitFor(() => {
			fireEvent.keyUp(window, { key: 'Esc', code: 'Escape' });
			expect(asFragment()).toMatchSnapshot();
			expect(openBtn).toBeVisible();
		});
	});
});

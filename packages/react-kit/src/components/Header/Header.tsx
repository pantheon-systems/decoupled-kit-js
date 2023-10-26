import { IconButton } from '@components/Button';
import clsx from 'clsx';
import FocusTrap from 'focus-trap-react';
import React, { useEffect, useState } from 'react';
import { CloseSVG, HamburgerMenuSVG } from './HeaderIcons';
import { NavHeaderProps } from './props';

export const Header = ({
	Logo,
	children,
	overlayStyles,
	navbarStyles,
	focusTrapOptions,
}: NavHeaderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleOpen = () => setIsOpen((prev) => !prev);

	const MAX_MOBILE_NAV_WIDTH = 1023;

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape' || e.key === 'Esc') {
				setIsOpen(false);
			}
		};
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			windowWidth > MAX_MOBILE_NAV_WIDTH && setIsOpen(false);
		};
		setWindowWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [windowWidth]);

	/**
	 * Need to use a ref here so the FocusTrap can work properly.
	 */
	const NavList = React.forwardRef<
		React.ElementRef<'nav'>,
		{ children: React.ReactNode }
	>(({ children }, ref) => {
		return (
			<nav
				ref={ref}
				aria-label="Main"
				className={clsx(navbarStyles, 'rk-z-10 rk-flex rk-flex-row rk-py-4')}
			>
				<h1>
					<Logo />
				</h1>
				<ul
					className={clsx(
						overlayStyles,
						'rk-lg:menu-horizontal rk-w-full rk-items-center',
						isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH
							? ' rk-menu-vertical rk-absolute rk-left-0 rk-top-[72px] rk-z-10 rk-h-[calc(100%_-_72px)] rk-w-full rk-overflow-y-auto rk-overflow-x-hidden rk-px-4 rk-pt-8 sm:rk-px-6 lg:rk-px-12'
							: 'rk-hidden rk-flex-wrap lg:rk-flex',
					)}
				>
					{children}
				</ul>
				{isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH ? (
					<IconButton
						aria-hidden={isOpen && windowWidth >= MAX_MOBILE_NAV_WIDTH}
						onClick={handleOpen}
						className="rk-ml-auto lg:rk-flex"
						data-testid="close-nav"
					>
						<CloseSVG />
					</IconButton>
				) : (
					<IconButton
						aria-hidden={!isOpen && windowWidth >= MAX_MOBILE_NAV_WIDTH}
						onClick={handleOpen}
						className="rk-ml-auto rk-flex lg:rk-hidden"
						data-testid="open-nav"
					>
						<HamburgerMenuSVG />
					</IconButton>
				)}
			</nav>
		);
	});

	NavList.displayName = 'NavList';

	return (
		<>
			{windowWidth > MAX_MOBILE_NAV_WIDTH ? (
				<NavList>{children}</NavList>
			) : (
				<FocusTrap
					active={isOpen}
					paused={!isOpen}
					focusTrapOptions={focusTrapOptions}
				>
					<div>
						<NavList>{children}</NavList>
					</div>
				</FocusTrap>
			)}
		</>
	);
};

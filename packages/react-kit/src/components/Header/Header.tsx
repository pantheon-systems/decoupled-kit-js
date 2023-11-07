import { IconButton } from '@components/Button';
import clsx from 'clsx';
import FocusTrap from 'focus-trap-react';
import React, { useEffect, useState } from 'react';
import { CloseSVG, HamburgerMenuSVG } from './HeaderIcons';
import { NavHeaderProps } from './props';

export const Header = ({
	Logo,
	mainNavItems,
	secondaryNavItems,
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
		Pick<NavHeaderProps, 'mainNavItems' | 'secondaryNavItems'>
	>(({ mainNavItems, secondaryNavItems }, ref) => {
		const NAVLIST_STYLES = {
			nav: clsx('rk-flex rk-flex-row rk-items-center'),
			ul: clsx(
				'lg:rk-menu-horizontal',
				isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH
					? 'rk-menu-vertical rk-w-full'
					: 'rk-hidden rk-flex-wrap lg:rk-flex',
			),
		};

		return (
			<header
				ref={ref}
				className={clsx(
					navbarStyles,
					'rk-z-10 rk-flex rk-flex-row rk-items-center rk-py-4 lg:rk-menu-horizontal lg:rk-w-full',
				)}
			>
				<Logo />
				<div
					className={clsx(
						overlayStyles,
						'rk-w-full lg:rk-menu-horizontal',
						isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH
							? 'rk-menu-vertical rk-absolute rk-bottom-0 rk-left-0 rk-z-10 rk-h-[calc(100%_-_72px)] rk-flex-col rk-overflow-y-auto rk-overflow-x-hidden rk-px-4 rk-pb-4 rk-pt-8 sm:rk-px-6 lg:rk-px-12'
							: 'lg:k-flex rk-hidden rk-flex-wrap',
					)}
				>
					<nav
						className={clsx(NAVLIST_STYLES.nav, 'rk-mr-auto lg:rk-w-2/3')}
						aria-label="Main"
					>
						<ul className={NAVLIST_STYLES.ul}>{mainNavItems}</ul>
					</nav>
					<nav
						className={clsx(
							NAVLIST_STYLES.nav,
							'lg:rk-w-1/3 lg:rk-justify-end',
						)}
						aria-label="Secondary"
					>
						<ul className={NAVLIST_STYLES.ul}>{secondaryNavItems}</ul>
					</nav>
				</div>
				{isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH ? (
					<IconButton
						aria-hidden={isOpen && windowWidth >= MAX_MOBILE_NAV_WIDTH}
						onClick={handleOpen}
						className="rk-ml-auto rk-flex"
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
			</header>
		);
	});

	NavList.displayName = 'NavList';

	return (
		<>
			{windowWidth > MAX_MOBILE_NAV_WIDTH ? (
				<NavList
					mainNavItems={mainNavItems}
					secondaryNavItems={secondaryNavItems}
				/>
			) : (
				<FocusTrap
					active={isOpen}
					paused={!isOpen}
					focusTrapOptions={focusTrapOptions}
				>
					<div>
						<NavList
							mainNavItems={mainNavItems}
							secondaryNavItems={secondaryNavItems}
						/>
					</div>
				</FocusTrap>
			)}
		</>
	);
};

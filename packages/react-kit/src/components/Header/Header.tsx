import { Button, IconButton } from '@components/Button';
import clsx from 'clsx';
import FocusTrap from 'focus-trap-react';
import React, { useEffect, useState } from 'react';
import { CloseSVG, HamburgerMenuSVG } from './HeaderIcons';
import { NavHeaderProps, isNavItemArray } from './props';
/**
 * @see {@link https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/header-header--docs}
 */
export const Header = ({
	Logo,
	mainNavItems,
	secondaryNavItems,
	overlayStyles,
	navbarStyles,
	focusTrapOptions,
	linkComponent,
}: NavHeaderProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState<number>(0);
	const handleOpen = () => setIsOpen((prev) => !prev);

	const MAX_MOBILE_NAV_WIDTH = 1023;
	const LinkComponent = linkComponent ? linkComponent : 'a';

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === 'Escape' || e.key === 'Esc') {
				setIsOpen(false);
			}
		};
		const handleResize = () => {
			setWindowWidth(window?.innerWidth);
			windowWidth > MAX_MOBILE_NAV_WIDTH && setIsOpen(false);
		};
		setWindowWidth(window?.innerWidth);

		window?.addEventListener('resize', handleResize);
		window?.addEventListener('keyup', handleKeyUp);

		return () => {
			window?.removeEventListener('resize', handleResize);
			window?.removeEventListener('keyup', handleKeyUp);
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
			nav: clsx('rk-flex rk-items-center'),
			ul: clsx(
				'lg:rk-menu-horizontal',
				isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH
					? 'rk-menu-vertical rk-w-full'
					: 'rk-hidden rk-flex-wrap lg:rk-flex',
			),
			overlay: clsx(
				'rk-w-full',
				isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH
					? 'rk-absolute rk-bottom-0 rk-left-0 rk-z-10 rk-h-[calc(100%_-_72px)] rk-flex-col rk-overflow-y-auto rk-overflow-x-hidden rk-px-4 rk-pb-4 rk-pt-8 sm:rk-px-6 lg:rk-px-12'
					: 'rk-hidden rk-flex-wrap lg:rk-flex',
			),
		};

		const HeaderLogo = () => {
			if (React.isValidElement(Logo)) {
				return Logo;
			} else if (
				typeof Logo === 'object' &&
				'src' in Logo &&
				'alt' in Logo &&
				'href' in Logo
			) {
				const { src, alt, href } = Logo;
				return (
					<LinkComponent
						href={href}
						className={Logo?.styles || 'rk-h-10 rk-w-10'}
					>
						<img src={src} height="40" alt={alt} />
					</LinkComponent>
				);
			}
			return null;
		};

		const PrimaryNav = () => {
			if (isNavItemArray(mainNavItems)) {
				return mainNavItems?.map(({ linkText, href }) => (
					<li
						className="rk-mb-8 rk-w-full rk-justify-start rk-text-lg rk-text-black lg:rk-mx-4 lg:rk-mb-0 lg:rk-w-fit"
						key={linkText}
					>
						<LinkComponent
							className={clsx(
								'rk-link-hover rk-w-full rk-text-left',
								'rk-flex rk-w-full rk-min-w-full sm:rk-w-fit',
								typeof window !== 'undefined' &&
									window?.location?.pathname === href &&
									'rk-font-bold',
							)}
							href={href}
						>
							{linkText}
						</LinkComponent>
					</li>
				));
			} else {
				return mainNavItems;
			}
		};

		const SecondaryNav = () => {
			if (isNavItemArray(secondaryNavItems)) {
				return secondaryNavItems?.map(({ linkText, href }) => (
					<li
						className="rk-mr-auto first:rk-mb-3 lg:rk-mx-3 lg:rk-mr-0 first:lg:rk-mb-0"
						key={linkText}
					>
						<Button asChild href={href}>
							<LinkComponent>{linkText}</LinkComponent>
						</Button>
					</li>
				));
			} else {
				return secondaryNavItems;
			}
		};

		return (
			<header
				ref={ref}
				className={clsx(
					navbarStyles,
					'rk-z-10 rk-flex rk-w-full rk-items-center rk-py-4',
				)}
			>
				<HeaderLogo />
				<div className={clsx(overlayStyles, NAVLIST_STYLES.overlay)}>
					<nav
						className={clsx(NAVLIST_STYLES.nav, 'rk-mr-auto lg:rk-w-3/4')}
						aria-label="Main"
					>
						<ul className={NAVLIST_STYLES.ul}>
							<PrimaryNav />
						</ul>
					</nav>
					<hr
						className="divide-x rk-mb-8 rk-ml-auto rk-flex rk-w-full rk-min-w-full lg:rk-hidden"
						key="hr"
					/>
					<nav
						className={clsx(
							NAVLIST_STYLES.nav,
							'lg:rk-w-1/4 lg:rk-justify-end',
						)}
						aria-label="Secondary"
					>
						<ul className={NAVLIST_STYLES.ul}>
							<SecondaryNav />
						</ul>
					</nav>
				</div>
				{isOpen && windowWidth <= MAX_MOBILE_NAV_WIDTH ? (
					<IconButton
						aria-hidden={isOpen && windowWidth >= MAX_MOBILE_NAV_WIDTH}
						onClick={handleOpen}
						className="rk-ml-auto"
						data-testid="close-nav"
					>
						<CloseSVG />
					</IconButton>
				) : (
					<IconButton
						aria-hidden={!isOpen && windowWidth >= MAX_MOBILE_NAV_WIDTH}
						onClick={handleOpen}
						className="rk-ml-auto lg:rk-hidden"
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
					<div className="rk-w-full">
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

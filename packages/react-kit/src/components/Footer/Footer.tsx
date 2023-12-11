import clsx from 'clsx';
import React from 'react';
import { FooterProps } from './props';

/**
 * @see {@link https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/footer-footer--docs}
 */
export const Footer = ({ Logo, className, children }: FooterProps) => {
	const FooterLogo = () => {
		if (React.isValidElement(Logo)) {
			return Logo;
		} else if (typeof Logo === 'object' && 'src' in Logo && 'alt' in Logo) {
			const { src, alt } = Logo;
			return (
				<div
					className={Logo?.styles || 'rk-mx-auto rk-block rk-pb-3.5 rk-pt-14'}
				>
					<img src={src} alt={alt} className={'rk-inline rk-h-16 rk-w-16'} />
				</div>
			);
		}
		return null;
	};
	return (
		<footer
			className={clsx(
				className,
				'rk-bg-neutral-800 rk-text-center rk-text-white',
			)}
		>
			<FooterLogo />
			{children}
		</footer>
	);
};

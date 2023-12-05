import React from 'react';
import { FooterProps } from './props';

/**
 * @see {@link https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/footer-footer--docs}
 */
export const Footer = ({ Logo, Link }: FooterProps) => {
	const FooterLogo = () => {
		if (React.isValidElement(Logo)) {
			return Logo;
		} else if (typeof Logo === 'object' && 'src' in Logo && 'alt' in Logo) {
			const { src, alt } = Logo;
			return <img src={src} height="40" alt={alt} className="rk-inline" />;
		}
		return null;
	};
	return (
		<footer className="rk-mt-16 rk-bg-neutral-800 rk-py-4 rk-text-center rk-text-white">
			<div className="rk-mb-0.875 rk-mx-auto rk-mt-2 rk-block">
				<FooterLogo />
			</div>

			<h6 className="rk-mb-0.875 rk-text-lg rk-font-bold">
				Pantheon Decoupled Kit
			</h6>

			<p className="rk-mb-0.875 rk-text-sm">© Pantheon 2013</p>

			<p className="rk-mb-2 rk-text-xs">
				Built with{' '}
				<a href={Link} className={'rk-underline'}>
					Pantheon.io
				</a>
			</p>
		</footer>
	);
};

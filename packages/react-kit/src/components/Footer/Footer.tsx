import clsx from 'clsx';
import React from 'react';
import { FooterProps } from './props';

/**
 * @see {@link https://live-storybook-react-kit.appa.pantheon.site/?path=/docs/footer-footer--docs}
 */
export const Footer = ({ Logo, className, Content }: FooterProps) => {
	const FooterLogo = () => {
		if (React.isValidElement(Logo)) {
			return Logo;
		} else if (typeof Logo === 'object' && 'src' in Logo && 'alt' in Logo) {
			const { src, alt } = Logo;
			return (
				<div
					className={Logo?.styles || 'rk-mx-auto rk-block rk-pb-3.5 rk-pt-12'}
				>
					<img
						src={src}
						height="64"
						width="64"
						alt={alt}
						className={'rk-inline'}
					/>
				</div>
			);
		}
		return null;
	};

	const FooterContent = () => {
		if (React.isValidElement(Content)) {
			return Content;
		} else if (
			typeof Content === 'object' &&
			'title' in Content &&
			'copy' in Content &&
			'builtWith' in Content &&
			'builtWithLink' in Content
		) {
			return (
				<>
					<div className="rk-text-base rk-font-bold">{Content.title}</div>

					<div className="rk-pb-8 rk-text-base">{Content.copy}</div>

					<div className="rk-pb-14 rk-text-sm">
						Built with{' '}
						<a
							href={Content.builtWithLink ? Content.builtWithLink : ''}
							className={'rk-underline'}
						>
							{Content.builtWith}
						</a>
					</div>
				</>
			);
		}

		return null;
	};
	return (
		<footer
			className={clsx(
				className,
				'rk-bg-neutral-800 rk-pt-3.5 rk-text-center rk-text-white',
			)}
		>
			<FooterLogo />
			<FooterContent />
		</footer>
	);
};

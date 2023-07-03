import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const i18n = {
	defaultLocale: 'en',
} as const;

const getLocale = (
	request: NextRequest,
	locales: string[],
): string | undefined => {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	// Use negotiator and intl-localematcher to get best locale
	let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
	// @ts-ignore locales are readonly
	return matchLocale(languages, locales, i18n.defaultLocale);
}

export const middleware = async (request: NextRequest) => {
	const pathname = request.nextUrl.pathname;
	const locales = process.env.locales;

	if (
		[
			'/favicon.ico',
			'/collapse.svg',
			'/pantheon.png',
			// Your other files in `public`
		].includes(pathname)
	)
		return;

	// Check if there is any supported locale in the pathname
	const pathnameIsMissingLocale = locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request, locales);

		// e.g. incoming request is /products
		// The new URL is now /en-US/products
		return NextResponse.redirect(
			new URL(`/${locale}/${pathname}`, request.url),
		);
	}
};

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

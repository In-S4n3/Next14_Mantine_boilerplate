import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/i18n.config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);
  return locale;
}

export function setThemeMiddleware(req: NextRequest) {
  const requestCookies = req.cookies;
  const requestHeaders = new Headers(req.headers);
  const hasUrlTheme = req.url.includes('theme=');
  const pathname = req.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  let theme = (
    requestCookies.get('theme')?.value || requestHeaders.get('host')
  )?.replace('www.', '');

  if (hasUrlTheme) {
    const query = req.url.split('?')[1];
    theme = query.split('=')[1];
  }

  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        req.url,
      ),
    );
  }

  const response = NextResponse.next();
  if (theme) response.cookies.set('theme', theme);

  return response;
}

export default setThemeMiddleware;

export const config = {
  matcher: [
    // All URLs not starting with /de or /it that are not a file.
    '/((?!(?:de|en|fr|es|pt|it|nl|api|_next/static|_next/image)(?:/|$))(?!.*\\.[^.]*$).*/?)',
    '/',
  ],
};

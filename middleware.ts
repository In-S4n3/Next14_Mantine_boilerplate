import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function setThemeMiddleware(req: NextRequest) {
  const requestCookies = req.cookies;
  const requestHeaders = new Headers(req.headers);
  const hasUrlTheme = req.url.includes('theme=');

  let theme = (
    requestCookies.get('theme')?.value || requestHeaders.get('host')
  )?.replace('www.', '');

  if (hasUrlTheme) {
    const query = req.url.split('?')[1];
    theme = query.split('=')[1];
  }

  const response = NextResponse.next();
  if (theme) response.cookies.set('theme', theme);

  return response;
}

export default setThemeMiddleware;

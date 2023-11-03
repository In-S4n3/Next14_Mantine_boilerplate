import '@mantine/core/styles.css';
import { Locale, i18n } from '@/i18n.config';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Kanit } from 'next/font/google';

const kanit = Kanit({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Gift Card Hub',
  description: 'Choose your gift card',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={kanit.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}

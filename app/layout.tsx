import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Kanit } from 'next/font/google';
import { ThemeContextProvider } from './context/ThemeContext';

const kanit = Kanit({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: 'Gift Card Hub',
  description: 'Choose your gift card',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={kanit.className}>
        <ThemeContextProvider>
          <MantineProvider>{children}</MantineProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

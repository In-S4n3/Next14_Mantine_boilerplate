'use client';
import { Theme } from '@/types/typings';
import { getTheme } from '@/utils/getTheme';
import { useSearchParams } from 'next/navigation';
import { Context, createContext, useContext, useEffect, useState } from 'react';

export const initialTheme: Theme = {
  slug: null,
  scriptEnabled: false,
  script: null,
  confirmationScriptEnabled: false,
  confirmationScript: null,
  gAnalyticsEnabled: false,
  gAnalyticsId: null,
  gtmEnabled: false,
  gtmID: null,
  abTestingScriptEnabled: false,
  abTestingScript: null,
  verificationPage: 'none',
  landingPage: 'v1',
  paymentPage: 'v1',
  progressBar: 'v1',
  loader: 'no',
  popup: 'no',
  cloackingEnabled: false,
  products: null,
  headerColor: {
    hue: 217,
    saturation: 0.25,
    brightness: 0.2,
  },
  primaryColor: {
    hue: 154,
    saturation: 0.97,
    brightness: 0.35,
  },
  primaryDarkColor: {
    hue: 154,
    saturation: 0.99,
    brightness: 0.28,
  },
  boxBackgroundColor: {
    hue: 0,
    saturation: 0,
    brightness: 0.98,
  },
  boxHeaderColor: {
    hue: 0,
    saturation: 0,
    brightness: 0.5,
  },
  boxBorderColor: {
    hue: 0,
    saturation: 0,
    brightness: 0.5,
  },
  company: {
    name: 'Gerlior Limited',
    address: 'Agiou Pavlous, 115, Agios Dometios',
    city: 'Nicosia',
    postcode: '2362',
    country: 'Cyprus',
    vatNumber: '10382120A',
    companyNumber: 'HE 382120',
  },
  phonePrefix: '+1',
  phoneNumber: '929 416 2695',
  email: 'contact@gift-card-hub.com',
  websiteTitle: 'Gift Card Hub',
  currency: 'GBP',
};

const ThemeContext: Context<Theme> = createContext(initialTheme);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('theme');
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    (async () => {
      const themeValues = await getTheme(search as string, initialTheme);
      setTheme(themeValues);
    })();
  }, [search]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

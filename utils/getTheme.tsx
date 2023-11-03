'use server';
import { Theme } from '@/types/typings';
import { cookies } from 'next/headers';

const initialTheme: Theme = {
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

export const getTheme = async (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  const { theme } = searchParams;
  const cookieStore = cookies();
  const themeCookies = cookieStore.get('theme')?.value;
  const websiteTheme = theme || themeCookies;
  let themeOptions = {} as Theme;

  if (websiteTheme) {
    themeOptions = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/themes/${websiteTheme}`,
    )
      .then((res) => res.json())
      .then(({ data }) => data);
  }
  if (themeOptions) {
    Object.keys(themeOptions).forEach((key) => {
      const property = key as keyof typeof themeOptions;
      if (themeOptions[property] === '') delete themeOptions[property];
    });
  }
  themeOptions = { ...initialTheme, ...themeOptions };

  return { ...themeOptions, slug: websiteTheme } as Theme;
};

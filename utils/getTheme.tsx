'use server';
import { Theme } from '@/types/typings';
import { cookies } from 'next/headers';

export const getTheme = async (theme: string, initialTheme: Theme) => {
  const cookieStore = cookies();
  const themeCookies = cookieStore.get('theme')?.value;
  const websiteTheme = theme || themeCookies;

  let themeOptions = {} as Theme;
  if (theme) {
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

  return { ...themeOptions, slug: theme } as Theme;
};

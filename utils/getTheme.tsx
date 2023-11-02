import { Theme } from '@/types/typings';

export const getTheme = async (theme: string, initialTheme: Theme) => {
  let themeOptions = {} as Theme;
  if (theme) {
    themeOptions = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/themes/${theme}`,
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

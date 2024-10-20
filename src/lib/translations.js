import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  loaders: [
    {
      locale: 'en',
      key: 'homepage',
      routes: ['/'],
      loader: async () => (
        await import('./locales/en/homepage.json')
      ).default,
    },
    {
      locale: 'lv',
      key: 'homepage',
      routes: ['/'], // you can use regexes as well!
      loader: async () => (
        await import('./locales/lv/homepage.json')
      ).default,
    },
  ],
});

export const defaultLocale = 'en';

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
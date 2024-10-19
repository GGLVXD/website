import { dev } from '$app/environment';
import i18n from 'sveltekit-i18n';
import en from '../translations/en/homepage.json';
import lv from '../translations/lv/homepage.json';
import lang from '../translations/lang';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  log: {
    level: dev ? 'warn' : 'error',
  },
  translations: {
    en: {
      ...en,
      lang,
    },
    lv: {
      ...lv,
      lang,
    },
  },
};

export const defaultLocale = 'en';

export const { t, locale, locales, loading, setLocale, setRoute, translations } = new i18n(config);
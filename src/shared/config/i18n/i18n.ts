import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

type TLangs = 'kz' | 'ru';

const supportedLngs: TLangs[] = ['kz', 'ru'];

export const I18Namespace = {
  landing: 'landing',
  auth: 'auth',
  profile: 'profile',
  translation: 'translation',
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'kz',
    interpolation: {
      escapeValue: false,
    },
    supportedLngs,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      caches: ['localStorage'],
      order: ['localStorage', 'navigator'],
    },
  });

export default i18n;

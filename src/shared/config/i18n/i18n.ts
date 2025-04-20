import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { LS_LANGUAGE_KEY } from '@shared/constants';
import { getFromLS, setToLS } from '@shared/helpers/manageLocalStorage';

type TLangs = 'kz' | 'ru';

const supportedLngs: TLangs[] = ['kz', 'ru'];

export const I18Namespace = {
  landing: 'landing',
  catalog: 'catalog',
  auth: 'auth',
  profile: 'profile',
  help: 'help',
  translation: 'translation',
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs,
    fallbackLng: 'kz',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      caches: ['localStorage'],
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LS_LANGUAGE_KEY,
    },
  });

if (!getFromLS(LS_LANGUAGE_KEY)) {
  setToLS(LS_LANGUAGE_KEY, 'ks');
}

export default i18n;

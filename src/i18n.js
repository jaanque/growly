import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationCA from './locales/ca.json';
import translationES from './locales/es.json';

const resources = {
  ca: {
    translation: translationCA
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ca',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

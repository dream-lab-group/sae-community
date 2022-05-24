import i18n from 'i18next';
import de from '../translations/de.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
  de: { translation: de },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'de',
  debug: true,
  interpolation: { escapeValue: false },
  resources,
});

export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
    .use(Backend) // Use Backend plugin to load JSON files
    .use(LanguageDetector) // Detect user language
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: '/locales/{{lng}}/translation.json' // Path to translation files
        },
        lng: savedLanguage, // Default language
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false // React already does escaping
        },
        react: {
            useSuspense: false
          }
    });

export default i18n;
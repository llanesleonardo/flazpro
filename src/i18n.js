
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
        }
    },function(err, t) {
        if (err) console.error('i18n init error', err);
        console.log('i18n initialized', i18n.getResourceBundle(i18n.language, 'translation'));
      });

export default i18n;
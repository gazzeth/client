import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export const languages = ['es', 'en', 'jp'];

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: process.env.REACT_APP_PUBLIC_URL + "/locales/{{lng}}/{{ns}}.json",
        },
        fallbackLng: 'es',
        debug: false,
        supportedLngs: languages,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;
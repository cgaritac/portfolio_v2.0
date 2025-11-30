import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, es } from "./content";

const storedLang = typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : null;
const initialLng = storedLang && (storedLang === 'en' || storedLang === 'es') ? storedLang : 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es }
  },
  lng: initialLng,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: { order: ["navigator", "localStorage", "cookie"] },
  });

export default i18n;
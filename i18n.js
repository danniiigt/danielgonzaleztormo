import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa las traducciones para cada idioma
import translationES from "./locales/es/translation.json";
import translationEN from "./locales/en/translation.json";

const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma predeterminado
  fallbackLng: "es", // Idioma de respaldo si la traducción no está disponible
  interpolation: {
    escapeValue: false, // Permite el uso de HTML en las traducciones
  },
});

export default i18n;

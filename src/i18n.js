import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: "languageOnly",
    fallbackLng: "en",
    react: {
      useSuspense: false,
    },
    keySeparator: ".",
    defaultNS: "translations",
    whitelist: ["en", "es", "pt"],
    ns: ["translations"],
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;

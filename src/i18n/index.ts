import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./locales/pt";
import en from "./locales/en";

export const languages = [
  { code: "pt", label: "PT", name: "Português" },
  { code: "en", label: "EN", name: "English" },
] as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    supportedLngs: languages.map((l) => l.code),
    nonExplicitSupportedLngs: true,
    fallbackLng: "pt",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng.startsWith("en") ? "en" : "pt-BR";
};
syncHtmlLang(i18n.resolvedLanguage ?? "pt");
i18n.on("languageChanged", syncHtmlLang);

export default i18n;


import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import i18n from "../locales/i18n";

const LanguageContext = createContext();

export function LanguageProvider({
  children,
}) {
  const [language, setLanguage] =
    useState(
      localStorage.getItem("language") ||
        "en"
    );

  useEffect(() => {
    i18n.changeLanguage(language);

    document.documentElement.lang =
      language;

    document.documentElement.dir =
      language === "fa"
        ? "rtl"
        : "ltr";

    localStorage.setItem(
      "language",
      language
    );
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === "en" ? "fa" : "en"
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        isRTL: language === "fa",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "en";
type LanguageContextType = { lang: Lang; toggleLang: () => void; setLang: (lang: Lang) => void };
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-lang");
    const preferred: Lang = saved === "en" || saved === "es" ? saved : navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
    setLang(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, toggleLang: () => setLang((current) => current === "es" ? "en" : "es") }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}


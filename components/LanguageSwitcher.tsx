"use client";

import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <div role="group" aria-label={lang === "es" ? "Idioma" : "Language"} className="inline-flex rounded-full border border-slate-300 bg-white/80 p-1 shadow-sm">
      {(["es", "en"] as const).map((option) => (
        <button key={option} type="button" aria-pressed={lang === option} onClick={() => setLang(option)} className={`min-h-10 min-w-10 rounded-full px-3 text-xs font-semibold uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950 ${lang === option ? "bg-slate-950 text-white" : "text-slate-600 hover:bg-slate-100"}`}>{option}</button>
      ))}
    </div>
  );
}


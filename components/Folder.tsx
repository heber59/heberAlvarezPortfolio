"use client";

import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Tabs, sectionsOrder, type SectionKey } from "@/components/Tabs";
import { PageView } from "@/components/PageView";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

const isSection = (value: string): value is SectionKey =>
  sectionsOrder.includes(value as SectionKey);

export function Folder() {
  const { lang } = useLanguage();
  const labels = copy[lang].sections.cover;
  const ui = copy[lang].ui;
  const [currentSection, setCurrentSection] = useState<SectionKey>("cover");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (isSection(hash)) setCurrentSection(hash);
  }, []);

  const navigate = (section: SectionKey) => {
    setCurrentSection(section);
    window.history.replaceState(null, "", `#${section}`);
  };

  const currentIndex = sectionsOrder.indexOf(currentSection);
  const previous = sectionsOrder[Math.max(0, currentIndex - 1)];
  const next = sectionsOrder[Math.min(sectionsOrder.length - 1, currentIndex + 1)];
  const isCover = currentSection === "cover";

  return (
    <main id="main-content" className="min-h-svh overflow-x-hidden bg-stone-200 px-3 py-4 text-slate-900 sm:px-6 lg:grid lg:place-items-center">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="sticky top-0 z-40 -mx-3 mb-3 bg-stone-200/90 px-3 py-2 backdrop-blur lg:hidden">
          <Tabs current={currentSection} onChange={navigate} orientation="horizontal" />
        </div>

        <div className="relative flex items-center justify-center">
          {isCover ? (
            <section
              id="panel-cover"
              role="tabpanel"
              aria-labelledby="tab-cover"
              className="relative min-h-[calc(100svh-7rem)] w-full max-w-3xl overflow-hidden rounded-[26px] border border-amber-500 bg-amber-300 px-7 py-8 shadow-[0_28px_80px_rgba(42,35,25,.22)] sm:px-12 lg:min-h-[min(780px,calc(100svh-3rem))]"
            >
              <div className="flex justify-end"><LanguageSwitcher /></div>
              <div className="flex min-h-[60svh] flex-col justify-center">
                <p className="font-manrope text-xs font-semibold uppercase tracking-[0.24em] text-amber-950/65">{labels.subtitle}</p>
                <h1 className="mt-4 max-w-2xl font-manrope text-5xl font-semibold tracking-tight text-amber-950 sm:text-6xl">{labels.title}</h1>
                <p className="mt-4 font-manrope text-sm font-semibold uppercase tracking-[0.12em] text-amber-950/75">{labels.tagline}</p>
                <p className="mt-8 max-w-xl font-inter text-lg leading-relaxed text-amber-950/85">{labels.intro}</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <button type="button" onClick={() => navigate("projects")} className="min-h-11 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">{labels.explore}</button>
                  <button type="button" onClick={() => navigate("contact")} className="min-h-11 rounded-full border border-amber-950/25 bg-white/35 px-5 py-3 text-sm font-semibold text-amber-950 transition hover:bg-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">{labels.contact}</button>
                </div>
                <p className="mt-10 text-xs font-medium uppercase tracking-[0.16em] text-amber-950/55">{labels.hint}</p>
              </div>
            </section>
          ) : (
            <section id={`panel-${currentSection}`} role="tabpanel" aria-labelledby={`tab-${currentSection}`} className="relative w-full rounded-[28px] bg-amber-300 p-2 shadow-[0_28px_80px_rgba(42,35,25,.22)] lg:h-[min(820px,calc(100svh-3rem))] lg:p-4">
              <div className="grid min-h-0 gap-3 lg:h-full lg:grid-cols-2 lg:gap-0">
                <article aria-label={`${ui.page} 1`} className="relative min-h-[55svh] overflow-hidden rounded-[20px] border border-black/10 bg-[#fffdf7] shadow-[0_12px_30px_rgba(42,35,25,.14)] lg:min-h-0 lg:rounded-l-[24px] lg:rounded-r-sm lg:border-r-0">
                  <div className="h-full px-5 py-7 sm:px-8 lg:min-h-0 lg:overflow-y-auto lg:px-10 lg:py-10"><PageView current={currentSection} side="left" /></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-7 bg-gradient-to-l from-black/10 to-transparent lg:block" />
                </article>
                <article aria-label={`${ui.page} 2`} className="relative ml-2 min-h-[55svh] max-w-[calc(100%_-_0.5rem)] overflow-hidden rounded-[20px] border border-black/10 bg-[#fffdf7] shadow-[0_12px_30px_rgba(42,35,25,.14)] lg:ml-0 lg:min-h-0 lg:max-w-none lg:rounded-l-sm lg:rounded-r-[24px] lg:border-l-0">
                  <div className="h-full px-5 py-7 sm:px-8 lg:min-h-0 lg:overflow-y-auto lg:px-10 lg:py-10"><PageView current={currentSection} side="right" /></div>
                  <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-7 bg-gradient-to-r from-black/10 to-transparent lg:block" />
                </article>
              </div>
              <div className="pointer-events-none absolute inset-y-4 left-1/2 hidden w-12 -translate-x-1/2 bg-gradient-to-r from-black/10 via-transparent to-black/10 lg:block" />
            </section>
          )}

          <div className="absolute inset-y-12 left-full ml-2 hidden lg:block">
            <Tabs current={currentSection} onChange={navigate} orientation="vertical" />
          </div>
        </div>

        {!isCover && (
          <nav aria-label={lang === "es" ? "Navegación entre secciones" : "Section navigation"} className="mt-4 flex justify-between lg:hidden">
            <button type="button" disabled={currentIndex === 0} onClick={() => navigate(previous)} className="min-h-11 rounded-full border border-slate-400 px-4 text-sm font-semibold disabled:opacity-40">← {ui.previous}</button>
            <button type="button" disabled={currentIndex === sectionsOrder.length - 1} onClick={() => navigate(next)} className="min-h-11 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white disabled:opacity-40">{ui.next} →</button>
          </nav>
        )}
      </div>
    </main>
  );
}


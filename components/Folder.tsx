"use client";

import { useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Tabs, type SectionKey } from "@/components/Tabs";
import { PageView } from "@/components/PageView";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

export function Folder() {
  const { lang } = useLanguage();
  const labels = copy[lang].sections.cover;
  const [currentSection, setCurrentSection] = useState<SectionKey>("cover");

  const isCover = currentSection === "cover";

  return (
    <div className="flex h-screen w-screen items-center pl-[5%] lg:pl-0 lg:justify-center bg-slate-100">
      <div className="relative flex items-center">
        <div
          className={` ${isCover ? `bg-amber-300 pr-4 rounded-[3rem]` : ``}`}
        >
          <div
            className={`relative z-10 h-[85vh] rounded-[1.75rem] border border-amber-400 bg-amber-300 shadow-[0_32px_90px_rgba(15,23,42,0.28)] transition-[width] duration-500 ease-in-out overflow-visible
          ${isCover ? "w-[min(67vw,660px)]" : "w-[min(80vw,1040px)]"}`}
          >
            {isCover && (
              <div className="flex h-full flex-col px-8 z-20">
                <div className="flex justify-end pt-6">
                  <LanguageSwitcher />
                </div>
                <div className="flex h-[80%] w-full flex-col justify-center gap-3">
                  <div className="flex flex-col items-start justify-between pr-8">
                    <h1 className="font-manrope text-3xl md:text-4xl font-semibold text-amber-950">
                      {labels.title}
                    </h1>
                    <div className="mt-1 flex flex-col">
                      <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-900/70">
                        {labels.subtitle}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-[9rem] items-center">
                    <span className="max-w-md pt-5 font-inter text-amber-950/80">
                      {labels.intro}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {!isCover && (
              <>
                <div className="absolute inset-0 px-10 pt-12 pb-10 z-20">
                  <div className="relative h-full rounded-2xl bg-white shadow-[0_22px_70px_rgba(15,23,42,0.25)]">
                    <div className="flex items-start justify-between px-10 pt-7 pb-4">
                      <div className="flex flex-col gap-1">
                        <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">
                          {labels.subtitle}
                        </span>
                        <span className="font-manrope text-sm md:text-base font-semibold text-slate-900">
                          {labels.title}
                        </span>
                      </div>
                      <LanguageSwitcher />
                    </div>

                    <div className="pointer-events-none absolute inset-y-6 left-1/2 w-px -translate-x-1/2 bg-slate-200 shadow-[0_0_24px_rgba(15,23,42,0.35)] opacity-70" />

                    <div className="relative h-[calc(100%-72px)] px-10 pb-8 pt-2">
                      <PageView current={currentSection} />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-24 left-full -ml-14 flex flex-col items-start z-10">
                  <Tabs current={currentSection} onChange={setCurrentSection} />
                </div>
              </>
            )}
          </div>
        </div>

        {isCover && (
          <div className="-ml-6  flex flex-col items-start">
            <Tabs current={currentSection} onChange={setCurrentSection} />
          </div>
        )}
      </div>
    </div>
  );
}

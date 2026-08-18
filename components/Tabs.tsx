"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

export const sectionsOrder = ["cover", "about", "projects", "skills", "contact"] as const;
export type SectionKey = (typeof sectionsOrder)[number];

const palette = ["bg-sky-300", "bg-emerald-300", "bg-amber-300", "bg-violet-300", "bg-rose-300"];

export function Tabs({ current, onChange, orientation = "vertical" }: { current: SectionKey; onChange: (section: SectionKey) => void; orientation?: "horizontal" | "vertical" }) {
  const { lang } = useLanguage();
  const labels = copy[lang].ui.tabs;
  const listRef = useRef<HTMLDivElement>(null);

  const focusAndActivate = (index: number) => {
    const safeIndex = (index + sectionsOrder.length) % sectionsOrder.length;
    const tabs = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs?.[safeIndex]?.focus();
    onChange(sectionsOrder[safeIndex]);
  };

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const forward = orientation === "horizontal" ? "ArrowRight" : "ArrowDown";
    const backward = orientation === "horizontal" ? "ArrowLeft" : "ArrowUp";
    if (event.key === forward) { event.preventDefault(); focusAndActivate(index + 1); }
    if (event.key === backward) { event.preventDefault(); focusAndActivate(index - 1); }
    if (event.key === "Home") { event.preventDefault(); focusAndActivate(0); }
    if (event.key === "End") { event.preventDefault(); focusAndActivate(sectionsOrder.length - 1); }
  };

  return (
    <div ref={listRef} role="tablist" aria-orientation={orientation} aria-label={lang === "es" ? "Secciones del portafolio" : "Portfolio sections"} className={orientation === "horizontal" ? "flex gap-2 overflow-x-auto pb-1" : "flex h-full flex-col justify-center gap-4"}>
      {sectionsOrder.map((key, index) => {
        const active = current === key;
        return (
          <button key={key} id={`tab-${key}`} role="tab" type="button" aria-selected={active} aria-controls={`panel-${key}`} tabIndex={active ? 0 : -1} onClick={() => onChange(key)} onKeyDown={(event) => onKeyDown(event, index)} className={[
            "min-h-11 shrink-0 whitespace-nowrap font-semibold uppercase tracking-[0.12em] shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950",
            orientation === "horizontal" ? "rounded-full px-4 py-2 text-xs" : "min-w-[122px] rounded-r-full px-5 py-3 text-left text-[11px]",
            active ? `${palette[index]} text-slate-950 ring-2 ring-slate-950/15` : "bg-white/80 text-slate-700 hover:bg-white",
          ].join(" ")}>{labels[key]}</button>
        );
      })}
    </div>
  );
}


"use client";

import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

const sectionsOrder = [
  "cover",
  "about",
  "projects",
  "skills",
  "contact",
] as const;
export type SectionKey = (typeof sectionsOrder)[number];

const palette = [
  "bg-sky-400",
  "bg-emerald-400",
  "bg-amber-400",
  "bg-violet-400",
  "bg-rose-400",
];

interface TabsProps {
  current: SectionKey;
  onChange: (section: SectionKey) => void;
}

export function Tabs({ current, onChange }: TabsProps) {
  const { lang } = useLanguage();
  const labels = copy[lang].ui.tabs;
  const listRef = useRef<HTMLDivElement>(null);

  const focusTab = (index: number) => {
    const tabs = listRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]'
    );
    const tab = tabs?.[(index + sectionsOrder.length) % sectionsOrder.length];
    tab?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowRight":
        e.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        e.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        e.preventDefault();
        focusTab(0);
        break;
      case "End":
        e.preventDefault();
        focusTab(sectionsOrder.length - 1);
        break;
    }
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-orientation="vertical"
      aria-label={lang === "es" ? "Secciones" : "Sections"}
      className="flex h-full flex-col items-end justify-center gap-6"
    >
      {sectionsOrder.map((key, index) => {
        const isActive = current === key;
        const color = palette[index];

        return (
          <button
            key={key}
            id={`tab-${key}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls="section-panel"
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(key)}
            onKeyDown={(e) => onKeyDown(e, index)}
            className={[
              "relative h-10 min-w-[110px] rounded-r-full pl-5 pr-4 text-[11px] font-semibold uppercase tracking-[0.16em]",
              "shadow-sm transition-transform duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900",
              isActive
                ? `${color} text-slate-900 translate-x-0`
                : "bg-slate-200 text-slate-700 hover:translate-x-3",
            ].join(" ")}
          >
            <span className="inline-block align-middle">{labels[key]}</span>
          </button>
        );
      })}
    </div>
  );
}

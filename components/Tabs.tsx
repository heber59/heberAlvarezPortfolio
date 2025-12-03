"use client";

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

interface TabsProps {
  current: SectionKey;
  onChange: (section: SectionKey) => void;
}

export function Tabs({ current, onChange }: TabsProps) {
  const { lang } = useLanguage();
  const labels = copy[lang].ui.tabs;

  return (
    <div className="flex h-full flex-col items-end justify-center gap-6">
      {sectionsOrder.map((key, index) => {
        const isActive = current === key;
        const palette = [
          "bg-sky-400",
          "bg-emerald-400",
          "bg-amber-400",
          "bg-violet-400",
          "bg-rose-400",
        ];
        const color = palette[index];

        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={[
              "relative h-10 min-w-[110px] rounded-r-full pl-5 pr-4 text-[11px] font-semibold uppercase tracking-[0.16em]",
              "shadow-sm transition-transform duration-150",
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

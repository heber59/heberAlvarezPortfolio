import { BadgeCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

export function Skills() {
  const { lang } = useLanguage();
  const content = copy[lang].sections.skills;
  return (
    <div className="flex flex-col gap-4">
      {content.groups.map((group) => (
        <section key={group.label} className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
          <h3 className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{group.label}</h3>
          <div className="mt-3 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700">{item}</span>)}</div>
        </section>
      ))}
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"><BadgeCheck className="h-5 w-5 shrink-0" /><span className="font-manrope text-sm font-semibold">{content.certification}</span></div>
    </div>
  );
}


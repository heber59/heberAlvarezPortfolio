import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

export function Skills() {
  const { lang } = useLanguage();
  const c = copy[lang].sections.skills;

  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto pr-1">
      <div className="flex flex-col gap-2">
        <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
          {c.eyebrow}
        </p>

        <h2 className="font-manrope text-2xl md:text-3xl font-semibold text-slate-900">
          {c.title}
        </h2>

        <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">
          {c.intro}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {c.groups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm"
          >
            <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              {group.label}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

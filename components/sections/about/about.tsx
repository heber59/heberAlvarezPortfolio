import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

export function AboutMe({ secondPage }: { secondPage?: boolean }) {
  const { lang } = useLanguage();
  const c = copy[lang].sections.about;

  if (secondPage) {
    return (
      <div className="flex h-full flex-col justify-center gap-6 pl-4">
        <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
          {c.profile}
        </p>

        <p className="font-inter text-base md:text-lg leading-relaxed text-slate-800 max-w-xl">
          {c.experience}
        </p>

        <div className="h-px w-full rounded-full bg-slate-300/80 " />

        <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">
          {c.vision}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col  gap-3 pr-8">
      <div className="flex pt-4 justify-center">
        <img
          src="/assets/images/me.jpeg"
          alt="profile"
          className="h-auto w-[min(220px,20vw)] rounded-[50px] object-cover border border-slate-300 float-right ml-6 mb-4"
          style={{ shapeOutside: "margin-box", shapeMargin: "12px" }}
        />
      </div>
      <h2 className="font-manrope text-2xl md:text-3xl font-semibold text-slate-900">
        {c.title}
      </h2>

      <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
        {c.intro}
      </p>
    </div>
  );
}

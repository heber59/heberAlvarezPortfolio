import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

export function AboutMe({ secondPage }: { secondPage?: boolean }) {
  const { lang } = useLanguage();
  const content = copy[lang].sections.about;

  if (secondPage) {
    return (
      <div className="flex h-full flex-col justify-center gap-6">
        <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{content.profile}</p>
        <p className="font-inter text-base leading-relaxed text-slate-700">{content.experience}</p>
        <div className="h-px bg-slate-200" />
        <p className="font-inter text-base leading-relaxed text-slate-700">{content.vision}</p>
        <p className="rounded-2xl border border-sky-200 bg-sky-50 p-4 font-inter text-sm leading-relaxed text-sky-950">{content.foundation}</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col justify-center">
      <div className="relative mb-7 aspect-[4/5] w-52 overflow-hidden rounded-[36px] border border-slate-200 bg-slate-100 shadow-sm sm:w-60">
        <Image src="/assets/images/me.jpeg" alt={content.portraitAlt} fill priority sizes="(max-width: 640px) 208px, 240px" className="object-contain object-center" />
      </div>
      <h2 tabIndex={-1} className="font-manrope text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{content.title}</h2>
      <p className="mt-6 max-w-lg font-inter text-base leading-relaxed text-slate-700">{content.intro}</p>
    </div>
  );
}


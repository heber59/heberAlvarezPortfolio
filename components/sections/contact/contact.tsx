import { Mail, Github, Linkedin, ArrowUpRight, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

const icons: Record<string, LucideIcon> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
};

export function Contact() {
  const { lang } = useLanguage();
  const c = copy[lang].sections.contact;

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
          {c.eyebrow}
        </p>

        <h2 className="font-manrope text-2xl md:text-3xl font-semibold text-slate-900">
          {c.title}
        </h2>

        <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">
          {c.body}
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:max-w-2xl">
        {c.channels.map((channel) => {
          const Icon = icons[channel.id] ?? Mail;
          const external = channel.id !== "email";

          return (
            <a
              key={channel.id}
              href={channel.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-900 group-hover:text-white">
                <Icon className="h-4 w-4" />
              </span>

              <span className="flex min-w-0 flex-col">
                <span className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {channel.label}
                </span>
                <span className="truncate font-inter text-sm font-medium text-slate-800">
                  {channel.value}
                </span>
              </span>

              <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-slate-900" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

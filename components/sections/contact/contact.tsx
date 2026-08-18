import { ArrowUpRight, Download, Github, Linkedin, Mail, Package, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";

const icons: Record<string, LucideIcon> = { email: Mail, github: Github, linkedin: Linkedin, npm: Package, cv: Download };
type Channel = { id: string; label: string; value: string; href: string; download?: boolean };

export function Contact() {
  const { lang } = useLanguage();
  const channels: readonly Channel[] = copy[lang].sections.contact.channels;
  return (
    <div className="flex h-full flex-col justify-center gap-3">
      {channels.map((channel) => {
        const Icon = icons[channel.id] ?? Mail;
        const external = channel.id !== "email" && channel.id !== "cv";
        return (
          <a key={channel.id} href={channel.href} download={channel.download || undefined} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="group flex min-h-16 items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white"><Icon className="h-4 w-4" /></span>
            <span className="min-w-0 flex-1"><span className="block font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{channel.label}</span><span className="mt-1 block truncate font-inter text-sm font-medium text-slate-800">{channel.value}</span></span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400" />
          </a>
        );
      })}
    </div>
  );
}


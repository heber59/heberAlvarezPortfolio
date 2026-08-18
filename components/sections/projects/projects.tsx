"use client";

import { useState } from "react";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";
import { Dialog } from "@/components/ui/Dialog";

type Project = {
  id: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  contribution: string;
  outcome: string;
  stack: readonly string[];
  private?: boolean;
  packageUrl?: string;
  demoUrl?: string;
  sourceUrl?: string;
};

export function Projects() {
  const { lang } = useLanguage();
  const content = copy[lang].sections.projects;
  // Both language files use the same project schema. Normalising the union here
  // keeps the dialog state independent from TypeScript's per-locale literals.
  const projects = content.items as readonly Project[];
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showDemo, setShowDemo] = useState(false);

  const closeProject = () => {
    setActiveProject(null);
    setShowDemo(false);
  };

  return (
    <>
      <div className="grid gap-4 xl:grid-cols-2">
        {projects.map((project) => (
          <button key={project.id} type="button" onClick={() => { setActiveProject(project); setShowDemo(false); }} className="group flex h-full min-h-44 flex-col rounded-2xl border border-slate-200 bg-white/70 p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">
            <div className="flex items-start justify-between gap-3">
              <p className="font-manrope text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{project.category}</p>
              {project.private && <LockKeyhole aria-label={content.labels.private} className="h-4 w-4 shrink-0 text-slate-400" />}
            </div>
            <h3 className="mt-3 font-manrope text-base font-semibold leading-snug text-slate-950">{project.title}</h3>
            <p className="mt-3 line-clamp-3 font-inter text-sm leading-relaxed text-slate-600">{project.outcome}</p>
            <span className="mt-auto pt-4 text-xs font-semibold text-sky-700">{project.status} <ArrowUpRight className="inline h-3.5 w-3.5" /></span>
          </button>
        ))}
      </div>

      <Dialog open={!!activeProject && !showDemo} onClose={closeProject} labelledBy="project-dialog-title" overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 px-4 py-6" className="relative max-h-[90svh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-[#fffdf7] shadow-2xl outline-none">
        {activeProject && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{activeProject.status}</p>
                <h3 id="project-dialog-title" className="mt-2 font-manrope text-2xl font-semibold text-slate-950">{activeProject.title}</h3>
              </div>
              <button type="button" onClick={closeProject} className="min-h-11 rounded-full border border-slate-300 px-4 text-sm font-semibold hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">{content.labels.close}</button>
            </div>
            <p className="mt-6 font-inter text-base leading-relaxed text-slate-700">{activeProject.summary}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Detail title={content.labels.contribution} text={activeProject.contribution} />
              <Detail title={content.labels.outcome} text={activeProject.outcome} />
            </div>
            <div className="mt-6">
              <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{content.labels.stack}</p>
              <div className="mt-3 flex flex-wrap gap-2">{activeProject.stack.map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{item}</span>)}</div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {activeProject.packageUrl && <ProjectLink href={activeProject.packageUrl} label={content.labels.viewPackage} />}
              {activeProject.demoUrl && <button type="button" onClick={() => setShowDemo(true)} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">{content.labels.liveDemo}<ArrowUpRight className="h-4 w-4" /></button>}
              {activeProject.sourceUrl && <ProjectLink href={activeProject.sourceUrl} label={content.labels.source} />}
              {activeProject.private && <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-600"><LockKeyhole className="h-4 w-4" />{content.labels.private}</span>}
            </div>
          </div>
        )}
      </Dialog>

      <Dialog open={showDemo && !!activeProject?.demoUrl} onClose={() => setShowDemo(false)} labelledBy="demo-dialog-title" overlayClassName="fixed inset-0 z-[60] flex bg-slate-950/95" className="flex h-full w-full flex-col outline-none">
        {activeProject?.demoUrl && (
          <>
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <p id="demo-dialog-title" className="font-manrope text-sm font-semibold text-white">{activeProject.title} · {content.labels.interactiveDemo}</p>
              <button type="button" onClick={() => setShowDemo(false)} className="min-h-11 rounded-full border border-slate-600 bg-slate-800 px-4 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{content.labels.closeDemo}</button>
            </div>
            <div className="min-h-0 flex-1 bg-white">
              <iframe src={activeProject.demoUrl} title={`${activeProject.title} · ${content.labels.interactiveDemo}`} loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-popups" className="h-full w-full border-0" allowFullScreen />
            </div>
          </>
        )}
      </Dialog>
    </>
  );
}

function Detail({ title, text }: { title: string; text: string }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-4"><p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{title}</p><p className="mt-2 font-inter text-sm leading-relaxed text-slate-700">{text}</p></div>;
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font-semibold text-white hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950">{label}<ArrowUpRight className="h-4 w-4" /></a>;
}


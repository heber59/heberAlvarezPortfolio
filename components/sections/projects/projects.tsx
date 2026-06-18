"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";
import { Dialog } from "@/components/ui/Dialog";

type Project = {
  id: string;
  title: string;
  role: string;
  short: string;
  description: string;
  stack: readonly string[];
  image: string;
  link?: string;
  demoUrl?: string;
};

export function Projects() {
  const { lang } = useLanguage();
  const cProjects = copy[lang].sections.projects;
  const uiProjects = copy[lang].ui;
  const projects = cProjects.items;

  const [activeProject, setActiveProject] = useState<Project | undefined>(
    undefined
  );
  const [showDemo, setShowDemo] = useState(false);

  const closeProject = () => {
    setActiveProject(undefined);
    setShowDemo(false);
  };

  return (
    <>
      <div className="flex h-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
            {cProjects.eyebrowMain}
          </p>

          <h2 className="font-manrope text-2xl md:text-3xl font-semibold text-slate-900">
            {cProjects.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 overflow-y-auto pr-1 sm:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => {
                setActiveProject(project);
                setShowDemo(false);
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col gap-1 px-4 py-3">
                <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {project.role}
                </p>

                <h3 className="font-manrope text-sm font-semibold text-slate-900">
                  {project.title}
                </h3>

                <div className="mt-2 flex flex-wrap gap-1">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}

                  {project.stack.length > 3 && (
                    <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={!!activeProject && !showDemo}
        onClose={closeProject}
        labelledBy="project-dialog-title"
        overlayClassName="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 px-4"
        className="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl outline-none"
      >
        {activeProject && (
          <>
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
              <div>
                <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {activeProject.role}
                </p>

                <h3
                  id="project-dialog-title"
                  className="mt-1 font-manrope text-lg  font-semibold text-slate-900"
                >
                  {activeProject.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {activeProject.demoUrl && (
                  <button
                    type="button"
                    onClick={() => setShowDemo(true)}
                    className="h-10 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-blue-300"
                  >
                    {uiProjects.demo}
                  </button>
                )}

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label={uiProjects.close}
                  className="h-10 rounded-full border border-slate-200 bg-white px-2 py-1 text-xs font-medium text-slate-500 hover:bg-red-200"
                >
                  {uiProjects.close}
                </button>
              </div>
            </div>

            <div className="grid gap-4 px-6 pb-5 pt-4 md:grid-cols-[1.4fr_1fr] md:gap-6">
              <div className="space-y-3">
                <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                  {activeProject.description}
                </p>
                <div>
                  <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {uiProjects.stack}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {activeProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {activeProject.link && (
                  <div>
                    <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {cProjects.labelLink}
                    </p>

                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                    >
                      {cProjects.labelViewProject}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Dialog>

      <Dialog
        open={showDemo && !!activeProject?.demoUrl}
        onClose={() => setShowDemo(false)}
        labelledBy="demo-dialog-title"
        overlayClassName="fixed inset-0 z-50 flex flex-col bg-slate-900/90"
        className="flex flex-col h-full outline-none"
      >
        {activeProject?.demoUrl && (
          <>
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
              <p
                id="demo-dialog-title"
                className="text-xs md:text-sm font-manrope font-medium text-slate-100"
              >
                {activeProject.title} · {uiProjects.interactiveDemo}
              </p>
              <button
                type="button"
                onClick={() => setShowDemo(false)}
                className="rounded-full border border-slate-600 bg-slate-800/80 px-3 py-1 text-xs md:text-sm font-medium text-slate-100 hover:bg-slate-700"
              >
                {uiProjects.closeDemo}
              </button>
            </div>

            <div className="flex-1">
              <iframe
                src={activeProject.demoUrl}
                title={`${activeProject.title} ${uiProjects.interactiveDemo}`}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                className="h-full w-full border-none"
                allowFullScreen
              />
            </div>
          </>
        )}
      </Dialog>
    </>
  );
}

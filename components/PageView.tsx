"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";
import type { SectionKey } from "@/components/Tabs";
import { AboutMe } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";

interface PageViewProps {
  current: SectionKey;
}

export function PageView({ current }: PageViewProps) {
  const { lang } = useLanguage();
  const c = copy[lang].sections;

  const section = current === "cover" ? "about" : current;

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${section}-${lang}`}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ transformOrigin: "left center" }}
          className="h-full w-full"
        >
          <div className="grid h-full grid-cols-2 gap-6">
            <div className="flex flex-col pr-4">
              {section === "about" && <AboutMe />}

              {section === "projects" && <Projects />}

              {section === "skills" && (
                <>
                  <h2 className="font-manrope text-2xl font-semibold text-slate-900">
                    {c.skills.title}
                  </h2>
                  <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                    {c.skills.body}
                  </p>
                </>
              )}

              {section === "contact" && (
                <>
                  <h2 className="font-manrope text-2xl font-semibold text-slate-900">
                    {c.contact.title}
                  </h2>
                  <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                    {c.contact.body}
                  </p>
                </>
              )}
            </div>

            <div className="flex flex-col justify-center gap-4 pl-4">
              {section === "about" && <AboutMe secondPage />}

              {section === "projects" && <Projects secondPage />}

              {section === "skills" && (
                <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                  Aquí podemos listar skills por categorías (Frontend, Tools,
                  Soft Skills, etc.) en formato más visual.
                </p>
              )}

              {section === "contact" && (
                <p className="font-inter text-sm md:text-base leading-relaxed text-slate-700">
                  Aquí podemos poner email, links a LinkedIn, GitHub y un
                  pequeño “call to action” para que te contacten.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

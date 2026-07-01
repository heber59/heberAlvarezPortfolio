"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";
import type { SectionKey } from "@/components/Tabs";
import { AboutMe } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import { Contact } from "./sections/contact/contact";

type Side = "left" | "right";

interface PageViewProps {
  current: SectionKey;
  side: Side;
}

export function PageView({ current, side }: PageViewProps) {
  const { lang } = useLanguage();
  const section = current === "cover" ? "about" : current;
  const sections = copy[lang].sections;

  const lead = (() => {
    switch (section) {
      case "projects":
        return { eyebrow: sections.projects.eyebrowMain, title: sections.projects.title };
      case "skills":
        return { eyebrow: sections.skills.eyebrow, title: sections.skills.title, intro: sections.skills.intro };
      case "contact":
        return { eyebrow: sections.contact.eyebrow, title: sections.contact.title, intro: sections.contact.body };
      default:
        return null;
    }
  })();

  const content = (() => {
    if (section === "about") {
      return side === "left" ? <AboutMe /> : <AboutMe secondPage />;
    }

    if (side === "left") {
      return (
        <div className="flex h-full flex-col justify-center gap-4">
          <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-400">
            {lead?.eyebrow}
          </p>
          <h2 className="font-manrope text-3xl md:text-4xl font-semibold text-slate-900">
            {lead?.title}
          </h2>
          {lead?.intro && (
            <p className="font-inter text-sm md:text-base leading-relaxed lg:leading-loose text-slate-600 max-w-md">
              {lead.intro}
            </p>
          )}
        </div>
      );
    }

    if (section === "projects") return <Projects />;
    if (section === "skills") return <Skills />;
    if (section === "contact") return <Contact />;
    return null;
  })();

  return (
    <div
      id={`section-panel-${side}`}
      role="tabpanel"
      aria-labelledby={`tab-${section}`}
      className="relative h-full w-full overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${section}-${lang}-${side}`}
          initial={{ rotateY: side === "left" ? -90 : 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: side === "left" ? 90 : -90, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ transformOrigin: side === "left" ? "right center" : "left center" }}
          className="h-full w-full"
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

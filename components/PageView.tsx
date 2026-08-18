"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { copy } from "@/utils/copy";
import type { SectionKey } from "@/components/Tabs";
import { AboutMe } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import { Contact } from "./sections/contact/contact";

export function PageView({ current, side }: { current: SectionKey; side: "left" | "right" }) {
  const { lang } = useLanguage();
  const reduceMotion = useReducedMotion();
  const sections = copy[lang].sections;
  const section = current === "cover" ? "about" : current;

  const content = (() => {
    if (section === "about") return side === "left" ? <AboutMe /> : <AboutMe secondPage />;
    if (section === "projects") {
      if (side === "right") return <Projects />;
      return <SectionLead eyebrow={sections.projects.eyebrowMain} title={sections.projects.title} intro={sections.projects.intro} note={sections.projects.privacy} />;
    }
    if (section === "skills") {
      if (side === "right") return <Skills />;
      return <SectionLead eyebrow={sections.skills.eyebrow} title={sections.skills.title} intro={sections.skills.intro} />;
    }
    if (section === "contact") {
      if (side === "right") return <Contact />;
      return <SectionLead eyebrow={sections.contact.eyebrow} title={sections.contact.title} intro={sections.contact.body} note={sections.contact.detail} />;
    }
    return null;
  })();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={`${section}-${lang}-${side}`} initial={reduceMotion ? false : { rotateY: side === "left" ? -12 : 12, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }} style={{ transformOrigin: side === "left" ? "right center" : "left center" }} className="h-full">
        {content}
      </motion.div>
    </AnimatePresence>
  );
}

function SectionLead({ eyebrow, title, intro, note }: { eyebrow: string; title: string; intro: string; note?: string }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="font-manrope text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">{eyebrow}</p>
      <h2 tabIndex={-1} className="mt-4 max-w-lg font-manrope text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-7 max-w-lg font-inter text-base leading-relaxed text-slate-700">{intro}</p>
      {note && <p className="mt-6 max-w-lg rounded-2xl border border-amber-200 bg-amber-50 p-4 font-inter text-sm leading-relaxed text-amber-950">{note}</p>}
    </div>
  );
}


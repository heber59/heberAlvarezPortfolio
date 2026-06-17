"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { SectionKey } from "@/components/Tabs";
import { AboutMe } from "./sections/about/about";
import { Projects } from "./sections/projects/projects";
import { Skills } from "./sections/skills/skills";
import { Contact } from "./sections/contact/contact";

interface PageViewProps {
  current: SectionKey;
}

export function PageView({ current }: PageViewProps) {
  const { lang } = useLanguage();

  const section = current === "cover" ? "about" : current;

  return (
    <div
      id="section-panel"
      role="tabpanel"
      aria-labelledby={`tab-${section}`}
      className="relative h-full w-full overflow-hidden"
    >
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
          {section === "projects" && (
            <div className="h-full px-2">
              <Projects />
            </div>
          )}

          {section === "skills" && (
            <div className="h-full px-2">
              <Skills />
            </div>
          )}

          {section === "contact" && (
            <div className="h-full px-2">
              <Contact />
            </div>
          )}

          {section === "about" && (
            <div className="grid h-full grid-cols-2 gap-6">
              <div className="flex flex-col pr-4">
                <AboutMe />
              </div>

              <div className="flex flex-col justify-center gap-4 pl-4">
                <AboutMe secondPage />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export const enCopy = {
  sections: {
    cover: {
      title: "Heber Alvarez",
      subtitle: "Frontend Engineer",
      tagline: "React & TypeScript · Backend Experience · AWS Certified",
      intro:
        "I turn business requirements into clear, scalable and high-performance digital products.",
      explore: "View selected work",
      contact: "Contact me",
      hint: "Open a tab to explore",
    },
    about: {
      title: "About me",
      profile: "Professional profile",
      intro:
        "I'm a Frontend Engineer specialising in React and TypeScript, with experience building production applications, management portals, design systems and data-intensive dashboards.",
      experience:
        "I work directly with clients and stakeholders to understand their needs and translate them into practical technical solutions. My work covers frontend architecture, user experience, reusable component APIs, performance, accessibility and maintainability.",
      vision:
        "At an AI-focused startup, I also help define the scope and capabilities of AI-powered systems. I created a component ecosystem with structured metadata that helps AI understand available components, their use cases and how to configure them, making simple dashboard creation accessible to non-technical users.",
      foundation:
        "Frontend is my strongest area, supported by practical experience with backend development, CI/CD, npm package delivery and cloud infrastructure. I am an AWS Certified Cloud Practitioner and I am currently preparing for the AWS Solutions Architect certification.",
      portraitAlt: "Portrait of Heber Alvarez",
    },
    projects: {
      title: "Selected work",
      eyebrowMain: "Projects and case studies",
      intro:
        "Public projects and professional case studies showing how I approach frontend architecture, reusable systems, data visualisation and developer experience.",
      privacy:
        "Some professional work is presented without screenshots, source code or client details due to confidentiality agreements.",
      labels: {
        contribution: "My contribution",
        outcome: "Outcome",
        stack: "Stack",
        viewPackage: "View package",
        liveDemo: "Live demo",
        source: "View source",
        close: "Close",
        private: "Private professional project",
      },
      items: [
        {
          id: "ai-ready-dashboards",
          title: "Design System & AI-Ready Dashboards",
          category: "Featured case study",
          status: "Professional work · Confidential",
          summary:
            "A reusable frontend ecosystem for management portals and configurable, Power BI-style dashboards. Typed chart components adapt to different business scenarios, while structured metadata describes their capabilities, constraints and intended use cases.",
          contribution:
            "Translated client requirements into frontend architecture and component APIs; defined the design system and visual standards; created prop-driven chart configurations and AI-readable usage guidance.",
          outcome:
            "A scalable component foundation that accelerates dashboard development and makes simple configuration workflows accessible to non-technical users.",
          stack: ["React", "TypeScript", "Design Systems", "Data Visualisation", "AI Metadata"],
          private: true,
        },
        {
          id: "voronoi-map",
          title: "Satellite Imagery & Voronoi Map",
          category: "Case study",
          status: "Professional work · Confidential",
          summary:
            "An interactive geospatial component combining satellite imagery with Voronoi diagrams to divide, visualise and highlight geographic areas according to business requirements.",
          contribution:
            "Designed the component from client requirements, applied Voronoi geometry to dynamic zones, integrated satellite imagery and created reusable configuration patterns.",
          outcome:
            "A flexible visual tool that converts complex geographic data into an interface users can explore and understand.",
          stack: ["React", "TypeScript", "Geospatial UI", "Voronoi", "Data Visualisation"],
          private: true,
        },
        {
          id: "business-rules",
          title: "Configurable Business Rules Library",
          category: "Open source · npm",
          status: "Public package",
          summary:
            "A reusable npm package for defining and evaluating configurable business rules independently from interface code.",
          contribution:
            "Designed an extensible package API, modelled configurable rules and managed semantic versioning and the npm release workflow.",
          outcome:
            "Clear abstractions that reduce duplicated business logic and improve maintainability across configurable applications.",
          stack: ["TypeScript", "npm", "Package Design", "Business Rules", "Developer Experience"],
          packageUrl: "https://www.npmjs.com/package/@isettingkit/business-rules",
        },
        {
          id: "portfolio",
          title: "Interactive Portfolio Folder",
          category: "Open source · Personal project",
          status: "Public project",
          summary:
            "A bilingual portfolio designed as an interactive two-page folder, exploring responsive navigation, accessibility and page transitions.",
          contribution:
            "Designed and implemented the interaction model, bilingual content system, responsive two-sheet layout and accessible navigation.",
          outcome:
            "A distinctive portfolio experience that remains functional across desktop and mobile devices.",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          demoUrl: "https://heber-alvarez-portfolio.vercel.app/",
          sourceUrl: "https://github.com/heber59/heberAlvarezPortfolio",
        },
      ],
    },
    skills: {
      title: "Skills",
      eyebrow: "Capabilities",
      intro:
        "A deep frontend core supported by the backend, delivery and cloud knowledge needed to build maintainable products.",
      groups: [
        { label: "Frontend Engineering", items: ["React", "TypeScript", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive Design", "Accessibility", "Performance"] },
        { label: "Frontend Systems", items: ["Design Systems", "Component APIs", "Data Visualisation", "Dashboard Interfaces", "Frontend Architecture", "State Management", "Testing"] },
        { label: "Backend & Delivery", items: ["Node.js", "REST APIs", "Python", "SQL/NoSQL", "npm Packages", "Semantic Versioning", "CI/CD", "Docker"] },
        { label: "Cloud & AI Workflows", items: ["AWS Fundamentals", "GCP Experience", "AI-Assisted Interfaces", "Structured Component Metadata", "AI Tooling"] },
      ],
      certification: "AWS Certified Cloud Practitioner",
    },
    contact: {
      title: "Let's build something useful",
      eyebrow: "Get in touch",
      body:
        "I'm interested in frontend engineering opportunities where I can solve real product problems, collaborate closely with clients and teams, and build clear, maintainable user experiences.",
      detail:
        "If you're working with React, TypeScript, design systems, data visualisation or AI-assisted interfaces, let's talk.",
      channels: [
        { id: "email", label: "Email me", value: "hesan0308@gmail.com", href: "mailto:hesan0308@gmail.com" },
        { id: "linkedin", label: "LinkedIn", value: "Heber Santiago Alvarez", href: "https://www.linkedin.com/in/heber-santiago-alvarez-rincon-799427230/" },
        { id: "github", label: "GitHub", value: "github.com/heber59", href: "https://github.com/heber59" },
        { id: "npm", label: "npm", value: "@isettingkit/business-rules", href: "https://www.npmjs.com/package/@isettingkit/business-rules" },
        { id: "cv", label: "Download CV", value: "PDF", href: "/cv", download: true },
      ],
    },
  },
  ui: {
    tabs: { cover: "Cover", about: "About", projects: "Work", skills: "Skills", contact: "Contact" },
    previous: "Previous",
    next: "Next",
    page: "Page",
    language: "Language",
  },
} as const;


export const enCopy = {
  sections: {
    cover: {
      title: "Heber Álvarez",
      subtitle: "Senior Software Engineer · Frontend-focused",
      intro: `
I own products end to end — from fast, accessible web interfaces to the Node services and AWS infrastructure behind them — and the design systems, architecture and tooling that keep teams shipping as they scale.
      `,
    },
    about: {
      title: "About me",
      profile: "Professional profile",

      intro: `
I'm a senior software engineer, frontend-focused, who turns complex product
requirements into products that are fast, accessible and easy to maintain —
from the interface down to the services and infrastructure behind it. I care
about the details users feel and the architecture the rest of the team relies on.
      `,

      experience: `
I've spent [fill: # years] building production software for the financial
sector — owning design systems, shipping a 3-package component library to npm
used by [fill: # teams/products], and integrating frontends with AI and
telephony services. I work day to day across the stack with backend, design and
product, and I'm a strong advocate for clean architecture, code review and
accessibility.
      `,

      vision: `
I own the full lifecycle of a product: architecture, performance, accessibility
and the tooling that keeps a codebase healthy. I'm equally hands-on with the
backend (Node, Fastify, PostgreSQL) and cloud infrastructure (AWS, Docker,
Terraform), taking work from idea to production end to end.
      `,
    },

    projects: {
      title: "Projects",
      eyebrowMain: "Selected work",
      labelLink: "Link",
      labelViewProject: "View project",

      items: [
        {
          id: "npm-library",
          title: "Component library on npm",
          role: "Lead frontend · Design systems",
          short: `
Reusable component library used across multiple internal products.
          `,
          description: `
Design system published on npm (3 packages) to unify styles, UI patterns and
business rules across multiple products. I led the API design, versioning
strategy and accessibility baseline, cutting UI build time by [fill: ~X%] for
[fill: # product teams] and keeping them consistent at scale.
          `,
          stack: ["React", "TypeScript", "Vite", "Styled Components", "npm"],
          image: "/assets/images/projects/npm-library.webp",
          link: "https://www.npmjs.com",
        },
        {
          id: "ai-twilio",
          title: "AI + Twilio flows",
          role: "Frontend · AI integration",
          short: `
AI conversational flows connected to Twilio and backend services.
          `,
          description: `
Conversational AI and phone-number workflows built on Twilio, wiring business
logic, REST services and a clean interface for end users. I designed the
resilient state handling and a UX that stays clear even when the underlying flow
is complex, handling [fill: # calls/conversations] in production.
          `,
          stack: ["React", "Node.js", "Fastify", "Twilio", "PostgreSQL"],
          image: "/assets/images/projects/ai-twilio.webp",
        },
        {
          id: "sistema-saas",
          title: "SaaS system",
          role: "Frontend Engineer · Product architecture",
          short:
            "End-to-end SaaS product surface — architecture, component model and navigation modeled on real workflows.",
          description:
            "A complete SaaS product surface: I designed the component architecture, layout system and navigation around real-world workflows, then used AI to accelerate the first pass and refined it into a coherent, production-quality interface — no sensitive data exposed. A study in shipping a polished, maintainable product surface fast.",
          stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Framer Motion",
            "Tailwind",
            "Figma",
          ],
          image: "/assets/images/saasService.png",
          demoUrl: "https://sistemasaas.vercel.app/",
        },
      ],
    },

    skills: {
      title: "Skills",
      eyebrow: "Capabilities",
      intro: `
A deep frontend core, backed by the architecture, infrastructure and tooling
needed to own a product end to end.
      `,
      groups: [
        {
          label: "Frontend",
          items: [
            "React 19",
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Framer Motion",
            "Styled Components",
          ],
        },
        {
          label: "Architecture & Quality",
          items: [
            "Design systems",
            "Component libraries",
            "Accessibility (a11y)",
            "Performance",
            "Testing",
            "Code review",
          ],
        },
        {
          label: "Backend & APIs",
          items: ["Node.js", "Fastify", "REST", "PostgreSQL", "Twilio"],
        },
        {
          label: "Cloud & DevOps",
          items: [
            "AWS (EC2, S3, CloudFront)",
            "Docker",
            "Terraform",
            "Vercel",
            "CI/CD",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      eyebrow: "Get in touch",
      body: `
Open to senior software / frontend roles — remote (US time zones) or relocation. [fill: work authorization, e.g. "Authorized to work in the US" or "Open to H-1B/TN sponsorship"]. The fastest ways to reach me:
      `,
      channels: [
        {
          id: "email",
          label: "Email",
          value: "hesan0308@gmail.com",
          href: "mailto:hesan0308@gmail.com",
        },
        {
          id: "github",
          label: "GitHub",
          value: "github.com/heber59",
          href: "https://github.com/heber59",
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          value: "in/heber-alvarez",
          href: "https://www.linkedin.com/in/heber-alvarez",
        },
      ],
    },
  },
  ui: {
    langToggle: "EN / ES",
    tabs: {
      cover: "Cover",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    demo: "Show demo",
    close: "Close",
    stack: "Stack",
    interactiveDemo: "Interactive demo",
    closeDemo: "Close demo",
  },
} as const;

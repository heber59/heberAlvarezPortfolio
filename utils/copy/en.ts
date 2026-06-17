export const enCopy = {
  sections: {
    cover: {
      title: "Heber Álvarez ",
      subtitle: "Senior Frontend Engineer",
      intro: `
I build fast, accessible web interfaces — and the design systems, architecture and tooling that keep them maintainable as teams and products scale.
      `,
    },
    about: {
      title: "About me",
      profile: "Professional profile",

      intro: `
I'm a senior frontend engineer who turns complex product requirements into
interfaces that are fast, accessible and easy to maintain. I care about the
details users feel and the architecture the rest of the team relies on.
      `,

      experience: `
I've spent years building production software for the financial sector — owning
design systems, shipping a component library to npm, and integrating frontends
with AI and telephony services. I work closely with backend, design and product,
and I'm a strong advocate for clean architecture, code review and accessibility.
      `,

      vision: `
I own the full lifecycle of an interface: architecture, performance,
accessibility and the tooling that keeps a codebase healthy. I'm increasingly
hands-on with cloud and infrastructure (AWS, Docker, Terraform) so I can take
a product from idea to production end to end.
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
strategy and accessibility baseline so product teams could ship faster and stay
consistent.
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
logic, REST services and a clean interface for end users. Focused on resilient
state handling and a UX that stays clear even when the underlying flow is complex.
          `,
          stack: ["React", "Node.js", "Fastify", "Twilio", "PostgreSQL"],
          image: "/assets/images/projects/ai-twilio.webp",
        },
        {
          id: "sistema-saas",
          title: "SaaS system",
          role: "Frontend Engineer",
          short:
            "Interface generated and adapted to simulate a SaaS system based on real workflows.",
          description:
            "Components, layout and navigation for a SaaS system. The UI was AI-generated and refined for demonstration purposes without exposing any sensitive information — a study in shipping a polished product surface quickly.",
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
Open to senior frontend roles and product collaborations. The fastest ways to reach me:
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

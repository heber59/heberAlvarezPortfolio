export const enCopy = {
  sections: {
    cover: {
      title: "Heber Álvarez ",
      subtitle: "Frontend portfolio",
      intro: `
I design and build web interfaces focusing on detail, performance and a clean, modern user experience.
      `,
    },
    about: {
      title: "About me",
      profile: "Professional profile",

      intro: `
I'm a frontend developer focused on building clean, modern interfaces that deliver 
a smooth and meaningful user experience. I enjoy transforming requirements into 
polished, functional products with precise visual execution.
      `,

      experience: `
For over two years, I've worked on digital products in the financial sector, 
collaborating closely with backend teams, designers and business stakeholders. 
I'm known for my attention to detail, problem-solving mindset and commitment to 
quality throughout the entire development process.
      `,

      vision: `
My goal is to keep growing into a more complete full-stack profile while 
continuing to specialize in frontend. I aim to create solid, accessible and 
high-impact interfaces that elevate the product experience.
      `,
    },

    projects: {
      title: "Projects",
      eyebrowMain: "Selected work",
      eyebrowMore: "More work",
      labelLink: "Link",
      labelViewProject: "View project",
      moreProyects: "More projects and UI experiments coming soon…",
      items: [
        {
          id: "npm-library",
          title: "Component library on npm",
          role: "Frontend & component design",
          short: `
Reusable component library used across multiple internal products.
          `,
          description: `
Component library published on npm (3 packages) to unify styles, UI patterns 
and business rules across multiple products in the company ecosystem.
          `,
          stack: ["React", "TypeScript", "Vite", "Styled Components", "npm"],
          image: "/assets/images/projects/npm-library.webp",
          link: "https://www.npmjs.com",
        },
        {
          id: "ai-twilio",
          title: "AI + Twilio flows",
          role: "AI / frontend integration",
          short: `
AI conversational flows connected to Twilio and backend services.
          `,
          description: `
Implementation of chatbots and phone number workflows using Twilio, integrating 
business logic, REST services and a clean interface for end users.
          `,
          stack: ["React", "Node.js", "Fastify", "Twilio", "PostgreSQL"],
          image: "/assets/images/projects/ai-twilio.webp",
        },
        {
          id: "portfolio-folder",
          title: "Folder-style portfolio UI",
          role: "Frontend / UI animations",
          short: `
Folder-style interface with a two-page layout.
          `,
          description: `
Design and development of this portfolio: side tabs navigation, Framer Motion 
animations and a two-page layout inside a folder metaphor.
          `,
          stack: [
            "React",
            "Next.js",
            "TypeScript",
            "Framer Motion",
            "Tailwind",
          ],
          image: "/assets/images/projects/portfolio-folder.webp",
        },
      ],
    },

    skills: {
      title: "Skills",
      body: `
React, Next.js, TypeScript, Tailwind, Framer Motion...
      `,
    },
    contact: {
      title: "Contact",
      body: `
You can reach me at: yourname@email.com
      `,
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
  },
};

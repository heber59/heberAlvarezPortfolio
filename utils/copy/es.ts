export const esCopy = {
  sections: {
    cover: {
      title: "Heber Álvarez",
      subtitle: "Senior Frontend Engineer",
      intro: `
Construyo interfaces web rápidas y accesibles — y los design systems, la arquitectura y el tooling que las mantienen sólidas mientras el equipo y el producto escalan.
      `,
    },
    about: {
      title: "Quién soy",
      profile: "Perfil profesional",

      intro: `
Soy un ingeniero frontend senior que convierte requerimientos de producto
complejos en interfaces rápidas, accesibles y fáciles de mantener. Me importa
tanto el detalle que siente el usuario como la arquitectura sobre la que se
apoya el resto del equipo.
      `,

      experience: `
He construido durante años software en producción para el sector financiero:
liderando design systems, publicando una librería de componentes en npm e
integrando frontends con servicios de IA y telefonía. Trabajo de cerca con
backend, diseño y negocio, y defiendo la arquitectura limpia, el code review
y la accesibilidad.
      `,

      vision: `
Me hago cargo del ciclo completo de una interfaz: arquitectura, performance,
accesibilidad y el tooling que mantiene sano el código. Cada vez más hands-on
con cloud e infraestructura (AWS, Docker, Terraform) para llevar un producto
de la idea a producción de punta a punta.
      `,
    },

    projects: {
      title: "Proyectos",

      eyebrowMain: "Selección de proyectos",
      labelLink: "Enlace",
      labelViewProject: "Ver proyecto",
      items: [
        {
          id: "npm-library",
          title: "Librería de componentes en npm",
          role: "Lead frontend · Design systems",
          short: `
Librería reutilizable de componentes usada en varios productos internos.
          `,
          description: `
Design system publicado en npm (3 paquetes) para unificar estilos, patrones de
UI y reglas de negocio entre varios productos. Lideré el diseño de la API, la
estrategia de versionado y la base de accesibilidad para que los equipos
entregaran más rápido y mantuvieran consistencia.
          `,
          stack: ["React", "TypeScript", "Vite", "Styled Components", "npm"],
          image: "/assets/images/projects/npm-library.webp",
          link: "https://www.npmjs.com",
        },
        {
          id: "ai-twilio",
          title: "AI + Twilio flows",
          role: "Frontend · Integración IA",
          short: `
Flujos conversacionales con IA conectados a Twilio y servicios backend.
          `,
          description: `
IA conversacional y flujos de números telefónicos sobre Twilio, conectando
lógica de negocio, servicios REST y una interfaz limpia para el usuario final.
Enfocado en un manejo de estado resiliente y una UX que se mantiene clara aun
cuando el flujo de fondo es complejo.
          `,
          stack: ["React", "Node.js", "Fastify", "Twilio", "PostgreSQL"],
          image: "/assets/images/projects/ai-twilio.webp",
        },
        {
          id: "sistema-saas",
          title: "Sistema SaaS",
          role: "Frontend Engineer",
          short:
            "Interfaz generada y adaptada para simular un sistema SaaS basado en flujos reales.",
          description:
            "Componentes, estructura y navegación de un sistema SaaS. La UI fue generada por IA y ajustada para fines de demostración sin exponer información sensible — un ejercicio de entregar una superficie de producto pulida en poco tiempo.",
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
      eyebrow: "Capacidades",
      intro: `
Un core frontend profundo, respaldado por la arquitectura, la infraestructura
y el tooling necesarios para hacerme cargo de un producto de punta a punta.
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
          label: "Arquitectura & Calidad",
          items: [
            "Design systems",
            "Librerías de componentes",
            "Accesibilidad (a11y)",
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
      title: "Contacto",
      eyebrow: "Hablemos",
      body: `
Abierto a roles senior de frontend y a colaboraciones de producto. Las formas más rápidas de contactarme:
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
    langToggle: "ES / EN",
    tabs: {
      cover: "Portada",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
    },
    demo: "Ver demo",
    close: "Cerrar",
    stack: "Stack",
    interactiveDemo: "Demo interactiva",
    closeDemo: "Cerrar demo",
  },
} as const;

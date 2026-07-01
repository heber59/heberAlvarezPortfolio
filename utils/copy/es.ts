export const esCopy = {
  sections: {
    cover: {
      title: "Heber Álvarez",
      subtitle: "Senior Software Engineer · Frontend-focused",
      intro: `
Me hago cargo de productos de punta a punta — desde interfaces web rápidas y accesibles hasta los servicios Node y la infraestructura en AWS que las sostienen — y los design systems, la arquitectura y el tooling que mantienen al equipo entregando mientras escala.
      `,
    },
    about: {
      title: "Quién soy",
      profile: "Perfil profesional",

      intro: `
Soy un ingeniero de software senior, enfocado en frontend, que convierte
requerimientos de producto complejos en productos rápidos, accesibles y fáciles
de mantener — desde la interfaz hasta los servicios e infraestructura que la
sostienen. Me importa tanto el detalle que siente el usuario como la
arquitectura sobre la que se apoya el resto del equipo.
      `,

      experience: `
He construido durante [fill: # años] software en producción para el sector
financiero: liderando design systems, publicando una librería de componentes de
3 paquetes en npm usada por [fill: # equipos/productos] e integrando frontends
con servicios de IA y telefonía. Trabajo a diario en todo el stack con backend,
diseño y negocio, y defiendo la arquitectura limpia, el code review y la
accesibilidad.
      `,

      vision: `
Me hago cargo del ciclo completo de un producto: arquitectura, performance,
accesibilidad y el tooling que mantiene sano el código. Igual de hands-on con el
backend (Node, Fastify, PostgreSQL) y la infraestructura en cloud (AWS, Docker,
Terraform), llevando el trabajo de la idea a producción de punta a punta.
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
estrategia de versionado y la base de accesibilidad, reduciendo el tiempo de
construcción de UI en [fill: ~X%] para [fill: # equipos] y manteniendo la
consistencia a escala.
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
Diseñé el manejo de estado resiliente y una UX que se mantiene clara aun cuando
el flujo de fondo es complejo, atendiendo [fill: # llamadas/conversaciones] en
producción.
          `,
          stack: ["React", "Node.js", "Fastify", "Twilio", "PostgreSQL"],
          image: "/assets/images/projects/ai-twilio.webp",
        },
        {
          id: "sistema-saas",
          title: "Sistema SaaS",
          role: "Frontend Engineer · Arquitectura de producto",
          short:
            "Superficie de producto SaaS de punta a punta — arquitectura, modelo de componentes y navegación modelados sobre flujos reales.",
          description:
            "Una superficie de producto SaaS completa: diseñé la arquitectura de componentes, el sistema de layout y la navegación alrededor de flujos reales, usé IA para acelerar la primera versión y la refiné hasta una interfaz coherente y de calidad de producción — sin exponer datos sensibles. Un ejercicio de entregar una superficie de producto pulida y mantenible en poco tiempo.",
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
Abierto a roles senior de software / frontend — remoto (zonas horarias de EE. UU.) o reubicación. [fill: estatus de autorización laboral, ej. "Autorizado para trabajar en EE. UU." o "Abierto a patrocinio H-1B/TN"]. Las formas más rápidas de contactarme:
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

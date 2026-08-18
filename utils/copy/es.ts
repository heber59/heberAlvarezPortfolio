export const esCopy = {
  sections: {
    cover: {
      title: "Heber Alvarez",
      subtitle: "Frontend Engineer",
      tagline: "React y TypeScript · Experiencia Backend · Certificado en AWS",
      intro:
        "Transformo necesidades de negocio en productos digitales claros, escalables y de alto rendimiento.",
      explore: "Ver proyectos",
      contact: "Contáctame",
      hint: "Abre una pestaña para explorar",
    },
    about: {
      title: "Sobre mí",
      profile: "Perfil profesional",
      intro:
        "Soy Frontend Engineer especializado en React y TypeScript, con experiencia construyendo aplicaciones en producción, portales de gestión, sistemas de diseño y dashboards con alto volumen de datos.",
      experience:
        "Trabajo directamente con clientes y stakeholders para comprender sus necesidades y convertirlas en soluciones técnicas prácticas. Mi trabajo abarca arquitectura frontend, experiencia de usuario, APIs de componentes reutilizables, rendimiento, accesibilidad y mantenibilidad.",
      vision:
        "En una startup enfocada en inteligencia artificial, también contribuyo a definir el alcance y las capacidades de sistemas potenciados por IA. Creé un ecosistema de componentes con metadatos estructurados que permite a la IA comprender los componentes disponibles, sus casos de uso y cómo configurarlos, facilitando la creación de dashboards sencillos para usuarios no técnicos.",
      foundation:
        "Frontend es mi principal especialidad, complementada con experiencia práctica en desarrollo backend, CI/CD, publicación de paquetes npm e infraestructura en la nube. Cuento con la certificación AWS Certified Cloud Practitioner y actualmente me preparo para la certificación AWS Solutions Architect.",
      portraitAlt: "Retrato de Heber Alvarez",
    },
    projects: {
      title: "Proyectos seleccionados",
      eyebrowMain: "Proyectos y casos de estudio",
      intro:
        "Proyectos públicos y casos profesionales que muestran mi enfoque en arquitectura frontend, sistemas reutilizables, visualización de datos y experiencia del desarrollador.",
      privacy:
        "Algunos trabajos profesionales se presentan sin capturas, código fuente ni detalles del cliente debido a acuerdos de confidencialidad.",
      labels: {
        contribution: "Mi contribución",
        outcome: "Resultado",
        stack: "Stack",
        viewPackage: "Ver paquete",
        liveDemo: "Ver demo",
        source: "Ver código",
        close: "Cerrar",
        private: "Proyecto profesional privado",
      },
      items: [
        {
          id: "ai-ready-dashboards",
          title: "Sistema de diseño y dashboards preparados para IA",
          category: "Caso de estudio principal",
          status: "Trabajo profesional · Confidencial",
          summary:
            "Un ecosistema frontend reutilizable para portales de gestión y dashboards configurables al estilo Power BI. Componentes de gráficas tipados se adaptan a distintos escenarios, mientras metadatos estructurados describen capacidades, restricciones y casos de uso.",
          contribution:
            "Convertí requerimientos de clientes en arquitectura frontend y APIs de componentes; definí el sistema de diseño y los estándares visuales; creé configuraciones basadas en props y guías comprensibles por IA.",
          outcome:
            "Una base escalable que acelera la creación de dashboards y hace accesibles los flujos de configuración sencillos para usuarios no técnicos.",
          stack: ["React", "TypeScript", "Sistemas de diseño", "Visualización de datos", "Metadatos para IA"],
          private: true,
        },
        {
          id: "voronoi-map",
          title: "Mapa con imágenes satelitales y diagramas de Voronoi",
          category: "Caso de estudio",
          status: "Trabajo profesional · Confidencial",
          summary:
            "Un componente geoespacial interactivo que combina imágenes satelitales con diagramas de Voronoi para dividir, visualizar y resaltar zonas según los requisitos del negocio.",
          contribution:
            "Diseñé el componente desde los requerimientos del cliente, apliqué geometría de Voronoi, integré imágenes satelitales y creé patrones de configuración reutilizables.",
          outcome:
            "Una herramienta visual flexible que convierte información geográfica compleja en una interfaz comprensible y fácil de explorar.",
          stack: ["React", "TypeScript", "UI geoespacial", "Voronoi", "Visualización de datos"],
          private: true,
        },
        {
          id: "business-rules",
          title: "Librería configurable de reglas de negocio",
          category: "Código abierto · npm",
          status: "Paquete público",
          summary:
            "Un paquete npm reutilizable para definir y evaluar reglas de negocio configurables de manera independiente al código de interfaz.",
          contribution:
            "Diseñé una API extensible, modelé reglas configurables y gestioné el versionamiento semántico y la publicación en npm.",
          outcome:
            "Abstracciones claras que reducen la lógica duplicada y mejoran la mantenibilidad de aplicaciones configurables.",
          stack: ["TypeScript", "npm", "Diseño de paquetes", "Reglas de negocio", "Experiencia del desarrollador"],
          packageUrl: "https://www.npmjs.com/package/@isettingkit/business-rules",
        },
        {
          id: "portfolio",
          title: "Portafolio interactivo tipo carpeta",
          category: "Código abierto · Proyecto personal",
          status: "Proyecto público",
          summary:
            "Un portafolio bilingüe diseñado como una carpeta interactiva de dos hojas que explora navegación responsive, accesibilidad y transiciones de página.",
          contribution:
            "Diseñé e implementé el modelo de interacción, el contenido bilingüe, la distribución responsive de dos hojas y la navegación accesible.",
          outcome:
            "Una experiencia de portafolio distintiva que conserva su funcionalidad en escritorio y dispositivos móviles.",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          demoUrl: "https://heber-alvarez-portfolio.vercel.app/",
          sourceUrl: "https://github.com/heber59/heberAlvarezPortfolio",
        },
      ],
    },
    skills: {
      title: "Habilidades",
      eyebrow: "Capacidades",
      intro:
        "Un núcleo frontend sólido, respaldado por conocimientos de backend, entrega y nube para construir productos mantenibles.",
      groups: [
        { label: "Ingeniería frontend", items: ["React", "TypeScript", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Diseño responsive", "Accesibilidad", "Rendimiento"] },
        { label: "Sistemas frontend", items: ["Sistemas de diseño", "APIs de componentes", "Visualización de datos", "Dashboards", "Arquitectura frontend", "Gestión de estado", "Pruebas"] },
        { label: "Backend y entrega", items: ["Node.js", "APIs REST", "Python", "SQL/NoSQL", "Paquetes npm", "Versionamiento", "CI/CD", "Docker"] },
        { label: "Cloud y flujos con IA", items: ["Fundamentos de AWS", "Experiencia con GCP", "Interfaces asistidas por IA", "Metadatos de componentes", "Herramientas de IA"] },
      ],
      certification: "AWS Certified Cloud Practitioner",
    },
    contact: {
      title: "Construyamos algo útil",
      eyebrow: "Hablemos",
      body:
        "Me interesan oportunidades de frontend engineering en las que pueda resolver problemas reales de producto, colaborar de cerca con clientes y equipos, y construir experiencias claras y mantenibles.",
      detail:
        "Si trabajas con React, TypeScript, sistemas de diseño, visualización de datos o interfaces asistidas por IA, conversemos.",
      channels: [
        { id: "email", label: "Escríbeme", value: "hesan0308@gmail.com", href: "mailto:hesan0308@gmail.com" },
        { id: "linkedin", label: "LinkedIn", value: "Heber Santiago Alvarez", href: "https://www.linkedin.com/in/heber-santiago-alvarez-rincon-799427230/" },
        { id: "github", label: "GitHub", value: "github.com/heber59", href: "https://github.com/heber59" },
        { id: "npm", label: "npm", value: "@isettingkit/business-rules", href: "https://www.npmjs.com/package/@isettingkit/business-rules" },
        { id: "cv", label: "Descargar CV", value: "PDF", href: "/Heber_Alvarez.pdf", download: true },
      ],
    },
  },
  ui: {
    tabs: { cover: "Portada", about: "Sobre mí", projects: "Proyectos", skills: "Habilidades", contact: "Contacto" },
    previous: "Anterior",
    next: "Siguiente",
    page: "Página",
    language: "Idioma",
  },
} as const;


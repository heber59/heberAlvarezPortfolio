<img width="1440" height="1640" alt="image" src="https://github.com/user-attachments/assets/828439bd-a229-4883-8724-2d50d98f5927" />
# Heber Álvarez — Portfolio

Frontend Senior con visión de infraestructura. Este portfolio no es una página estática — es un sistema distribuido donde cada proyecto corre de forma independiente en AWS.

---

## Arquitectura

El portfolio es una **shell app en Next.js (Vercel)** que carga 4 microfrontends independientes, cada uno desplegado en su propia instancia EC2 en AWS con alta disponibilidad, autoscaling y CDN.

```
Portfolio (Vercel)
 └── Proyectos
      ├── microfrontend-1.heber.dev  → EC2 · AZ-1a + AZ-1b
      ├── microfrontend-2.heber.dev  → EC2 · AZ-1a + AZ-1b
      ├── microfrontend-3.heber.dev  → EC2 · AZ-1a + AZ-1b
      └── microfrontend-4.heber.dev  → EC2 · AZ-1a + AZ-1b
```

Cada microfrontend tiene: Route 53 → ALB → Auto Scaling Group (t2.micro) → Docker → S3 + CloudFront. Todo provisionado con **Terraform**.

---

## Proyectos

### 1 · Proyecto actual
Interfaz tipo carpeta/binder. Animaciones page-flip con Framer Motion, i18n EN/ES, diseño minimalista.
`Next.js · TypeScript · Tailwind · Framer Motion`

### 2 · UI Component Library
Librería de componentes publicada en **npm**, documentada con Storybook. Diseñada para ser consumida por equipos — API clara, stories interactivas, checks de accesibilidad.
`React · Rollup · Storybook · npm`

### 3 · Market AI Predictor
IA que predice tendencias del mercado financiero. Dashboard interactivo con visualización de predicciones e intervalos de confianza.
`React · FastAPI · Python · ML · Recharts`

### 4 · CodeSweep CLI
Linter/analizador de código ejecutable con `npx codesweep ./src`. Detecta código muerto, variables sin usar y malas prácticas via AST parsing. Demo interactiva en browser con Monaco Editor.
`Node.js · AST · Commander.js · React · npm`

---

## Stack & Skills demostrados

| Área | Tecnologías |
|------|------------|
| Frontend | Next.js · React 19 · TypeScript · Tailwind · Framer Motion |
| Backend | FastAPI · Node.js · REST |
| DevOps / Cloud | AWS EC2 · ALB · ASG · S3 · CloudFront · Route 53 |
| IaC | Terraform (módulo reutilizable por proyecto) |
| Contenedores | Docker · ECR |
| Herramientas | npm publish · Storybook · AST parsing · CLI design |

---

> Infraestructura dentro de AWS Free Tier. Todo el stack definido como código con Terraform.

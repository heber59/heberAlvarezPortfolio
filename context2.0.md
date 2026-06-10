# CONTEXT.md — Contexto técnico completo del sistema

> Este archivo es el contexto de referencia para herramientas de IA (Claude, Copilot, Cursor, etc.).
> Describe la arquitectura, los proyectos, las decisiones tomadas y el estado actual de implementación.

---

## 1. Sistema general

**Portfolio shell:** `heberAlvarezPortfolio` — Next.js 16 + React 19 + TypeScript + Tailwind CSS + Framer Motion. Hosteado en Vercel. Repositorio: `github.com/heber59/heberAlvarezPortfolio`.

**Microfrontends:** 4 aplicaciones independientes. Cada una tiene su propio repo, su propio stack, su propio dominio y su propio stack AWS. El shell los integra via `<iframe>` apuntando a `https://microfrontend-N.heber.dev`.

**Infraestructura:** AWS. IaC con Terraform. Repositorio de infra: `portfolio-infra/` (pendiente de crear).

**Dominio:** `heber.dev`. Zona hosted en Route 53. Certificado wildcard `*.heber.dev` en ACM.

---

## 2. Arquitectura AWS por microfrontend

```
Usuario
  → Route 53 (microfrontend-N.heber.dev → ALB alias)
  → ALB compartido (host-based routing, HTTPS, certificado ACM)
  → Auto Scaling Group
      min=1 max=2 desired=1
      Launch Template: t2.micro · Amazon Linux 2023 · EBS 8GB gp2
      user-data: instala Docker, pull imagen ECR, docker run -p 80:3000
      AZ: us-east-1a + us-east-1b
  → EC2 t2.micro (Docker → app en puerto 3000)
  → assets estáticos: S3 (privado) + CloudFront (OAC, cache 1 año)
```

**ALB:** 1 ALB compartido entre los 4 proyectos con listener rules por host header. Reduce costo de ~$64/mes a ~$16/mes.

**Autoscaling policy:** `CPUUtilization > 70%` durante 300s → lanza segunda instancia. Cooldown 300s.

**Health check:** ALB → `GET /health` en puerto 80 → espera HTTP 200.

**Seguridad:**
- ALB SG: inbound 443+80 desde 0.0.0.0/0. Outbound → EC2 SG.
- EC2 SG: inbound 80 solo desde ALB SG. Puerto 22 solo desde IP personal.
- EC2 Instance Profile: permisos mínimos — ECR pull + S3 read del bucket propio.
- Secretos via AWS SSM Parameter Store (no hardcodeados).

---

## 3. Terraform

**Estructura:**
```
portfolio-infra/
  modules/microfrontend/     ← módulo reutilizable
    main.tf                  ← EC2, Launch Template, ASG, scaling policy, CloudWatch alarm
    alb.tf                   ← Target Group, Listener Rule (host-based)
    s3.tf                    ← Bucket assets, CloudFront distribution, OAC
    dns.tf                   ← Route 53 A record alias → ALB
    security.tf              ← Security Groups, IAM Role, Instance Profile
    variables.tf             ← project_name, subdomain, docker_image, vpc_id, subnet_ids...
    outputs.tf               ← alb_dns, s3_bucket_name, cloudfront_domain
  envs/
    shared/                  ← Route 53 hosted zone + ACM cert (se crean una sola vez)
    mf-proyecto-1/           ← llama al módulo con sus variables
    mf-proyecto-2/
    mf-proyecto-3/
    mf-proyecto-4/
```

**Remote state:** backend S3, bucket `heber-portfolio-tfstate`, key `mf-proyecto-N/terraform.tfstate`.

**Inputs clave del módulo:** `project_name`, `subdomain`, `docker_image` (URI ECR), `vpc_id`, `subnet_ids`, `route53_zone_id`, `acm_certificate_arn`.

---

## 4. Proyectos / Microfrontends

### MF-01 — Proyecto actual
- **Repo:** `github.com/heber59/heberAlvarezPortfolio` (mismo repo, se dockeriza)
- **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS · Framer Motion
- **Estado:** código existente. Pendiente: Dockerfile, push a ECR, Terraform apply.
- **Puerto interno Docker:** 3000
- **Ruta health check:** `/api/health` (hay que crearlo) o `/` con 200.

### MF-02 — UI Component Library
- **Repo:** pendiente de ubicar / confirmar
- **Stack:** React · TypeScript · Rollup · Storybook 7 · npm registry
- **Lo que se despliega:** Storybook build estático (`npm run build-storybook` → `storybook-static/`) servido con Nginx.
- **Dockerfile:** multi-stage — builder (Node 20) → Nginx alpine sirve `/usr/share/nginx/html`.
- **Puerto interno Docker:** 80
- **Pendiente:** confirmar nombre del paquete npm, definir si mostrar Storybook completo o curado.

### MF-03 — Market AI Predictor
- **Repo:** propio de Heber (100% suyo)
- **Stack frontend:** React · TypeScript · Recharts (visualización series de tiempo)
- **Stack API:** FastAPI (Python 3.11+) · scikit-learn o Prophet (modelo ML)
- **Datos:** API pública de mercado (Yahoo Finance via `yfinance` o Alpha Vantage)
- **Arquitectura interna:** frontend React llama a `/api/predict?symbol=AAPL&days=7` → FastAPI corre modelo → retorna `{ predictions: [{date, value, lower, upper}], confidence: float }`.
- **Dockerfile:** multi-stage. Build frontend → FastAPI sirve el static + la API en el mismo proceso (o Nginx + uvicorn en dos procesos via supervisord).
- **Puerto interno Docker:** 8000 (FastAPI) o 80 (Nginx proxy).
- **Pendiente:** definir modelo final, activos por defecto, si usar datos reales o simulados en demo.

### MF-04 — CodeSweep CLI
- **Repo:** pendiente de crear
- **Paquete npm:** nombre a confirmar (verificar disponibilidad de `codesweep` en npm)
- **CLI:** Node.js · Commander.js · chalk · ora · cli-table3
- **Motor AST:** `@typescript-eslint/parser` para TS/JS. Recorre nodos del AST, cada regla es una función `(node, context) => Issue[]`.
- **Reglas MVP:** `unused-variables`, `dead-code` (código después de return), `console-log-left`, `empty-catch`, `missing-await`.
- **Frontend demo:** React · Monaco Editor (editor igual que VS Code en browser). Usuario pega código → llama a `POST /api/analyze` → muestra issues con línea, regla y severidad.
- **API:** Express o FastAPI mínimo que recibe `{ code: string, language: string }` y retorna `{ issues: [{line, column, rule, severity, message}] }`.
- **Dockerfile:** build frontend → Nginx sirve la demo + API Node en mismo contenedor.
- **Puerto interno Docker:** 80.
- **Pendiente:** nombre npm, primeras 5 reglas, decisión WASM (análisis en browser) vs API (análisis en servidor).

---

## 5. Integración shell ↔ microfrontend

El shell (`heberAlvarezPortfolio`) carga cada proyecto en `<iframe>`:

```tsx
// components/ProjectViewer.tsx
<iframe
  src={project.microfrontendUrl}         // https://microfrontend-N.heber.dev
  sandbox="allow-scripts allow-same-origin"
  loading="lazy"
  onLoad={adjustHeight}                  // postMessage para altura dinámica
/>
```

Comunicación via `window.postMessage`:
- Microfrontend → Shell: `{ type: 'resize', height: number }` para ajustar alto del iframe.
- Shell → Microfrontend: `{ type: 'theme', value: 'dark' | 'light' }` para sincronizar tema.

Los microfrontends deben incluir en su servidor los headers:
```
Content-Security-Policy: frame-ancestors https://heber-alvarez-portfolio.vercel.app
X-Frame-Options: ALLOW-FROM https://heber-alvarez-portfolio.vercel.app
```

---

## 6. CI/CD (pendiente de implementar)

Flujo previsto por microfrontend:
```
git push main
  → GitHub Actions
  → docker build + push a ECR
  → terraform apply -var="docker_image=<nueva URI>"
  → ASG rolling update (nueva Launch Template version)
  → zero downtime
```

---

## 7. Estado actual de implementación

| Componente | Estado |
|-----------|--------|
| Shell (portfolio) | ✅ Desplegado en Vercel |
| Arquitectura AWS diseñada | ✅ Documentada |
| Terraform módulo | ⏳ Por implementar |
| MF-01 Dockerfile | ⏳ Por crear |
| MF-02 identificar repo | ⏳ Pendiente |
| MF-03 frontend integrado | ⏳ Por crear |
| MF-04 repo y CLI base | ⏳ Por crear |
| Route 53 + ACM | ⏳ Por aplicar |
| ALB compartido | ⏳ Por aplicar |

---

## 8. Decisiones tomadas

| Decisión | Elección | Motivo |
|---------|----------|--------|
| Integración microfrontend | iframe + postMessage | Aislamiento total; cada proyecto usa stack diferente |
| ALB | 1 compartido con host-based routing | Reduce costo de $64/mes a $16/mes |
| Terraform state | Backend S3 | Portable entre máquinas; práctica estándar |
| Región AWS | us-east-1 | Mayor cobertura de servicios y free tier |
| Instancia EC2 | t2.micro | Free tier; suficiente para portfolio |
| Storybook (MF-02) | Build estático + Nginx | Más simple que SSR; no necesita Node en runtime |

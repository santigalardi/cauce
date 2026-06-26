@AGENTS.md

# PrestoBots Salud — Landing Page

Landing de marketing para **PrestoBots SALUD**, vertical de salud de PrestoBots.
Vivirá en el subdominio **`landing.prestobots.com`**, separado del sitio Divi/WordPress actual en `prestobots.com/salud/`.

---

## REGLA CRÍTICA — Contenido

**No inventar copy.** Todo texto que aparezca en la landing tiene que estar validado por el cliente o tomado del **Playbook DigitalYa Marzo 2026** (fuente oficial). Si algo no está confirmado, dejar `[pendiente: …]` como placeholder explícito y preguntar antes de inventar nada. Los números (métricas, %, $) tienen que venir del playbook o del cliente, nunca inventados.

---

## El proyecto, en una frase

PrestoBots SALUD es un **bot de WhatsApp con IA** que automatiza el ciclo completo del turno (agendamiento, confirmación, recordatorio, cancelación, re-agendamiento) para clínicas y consultorios. Está integrado nativamente al HIS **Geclisa** (de Macena, +200 implementaciones en Argentina).

**Posicionamiento estratégico (del playbook):** **NO es "un bot de turnos", es "infraestructura de rentabilidad"**. El target es alto ticket B2B, no transaccional.

---

## Datos validados (del Playbook DigitalYa, Marzo 2026)

Estos son los **únicos números** que pueden aparecer en la landing sin nuevo OK del cliente:

- **+1.000.000 de turnos gestionados**
- **+3.000.000 chats procesados al mes** (actualizado jun-2026; antes el Playbook registraba +200.000)
- **80% de autogestión** (% de turnos que el bot resuelve sin intervención humana)
- **6 años de experiencia** en salud
- **+40 clínicas** activas operando con PrestoBots (clientes reales, no mercado direccionable)
- **+200 clínicas** en la base instalada Macena/Geclisa (mercado direccionable — NO usar como "clientes")
- **Clientes reales nombrables:** CentroVisión, Clínica Lanús, CITO, Asistir

---

## Propuesta de valor — 5 pilares (validados)

| Pilar | Descripción |
|---|---|
| **Trazabilidad 360º** | Registro de cada interacción del paciente desde primer contacto hasta post-servicio. |
| **Scoring de Pacientes** | Calificación automática por perfil e historial para priorizar gestión comercial. |
| **Dato Estratégico** | Información estructurada para tomar decisiones (demanda insatisfecha, ocupación real). |
| **Rentabilidad Operativa** | Algoritmos para eliminar huecos en agenda y reducir No-Show. |
| **Integración Nativa** | Conectado al HIS existente (Geclisa), sin fricción de implementación. |

---

## Buyer Persona — "Ricardo"

- **Quién:** Director Médico o Gerente de Operaciones, 45-55 años, clínica mediana-grande.
- **Dolor real:** **Fuga de rentabilidad invisible.** No sabe cuánto pierde por turnos vacíos, cancelaciones sin re-agendar y WhatsApp manual. Busca optimizar márgenes sin contratar más personal.
- **Drivers de compra:** ROI demostrable, visibilidad de demanda insatisfecha, reducción de carga operativa en su equipo.
- **Frase que lo activa:** *"Nosotros nos encargamos del caos del día a día para que tu equipo se enfoque en lo estratégico."*

### Pain points priorizados (referencia para titulares y bullets)

| Código | Pain Point |
|---|---|
| PP1.1 | Volumen de WhatsApp ingestionable: 40+ mensajes/día, equipo desbordado. |
| PP1.2 | Fuga de facturación invisible: turnos vacíos, **No-Shows del 20-35%**, sin datos para auditar. |
| PP1.3 | Obsolescencia competitiva: otras clínicas ya automatizan y capturan pacientes más rápido. |
| PP2.1 | Integración técnica compleja: miedo a romper flujos existentes (BP secundario: IT). |

---

## Competencia (lo que NO somos)

| Competidor | Su debilidad vs PrestoBots |
|---|---|
| Merlín (Kunan) | Posicionamiento "mágico", sin scoring predictivo, precio alto |
| Cero.ai | Enlatado rígido, sin personalización dinámica por clínica |
| Vambe Health (Serie A $14M) | Generalista, sin integración nativa con HIS argentinos |
| AsistiClick | Pricing complejo, no especializado en salud |

**Ventaja competitiva central (a comunicar):** *"Único que combina especialización vertical en salud + integración nativa con HIS + automatización completa del ciclo del turno + 6 años de datos reales."*

---

## DECISIÓN CRÍTICA — Formulario en lugar de WhatsApp directo

El playbook explícitamente identifica esto como problema #1 del sitio actual:

> *"CTA principal («Agendar DEMO») redirige a WhatsApp (wa.me/...). No hay formulario, no hay tracking del lead, no se captura información antes del contacto. Es imposible medir conversión."*

**Acción:** la landing nueva tiene un **formulario de captura** dentro de la misma página (no es un mailto ni un wa.me). Campos según el playbook:

- Nombre (requerido)
- Clínica / Institución (requerido)
- Email corporativo (requerido)
- Teléfono / WhatsApp (requerido)
- Cantidad de médicos (select: 1-5 / 6-15 / 16-50 / +50)
- Software de gestión actual (select: Geclisa / Otro / Ninguno)
- Volumen aproximado de turnos/mes (opcional)
- Mensaje (opcional)

El CTA principal del hero apunta a `#form` (ancla a la sección de formulario en la misma landing). Por ahora el `<form>` queda con `action` placeholder — la integración con HubSpot u otro backend se conecta después.

---

## Inventario de assets (`src/assets/` → mover a `public/`)

| Archivo original | Renombrar a | Descripción / Uso sugerido |
|---|---|---|
| `logo.png` | `logo.png` | Logo PrestoBots — bot amarillo con bocadillo, texto "prestoBots / Asistente virtual" |
| `image.png` | `hero-ecosystem.png` | Diagrama: panel + smartphone con bot + perfiles de pacientes + iconos "-Tiempo / -Costos / +automatización". Apto para hero. |
| `image copy.png` | `illustration-analytics.png` | Mujer + dashboards/datos + bot. Sección "Dato estratégico" / scoring. |
| `image copy 2.png` | `illustration-attraction.png` | Mujer en laptop + hombre en celular + imán. Sección "Atracción / engagement". |
| `image copy 3.png` | `mockup-mobile.png` | Mockup de dos celulares con UI del bot. Sección "Cómo funciona / producto". |
| `image copy 4.png` | `icon-dashboard.png` | Icono pequeño de dashboard. Para feature cards. |
| `image copy 5.png` | `icon-customization.png` | Icono pequeño engranaje + escuadra. Feature card. |
| `image copy 6.png` | `icon-experience.png` | Icono pequeño "thumbs up". Feature card. |
| `image copy 7.png` | `icon-data.png` | Icono pequeño DB + check. Feature card. |
| `image copy 8.png` | `illustration-executive.png` | Hombre en laptop + dashboards + bot. Sección "Para quién es" (Director Médico). |
| `image copy 9.png` | `icon-integration.png` | Icono puzzle. Feature: integración nativa. |
| `image copy 10.png` | `illustration-team.png` | Equipo trabajando con bot + reportes. Sección beneficios para el equipo. |
| `image copy 11.png` | `cta-bubble.png` | Bocadillo: *"¿Te gustaría empezar ahora? Estoy para servirte"*. CTA decorativo. |

Todas las ilustraciones son del **mismo sistema gráfico**: trazo a mano alzada, paleta amarillo + negro + blanco, líneas finas. **Esa es la identidad visual real de PrestoBots.**

---

## Paleta corregida (basada en marca real, no en CSS de Divi)

> ⚠️ La paleta morada que extraje antes (`#7e3bd0` etc.) viene del CSS de `prestobots.com/salud/` — es de **Divi/WordPress**, no de la marca PrestoBots. Las ilustraciones y el logo confirman que la marca real es **amarillo + negro**.

| Token | Hex | Uso |
|---|---|---|
| `--color-brand-yellow` | `#FFCC33` | Amarillo PrestoBots — CTA principal, acentos |
| `--color-brand-yellow-hover` | `#FFBF00` | Hover del amarillo |
| `--color-ink` | `#000000` | Negro — botones primarios, headings, base del logo |
| `--color-bg` | `#FFFFFF` | Fondo principal |
| `--color-surface` | `#FAFAFA` | Secciones alternas claras |
| `--color-surface-alt` | `#F3F3F3` | Secciones alternas medias |
| `--color-border` | `#E2E2E2` | Bordes/dividers |
| `--color-heading` | `#1A1A1A` | Títulos |
| `--color-body` | `#444444` | Cuerpo |
| `--color-muted` | `#888888` | Secundario |
| `--color-success` | `#29C4A9` | Acento opcional (teal de la landing actual) |

**Tipografía:** Open Sans (body) + Source Sans 3 (display) — vía `next/font`.

---

## Estructura de la landing (mapeada al playbook §2.1 "Mejoras propuestas para la web")

1. **Header / NavBar** — logo + nav simple + CTA "Agendar demo" (anchor a #form)
2. **Hero** — foco en *"Rentabilidad + Trazabilidad"* con números reales. CTA principal → `#form`. Ilustración `hero-ecosystem.png` a la derecha.
3. **Métricas** — strip de 4 KPIs (+1M turnos, +200K chats/mes, 80% autogestión, 6 años)
4. **Problema** — pain points (PP1.1 / PP1.2 / PP1.3) reformulados en bullets de impacto.
5. **Producto / Cómo funciona** — captura del bot en WhatsApp + 3 pasos del flujo. Mockup `mockup-mobile.png`.
6. **5 Pilares** — Trazabilidad / Scoring / Dato / Rentabilidad / Integración. Cards con iconos.
7. **Para quién es** — descripción del Director Médico (Ricardo). Ilustración `illustration-executive.png`.
8. **Prueba social** — logos placeholder (CentroVisión, Clínica Lanús, CITO, Asistir) — **logos reales pendientes** del cliente.
9. **Diferencial vs competencia** — bloque corto con la frase *"único que combina…"*.
10. **Formulario de captura** (`#form`) — el corazón de la conversión. Reemplaza al WhatsApp directo.
11. **CTA final** — refuerzo + bocadillo decorativo (`cta-bubble.png`).
12. **Footer** — links a privacidad, términos, contacto, redes.

---

## Pendientes del cliente (bloquean cierre de la landing)

- **Logos reales** de CentroVisión, Clínica Lanús, CITO, Asistir (en SVG/PNG transparente).
- **Testimoniales** focalizados (Maru lo coordinaba con Ale en la reunión de abril) — texto + autor + idealmente video corto.
- **Email de contacto general** (`hola@…` / `soporte@…`) — pendiente al momento de la reunión.
- **Endpoint del formulario** — ¿HubSpot embed? ¿Webhook propio? Por ahora `<form>` queda con action vacío.
- **Pricing concreto** si se quiere mostrar — el playbook menciona *"desde $60.000 ARS/mes plan premium"* pero hay que confirmar si va en la landing o no.
- **URL de "probar gratis" / signup** si se decide ofrecer plan freemium en SALUD (el playbook tiene una pregunta abierta sobre esto en §9.1).
- **Pixel de Meta + GTM + GA4** — no es bloqueante para construir, pero el playbook lo lista como prioridad #1 técnica antes de pautar.

---

## Stack y arquitectura

- **Next.js 16.2.9** (App Router) — pre-render estático para SEO y previews de OG.
- **React 19.2** + **TypeScript 5**.
- **Tailwind CSS v4** — paleta y tokens en `src/app/globals.css` vía `@theme`. NO existe `tailwind.config.js` en v4.
- **`next/font`** — Open Sans + Source Sans 3 auto-hospedadas.
- **Deploy:** Cloudflare Workers vía **OpenNext** (`@opennextjs/cloudflare`). Worker `cauce`.

### Deploy en Cloudflare Workers (OpenNext)

El repo tiene config de Cloudflare versionada — NO dejar que el build server auto-genere nada:

- **`wrangler.jsonc`** (commiteado) — `name: cauce` + binding `WORKER_SELF_REFERENCE → cauce`.
  Ese binding tiene que apuntar al mismo nombre del Worker, si no falla con
  `Service binding 'WORKER_SELF_REFERENCE' references Worker '...' which was not found`.
- **`open-next.config.ts`** (commiteado) — `defineCloudflareConfig()`.
- **`.open-next/`, `.dev.vars`, `.wrangler/`, `cloudflare-env.d.ts`** van en `.gitignore`.

**Comandos en el dashboard de Cloudflare (Settings → Build):**

- Build command: `npm run build`
- Deploy command: **`npm run deploy`** (= `opennextjs-cloudflare build && opennextjs-cloudflare deploy`)
- Non-production branch deploy: **`npm run preview`** (= `opennextjs-cloudflare build && opennextjs-cloudflare preview`)

⚠️ NO usar `npx wrangler deploy` / `npx wrangler versions upload` como deploy command:
sin el `opennextjs-cloudflare build` previo falla con `Could not find compiled Open Next config`.

⚠️ `@opennextjs/cloudflare` exige `next >= 16.2.6` (por eso 16.2.9, no 16.2.5).

### Convenciones de código

- **App Router** (`src/app/`), no Pages Router.
- **Server Components por default.** Solo `"use client"` cuando hay interactividad real (formulario controlado, animaciones JS, etc.).
- **Metadata SEO** centralizada en `src/app/layout.tsx`. Cada página puede sobrescribir vía export `metadata`.
- **`@AGENTS.md`** advierte que esta versión de Next puede tener APIs distintas — leer `node_modules/next/dist/docs/01-app/` ante dudas.
- **Imágenes** — usar `next/image` con `Image` desde `next/image`. Imports estáticos desde `public/` con paths absolutos `/nombre.png`.

---

## Contexto adicional — reunión Up to date (30 abr 2026)

(Mantengo lo relevante de la reunión PrestoBots × DigitalYa que ya tenía documentada.)

- Concepto rápido, sin tardar 15 días — proceso ágil porque hay que lanzar ads cuanto antes.
- "Anclaje rápido" identificado por Maru: **testimoniales** (2-3) + idealmente video corto.
- Embudo va al **registro/signup**, no a un formulario de leads "frío" — pero ojo: el playbook que llegó después corrige esto: el formulario **sí** existe, pero como **captura calificada** que alimenta HubSpot, no como "formulario de contacto" tradicional. Es un híbrido: form → demo agendada.
- Plan gratuito como puerta de entrada (en el producto, no necesariamente comunicado en hero — depende del posicionamiento de alto ticket).
- Sin atención humana como diferencial: el bot + knowledge base + email son suficientes para soporte.
- Naming comercial actual: **PrestoBot Salud** (Calma queda como marca futura, fuera de scope).

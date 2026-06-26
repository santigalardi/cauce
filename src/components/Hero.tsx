import Image from "next/image";
import WhatsAppLink from "@/components/WhatsAppLink";

/* Datos validados del playbook DigitalYa (CLAUDE.md). NO inventar números. */
const TICKER_ITEMS = [
  "3.000.000 chats procesados este mes",
  "+1M turnos gestionados desde 2020",
  "80% de autogestión real",
  "Integración nativa con tu HIS",
  "6 años operando en clínicas argentinas",
];

/* Chat ilustrativo del hero — la animación está en globals.css.
   El orden de este array define el escalonado de aparición: la burbuja N usa
   la clase .hero-bubble-N (keyframe propio con su % de entrada en el ciclo de
   14s). Todas se desvanecen juntas al final → el chat se limpia antes de
   re-simular. Si agregás/quitás mensajes, ajustá los keyframes hero-bubble-N. */
const HERO_CHAT = [
  {
    side: "user" as const,
    text: "Hola! Necesito turno con el Dr. Pereyra.",
    time: "10:42",
  },
  {
    side: "bot" as const,
    text: "Hola María 👋 Tengo estos horarios disponibles esta semana:",
    time: "10:42",
  },
  {
    side: "bot" as const,
    text: "• Mié 12 nov · 15:00\n• Jue 13 nov · 11:15",
    time: "10:42",
  },
  {
    side: "user" as const,
    text: "El miércoles a las 15 perfecto 🙌",
    time: "10:43",
  },
  {
    side: "bot" as const,
    text: "Listo ✅ Turno reservado para el mié 12/11 · 15:00. Te recuerdo 24 hs antes.",
    time: "10:43",
  },
];

/* KPIs que aparecen como "dossier strip" debajo del hero */
const KPIS = [
  { number: "1.000.000+", label: "turnos\ngestionados", caption: "DESDE 2020" },
  { number: "3.000.000+", label: "chats\nprocesados/mes", caption: "VOLUMEN ACTUAL" },
  { number: "80%", label: "autogestión\nsin humanos", caption: "TASA REAL" },
  { number: "6", label: "años en\nsalud B2B", caption: "EXPERIENCIA" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      {/* Ticker — debajo del navbar */}
      <div className="border-b border-paper-line">
        <div className="container-page py-2.5 flex items-center gap-4">
          <div className="flex-1 overflow-hidden relative">
            <div className="marquee">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span
                  key={i}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted px-6 whitespace-nowrap"
                >
                  ▸ {item}
                </span>
              ))}
            </div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Contenido principal del hero */}
      <div className="relative pt-14 pb-20 md:pt-12 md:pb-32">
        {/* Wash cálido — degradé sutil del crema hacia brand-soft */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(120% 90% at 78% 30%, var(--color-brand-soft) 0%, transparent 55%)",
            opacity: 0.7,
          }}
        />
        {/* Isotipo ∞ de Cauce — marca de agua, mejor anclada detrás del teléfono */}
        <Image
          src="/logos/cauce-iso-gold.png"
          alt=""
          aria-hidden="true"
          width={683}
          height={314}
          priority
          className="hidden lg:block absolute -z-10 right-[-10%] top-[38%] -translate-y-1/2 w-[58%] max-w-[820px] h-auto opacity-[0.13] pointer-events-none select-none"
        />

        {/* Línea de flujo (cauce) — se dibuja sola y conecta el mensaje con el producto */}
        <svg
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <defs>
            <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--color-brand-yellow)" stopOpacity="0" />
              <stop offset="22%" stopColor="var(--color-brand-yellow)" stopOpacity="0.85" />
              <stop offset="78%" stopColor="var(--color-brand-yellow)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="var(--color-brand-yellow)" stopOpacity="0.2" />
            </linearGradient>
            <filter id="flow-glow" x="-20%" y="-40%" width="140%" height="180%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Cauce de fondo — trazo ancho difuso (el "agua") */}
          <path
            d="M -40 560 C 320 560, 360 300, 660 300 S 980 360, 1240 220"
            stroke="var(--color-brand-yellow)"
            strokeWidth="14"
            strokeLinecap="round"
            className="flow-line"
            opacity="0.07"
            style={{ filter: "blur(4px)" }}
          />
          {/* Cauce principal — trazo nítido con degradé y glow */}
          <path
            id="cauce-flow"
            d="M -40 560 C 320 560, 360 300, 660 300 S 980 360, 1240 220"
            stroke="url(#flow-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="flow-line"
            filter="url(#flow-glow)"
          />
          {/* Partícula de luz que recorre el cauce */}
          <circle r="5" fill="var(--color-brand-yellow)" filter="url(#flow-glow)">
            <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#cauce-flow" />
            </animateMotion>
            <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.1;0.9;1" />
          </circle>
        </svg>

        <div className="container-page grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna izquierda — titular editorial */}
          <div className="lg:col-span-7">
            <p className="label-mono mb-5 rise rise-1 flex flex-wrap items-center gap-x-2.5 gap-y-1">
              {/* Mini-isotipo ∞ de Cauce como bullet de marca */}
              <svg width="20" height="10" viewBox="0 0 683 314" fill="none" aria-hidden="true" className="shrink-0">
                <path
                  d="M512 27c-86 0-140 76-170 130-30 54-72 130-170 130-64 0-115-52-115-130S122 27 172 27c98 0 140 76 170 130 30 54 84 130 170 130 64 0 115-52 115-130S562 27 512 27Z"
                  stroke="var(--color-brand-yellow)"
                  strokeWidth="34"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-ink font-bold">Vertical Salud</span>
              <span className="text-faint hidden sm:inline">·</span>
              <span className="w-full sm:w-auto">Para directores y gerentes operativos</span>
            </p>

            <h1
              className="text-[44px] sm:text-[56px] lg:text-[64px] font-display leading-[1.03] tracking-[-0.03em] text-heading mb-6 rise rise-2"
              style={{ fontWeight: 600 }}
            >
              Recuperá la
              <br />
              <span className="text-brand">facturación</span> que tu
              <br />
              <span className="text-brand-deep">agenda pierde</span>
              <br />
              <span className="text-muted" style={{ fontWeight: 400 }}>
                en silencio.
              </span>
            </h1>

            <p className="text-[17px] md:text-[18px] text-body leading-[1.5] max-w-[560px] mb-7 rise rise-3">
              Bot de WhatsApp integrado nativamente a tu HIS. Automatiza el
              ciclo completo del turno, audita conversaciones, conocé a tu cliente y
              eliminá la fuga de ingresos que tus planillas no pueden ver.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 rise rise-4">
              <WhatsAppLink location="hero" className="btn-yellow group w-full sm:w-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablar con el bot
              </WhatsAppLink>
              <a href="#pilares" className="btn-ghost w-full sm:w-auto">
                Ver beneficios
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
            </div>

            <a
              href="#form"
              className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-ink transition-colors mt-2 mb-10 rise rise-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Enterate si estamos integrados a tu HIS
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            {/* Mini-firma estilo editorial */}
            <div className="flex items-center gap-3 text-[13px] text-muted rise rise-5">
              <div className="flex -space-x-2">
                {["#D4A55C", "#6E2E3A", "#5C7A5C", "#f4ede0"].map((color, i) => (
                  <span
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-bg"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <span>
                <strong className="text-ink font-semibold">+40 clínicas</strong>{" "}
                ya operan con Cauce
              </span>
            </div>
          </div>

          {/* Columna derecha — iPhone limpio. En mobile, margen extra para que
              quede debajo del fold del primer viewport y aparezca al scrollear. */}
          <div className="lg:col-span-5 relative rise rise-3 flex justify-center mt-16 lg:mt-0">
            {/* iPhone 17 Pro Max — chasis grafito, Dynamic Island */}
            <div className="relative w-[280px]">
              {/* Sombra cálida única que apoya el teléfono en el fondo */}
              <div
                className="absolute -inset-x-8 bottom-2 top-16 -z-10 pointer-events-none opacity-70 blur-2xl"
                style={{
                  background:
                    "radial-gradient(60% 55% at 50% 60%, rgba(61,26,31,0.18), transparent 70%)",
                }}
              />
              {/* Marco exterior — grafito profundo con sutil brillo lateral */}
              <div
                className="relative rounded-[52px] p-[2px] shadow-[0_40px_90px_-30px_rgba(61,26,31,0.55),0_8px_24px_rgba(110,46,58,0.18),0_0_0_1px_rgba(0,0,0,0.08)]"
                style={{
                  background:
                    "linear-gradient(135deg, #2a2a2c 0%, #1a1a1c 25%, #0e0e10 50%, #1a1a1c 75%, #2a2a2c 100%)",
                }}
              >
                {/* Bisel interno (negro puro, profundidad) */}
                <div className="rounded-[50px] p-[6px] bg-[#050505]">
                  {/* Pantalla */}
                  <div
                    className="relative bg-[#ECE5DD] rounded-[44px] overflow-hidden"
                    style={{ aspectRatio: "9 / 19.5" }}
                  >
                    {/* Status bar — fondo del header WhatsApp, con hueco para la Island */}
                    <div className="relative bg-[#075E54] text-white pt-[18px] pb-1.5 px-6 flex items-center justify-between text-[11px] font-semibold">
                      <span className="tabular-nums z-10">10:42</span>
                      <span className="flex items-center gap-1.5 z-10">
                        {/* Señal */}
                        <svg width="14" height="9" viewBox="0 0 14 10" fill="currentColor">
                          <rect x="0" y="7" width="2.5" height="3" rx="0.5" />
                          <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" />
                          <rect x="7" y="3" width="2.5" height="7" rx="0.5" />
                          <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
                        </svg>
                        {/* Batería */}
                        <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
                          <rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.85" />
                          <rect x="2" y="2" width="14" height="6" rx="0.8" fill="currentColor" />
                          <rect x="19.5" y="3.5" width="1.5" height="3" rx="0.5" fill="currentColor" opacity="0.85" />
                        </svg>
                      </span>
                    </div>

                    {/* Dynamic Island — píldora centrada, encima de la status bar */}
                    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-30 w-[96px] h-[28px] rounded-full bg-black shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                      {/* Cámara TrueDepth (lente sutil, derecha) */}
                      <span className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#0a0d12]">
                        <span className="absolute inset-[1.5px] rounded-full bg-[#1a2840]/60" />
                      </span>
                    </div>

                    {/* Header del chat — WhatsApp */}
                    <div className="bg-[#075E54] text-white px-3.5 pt-0.5 pb-2.5 flex items-center gap-2.5">
                      <svg width="9" height="14" viewBox="0 0 10 16" fill="none" className="text-white shrink-0">
                        <path d="M8 1L2 8l6 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="w-9 h-9 rounded-full bg-brand-yellow flex items-center justify-center text-ink font-bold text-[12px] shrink-0">
                        CM
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[13.5px] leading-tight truncate">
                          Centro Médico
                        </p>
                        <p className="text-[10.5px] text-white/75 flex items-center gap-1.5 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                          en línea
                        </p>
                      </div>
                    </div>

                    {/* Cuerpo del chat — sin min-h, deja respirar al final */}
                    <div
                      className="px-2.5 py-3 pb-12 space-y-1.5"
                      style={{
                        backgroundColor: "#ECE5DD",
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='%23d4cdbf' fill-opacity='0.4'><circle cx='8' cy='8' r='1'/><circle cx='40' cy='24' r='1'/><circle cx='64' cy='12' r='1'/><circle cx='20' cy='52' r='1'/><circle cx='56' cy='60' r='1'/><circle cx='72' cy='44' r='1'/></g></svg>\")",
                      }}
                    >
                      {HERO_CHAT.map((msg, i) => (
                        <div
                          key={i}
                          className={`flex hero-bubble hero-bubble-${i + 1} ${
                            msg.side === "user" ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] px-2.5 py-1.5 rounded-lg text-[12.5px] leading-[1.35] shadow-sm ${
                              msg.side === "user"
                                ? "bg-[#DCF8C6] text-ink rounded-br-sm"
                                : "bg-white text-ink rounded-bl-sm"
                            }`}
                          >
                            <p className="whitespace-pre-line">{msg.text}</p>
                            <span className="text-[9px] text-ink/45 float-right ml-2 mt-0.5">
                              {msg.time}
                              {msg.side === "user" && (
                                <span className="text-[#34B7F1] ml-1">✓✓</span>
                              )}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input bar simulado — barra inferior tipo WhatsApp */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#F0F0F0] px-3 pt-2 pb-6 flex items-center gap-2">
                      <div className="flex-1 bg-white rounded-full px-3.5 py-1.5 flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-ink/40">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                        </svg>
                        <span className="text-[11px] text-ink/35">Mensaje</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#075E54] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                          <path d="M3 3v8l13 1L3 13v8l19-9z" />
                        </svg>
                      </div>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 z-10 w-[110px] h-[4px] rounded-full bg-ink/35" />
                  </div>
                </div>
              </div>
            </div>
            {/* /iPhone */}
          </div>
        </div>
      </div>

      {/* Strip de KPIs — datos primero (prueba cuantitativa) */}
      <div className="border-t border-paper-line bg-bg">
        <div className="container-page py-8 md:py-10">
          <div className="flex items-center justify-between mb-6">
            <span className="label-mono">
              <span className="text-ink font-bold">Benchmark</span> · 2020 — 2026
            </span>
            <span className="hidden sm:flex items-center gap-2 label-mono">
              Datos auditados internamente
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <circle cx="5" cy="5" r="4" fill="none" stroke="currentColor" strokeWidth="0.8" />
                <path d="M3 5l1.5 1.5L7 4" stroke="currentColor" strokeWidth="1" fill="none" />
              </svg>
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:gap-x-12">
            {KPIS.map((kpi, i) => (
              <div
                key={kpi.caption}
                className={`relative ${
                  i > 0 ? "lg:pl-12 lg:border-l border-paper-line" : ""
                } ${i === 1 || i === 3 ? "pl-6 border-l border-paper-line lg:pl-12" : ""}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint mb-2">
                  {kpi.caption}
                </div>
                <div
                  className="font-display text-[32px] md:text-[40px] lg:text-[44px] leading-none text-ink mb-2 tracking-[-0.04em] tabular-nums"
                  style={{ fontWeight: 600 }}
                >
                  {kpi.number}
                </div>
                <div className="text-[13px] text-body whitespace-pre-line leading-snug">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

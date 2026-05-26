/* "Cómo funciona" — chat real de WhatsApp + flujo a la derecha.
   Toda la conversación es ilustrativa, basada en el caso de uso del playbook
   (agendamiento de turno por WhatsApp). */

const STEPS = [
  {
    n: "01",
    label: "INICIA EL CHAT",
    title: "El paciente escribe por WhatsApp.",
    description:
      "Comienza la interacción con el bot enviando un mensaje por WhatsApp, iniciando el proceso de cita.",
  },
  {
    n: "02",
    label: "PROVEER DETALLES",
    title: "El bot recopila la información.",
    description:
      "Pregunta los datos necesarios del paciente y los horarios de cita preferidos, garantizando una experiencia personalizada.",
  },
  {
    n: "03",
    label: "CONFIRMACIÓN",
    title: "Confirma y envía recordatorios.",
    description:
      "Una vez confirmados los detalles, PrestoBots envía recordatorios al paciente, reduciendo las inasistencias y optimizando los horarios.",
  },
];

const CHAT = [
  {
    side: "user" as const,
    text: "Hola! Quería sacar turno con el Dr. Pereyra para esta semana.",
    time: "10:42",
    delay: 0.2,
  },
  {
    side: "bot" as const,
    text: "Hola María 👋 Soy el asistente de Centro Médico Norte. Veo que el Dr. Pereyra (Cardiología) tiene disponibles:",
    time: "10:42",
    delay: 0.9,
  },
  {
    side: "bot" as const,
    text: "• Mié 12 nov · 09:30\n• Mié 12 nov · 15:00\n• Jue 13 nov · 11:15",
    time: "10:42",
    delay: 1.4,
    options: true,
  },
  {
    side: "user" as const,
    text: "El miércoles a las 15 me viene perfecto.",
    time: "10:43",
    delay: 2.4,
  },
  {
    side: "bot" as const,
    text: "Listo ✅ Turno reservado para el miércoles 12 de noviembre a las 15:00 con el Dr. Pereyra. Te envío recordatorio 24 hs antes.",
    time: "10:43",
    delay: 3.1,
  },
];

export default function Product() {
  return (
    <section id="producto" className="relative bg-bg overflow-hidden scroll-mt-20">
      <div className="container-page py-20 md:py-28">
        {/* Header — consistente con Problem */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-ink/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
              Cómo funciona
            </span>
            <span className="hidden sm:block w-px h-3 bg-ink/15" />
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Gestión de citas sin esfuerzo y sin errores
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            3 pasos · sin intervención humana
          </span>
        </div>

        {/* Titular */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2
              className="text-[40px] sm:text-[52px] lg:text-[68px] font-display leading-[1.02] tracking-[-0.03em] text-heading"
              style={{ fontWeight: 500 }}
            >
              Cómo PrestoBots simplifica
              <br />
              <span className="text-muted">tu flujo de trabajo.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-[16px] md:text-[17px] text-body leading-[1.65] max-w-md">
              El paciente conversa por WhatsApp, el bot recopila los detalles
              y agenda el turno. Después envía recordatorios automáticos que
              confirman la asistencia, sin formularios ni esperas para tu equipo.
            </p>
          </div>
        </div>

        {/* Layout principal: chat + pasos */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Chat — diseño WhatsApp-inspired */}
          <div className="lg:col-span-7 relative">
            {/* Glow amarillo difuso de fondo */}
            <div
              className="absolute -inset-8 -z-10 rounded-[3rem] opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(255,204,51,0.25), transparent 60%)",
              }}
            />

            <div className="relative bg-paper-warm rounded-[28px] border border-ink/10 overflow-hidden shadow-[0_20px_60px_-15px_rgba(10,10,10,0.15)]">
              {/* Header del chat */}
              <div className="bg-[#075E54] text-white px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-ink font-bold text-sm">
                  PB
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[14px] leading-tight">
                    Centro Médico Norte
                  </p>
                  <p className="text-[11px] text-white/70 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    en línea · responde al instante
                  </p>
                </div>
                <div className="flex gap-3 text-white/70">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                </div>
              </div>

              {/* Cuerpo del chat con fondo WhatsApp */}
              <div
                className="px-4 py-5 space-y-2"
                style={{
                  backgroundColor: "#ECE5DD",
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='%23d4cdbf' fill-opacity='0.4'><circle cx='8' cy='8' r='1'/><circle cx='40' cy='24' r='1'/><circle cx='64' cy='12' r='1'/><circle cx='20' cy='52' r='1'/><circle cx='56' cy='60' r='1'/><circle cx='72' cy='44' r='1'/></g></svg>\")",
                }}
              >
                {CHAT.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex bubble-in ${
                      msg.side === "user" ? "justify-end" : "justify-start"
                    }`}
                    style={{ animationDelay: `${msg.delay}s` }}
                  >
                    <div
                      className={`max-w-[78%] px-3 py-2 rounded-lg text-[14px] leading-[1.4] shadow-sm relative ${
                        msg.side === "user"
                          ? "bg-[#DCF8C6] text-ink rounded-br-sm"
                          : "bg-white text-ink rounded-bl-sm"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                      <span className="text-[10px] text-ink/45 float-right ml-2 mt-1">
                        {msg.time}
                        {msg.side === "user" && (
                          <span className="text-[#34B7F1] ml-1">✓✓</span>
                        )}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Typing indicator final */}
                <div
                  className="flex justify-start bubble-in"
                  style={{ animationDelay: "3.6s" }}
                >
                  <div className="bg-white/80 px-3 py-2.5 rounded-lg rounded-bl-sm shadow-sm flex items-center gap-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-ink/40 typing-dot"
                      style={{ animationDelay: "0s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-ink/40 typing-dot"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-ink/40 typing-dot"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>

              {/* Footer del chat — barra de input fake */}
              <div className="bg-paper-warm px-4 py-3 flex items-center gap-2 border-t border-ink/5">
                <div className="flex-1 bg-bg rounded-full px-4 py-2 text-[13px] text-muted border border-ink/5">
                  Mensaje
                </div>
                <button
                  type="button"
                  aria-label="Enviar"
                  className="w-9 h-9 rounded-full bg-[#075E54] text-white flex items-center justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Stat badge flotante */}
            <div className="hidden lg:flex absolute -right-4 top-32 z-20 bg-ink text-paper-warm px-4 py-3 rounded-xl shadow-xl rotate-[3deg] items-center gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-yellow font-bold mb-0.5">
                  Resuelto
                </p>
                <p className="font-mono text-[10px] text-white/70">
                  Sin pasar por recepción
                </p>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <p
                className="font-display text-2xl text-brand-yellow tabular-nums"
                style={{ fontWeight: 600 }}
              >
                23s
              </p>
            </div>
          </div>

          {/* Steps a la derecha */}
          <div className="lg:col-span-5 lg:pt-4">
            <div className="space-y-1">
              {STEPS.map((step, i) => (
                <div
                  key={step.n}
                  className={`relative pl-8 py-6 ${
                    i !== STEPS.length - 1 ? "border-b border-ink/8" : ""
                  }`}
                >
                  {/* Indicador vertical amarillo */}
                  <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-brand-yellow rounded-full" />

                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
                      {step.n} · {step.label}
                    </span>
                  </div>
                  <h3
                    className="text-[22px] md:text-[26px] font-display leading-[1.15] tracking-[-0.02em] text-heading mb-2"
                    style={{ fontWeight: 500 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-body leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA inline al final */}
            <a
              href="#form"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-ink font-bold hover:text-brand-yellow-deep transition-colors"
            >
              Agendar demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

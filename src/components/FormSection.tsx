import Image from "next/image";

const DELIVERABLES = [
  "Tasa promedio de respuesta que vas a manejar",
  "Demo del bot con datos reales de una clínica",
  "Experiencia de +6 años aplicada a tu caso",
];

export default function FormSection() {
  return (
    <section
      id="form"
      className="relative bg-paper-warm scroll-mt-20 overflow-hidden"
    >
      {/* Glow amarillo difuso decorativo */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[140px] pointer-events-none"
        style={{ background: "var(--color-brand-yellow)" }}
      />

      <div className="container-page relative py-20 md:py-28">
        {/* Header — meta-bar consistente */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-ink/10">
          <div className="flex items-center gap-3">
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute w-3 h-3 rounded-full bg-brand-yellow/40 live-ring" />
              <span className="absolute w-3 h-3 rounded-full bg-brand-yellow/40 live-ring-delayed" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-brand-yellow-deep shadow-[0_0_8px_rgba(255,204,51,0.6)]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
              Agendá tu demo
            </span>
            <span className="hidden sm:block w-px h-3 bg-ink/15" />
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Charlá con el bot · te respondemos en menos de 24 hs
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            ~ 1 minuto
          </span>
        </div>

        {/* Layout principal */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columna izquierda */}
          <aside className="lg:col-span-7">
            <h2
              className="text-[36px] sm:text-[44px] lg:text-[60px] font-display leading-[1.05] tracking-[-0.03em] text-heading mb-5"
              style={{ fontWeight: 500 }}
            >
              Conocé al bot
              <br />
              <span className="text-muted">charlando con él.</span>
            </h2>

            <p className="text-[16px] md:text-[18px] text-body leading-[1.65] mb-10 max-w-xl">
              Contanos quién sos en menos de un minuto. Validamos tu caso y te
              habilitamos la demo en WhatsApp para que veas cómo opera el bot
              con datos reales.
            </p>

            {/* Lo que te llevás */}
            <div className="mb-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint mb-4 block">
                ▸ Lo que te llevás
              </span>
              <ul className="space-y-3">
                {DELIVERABLES.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[15px] md:text-[16px] text-body leading-[1.5]"
                  >
                    <span
                      aria-hidden
                      className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-brand-yellow flex items-center justify-center"
                    >
                      <svg
                        className="w-3 h-3 text-ink"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA — abre el chat (link a #form, interceptado por DemoChatBot) */}
            <a
              href="#form"
              className="inline-flex items-center gap-3 bg-brand-yellow text-ink font-bold px-8 py-5 rounded-full hover:bg-brand-yellow-hover transition-all duration-200 text-[16px] shadow-[0_12px_32px_-8px_rgba(255,204,51,0.55)] hover:shadow-[0_16px_40px_-8px_rgba(255,204,51,0.7)] hover:-translate-y-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Charlar con el bot ahora
            </a>
          </aside>

          {/* Columna derecha — bocadillo decorativo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Image
              src="/illustrations/cta-bubble.png"
              alt="¿Te gustaría empezar ahora? Estoy para servirte"
              width={347}
              height={116}
              className="w-full max-w-[320px] h-auto opacity-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

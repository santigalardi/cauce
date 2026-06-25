import Image from "next/image";
import WhatsAppLink from "@/components/WhatsAppLink";

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Especialización vertical en salud.",
    contrast: "No somos un bot genérico adaptado a clínicas.",
  },
  {
    n: "02",
    title: "Integración nativa con tu HIS.",
    contrast: "No es una capa que pelea con tu sistema.",
  },
  {
    n: "03",
    title: "Se adapta a tu negocio, no al revés.",
    contrast: "No es enlatado: configuramos al flujo real de tu clínica.",
  },
];

export default function Differentiator() {
  return (
    <section className="relative bg-brand-deep text-paper-warm overflow-hidden">
      {/* Glow amarillo difuso superior izquierdo */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{ background: "var(--color-brand-yellow)" }}
      />

      {/* Grid de puntos */}
      <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />

      <div className="container-page relative py-20 md:py-28">
        {/* Header — meta-bar consistente */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-yellow font-bold">
              Por qué Cauce
            </span>
            <span className="hidden sm:block w-px h-3 bg-white/20" />
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
              3 diferenciales no replicables
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
            Análisis competitivo · 2026
          </span>
        </div>

        {/* Layout: titular + lista a la izquierda · ilustración a la derecha */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columna izquierda */}
          <div className="lg:col-span-7">
            <h2
              className="text-[40px] sm:text-[52px] lg:text-[64px] font-display leading-[1.02] tracking-[-0.03em] text-white mb-12 md:mb-16"
              style={{ fontWeight: 500 }}
            >
              El único que combina
              <br />
              <span className="text-white/50">los tres que importan.</span>
            </h2>

            <ul>
              {DIFFERENTIATORS.map((d, i) => (
                <li
                  key={d.n}
                  className={`group grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-8 items-start py-5 md:py-6 ${
                    i !== 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <span
                    className="font-display text-[28px] md:text-[36px] leading-none text-brand-yellow tabular-nums tracking-[-0.03em] group-hover:text-brand-yellow-hover transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    {d.n}
                  </span>
                  <div>
                    <p
                      className="text-[18px] md:text-[20px] font-display leading-[1.3] tracking-[-0.02em] text-white mb-1"
                      style={{ fontWeight: 500 }}
                    >
                      {d.title}
                    </p>
                    <p className="text-[14px] md:text-[15px] text-white/55 leading-[1.5]">
                      {d.contrast}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna derecha — ilustración */}
          <div className="lg:col-span-5 relative">
            {/* Halo amarillo difuso detrás */}
            <div
              className="absolute inset-0 -z-10 opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, rgba(212,165,92,0.4), transparent 60%)",
              }}
            />
            <Image
              src="/illustrations/analytics-cauce-v2.png"
              alt="Análisis y datos estratégicos Cauce"
              width={1254}
              height={1254}
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Footer — CTA centrado y grande */}
        <div className="mt-12 md:mt-16 pt-10 border-t border-white/10 flex justify-center">
          <WhatsAppLink
            location="differentiator"
            className="inline-flex items-center gap-3 bg-brand-yellow text-ink font-bold px-8 py-4 rounded-full hover:bg-brand-yellow-hover transition-colors duration-200 text-[16px]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Hablar con el bot
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}

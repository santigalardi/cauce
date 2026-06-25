import Image from "next/image";

const PILLARS = [
  {
    n: "01",
    icon: "/icons/dashboard.png",
    title: "Visibilidad total",
    description:
      "Cada interacción del paciente queda registrada y auditable. Datos estructurados para decidir: demanda real, ocupación, tasas de ausentismo.",
  },
  {
    n: "02",
    icon: "/icons/experience.png",
    title: "Scoring de pacientes",
    description:
      "Calificamos a cada paciente con datos propios de Cauce, combinados con la asistencia real de tu HIS. Tu equipo prioriza a quien tiene mayor probabilidad de presentarse.",
  },
  {
    n: "03",
    icon: "/icons/customization.png",
    title: "Se adapta a tu negocio",
    description:
      "Configuramos el bot al flujo real de tu clínica. Y el modelo acompaña: pagás por consumo real, no por planes con features que no usás.",
  },
  {
    n: "04",
    icon: "/icons/integration.png",
    title: "Integración nativa",
    description:
      "Conectado a tu HIS sin fricción de implementación. No reemplaza tu sistema, lo potencia.",
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="relative bg-bg overflow-hidden scroll-mt-20">
      <div className="container-page py-20 md:py-28">
        {/* Header — meta-bar consistente */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-ink/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
              Beneficios
            </span>
            <span className="hidden sm:block w-px h-3 bg-ink/15" />
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              4 pilares · 1 sistema operativo
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
            Vertical Salud · 2026
          </span>
        </div>

        {/* Titular */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2
              className="text-[40px] sm:text-[52px] lg:text-[68px] font-display leading-[1.02] tracking-[-0.03em] text-heading"
              style={{ fontWeight: 500 }}
            >
              No es una capa más.
              <br />
              <span className="text-muted">Es el sistema operativo de tu agenda.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-[16px] md:text-[17px] text-body leading-[1.65] max-w-md">
              Cuatro beneficios que se activan juntos el día que conectás
              Cauce a tu HIS. No los elegís por separado, no se compran
              por módulo: vienen integrados porque así se sostiene la
              rentabilidad.
            </p>
          </div>
        </div>

        {/* Grid 5 celdas: 4 pilares + 1 cierre. Hairlines, no cards. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
          {PILLARS.map((p) => (
            <article
              key={p.n}
              className="group relative border-r border-b border-ink/10 p-7 md:p-9 hover:bg-paper-warm transition-colors duration-300"
            >
              {/* Número de pilar */}
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint absolute top-7 right-7 md:top-9 md:right-9">
                {p.n}
              </span>

              {/* Icono — la marca real */}
              <div className="w-14 h-14 mb-7 flex items-center justify-center">
                <Image
                  src={p.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Título */}
              <h3
                className="text-[22px] md:text-[24px] font-display leading-[1.15] tracking-[-0.02em] text-heading mb-3"
                style={{ fontWeight: 500 }}
              >
                {p.title}
              </h3>

              {/* Descripción */}
              <p className="text-[14px] md:text-[15px] text-body leading-[1.6] max-w-sm">
                {p.description}
              </p>

              {/* Línea amarilla bottom-left que aparece en hover */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-yellow group-hover:w-full transition-all duration-500" />
            </article>
          ))}

          {/* 6ª celda — cierre conceptual */}
          <article className="relative border-r border-b border-ink/10 p-7 md:p-9 bg-brand text-paper-warm flex flex-col justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-yellow font-bold mb-7 block">
                = Sistema completo
              </span>
              <h3
                className="text-[22px] md:text-[24px] font-display leading-[1.15] tracking-[-0.02em] text-white mb-3"
                style={{ fontWeight: 500 }}
              >
                Los cuatro operan como uno.
              </h3>
              <p className="text-[14px] md:text-[15px] text-white/65 leading-[1.6] max-w-sm">
                Los datos alimentan el scoring, el scoring prioriza a quién
                contactar primero, y todo se ejecuta integrado a tu HIS — sin
                sumar otra pantalla más a tu equipo.
              </p>
            </div>
            <a
              href="#form"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-brand-yellow font-bold hover:text-brand-yellow-hover transition-colors w-fit"
            >
              Ver demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

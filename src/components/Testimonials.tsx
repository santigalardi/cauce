"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* Testimonios reales del canal de YouTube de PrestoBots
   (https://www.youtube.com/@prestobots/shorts) */
const TESTIMONIALS = [
  {
    id: "7kReUglTrRU",
    person: "Bianca Discépolo",
    role: "Gerencia Adm. y Financiera",
    company: "ASISTIR Servicios Médicos",
    question: "¿Por qué decidieron contratar Cauce?",
  },
  {
    id: "6EO2XaKLlt4",
    person: "Bianca Discépolo",
    role: "Gerencia Adm. y Financiera",
    company: "ASISTIR Servicios Médicos",
    question: "¿Qué problemas tenía la empresa antes?",
  },
  {
    id: "RmzWZmm7TUs",
    person: "Bianca Discépolo",
    role: "Gerencia Adm. y Financiera",
    company: "ASISTIR Servicios Médicos",
    question: "¿Cómo mejoró la atención de los pacientes?",
  },
  {
    id: "IWY4mfVwjEw",
    person: "Ramón Cuevas",
    role: "Gerente de Sistemas",
    company: "Sanatorio Bernal",
    question: "¿Cómo evalúan la experiencia con Cauce?",
  },
  {
    id: "X2GfJxVA_Eo",
    person: "Nadine Moreno",
    role: "Jefa de Atención al Paciente",
    company: "Nobis Center",
    question: "Su experiencia con Cauce",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState<string | null>(null);

  // Cerrar con tecla Escape
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section
      id="testimonios"
      className="relative bg-bg overflow-hidden scroll-mt-20"
    >
      <div className="container-page py-20 md:py-28">
        {/* Header — meta-bar consistente */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-ink/10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink font-bold">
              Testimoniales
            </span>
            <span className="hidden sm:block w-px h-3 bg-ink/15" />
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              En las palabras de quienes lo usan
            </span>
          </div>
          <a
            href="https://www.youtube.com/@prestobots/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint hover:text-ink transition-colors flex items-center gap-2"
          >
            Ver canal
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        {/* Titular */}
        <h2
          className="text-[40px] sm:text-[52px] lg:text-[68px] font-display leading-[1.02] tracking-[-0.03em] text-heading mb-16 md:mb-20 max-w-5xl"
          style={{ fontWeight: 500 }}
        >
          Lo que dicen quienes
          <br />
          <span className="text-muted">ya gestionan con Cauce.</span>
        </h2>

        {/* Grid de shorts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActive(t.id);
              }}
              className="group relative bg-ink rounded-2xl overflow-hidden text-left aspect-[9/16] focus:outline-none focus:ring-2 focus:ring-brand-yellow cursor-pointer"
              aria-label={`Reproducir testimonio: ${t.person}, ${t.company}`}
            >
              {/* Thumbnail */}
              <Image
                src={`https://i.ytimg.com/vi/${t.id}/hqdefault.jpg`}
                alt={`${t.person} — ${t.company}`}
                width={480}
                height={853}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                unoptimized
              />

              {/* Gradient overlay para legibilidad — pointer-events-none para no bloquear click */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/30 pointer-events-none" />

              {/* Badge clínica arriba — mono amarillo, wrap a 2 líneas */}
              <span className="absolute top-3 left-3 right-3 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-yellow font-bold leading-[1.4]">
                {t.company}
              </span>

              {/* Play button center */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 12 14"
                    fill="currentColor"
                    className="text-ink"
                    style={{ transform: "translateX(1.5px)" }}
                    aria-hidden="true"
                  >
                    <path d="M0 0L12 7L0 14V0Z" />
                  </svg>
                </span>
              </span>

              {/* Info inferior */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p
                  className="font-display text-[15px] md:text-[16px] text-white leading-tight tracking-[-0.01em] mb-1"
                  style={{ fontWeight: 500 }}
                >
                  {t.person}
                </p>
                <p className="text-[11px] md:text-[12px] text-white/65 leading-tight">
                  {t.role}
                </p>
              </div>

              {/* Pregunta — visible en hover */}
              <div className="absolute inset-x-3 top-12 md:top-14 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p
                  className="text-[13px] md:text-[14px] text-white leading-tight font-display italic"
                  style={{ fontWeight: 500 }}
                >
                  “{t.question}”
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-12 pt-8 border-t border-ink/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Más testimonios disponibles en YouTube
          </p>
          <a
            href="#form"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-ink font-bold hover:text-brand-yellow-deep transition-colors w-fit"
          >
            Sumate a estas clínicas
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
        </div>
      </div>

      {/* Modal lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Reproductor de testimonio"
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-[fadein_0.2s_ease-out]"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
            aria-label="Cerrar"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[400px] aspect-[9/16] bg-ink rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0&modestbranding=1`}
              title="Testimonio Cauce"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

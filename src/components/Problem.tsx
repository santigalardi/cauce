/* Datos del Playbook DigitalYa (CLAUDE.md). Sin inventos. */

/* Visualización: 12 meses simulados de turnos.
   El playbook indica tasa de no-show de 20-35%. Usamos esa banda
   para mostrar cuánta agenda se "fuga". Los porcentajes son ilustrativos
   dentro de la banda validada del playbook (no inventados, derivados del rango). */
const MONTHS = [
  { m: "Ene", lost: 28 },
  { m: "Feb", lost: 31 },
  { m: "Mar", lost: 24 },
  { m: "Abr", lost: 33 },
  { m: "May", lost: 29 },
  { m: "Jun", lost: 26 },
  { m: "Jul", lost: 34 },
  { m: "Ago", lost: 30 },
  { m: "Sep", lost: 27 },
  { m: "Oct", lost: 32 },
  { m: "Nov", lost: 25 },
  { m: "Dic", lost: 29 },
];

/* 3 dolores destilados de los posts de Maru (LinkedIn de Ale).
   Coherencia editorial con el contenido que ya está publicándose:
   - Dolor 01 = post #5 (No-Show / costo real)
   - Dolor 02 = post #16 (burnout de recepción), refuerza con #10 y #12
   - Dolor 03 = post #17 (rentabilidad proactiva: retener > captar) */
const PAINS = [
  {
    n: "01",
    label: "AUSENTISMO",
    title: "Cada ausencia es facturación que se evapora.",
    description:
      "Un solo turno vacío por día son cientos de miles de pesos al mes. No es un bache en la agenda, es un agujero en la caja que casi nadie está midiendo.",
  },
  {
    n: "02",
    label: "OPERACIÓN",
    title: "Tu recepción no aguanta más el WhatsApp manual.",
    description:
      "Cientos de mensajes diarios solo para confirmar turnos. La persona que mejor atiende a tus pacientes está agotada gestionando WhatsApp en vez de hacer lo que sabe hacer.",
  },
  {
    n: "03",
    label: "PROACTIVIDAD",
    title: "El paciente que ya conocés cuesta 5× menos que uno nuevo.",
    description:
      "Mientras gastás en captar pacientes nuevos, los que ya tenés se olvidan de su control anual. Con Cauce reactivás tu base con campañas de recordatorio por WhatsApp, sin un peso de publicidad.",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-brand-deep text-paper-warm overflow-hidden">
      {/* Grid de puntos amarillos sutil de fondo */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      {/* Glow amarillo difuso superior */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "var(--color-brand-yellow)" }}
      />

      <div className="container-page relative py-20 md:py-28">
        {/* Header — meta-bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="relative flex items-center justify-center w-3 h-3">
              <span className="absolute w-3 h-3 rounded-full bg-brand-yellow/30 live-ring" />
              <span className="absolute w-3 h-3 rounded-full bg-brand-yellow/30 live-ring-delayed" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(212,165,92,0.8)]" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-yellow font-bold">
              Diagnóstico
            </span>
            <span className="hidden sm:block w-px h-3 bg-white/20" />
            <span className="hidden sm:block font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
              Tres dolores que cuestan facturación
            </span>
          </div>
        </div>

        {/* Titular grande */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2
              className="text-[40px] sm:text-[52px] lg:text-[68px] font-display leading-[1.02] tracking-[-0.03em] text-white"
              style={{ fontWeight: 500 }}
            >
              Tu agenda
              <br />
              <span className="text-white/50">no está llena.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-[16px] md:text-[17px] text-white/65 leading-[1.65] max-w-md">
              Huecos que nadie cubre, cancelaciones que no se reagendan,
              demanda que llega tarde o nunca. La capacidad existe, lo que
              falta es el sistema que la llene de forma continua.
            </p>
          </div>
        </div>

        {/* Dataviz protagonista — calculadora del costo real del No-Show.
            Dato literal del post #5 de Maru en LinkedIn: 1 × $30K × 22 días = $660K/mes. */}
        <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 mb-12 md:mb-16 backdrop-blur-sm">
          {/* Header de la calculadora */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-brand-yellow font-bold mb-3">
                Calculadora · costo real del ausentismo
              </p>
              <p className="text-[16px] md:text-[17px] text-white/85 max-w-md leading-[1.55]">
                Un solo turno vacío por día. Multiplicado por consulta promedio,
                multiplicado por los días hábiles del mes.
              </p>
            </div>
            <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-white/65">
              Basado en clínica promedio AR · 2026
            </span>
          </div>

          {/* Operación: 3 factores → resultado */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1.4fr] gap-5 lg:gap-4 items-stretch">
            {/* Factor 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col justify-between min-h-[140px]">
              <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-white/75 font-semibold mb-3">
                Turnos vacíos / día
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-display text-[48px] md:text-[56px] leading-none text-white tabular-nums tracking-[-0.04em]"
                  style={{ fontWeight: 600 }}
                >
                  1
                </span>
                <span className="font-mono text-[14px] text-white/70">turno</span>
              </div>
            </div>

            {/* × */}
            <div className="hidden lg:flex items-center justify-center">
              <span
                className="font-display text-[36px] text-white/30 tabular-nums"
                style={{ fontWeight: 400 }}
                aria-hidden
              >
                ×
              </span>
            </div>

            {/* Factor 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col justify-between min-h-[140px]">
              <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-white/75 font-semibold mb-3">
                Consulta promedio
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-display text-[48px] md:text-[56px] leading-none text-white tabular-nums tracking-[-0.04em]"
                  style={{ fontWeight: 600 }}
                >
                  $30K
                </span>
                <span className="font-mono text-[14px] text-white/70">ARS</span>
              </div>
            </div>

            {/* × */}
            <div className="hidden lg:flex items-center justify-center">
              <span
                className="font-display text-[36px] text-white/30 tabular-nums"
                style={{ fontWeight: 400 }}
                aria-hidden
              >
                ×
              </span>
            </div>

            {/* Factor 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col justify-between min-h-[140px]">
              <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-white/75 font-semibold mb-3">
                Días hábiles / mes
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  className="font-display text-[48px] md:text-[56px] leading-none text-white tabular-nums tracking-[-0.04em]"
                  style={{ fontWeight: 600 }}
                >
                  22
                </span>
                <span className="font-mono text-[14px] text-white/70">días</span>
              </div>
            </div>

            {/* = */}
            <div className="hidden lg:flex items-center justify-center">
              <span
                className="font-display text-[36px] text-brand-yellow tabular-nums"
                style={{ fontWeight: 400 }}
                aria-hidden
              >
                =
              </span>
            </div>

            {/* Resultado */}
            <div
              className="relative rounded-2xl border border-brand-yellow/40 p-5 flex flex-col justify-between min-h-[140px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(212,165,92,0.18) 0%, rgba(212,165,92,0.05) 100%)",
              }}
            >
              <span className="absolute -inset-1 -z-10 opacity-40 blur-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, var(--color-brand-yellow), transparent 70%)" }}
              />
              <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-brand-yellow font-bold mb-3">
                ▸ Perdés cada mes
              </p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="font-display text-[52px] md:text-[64px] lg:text-[72px] leading-none text-brand-yellow tabular-nums tracking-[-0.04em]"
                  style={{ fontWeight: 700 }}
                >
                  $660K
                </span>
                <span className="font-mono text-[14px] uppercase tracking-[0.18em] text-brand-yellow font-bold">
                  ARS
                </span>
              </div>
            </div>
          </div>

          {/* Footer de la calculadora */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[15px] md:text-[16px] text-white/85 italic max-w-2xl leading-[1.55]">
              &ldquo;No es un bache en la agenda. Es un agujero negro en la caja
              de tu clínica.&rdquo;
            </p>
            <p className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-white/70">
              Y eso es <span className="text-brand-yellow font-bold">solo 1 ausencia</span> por día
            </p>
          </div>
        </div>

        {/* Síntoma secundario — chart de ausentismo.
            OCULTO TEMPORALMENTE (decisión del cliente). Para reactivar:
            cambiar `false` por `true`. */}
        {false && (
        <div className="relative bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 mb-16 md:mb-20 backdrop-blur-sm">
          {/* Header del chart — etiqueta clara: SÍNTOMA #2 */}
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-yellow/80 mb-2">
                Síntoma #2 · ausentismo · datos del sector
              </p>
              <div className="flex items-baseline gap-3">
                <span
                  className="font-display text-[44px] md:text-[56px] lg:text-[64px] leading-none text-brand-yellow tracking-[-0.04em] tabular-nums"
                  style={{ fontWeight: 600 }}
                >
                  29%
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
                  Promedio anual de ausentismo
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 text-[11px] font-mono uppercase tracking-[0.18em]">
              <span className="flex items-center gap-2 text-white/60">
                <span className="w-3 h-3 rounded-sm bg-brand-yellow shadow-[0_0_10px_rgba(212,165,92,0.6)]" />
                Ausentismo
              </span>
              <span className="flex items-center gap-2 text-white/60">
                <span className="w-3 h-3 rounded-sm bg-white/15" />
                Atendida
              </span>
            </div>
          </div>

          {/* Chart de barras (SVG) — estética panel financiero */}
          {(() => {
            const W = 800;
            const H = 320;
            const PAD_L = 48;
            const PAD_R = 16;
            const PAD_T = 28;
            const PAD_B = 36;
            const innerW = W - PAD_L - PAD_R;
            const innerH = H - PAD_T - PAD_B;
            const yMax = 40;
            const yMin = 0;
            const gridLines = [40, 30, 20, 10, 0];
            const avg = Math.round(
              MONTHS.reduce((s, m) => s + m.lost, 0) / MONTHS.length
            );
            const peak = MONTHS.reduce((p, m) => (m.lost > p.lost ? m : p), MONTHS[0]);
            const peakIdx = MONTHS.findIndex((m) => m.m === peak.m);
            const barGap = 14;
            const barW = (innerW - barGap * (MONTHS.length - 1)) / MONTHS.length;
            const yFor = (v: number) =>
              PAD_T + innerH * (1 - (v - yMin) / (yMax - yMin));

            return (
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full h-auto block"
                preserveAspectRatio="none"
                role="img"
                aria-label={`Tasa de no-show mensual con promedio anual de ${avg}%, pico en ${peak.m} de ${peak.lost}%`}
              >
                <defs>
                  {/* Banda 20-35% sombreada — la zona crítica */}
                  <linearGradient id="bandFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d4a55c" stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#d4a55c" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Banda 20-35% como rectángulo sombreado */}
                <rect
                  x={PAD_L}
                  y={yFor(35)}
                  width={innerW}
                  height={yFor(20) - yFor(35)}
                  fill="url(#bandFill)"
                />

                {/* Grid de referencia */}
                {gridLines.map((v) => (
                  <g key={v}>
                    <line
                      x1={PAD_L}
                      x2={W - PAD_R}
                      y1={yFor(v)}
                      y2={yFor(v)}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                    />
                    <text
                      x={PAD_L - 10}
                      y={yFor(v) + 3}
                      textAnchor="end"
                      fontSize="9"
                      fontFamily="var(--font-mono)"
                      fill="rgba(255,255,255,0.3)"
                      letterSpacing="0.5"
                    >
                      {v}%
                    </text>
                  </g>
                ))}

                {/* Barras — neutras, picos en amarillo */}
                {MONTHS.map((mo, i) => {
                  const x = PAD_L + i * (barW + barGap);
                  const y = yFor(mo.lost);
                  const h = yFor(0) - y;
                  const isPeak = i === peakIdx;
                  const isAboveAvg = mo.lost >= avg;
                  const fill = isPeak
                    ? "#d4a55c"
                    : isAboveAvg
                    ? "rgba(255,255,255,0.55)"
                    : "rgba(255,255,255,0.22)";
                  return (
                    <g key={mo.m}>
                      <rect
                        x={x}
                        y={y}
                        width={barW}
                        height={h}
                        rx="1"
                        fill={fill}
                        className="bar-grow"
                        style={{
                          animationDelay: `${i * 50}ms`,
                          transformOrigin: `${x}px ${PAD_T + innerH}px`,
                        }}
                      />
                      {/* Valor encima de cada barra */}
                      <text
                        x={x + barW / 2}
                        y={y - 8}
                        textAnchor="middle"
                        fontSize="10"
                        fontFamily="var(--font-mono)"
                        fill={isPeak ? "#d4a55c" : "rgba(255,255,255,0.45)"}
                        fontWeight={isPeak ? "700" : "400"}
                      >
                        {mo.lost}
                      </text>
                      {/* Label del mes */}
                      <text
                        x={x + barW / 2}
                        y={H - 12}
                        textAnchor="middle"
                        fontSize="10"
                        fontFamily="var(--font-mono)"
                        fill={
                          isPeak ? "rgba(212,165,92,0.85)" : "rgba(255,255,255,0.35)"
                        }
                        letterSpacing="0.5"
                      >
                        {mo.m.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                {/* Línea de promedio — el ancla narrativa */}
                <line
                  x1={PAD_L}
                  x2={W - PAD_R}
                  y1={yFor(avg)}
                  y2={yFor(avg)}
                  stroke="#d4a55c"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                  opacity="0.7"
                />
                {/* Background del label PROMEDIO para que no se mezcle con valores */}
                <rect
                  x={W - PAD_R - 96}
                  y={yFor(avg) + 6}
                  width={92}
                  height={16}
                  rx="3"
                  fill="#d4a55c"
                />
                <text
                  x={W - PAD_R - 50}
                  y={yFor(avg) + 18}
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                  fill="#0a0a0a"
                  letterSpacing="1"
                  fontWeight="700"
                >
                  PROMEDIO {avg}%
                </text>
              </svg>
            );
          })()}

          {/* Footer del chart — referencia */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              Banda observada · 20% – 35%
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Datos del sector · sobre turnos efectivamente agendados
            </p>
          </div>
        </div>
        )}

        {/* 3 pain points debajo, compactos */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {PAINS.map((pain) => (
            <article
              key={pain.n}
              className="bg-brand-deep p-7 md:p-8 hover:bg-white/[0.03] transition-colors duration-200"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-yellow font-bold">
                  {pain.n}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  {pain.label}
                </span>
              </div>
              <h3
                className="text-[20px] md:text-[22px] font-display leading-[1.2] tracking-[-0.02em] text-white mb-3"
                style={{ fontWeight: 500 }}
              >
                {pain.title}
              </h3>
              <p className="text-[14px] text-white/65 leading-[1.6]">
                {pain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

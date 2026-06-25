import Image from "next/image";

const LOGOS = [
  { name: "Clínica Modelo Lanús", src: "/logos/lanus.png", h: 36 },
  { name: "CITO", src: "/logos/cito.png", h: 28 },
  { name: "Asistir Servicios Médicos", src: "/logos/asistir.png", h: 32 },
  { name: "Sanatorio de la Ciudad", src: "/logos/sanatorio-ciudad.png", h: 26 },
  { name: "Centrovisión", src: "/logos/centrovision.png", h: 32 },
  { name: "Sanatorio San Carlos", src: "/logos/san-carlos.png", h: 30 },
];

export default function LogoTicker() {
  /* Duplicado para que el marquee tenga loop continuo sin saltos. */
  const items = [...LOGOS, ...LOGOS];

  return (
    <div className="border-y border-paper-line bg-bg">
      <div className="container-page py-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted shrink-0 md:max-w-[140px] md:border-r md:border-paper-line md:pr-10">
          Confían en
          <br className="hidden md:block" />
          <span className="text-brand font-bold">Cauce</span>
        </span>

        <div className="flex-1 overflow-hidden relative">
          <div className="marquee items-center gap-12 md:gap-16">
            {items.map((c, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center"
                style={{ height: 40 }}
              >
                <Image
                  src={c.src}
                  alt={c.name}
                  width={c.h * 4}
                  height={c.h}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-200"
                  style={{
                    width: "auto",
                    height: c.h,
                    filter: "invert(1) brightness(0)",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

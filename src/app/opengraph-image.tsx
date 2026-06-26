import { ImageResponse } from "next/og";

// Imagen Open Graph (1200x630) generada con el branding de Cauce.
// Se usa al compartir el sitio en WhatsApp, redes y buscadores.
export const alt =
  "Cauce — Infraestructura de rentabilidad para clínicas. Bot de WhatsApp integrado a tu HIS.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El logo se carga DENTRO de la función (no en module-scope) y vía fetch sobre
// un asset bundleado: readFileSync no existe en el runtime de Cloudflare Workers
// y, si falla en la evaluación del módulo, tira abajo el resto del bundle.
async function loadLogo(): Promise<string | null> {
  try {
    const data = await fetch(
      new URL("../../public/logos/cauce-logo.png", import.meta.url),
    ).then((res) => res.arrayBuffer());
    const base64 = Buffer.from(data).toString("base64");
    return `data:image/png;base64,${base64}`;
  } catch {
    return null; // si no se puede cargar, caemos al wordmark de texto
  }
}

export default async function OpengraphImage() {
  const logoSrc = await loadLogo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FDFAF4",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marca — logotipo Cauce (con fallback a wordmark si no carga) */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {logoSrc ? (
            <img src={logoSrc} alt="Cauce" height={64} width={354} />
          ) : (
            <div
              style={{
                fontSize: 40,
                fontWeight: 700,
                color: "#6E2E3A",
                letterSpacing: "-0.02em",
              }}
            >
              cauce.
            </div>
          )}
        </div>

        {/* Titular */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 68,
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            <span>Recuperá la&nbsp;</span>
            <span style={{ color: "#6E2E3A" }}>facturación&nbsp;</span>
            <span>que tu agenda pierde en silencio.</span>
          </div>
          <div style={{ fontSize: 30, color: "#444444", maxWidth: 880 }}>
            Bot de WhatsApp integrado nativamente a tu HIS.
          </div>
        </div>

        {/* Métricas validadas (CLAUDE.md) */}
        <div style={{ display: "flex", gap: 56 }}>
          {[
            ["+1M", "turnos gestionados"],
            ["80%", "de autogestión"],
            ["+200K", "chats / mes"],
          ].map(([n, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 44, fontWeight: 700, color: "#6E2E3A" }}>
                {n}
              </div>
              <div style={{ fontSize: 22, color: "#888888" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

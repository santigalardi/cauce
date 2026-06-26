import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Imagen Open Graph (1200x630) generada con el branding de Cauce.
// Se usa al compartir el sitio en WhatsApp, redes y buscadores.
// Estática: se genera en build (la imagen no cambia entre requests).
export const alt =
  "Cauce — Infraestructura de rentabilidad para clínicas. Bot de WhatsApp integrado a tu HIS.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El logo se lee del filesystem en build y se inyecta como data URL:
// next/og no resuelve rutas de /public por sí solo.
const logoData = readFileSync(
  join(process.cwd(), "public/logos/cauce-logo.png"),
).toString("base64");
const logoSrc = `data:image/png;base64,${logoData}`;

export default function OpengraphImage() {
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
        {/* Marca — logotipo Cauce */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logoSrc} alt="Cauce" height={64} width={354} />
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

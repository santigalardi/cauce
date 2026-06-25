import { ImageResponse } from "next/og";

// Imagen Open Graph (1200x630) generada con el branding de Cauce.
// Se usa al compartir el sitio en WhatsApp, redes y buscadores.
// Estática: se genera en build (la imagen no cambia entre requests).
export const alt =
  "Cauce — Infraestructura de rentabilidad para clínicas. Bot de WhatsApp integrado a tu HIS.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        {/* Marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: "#6E2E3A",
            }}
          />
          <div
            style={{
              fontSize: 34,
              fontWeight: 700,
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Cauce
          </div>
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
            Recuperá la&nbsp;
            <span style={{ color: "#6E2E3A" }}>facturación</span>
            &nbsp;que tu agenda pierde en silencio.
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

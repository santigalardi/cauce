// Punto de contacto único de Cauce: el bot de WhatsApp que atiende nuevos
// clientes y agenda demos. Todos los CTA de la landing apuntan acá.
export const WHATSAPP_NUMBER = "5492617450587"; // +54 9 261 745-0587

export const WHATSAPP_MESSAGE =
  "Hola! Me interesa conocer Cauce y agendar una demo para mi clínica.";

// URL base sin tracking — fallback para SSR y para visitantes que no vienen de un anuncio.
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Identificadores de clic de Google Ads. `gclid` es el habitual; `wbraid`/`gbraid`
// aparecen en iOS/Safari cuando hay restricciones de cookies. Capturamos los tres.
const CLICK_ID_PARAMS = ["gclid", "wbraid", "gbraid"] as const;
const CLICK_ID_STORAGE_KEY = "cauce_ads_click_id";

// Lee el click-id de la URL actual y lo persiste en sessionStorage (puede perderse
// si el usuario navega/scrollea antes de tocar el botón). Devuelve el guardado si ya existe.
function getAdsClickId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of CLICK_ID_PARAMS) {
      const value = params.get(key);
      if (value) {
        window.sessionStorage.setItem(CLICK_ID_STORAGE_KEY, value);
        return value;
      }
    }
    return window.sessionStorage.getItem(CLICK_ID_STORAGE_KEY);
  } catch {
    return null;
  }
}

// Construye el link de WhatsApp en runtime. Si el visitante vino de un anuncio,
// agrega el click-id al final del mensaje (línea "Ref: …") para poder, más adelante,
// subir la conversión offline a Google Ads cuando ese lead se califique como cliente.
export function buildWhatsAppUrl(): string {
  const clickId = getAdsClickId();
  const message = clickId
    ? `${WHATSAPP_MESSAGE}\n\nRef: ${clickId}`
    : WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Empuja el evento que dispara el activador "whatsapp_click" en GTM.
// `location` identifica desde qué CTA salió el click (nav, hero, etc.).
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "whatsapp_click", cta_location: location });
}

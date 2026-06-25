// Punto de contacto único de Cauce: el bot de WhatsApp que atiende nuevos
// clientes y agenda demos. Todos los CTA de la landing apuntan acá.
export const WHATSAPP_NUMBER = "5492617450587"; // +54 9 261 745-0587

export const WHATSAPP_MESSAGE =
  "Hola! Me interesa conocer Cauce y agendar una demo para mi clínica.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

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

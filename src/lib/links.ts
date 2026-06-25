// Punto de contacto único de Cauce: el bot de WhatsApp que atiende nuevos
// clientes y agenda demos. Todos los CTA de la landing apuntan acá.
export const WHATSAPP_NUMBER = "5492616756885"; // +54 9 2616 75-6885

export const WHATSAPP_MESSAGE =
  "Hola! Me interesa conocer Cauce y agendar una demo para mi clínica.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

"use client";

import { WHATSAPP_URL, buildWhatsAppUrl, trackWhatsAppClick } from "@/lib/links";

/* Link único a WhatsApp de toda la landing. Centraliza el destino y dispara el
   evento `whatsapp_click` en GTM (dataLayer.push) en cada click.
   `location` identifica desde qué CTA salió (nav, hero, footer, etc.).

   El href arranca como WHATSAPP_URL (estático, válido para SSR / middle-click) y
   en el click se reescribe con buildWhatsAppUrl(), que adjunta el GCLID si el
   visitante vino de un anuncio. Reescribir el href del propio <a> antes de que el
   navegador lo siga evita popup blockers (a diferencia de window.open). */
type Props = {
  location: string;
  className?: string;
  children: React.ReactNode;
};

export default function WhatsAppLink({ location, className, children }: Props) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={(e) => {
        e.currentTarget.href = buildWhatsAppUrl();
        trackWhatsAppClick(location);
      }}
    >
      {children}
    </a>
  );
}

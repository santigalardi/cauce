"use client";

import { WHATSAPP_URL, trackWhatsAppClick } from "@/lib/links";

/* Link único a WhatsApp de toda la landing. Centraliza el href (WHATSAPP_URL)
   y dispara el evento `whatsapp_click` en GTM (dataLayer.push) en cada click.
   `location` identifica desde qué CTA salió (nav, hero, footer, etc.). */
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
      onClick={() => trackWhatsAppClick(location)}
    >
      {children}
    </a>
  );
}

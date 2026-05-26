import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display sans clean — neo-grotesque moderno con personalidad sutil.
const instrumentSans = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Sans neo-grotesque para body — técnica, refinada.
const plexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Mono para números, etiquetas y badges técnicos.
const plexMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const SITE_URL = "https://landing.prestobots.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PrestoBots Salud — Infraestructura de rentabilidad para clínicas",
    template: "%s | PrestoBots Salud",
  },
  description:
    "Bot de WhatsApp integrado nativamente a tu HIS. +1M turnos gestionados, 80% autogestión, +200K chats/mes. Recuperá la facturación que tu agenda pierde en silencio.",
  applicationName: "PrestoBots Salud",
  keywords: [
    "agenda médica",
    "WhatsApp clínica",
    "turnos automatizados",
    "PrestoBots",
    "Geclisa",
    "ausentismo clínicas",
    "no-show clínicas",
    "rentabilidad clínica",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "PrestoBots Salud",
    title: "PrestoBots Salud — Infraestructura de rentabilidad para clínicas",
    description:
      "Bot de WhatsApp integrado nativamente a tu HIS. Reducí el ausentismo y recuperá la facturación que tu agenda pierde en silencio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrestoBots Salud — Infraestructura de rentabilidad para clínicas",
    description:
      "Reducí el ausentismo. 80% de autogestión real. Integración nativa con tu HIS.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

import DemoChatBot from "@/components/DemoChatBot";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${instrumentSans.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <DemoChatBot />
      </body>
    </html>
  );
}

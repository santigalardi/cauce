import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GTM_ID = "GTM-P4RDF3J4";

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
    default: "Cauce — Infraestructura de rentabilidad para clínicas",
    template: "%s | Cauce",
  },
  description:
    "Bot de WhatsApp integrado nativamente a tu HIS. +1M turnos gestionados, 80% autogestión, +200K chats/mes. Recuperá la facturación que tu agenda pierde en silencio.",
  applicationName: "Cauce",
  keywords: [
    "agenda médica",
    "WhatsApp clínica",
    "turnos automatizados",
    "Cauce",
    "Geclisa",
    "ausentismo clínicas",
    "no-show clínicas",
    "rentabilidad clínica",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Cauce",
    title: "Cauce — Infraestructura de rentabilidad para clínicas",
    description:
      "Bot de WhatsApp integrado nativamente a tu HIS. Reducí el ausentismo y recuperá la facturación que tu agenda pierde en silencio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cauce — Infraestructura de rentabilidad para clínicas",
    description:
      "Reducí el ausentismo. 80% de autogestión real. Integración nativa con tu HIS.",
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#6E2E3A",
};

import WhatsAppFab from "@/components/WhatsAppFab";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${instrumentSans.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}

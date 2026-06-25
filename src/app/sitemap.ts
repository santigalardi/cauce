import type { MetadataRoute } from "next";

const SITE_URL = "https://caucebot.com";

// Landing de una sola página: solo la home. Si se agregan rutas
// (privacidad, términos), sumarlas acá.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

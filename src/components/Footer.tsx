"use client";

import Image from "next/image";

function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a
              href="#top"
              onClick={scrollToTop}
              className="inline-block cursor-pointer"
              aria-label="Cauce — volver arriba"
            >
              <Image
                src="/logos/cauce-logo-gold.png"
                alt="Cauce"
                width={460}
                height={120}
                className="h-9 mb-5"
                style={{ width: "auto" }}
              />
            </a>
            <p className="text-sm leading-relaxed max-w-md">
              Centro de contacto inteligente especializado en clínicas y hospitales.
              Automatizamos el ciclo completo del turno en WhatsApp, integrado a
              tu sistema de gestión.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Producto
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#producto" className="hover:text-brand-yellow transition-colors">Cómo funciona</a></li>
              <li><a href="#pilares" className="hover:text-brand-yellow transition-colors">Beneficios</a></li>
              <li><a href="#form" className="hover:text-brand-yellow transition-colors">Agendar demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://prestobots.com/politica-de-privacidad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a
                  href="https://prestobots.com/terminos-y-condiciones/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow transition-colors"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="https://prestobots.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow transition-colors"
                >
                  prestobots.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {year} Cauce. Todos los derechos reservados. Powered by: Prestobots S.A</p>
          <p>Hecho en Argentina.</p>
        </div>
      </div>
    </footer>
  );
}

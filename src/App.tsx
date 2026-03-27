import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// === COMPONENTES GLOBALES ===
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PageLoader from './components/PageLoader';

// === CODE SPLITTING ===
const Home = lazy(() => import('./pages/Home'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
// 1. Importamos la nueva página 404
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />

        <Suspense fallback={<PageLoader />}>
          <main className="grow">
            <Routes>
              {/* Rutas Existentes */}
              <Route path="/" element={<Home />} />
              <Route path="/privacidad" element={<PrivacyPolicy />} />
              <Route path="/terminos" element={<TermsConditions />} />

              {/* 2. AGREGAR ESTA RUTA AL FINAL: Catch-all route */}
              {/* El path="*" captura cualquier ruta que no coincida con las de arriba */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
};

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Index from "./pages/Index";
import Tienda from "./pages/Tienda";
import ProductoDetalle from "./pages/ProductoDetalle";
import Carrito from "./pages/Carrito";
import Success from "./pages/Success";
import Contacto from "./pages/Contacto";
import QuienesSomos from "./pages/QuienesSomos";
import Devoluciones from "./pages/Devoluciones";
import NotFound from "./pages/NotFound";
import ChatButton from "./components/ChatButton";
import DondeEstamos from "./pages/DondeEstamos";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import FAQ from "./pages/FAQ";
import ConfirmarPedido from "./pages/ConfirmarPedido";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import React from "react";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  const [cookieConsent, setCookieConsent] = React.useState<any>(null);

  React.useEffect(() => {
    let stored = localStorage.getItem('cookieConsent');
    // Migración de valores antiguos a la nueva estructura
    if (stored === 'all') {
      const consent = {
        ad_storage: 'granted',
        analytics_storage: 'granted',
        functionality_storage: 'granted',
        personalization_storage: 'granted',
        security_storage: 'granted',
      };
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      stored = JSON.stringify(consent);
    } else if (stored === 'essential') {
      const consent = {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        functionality_storage: 'granted',
        personalization_storage: 'denied',
        security_storage: 'granted',
      };
      localStorage.setItem('cookieConsent', JSON.stringify(consent));
      stored = JSON.stringify(consent);
    }
    setCookieConsent(stored ? JSON.parse(stored) : null);
    const onStorage = () => {
      let updated = localStorage.getItem('cookieConsent');
      if (updated === 'all') {
        const consent = {
          ad_storage: 'granted',
          analytics_storage: 'granted',
          functionality_storage: 'granted',
          personalization_storage: 'granted',
          security_storage: 'granted',
        };
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        updated = JSON.stringify(consent);
      } else if (updated === 'essential') {
        const consent = {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'granted',
          personalization_storage: 'denied',
          security_storage: 'granted',
        };
        localStorage.setItem('cookieConsent', JSON.stringify(consent));
        updated = JSON.stringify(consent);
      }
      setCookieConsent(updated ? JSON.parse(updated) : null);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const allowAnalytics = cookieConsent && cookieConsent.ad_storage === 'granted' && cookieConsent.analytics_storage === 'granted';

  return (
    <HelmetProvider>
      <Helmet>
        {allowAnalytics && <>
          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FB9FKSL7S0"></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FB9FKSL7S0');
            `}
          </script>
          {/* Google Tag Manager */}
          <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PW6V49X2');`}</script>
        </>}
      </Helmet>
      {/* Google Tag Manager (noscript) */}
      {allowAnalytics && (
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PW6V49X2" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
      )}
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/producto/:id" element={<ProductoDetalle />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/success" element={<Success />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/conocenos/quienes-somos" element={<QuienesSomos />} />
                <Route path="/conocenos" element={<QuienesSomos />} />
                <Route path="/conocenos/donde-estamos" element={<DondeEstamos />} />
                <Route path="/devoluciones" element={<Devoluciones />} />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/privacidad" element={<Privacidad />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/confirmar-pedido/:orderId" element={<ConfirmarPedido />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ChatButton />
            </BrowserRouter>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

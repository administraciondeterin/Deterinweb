import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { Checkbox } from './ui/checkbox';

const Footer = () => {
  const companyLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiénes Somos', href: '/conocenos/quienes-somos' },
    { name: 'Dónde Estamos', href: '/conocenos/donde-estamos' },
    { name: 'Tienda', href: '/tienda' },
    { name: 'Contacto', href: '/contacto' }
  ];

  const legalLinks = [
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
    { name: 'Política de Cookies', href: '/cookies' },
    { name: 'Preguntas Frecuentes', href: '/faq' }
  ];

  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [analyticsConsent, setAnalyticsConsent] = useState(false);
  const [showConsentToast, setShowConsentToast] = useState<string | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShowCookieBanner(true);
  }, []);

  const handleAcceptEssential = () => {
    const consent = {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted',
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowCookieBanner(false);
    setShowConsentToast('Has aceptado solo las cookies esenciales.');
    setTimeout(() => setShowConsentToast(null), 3000);
  };

  const handleAcceptAll = () => {
    const consent = {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted',
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    setShowCookieBanner(false);
    setShowConsentToast('Has aceptado todas las cookies.');
    setTimeout(() => setShowConsentToast(null), 3000);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="Logo Deterín" className="w-32 h-32 object-contain rounded-lg" />
            </div>
            <p className="text-gray-400 mb-4">
              Más de 40 años fabricando detergentes industriales de alta calidad para múltiples sectores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 DETERÍN. Todos los derechos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              Fabricantes de detergentes industriales desde 1985
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Notice */}
      <div className="bg-[#019EE1] border-t border-[#017bb0]">
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-white text-center">
            Este sitio utiliza cookies para mejorar su experiencia. Al continuar navegando, asume que acepta su uso.{' '}
            <Link to="/cookies" className="text-white underline hover:text-[#e0f7ff] transition-colors">
              Leer más
            </Link>
          </div>
        </div>
      </div>

      {/* Banner de consentimiento de cookies */}
      {showCookieBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white border-2 border-[#019EE1] rounded-xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center text-center">
            <span className="text-gray-800 text-lg mb-4">
              Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio. Consulta nuestra{' '}
              <Link to="/cookies" className="underline text-[#019EE1] font-semibold">Política de Cookies</Link>.
            </span>
            <div className="flex items-center gap-2 mb-4">
              <Checkbox id="analytics-consent" checked={analyticsConsent} onCheckedChange={v => setAnalyticsConsent(v === true)} />
              <label htmlFor="analytics-consent" className="text-gray-700 select-none cursor-pointer">
                Acepto cookies de analítica y marketing (Google Analytics, GTM)
              </label>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={handleAcceptEssential}
                className="bg-gray-200 hover:bg-gray-300 text-[#019EE1] font-bold px-8 py-3 rounded-lg text-lg shadow transition-colors w-full border border-[#019EE1]"
              >
                Aceptar solo esenciales
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-[#019EE1] hover:bg-[#017bb0] text-white font-bold px-8 py-3 rounded-lg text-lg shadow transition-colors w-full"
              >
                Aceptar todas las cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast de confirmación de consentimiento */}
      {showConsentToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#019EE1] text-white px-6 py-3 rounded-lg shadow-lg z-[100] text-lg font-semibold animate-fade-in">
          {showConsentToast}
        </div>
      )}
    </footer>
  );
};

export default Footer;

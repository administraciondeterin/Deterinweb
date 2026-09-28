import React from 'react';
// Helmet puede no estar disponible, así que lo importo de forma condicional
let Helmet: any = () => null;
try {
  // @ts-ignore
  Helmet = require('react-helmet-async').Helmet;
} catch {}
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';

const DondeEstamos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Dónde Estamos | Deterín</title>
        <meta name="description" content="Ubicación, dirección y contacto de Deterín. Fábrica y oficinas en Fuenlabrada, Madrid. Distribución nacional de detergentes industriales." />
        <link rel="canonical" href="/donde-estamos" />
      </Helmet>
      <Header />
      <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Dónde estamos?</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Nuestra fábrica y oficinas están en Fuenlabrada, Madrid. Distribuimos a toda España y ofrecemos atención directa para empresas, almacenes y profesionales del sector.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dirección y contacto</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-[#019EE1] mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Fábrica y oficinas</p>
                  <p className="text-gray-600">
                    Polígono Industrial El Palomo<br />
                    C/ Torres Quevedo 2<br />
                    28946 Fuenlabrada, Madrid
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-[#019EE1]" />
                <p className="text-gray-600">916 063 528</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-[#019EE1]" />
                <p className="text-gray-600">deterin@deterin.com</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Más de 40 años fabricando detergentes industriales de alta calidad para múltiples sectores. Certificación ISO 9001. Compromiso con la innovación, sostenibilidad y máxima eficiencia.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <iframe
              title="Mapa Deterín Fuenlabrada"
              src="https://www.google.com/maps?q=Pol%C3%ADgono+Industrial+El+Palomo,+C%2F+Torres+Quevedo+2,+28946+Fuenlabrada,+Madrid&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DondeEstamos; 
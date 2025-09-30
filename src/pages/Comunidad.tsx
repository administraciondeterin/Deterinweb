import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin } from 'lucide-react';

const provincias = [
  'Almería', 'Badajoz', 'Málaga', 'Madrid', 'Toledo', 'Cádiz', 'León', 'Barcelona', 'Girona', 'Vizcaya', 'Pontevedra', 'Jaén', 'Guadalajara', 'Cuenca'
];

const Comunidad = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Proveedores en toda España | Deterín</title>
      <meta name="description" content="Deterín es proveedor de productos químicos y detergentes industriales en toda España. Consulta las provincias donde tenemos presencia y distribución." />
      <link rel="canonical" href="/comunidad" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Proveedores en toda España</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Distribuimos nuestros productos químicos y detergentes industriales en toda España. Consulta las provincias donde tenemos presencia directa y red de distribución.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-[#019EE1]">Presencia nacional</h2>
        <p className="mb-8 text-gray-700">Deterín cuenta con una red de distribución y clientes en toda España, garantizando entregas rápidas y atención personalizada en las siguientes provincias:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {provincias.map((provincia) => (
            <li key={provincia} className="flex items-center text-[#019EE1] font-semibold">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-gray-800">{provincia}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <iframe
            title="Mapa de presencia Deterín"
            src="https://www.google.com/maps/d/embed?mid=1w5Qw2Qw2Qw2Qw2Qw2Qw2Qw2Qw2Qw2Qw2&hl=es"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Comunidad; 
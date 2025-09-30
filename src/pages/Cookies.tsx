import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cookies = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Política de Cookies | Deterín</title>
      <meta name="description" content="Lee la política de cookies de Deterín. Información sobre el uso de cookies en este sitio web y cómo gestionarlas." />
      <link rel="canonical" href="/cookies" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Cookies</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Este sitio web utiliza cookies para mejorar tu experiencia y analizar el uso del sitio. Aquí te explicamos cómo y por qué.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">1. ¿Qué son las cookies?</h2>
        <p className="mb-6">Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten recordar tus preferencias y mejorar la navegación.</p>
        <h2 className="text-2xl font-bold mb-6">2. Tipos de cookies que usamos</h2>
        <ul className="mb-6 list-disc pl-6">
          <li>Cookies técnicas: necesarias para el funcionamiento del sitio.</li>
          <li>Cookies de análisis: nos ayudan a entender cómo se usa el sitio para mejorarlo.</li>
          <li>Cookies de personalización: recuerdan tus preferencias.</li>
        </ul>
        <h2 className="text-2xl font-bold mb-6">3. Gestión de cookies</h2>
        <p className="mb-6">Puedes configurar tu navegador para aceptar o rechazar cookies, así como para eliminarlas. Si las rechazas, algunas funciones del sitio pueden verse afectadas.</p>
        <h2 className="text-2xl font-bold mb-6">4. Cambios en la política de cookies</h2>
        <p>Podemos actualizar esta política en cualquier momento. Los cambios se publicarán en esta página.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Cookies; 
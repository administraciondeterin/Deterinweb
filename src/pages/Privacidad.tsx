import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacidad = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Política de Privacidad | Deterín</title>
      <meta name="description" content="Lee la política de privacidad de Deterín. Información sobre cómo protegemos y tratamos tus datos personales." />
      <link rel="canonical" href="/privacidad" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          En Deterín nos tomamos muy en serio la protección de tus datos personales. Aquí te explicamos cómo los tratamos.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">1. Responsable del Tratamiento</h2>
        <p className="mb-6">Deterín, Polígono Industrial El Palomo, C/ Torres Quevedo 2, 28946 Fuenlabrada, Madrid. Email: deterin@deterin.com</p>
        <h2 className="text-2xl font-bold mb-6">2. Finalidad de los Datos</h2>
        <p className="mb-6">Tus datos se utilizan para gestionar pedidos, consultas, comunicaciones comerciales y mejorar nuestros servicios.</p>
        <h2 className="text-2xl font-bold mb-6">3. Legitimación</h2>
        <p className="mb-6">La base legal para el tratamiento es tu consentimiento, la ejecución de un contrato o el cumplimiento de obligaciones legales.</p>
        <h2 className="text-2xl font-bold mb-6">4. Destinatarios</h2>
        <p className="mb-6">No cedemos tus datos a terceros salvo obligación legal o para la prestación de servicios estrictamente necesarios (por ejemplo, logística o hosting).</p>
        <h2 className="text-2xl font-bold mb-6">5. Derechos</h2>
        <p className="mb-6">Puedes acceder, rectificar, suprimir, limitar u oponerte al tratamiento de tus datos escribiendo a deterin@deterin.com. También puedes reclamar ante la Agencia Española de Protección de Datos.</p>
        <h2 className="text-2xl font-bold mb-6">6. Seguridad</h2>
        <p className="mb-6">Aplicamos medidas técnicas y organizativas para proteger tus datos y evitar accesos no autorizados.</p>
        <h2 className="text-2xl font-bold mb-6">7. Cambios en la Política</h2>
        <p>Nos reservamos el derecho de modificar esta política para adaptarla a novedades legislativas o de funcionamiento. Los cambios se publicarán en esta página.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Privacidad; 
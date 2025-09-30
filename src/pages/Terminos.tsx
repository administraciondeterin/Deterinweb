import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terminos = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Términos y Condiciones | Deterín</title>
      <meta name="description" content="Lee los términos y condiciones de uso de Deterín. Información legal sobre el uso de este sitio web y nuestros servicios de limpieza industrial." />
      <link rel="canonical" href="/terminos" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Por favor, lee atentamente estos términos antes de utilizar nuestro sitio web o adquirir nuestros productos.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">1. Aceptación de los Términos</h2>
        <p className="mb-6">El acceso y uso de este sitio web implica la aceptación de los presentes términos y condiciones. Si no estás de acuerdo, por favor, no utilices este sitio.</p>
        <h2 className="text-2xl font-bold mb-6">2. Uso del Sitio</h2>
        <p className="mb-6">El usuario se compromete a utilizar el sitio y sus servicios de conformidad con la ley, la moral, el orden público y los presentes términos. Queda prohibido el uso con fines ilícitos o lesivos para Deterín o terceros.</p>
        <h2 className="text-2xl font-bold mb-6">3. Propiedad Intelectual</h2>
        <p className="mb-6">Todos los contenidos, marcas, logos, imágenes y textos son propiedad de Deterín o de sus licenciantes. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>
        <h2 className="text-2xl font-bold mb-6">4. Responsabilidad</h2>
        <p className="mb-6">Deterín no se responsabiliza de los daños derivados del uso del sitio, interrupciones, virus o cualquier incidencia técnica ajena a nuestro control.</p>
        <h2 className="text-2xl font-bold mb-6">5. Modificaciones</h2>
        <p className="mb-6">Deterín se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán publicadas en esta página.</p>
        <h2 className="text-2xl font-bold mb-6">6. Legislación y Jurisdicción</h2>
        <p className="mb-6">Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Madrid, salvo que la ley disponga lo contrario.</p>
        <h2 className="text-2xl font-bold mb-6">7. Contacto Legal</h2>
        <p>Para cualquier consulta legal, puedes contactarnos en <a href="mailto:deterin@deterin.com" className="text-[#019EE1] underline">deterin@deterin.com</a>.</p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terminos; 
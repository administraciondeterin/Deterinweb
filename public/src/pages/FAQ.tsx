import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    question: '¿Qué tipo de productos ofrece Deterín?',
    answer: 'Deterín fabrica y distribuye detergentes industriales, desengrasantes, limpiadores, desinfectantes y productos para hostelería, automoción, lavandería e industria.'
  },
  {
    question: '¿Realizan envíos a toda España?',
    answer: 'Sí, distribuimos a toda España peninsular. Para envíos a Baleares, Canarias o fuera de España, contáctanos para estudiar las opciones.'
  },
  {
    question: '¿Cuánto tarda en llegar mi pedido?',
    answer: 'El plazo habitual es de 24 a 72 horas laborables, dependiendo de la ubicación y el stock.'
  },
  {
    question: '¿Puedo comprar si soy particular?',
    answer: 'Nuestros productos están orientados a empresas y profesionales, pero si eres particular puedes consultarnos y te asesoraremos.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencia bancaria, tarjeta de crédito/débito y próximamente PayPal.'
  },
  {
    question: '¿Puedo solicitar productos personalizados?',
    answer: 'Sí, fabricamos soluciones a medida para empresas que lo requieran.'
  },
  {
    question: '¿Cómo puedo contactar con atención al cliente?',
    answer: 'Puedes escribirnos a deterin@deterin.com o llamarnos al 916 063 528.'
  },
  {
    question: '¿Los productos tienen certificación?',
    answer: 'Sí, todos nuestros productos cuentan con certificación ISO 9001.'
  }
];

const FAQ = () => (
  <div className="min-h-screen bg-gray-50">
    <Helmet>
      <title>Preguntas Frecuentes | Deterín</title>
      <meta name="description" content="Resuelve tus dudas sobre productos, envíos, pagos y atención al cliente de Deterín." />
      <link rel="canonical" href="/faq" />
    </Helmet>
    <Header />
    <section className="py-16 bg-gradient-to-br from-[#019EE1] via-[#019ee15b] to-[#019EE1] text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Encuentra respuestas a las dudas más habituales sobre nuestros productos y servicios.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {faqs.map((faq, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-[#019EE1]">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default FAQ; 
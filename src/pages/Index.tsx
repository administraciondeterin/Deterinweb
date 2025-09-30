import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle, Users, Lightbulb, MapPin, Phone, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectorCard from '../components/SectorCard';
import ProductShowcase from '../components/ProductShowcase';
import FAQ from '../components/FAQ';

const Index = () => {
  const sectors = [
    {
      title: "Industrias",
      subtitle: "Productos adaptados",
      description: "Soluciones específicas para industrias en general",
      image: "/deterinextra/d (17).webp",
      category: "industria"
    },
    {
      title: "Hostelería", 
      subtitle: "Garantía de calidad",
      description: "Productos para el sector horeca con garantía de higiene de alto nivel",
      image: "/deterinextra/d (15).webp",
      category: "hosteleria"
    },
    {
      title: "Lavandería",
      subtitle: "Protección de la ropa", 
      description: "Productos especializados en cuidado textil en lavanderías industriales",
      image: "/deterinextra/d (16).webp",
      category: "lavanderia"
    },
    {
      title: "Automoción",
      subtitle: "Todo para el coche",
      description: "Productos para la limpieza y mantenimiento de vehículos", 
      image: "/deterinextra/d (1).webp",
      category: "automocion"
    },
    {
      title: "Empresas",
      subtitle: "Higiene profesional para empresas",
      description: "Soluciones de limpieza para entornos empresariales",
      image: "/deterinextra/d (11).webp",
      category: "empresas"
    },
    {
      title: "Celulosa y Complementos", 
      subtitle: "Complementos de limpieza",
      description: "Comercialización de productos de celulosa y otros complementos de limpieza",
      image: "/deterinextra/d (8).webp",
      category: "complementos"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Fabricación propia con control total",
      description: "En Deterín formulamos, producimos y testeamos cada producto en nuestras propias instalaciones. Esto nos permite mantener un altísimo estándar de calidad, adaptarnos rápidamente y ofrecer precios sin intermediarios."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Distribución rápida y nacional", 
      description: "¿Urgente? ¿Lo necesitas en tu almacén esta semana? Lo tenemos controlado. Entregamos en toda España gracias a nuestro sistema logístico optimizado. Sin rodeos."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-purple-600" />,
      title: "Amplio catálogo profesional",
      description: "Desde desinfectantes para el sector alimentario hasta detergentes industriales de alto rendimiento, tenemos una solución para cada necesidad. Y si no existe… la creamos a medida."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#019EE1] via-[#ffffff5b] to-[#019EE1] text-white py-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
          src="/videos/Industrias-1.mp4"
        />
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative container mx-auto px-4 text-center z-20">
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="Logo Deterín" className="w-64 h-64 object-contain rounded-lg mx-auto" />
          </div>
          <p className="text-xl md:text-2xl mb-4 text-[#edf7fb]">
            Fabricantes de Detergentes Industriales, limpiadores, desengrasantes y desinfectantes
          </p>
          <p className="text-lg md:text-xl mb-8 text-[#b3eaff] max-w-4xl mx-auto">
            Limpieza Profesional para Hostelería, Automoción, Lavanderías e Industria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contacto" 
              className="inline-flex items-center bg-blue-400 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <Mail className="mr-2" />
              Contáctanos
            </Link>
            <a
              href="/CATÁLOGO 2025.pdf"
              download
              className="inline-flex items-center bg-blue-400 hover:bg-blue-100 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Más de 40 años de experiencia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              En Deterín, llevamos más de 40 años fabricando detergentes industriales de alta calidad para múltiples sectores. 
              Nuestro compromiso con la innovación, la sostenibilidad y la máxima eficiencia nos convierte en un referente 
              en la industria de productos de limpieza profesionales.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Sectores
            </h2>
            <p className="text-lg text-gray-600">
              Soluciones especializadas para cada industria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard key={index} {...sector} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Deterín */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Deterín?
            </h2>
            <p className="text-lg text-gray-600">
              Nuestra experiencia garantiza resultados profesionales y de alta calidad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿QUIERES CONOCER NUESTROS PRODUCTOS?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              ¡Estás en el lugar adecuado! En Deterín, fabricamos soluciones de limpieza industrial pensadas para rendir 
              al máximo en cualquier entorno profesional. Desde desengrasantes potentes hasta detergentes específicos 
              para hostelería, pasando por productos ecológicos y fórmulas personalizadas.
            </p>
            <Link 
              href="/CATÁLOGO 2025.pdf"
              download
              className="inline-flex items-center bg-white hover:bg-gray-400 text-[#019EE1] px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Haz clic en nuestro catálogo
            </Link>
          </div>
          <ProductShowcase />
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                ¿DÓNDE NOS ENCONTRAMOS?
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Nuestra fábrica y oficinas</p>
                    <p className="text-gray-600">
                      Polígono Industrial El Palomo<br />
                      C/ Torres Quevedo 2<br />
                      28946 Fuenlabrada, Madrid
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <p className="text-gray-600">916 063 528</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Distribuimos a toda España y ofrecemos atención directa para empresas, almacenes y profesionales del sector.
              </p>
              <div className="bg-blue-100 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <Star className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-gray-900">Conoce al equipo</h3>
                </div>
                <p className="text-gray-700">
                  Más de diez años en el negocio – Nuestra experiencia garantiza resultados profesionales y de alta calidad en todo momento.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Tienes preguntas? ¡Tenemos respuestas!
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas saber sobre Deterín
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Vamos a limpiar juntos!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ponte en contacto con Deterín hoy mismo y descubre cómo nuestros productos de limpieza pueden transformar tus espacios.
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Contacta con nosotros
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

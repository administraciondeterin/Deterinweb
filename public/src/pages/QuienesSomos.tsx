import React from 'react';
import { CheckCircle, Users, Award, Lightbulb, Factory, Truck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductShowcase from '../components/ProductShowcase';

const QuienesSomos = () => {
  const sectors = [
    {
      title: "Hostelería",
      description: "Entornos impecables para garantizar la seguridad alimentaria y la mejor experiencia para clientes y empleados"
    },
    {
      title: "Automoción", 
      description: "Brillo, protección y limpieza profesional para cada detalle de los vehículos"
    },
    {
      title: "Lavandería industrial",
      description: "Blancos más blancos y colores más vivos con el menor consumo de producto"
    },
    {
      title: "Industria",
      description: "Desinfección potente y eficaz para mantener los estándares de higiene más exigentes"
    },
    {
      title: "Construcción",
      description: "Eliminación de residuos y limpieza profunda post-obra para garantizar espacios impecables"
    },
    {
      title: "Naval",
      description: "Soluciones especializadas para la limpieza y mantenimiento de embarcaciones y estructuras marítimas"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Más de 40 años de experiencia",
      description: "Nuestra misión es proporcionar soluciones de limpieza efectivas y seguras, ayudando a las empresas a optimizar sus procesos de higiene y desinfección."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Equipo de profesionales",
      description: "Deterín fabrica sus productos desde cero con alta calidad y precisión, no solo distribuyéndolos. Esto transmite control sobre el proceso y conocimiento técnico."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Innovación constante",
      description: "En Deterín, la innovación está en el corazón de todo lo que hacemos. Nos comprometemos a mejorar continuamente nuestros productos y procesos."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundImage: "url('/deterinextra/20250709_1658_Aerial Building Overview_remix_01jzqtxb75e8r8qzmx490kxna7.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#019EE1]">Quienes Somos</h1>
          <p className="text-2xl md:text-2xl text-[#019EE1] max-w-3xl mx-auto">
            Somos Deterín, la empresa con más productos de limpieza en España
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              No solo fabricamos detergentes industriales de alta calidad
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              También creamos soluciones que transforman la limpieza profesional. Con más de 40 años de experiencia, 
              la excelencia es una filosofía de trabajo aplicada en cada fórmula, envase y gota de nuestros productos.
            </p>
          </div>
        </div>
      </section>

      {/* History and Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Deterín es una empresa familiar fundada a principios de 1986. Desde entonces nos dedicamos a la creación, 
                fabricación, envasado, distribución y venta de detergentes, desengrasantes, limpiadores y desinfectantes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Todos nuestros productos cuentan con la certificación UNE-EN ISO 9001 y están elaborados con las mejores 
                materias primas, respetando siempre el medio ambiente.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="w-12 h-12 text-blue-600" />
                <div>
                  <p className="font-bold text-gray-900">Certificación ISO 9001</p>
                  <p className="text-gray-600">Calidad garantizada</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 overflow-hidden flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.727887302154!2d-3.780111!3d40.2817945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418afc14d725b3%3A0x82d37554afc04c4a!2zRGV0ZXLDrW4!5e0!3m2!1ses!2ses!4v1753122248451!5m2!1ses!2ses"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Deterín"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Filosofía</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              El verdadero valor de Deterín radica en nuestra capacidad para resolver los problemas de nuestros clientes 
              y simplificarles la vida. Entendemos sus necesidades, nos adelantamos a los cambios del sector y nos adaptamos 
              a ellos con soluciones eficaces y de última generación.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Esta ha sido y seguirá siendo nuestra filosofía como fabricantes de detergentes.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Sectores</h2>
            <p className="text-lg text-gray-600">Soluciones especializadas para cada industria</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.title}</h3>
                <p className="text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Innovamos para tu tranquilidad</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              En Deterín no nos conformamos con lo que ya funciona; buscamos lo que funciona mejor. 
              La investigación y el desarrollo son parte fundamental de nuestra esencia.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              No solo fabricamos detergentes; creamos soluciones que marcan la diferencia. Nuestro equipo de expertos 
              trabaja diariamente en desarrollar nuevas fórmulas, probando ingredientes y técnicas para mejorar eficacia y sostenibilidad.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Creemos que la limpieza profesional puede ser eficiente sin comprometer el medio ambiente, 
              y que cada innovación que lanzamos lo demuestra.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
              <iframe
                title="Instalaciones Deterín - Fuenlabrada"
                src="https://www.google.com/maps?q=Pol%C3%ADgono+Industrial+El+Palomo,+C%2F+Torres+Quevedo+2,+28946+Fuenlabrada,+Madrid&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestras Instalaciones</h2>
              <p className="text-lg text-gray-600 mb-6">
                Deterín dispone de instalaciones de aproximadamente 2.000 m² que incluyen almacenes, 
                zona de fabricación, laboratorio y oficinas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">7 reactores de acero inoxidable con agitación (500L - 5000L)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Dos líneas de envasado (automática y semiautomática)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Laboratorio de control de calidad</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Sistema logístico optimizado para toda España</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Distribución Nacional</h2>
            <p className="text-lg text-gray-600">Llegamos a toda España con nuestro servicio de distribución</p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
            <iframe
              title="Mapa de distribución Deterín en España"
              src="https://www.google.com/maps/d/embed?mid=1w5Qw2Qw2Qw2Qw2Qw2Qw2Qw2Qw2Qw2Qw2&hl=es"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Distribuimos nuestros productos a todas las provincias de España con un servicio rápido y eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProductShowcase />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Únete a la Revolución de la Limpieza
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Prueba la diferencia con Deterín y lleva la higiene de tu empresa al siguiente nivel. 
            Déjanos ser tu socio en limpieza profesional y descubre lo que la calidad real puede hacer por ti.
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Contacta con nosotros
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;

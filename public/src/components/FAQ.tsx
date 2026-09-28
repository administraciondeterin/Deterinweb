
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué tipo de productos de limpieza ofrece Deterín?",
      answer: "Deterín se especializa en productos de limpieza industriales de alta calidad para sectores como hostelería, sanidad, automoción y grandes superficies. Ofrecemos desde desinfectantes hasta detergentes especializados para mantener espacios impecables."
    },
    {
      question: "¿Realizan envíos a toda España?",
      answer: "¡Claro que sí! Realizamos envíos a toda España peninsular. Para envíos a Baleares, Canarias o fuera de España, por favor, ponte en contacto con nuestro equipo para estudiar las opciones disponibles."
    },
    {
      question: "¿Cuánto tardaré en recibir mi pedido?",
      answer: "El plazo típico es de 24 a 72 horas desde la confirmación de pago, dependiendo de la ubicación y stock. Pedidos especiales o volúmenes grandes reciben un tiempo estimado personalizado."
    },
    {
      question: "¿Puedo solicitar un pedido personalizado o grandes volúmenes?",
      answer: "Sí. Trabajamos con pedidos a medida para empresas que necesiten grandes volúmenes o soluciones específicas. Escríbenos y prepararemos una oferta personalizada para ti."
    },
    {
      question: "¿Puedo comprar productos de Deterín si soy particular?",
      answer: "Los productos están orientados principalmente a empresas y profesionales, pero si un particular está interesado, puede contactar y Deterín le asesorará personalmente."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencia bancaria, tarjeta de crédito o débito, y próximamente PayPal."
    },
    {
      question: "¿Ofrecen asesoramiento sobre qué producto necesito?",
      answer: "¡Por supuesto! En Deterín no solo vendemos productos, también te asesoramos para que elijas la solución de limpieza más adecuada a tus necesidades. Solo tienes que contactarnos y un experto te guiará."
    },
    {
      question: "¿Qué hago si mi pedido llega dañado o incorrecto?",
      answer: "Aunque cuidamos cada envío, si ocurre un problema, debes contactar en un plazo de 48 horas tras la recepción y proporcionaremos una solución rápida y eficaz."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900">{faq.question}</span>
              {openItem === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-600" />
              )}
            </button>
            {openItem === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

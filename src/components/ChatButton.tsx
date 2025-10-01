import React from 'react';
import { MessageCircle } from 'lucide-react';

const ChatButton = () => {
  const phone = '+34 608972248';
  const defaultMessage = 'Hola, vengo de la web de Deterín y necesito ayuda.';
  const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ChatButton;

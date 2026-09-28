import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // TODO: Integrate with a real chat system
      alert(`Mensaje enviado: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold">Chat con Deterín</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4 max-w-3/4">
              <p className="text-gray-800">
                Hola ¡Bienvenido a Deterín! ✨ ¿Cómo podemos ayudarte?
              </p>
              <span className="text-xs text-gray-500 mt-1 block">Asistente, 12:00</span>
            </div>

            {/* Messages would be rendered here */}
          </div>
          
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-300 rounded-l-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatButton;

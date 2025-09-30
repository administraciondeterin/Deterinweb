import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ConfirmarPedido: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const confirmar = async () => {
      try {
        const res = await fetch('/api/confirm-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderId }),
        });
        const data = await res.json();
        if (data.success) {
          setStatus('success');
          setMessage('¡Pedido confirmado! Te hemos enviado un resumen a tu correo. Pronto nos pondremos en contacto.');
        } else {
          setStatus('error');
          setMessage(data.error || 'No se pudo confirmar el pedido.');
        }
      } catch (e) {
        setStatus('error');
        setMessage('Error de conexión al confirmar el pedido.');
      }
    };
    if (orderId) confirmar();
  }, [orderId]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16 text-center">
        {status === 'pending' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Confirmando tu pedido...</h1>
          </>
        )}
        {status === 'success' && (
          <>
            <h1 className="text-3xl font-bold text-green-600 mb-4">¡Pedido confirmado!</h1>
            <p className="text-lg text-gray-700 mb-6">{message}</p>
            <Link to="/tienda" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Volver a la tienda</Link>
          </>
        )}
        {status === 'error' && (
          <>
            <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
            <p className="text-lg text-gray-700 mb-6">{message}</p>
            <Link to="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Ir al inicio</Link>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmarPedido; 
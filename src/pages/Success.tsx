import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { verifyPaymentStatus } from '../utils/stripe';

const Success = () => {
  const [searchParams] = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const verifyPayment = async () => {
      if (sessionId) {
        try {
          const result = await verifyPaymentStatus(sessionId);
          setPaymentStatus(result);
        } catch (error) {
          console.error('Error verifying payment:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Verificando el pago...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Pago completado con éxito!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Gracias por tu compra. Tu pedido ha sido procesado y recibirás una confirmación por email.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detalles del pedido</h2>
            
            {paymentStatus && (
              <div className="space-y-4 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Número de pedido:</span>
                  <span className="font-semibold">{paymentStatus.orderId || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado del pago:</span>
                  <span className="font-semibold text-green-600">Completado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total pagado:</span>
                  <span className="font-semibold">€{paymentStatus.amount ? (paymentStatus.amount / 100).toFixed(2) : 'N/A'}</span>
                </div>
              </div>
            )}

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Próximos pasos</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Recibirás un email de confirmación en los próximos minutos</span>
                </div>
                <div className="flex items-center">
                  <Package className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Tu pedido será preparado y empaquetado</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-2 text-blue-600" />
                  <span>Recibirás información de seguimiento del envío</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              to="/tienda"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Seguir comprando
            </Link>
            
            <div className="text-sm text-gray-600">
              <p>¿Tienes alguna pregunta sobre tu pedido?</p>
              <Link to="/contacto" className="text-blue-600 hover:text-blue-700 font-medium">
                Contacta con nosotros
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Success; 
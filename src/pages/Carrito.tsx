import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const Carrito = () => {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const [pedidoError, setPedidoError] = useState('');

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    setShowEmailModal(true);
  };

  const processCheckout = async () => {
    if (!customerEmail || !customerEmail.includes('@')) {
      alert('Por favor, introduce un email válido');
      return;
    }
    setIsProcessing(true);
    setPedidoError('');
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(i => ({
            id: i.id,
            name: i.name,
            price: i.price,
            quantity: i.quantity,
            presentation: i.presentation,
            image: i.image
          })),
          email: customerEmail
        })
      });
      const data = await res.json();
      if (data.success) {
        setShowEmailModal(false);
        setPedidoEnviado(true);
        clearCart();
      } else {
        setPedidoError(data.error || 'No se pudo enviar el pedido.');
      }
    } catch (e) {
      setPedidoError('Error de conexión al enviar el pedido.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h1>
            <p className="text-lg text-gray-600 mb-8">
              Descubre nuestros productos de limpieza industrial de alta calidad
            </p>
            <Link 
              to="/tienda"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ir a la tienda
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to="/tienda" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Seguir comprando
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrito de compras</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.presentation}`} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="max-w-[90%] max-h-[90%] object-contain object-center"
                      style={{ background: 'white' }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">Presentación: {item.presentation}</p>
                    <p className="text-lg font-bold text-green-600">€{item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleQuantityChange(`${item.id}-${item.presentation}`, item.quantity - 1)}
                      className="p-1 text-gray-600 hover:text-gray-800 border border-gray-300 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    
                    <button
                      onClick={() => handleQuantityChange(`${item.id}-${item.presentation}`, item.quantity + 1)}
                      className="p-1 text-gray-600 hover:text-gray-800 border border-gray-300 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-gray-900">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(`${item.id}-${item.presentation}`)}
                      className="text-red-600 hover:text-red-700 mt-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Vaciar carrito
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del pedido</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">€{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span className="font-semibold">A calcular</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-lg font-bold text-green-600">€{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold text-lg transition-colors mb-4 flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Procesando...
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5 mr-2" />
                  Proceder al pago
                </>
              )}
            </button>

            <div className="text-sm text-gray-600 space-y-2">
              <p>✓ Envío rápido 24-72h</p>
              <p>✓ Productos de alta calidad</p>
              <p>✓ Atención personalizada</p>
              <p>✓ Garantía de satisfacción</p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Nuestros expertos pueden asesorarte sobre el mejor producto para tus necesidades.
              </p>
              <Link 
                to="/contacto"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Contactar ahora →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Email Modal y mensaje de pedido enviado */}
      {showEmailModal && !pedidoEnviado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Información de contacto
            </h3>
            <p className="text-gray-600 mb-4">
              Introduce tu email para recibir la confirmación del pedido y el seguimiento del envío.
            </p>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {pedidoError && <div className="text-red-600 mb-2">{pedidoError}</div>}
            <div className="flex space-x-3">
              <button
                onClick={() => setShowEmailModal(false)}
                className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button
                onClick={processCheckout}
                disabled={isProcessing}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
              >
                {isProcessing ? 'Procesando...' : 'Continuar'}
              </button>
            </div>
          </div>
        </div>
      )}
      {pedidoEnviado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center">
            <h3 className="text-2xl font-bold text-green-600 mb-4">¡Pedido enviado!</h3>
            <p className="text-gray-700 mb-4">Te hemos enviado un correo para confirmar tu pedido.<br/>Por favor, revisa tu bandeja de entrada y sigue las instrucciones.</p>
            <button
              onClick={() => setPedidoEnviado(false)}
              className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Carrito;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Clock, AlertCircle, CheckCircle, Truck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Devoluciones = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Política de Devoluciones - Deterín</title>
        <meta name="description" content="Política de devoluciones y reembolsos de Deterín. Conoce nuestros términos y condiciones para devoluciones de productos de limpieza industrial." />
        <meta name="keywords" content="devoluciones, reembolsos, política, detergentes industriales, limpieza" />
      </Helmet>

      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Package className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Devoluciones
            </h1>
            <p className="text-lg text-gray-600">
              Tu satisfacción es nuestra prioridad. Conoce nuestros términos para devoluciones y reembolsos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Plazo de devolución */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Plazo de Devolución</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Aceptamos devoluciones hasta <strong>30 días</strong> después de la recepción del pedido.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• El producto debe estar en su embalaje original</li>
                <li>• No debe haber sido abierto o utilizado</li>
                <li>• Debe estar en perfectas condiciones</li>
              </ul>
            </div>

            {/* Condiciones */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Condiciones Aceptadas</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Productos en embalaje original sin abrir</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Errores en el pedido por nuestra parte</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Productos defectuosos de fábrica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Daños durante el transporte</span>
                </li>
              </ul>
            </div>
          </div>

          {/* No aceptadas */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">No Aceptamos Devoluciones</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-600">
                <li>• Productos abiertos o utilizados</li>
                <li>• Productos sin embalaje original</li>
                <li>• Productos personalizados o a medida</li>
                <li>• Productos perecederos</li>
              </ul>
              <ul className="space-y-2 text-gray-600">
                <li>• Productos de higiene personal</li>
                <li>• Productos químicos especiales</li>
                <li>• Productos con fecha de caducidad próxima</li>
                <li>• Productos adquiridos en ofertas especiales</li>
              </ul>
            </div>
          </div>

          {/* Proceso de devolución */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Proceso de Devolución</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Contacta con nosotros</h3>
                <p className="text-sm text-gray-600">
                  Envía un email a devoluciones@deterin.com con el número de pedido y motivo de la devolución
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Autorización</h3>
                <p className="text-sm text-gray-600">
                  Revisamos tu solicitud y te enviamos la autorización de devolución si procede
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Envío y reembolso</h3>
                <p className="text-sm text-gray-600">
                  Envías el producto y procesamos el reembolso en 5-7 días hábiles
                </p>
              </div>
            </div>
          </div>

          {/* Gastos de envío */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gastos de Envío</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-green-600 mb-2">A cargo de Deterín:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Errores en el pedido</li>
                  <li>• Productos defectuosos</li>
                  <li>• Daños durante el transporte</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-red-600 mb-2">A cargo del cliente:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Cambio de opinión</li>
                  <li>• Productos no adecuados</li>
                  <li>• Pedidos duplicados</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reembolsos */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reembolsos</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Truck className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Tiempo de procesamiento</h3>
                  <p className="text-gray-600">5-7 días hábiles después de recibir la devolución</p>
                </div>
              </div>
              <div className="flex items-start">
                <Package className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Método de reembolso</h3>
                  <p className="text-gray-600">Mismo método de pago utilizado en la compra original</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ayuda?</h2>
            <p className="text-gray-600 mb-6">
              Si tienes alguna pregunta sobre nuestra política de devoluciones, no dudes en contactarnos.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> devoluciones@deterin.com
              </p>
              <p className="text-gray-700">
                <strong>Teléfono:</strong> +34 123 456 789
              </p>
              <p className="text-gray-700">
                <strong>Horario:</strong> Lunes a Viernes, 9:00 - 18:00
              </p>
            </div>
            <div className="mt-6">
              <Link 
                to="/contacto"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Devoluciones; 
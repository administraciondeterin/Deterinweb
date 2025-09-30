import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import safetySheets from '../data/safetySheets.json';

const ProductoDetalle = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedPresentation, setSelectedPresentation] = useState<number|null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = id ? getProductById(id) : null;
  const safetySheetsMap = safetySheets as Record<string, string>;
  const safetySheetUrl = product ? safetySheetsMap[product.id] : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>
          <Link to="/tienda" className="text-blue-600 hover:text-blue-700">
            Volver a la tienda
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    const presentation = product.presentations[selectedPresentation!];
    addItem({
      id: product.id,
      name: product.name,
      price: presentation.price,
      presentation: presentation.size,
      image: product.image
    });
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const categoryNames = {
    automocion: 'Automoción',
    hosteleria: 'Hostelería', 
    industria: 'Industria',
    lavanderia: 'Lavandería',
    limpiadores: 'Limpiadores',
    desengrasantes: 'Desengrasantes'
  };

  // Sombra según categoría
  const categoryShadow: Record<string, string> = {
    automocion: 'shadow-[0_4px_24px_#019EE133]',
    hosteleria: 'shadow-[0_4px_24px_#34d39933]', // verde
    industria: 'shadow-[0_4px_24px_#f59e4233]', // naranja
    lavanderia: 'shadow-[0_4px_24px_#6366f133]', // violeta
    limpiadores: 'shadow-[0_4px_24px_#60a5fa33]', // azul claro
    desengrasantes: 'shadow-[0_4px_24px_#f43f5e33]', // rojo
  };
  const mainCategory = product.categories[0];
  const shadowClass = categoryShadow[mainCategory] || 'shadow-md';

  // Extraer el número de kg de la presentación
  function getKg(size: string) {
    const match = size.match(/(\d+[\.,]?\d*)\s*kg/i);
    return match ? parseFloat(match[1].replace(',', '.')) : null;
  }

  const canAddToCart = selectedPresentation !== null;

  // Verificar si es el producto Graffiti-X para aplicar fondo especial
  const isGraffitiX = product.id === 'graffiti-x';

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
            Volver a la tienda
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {isGraffitiX ? (
                <div className="relative w-full h-96 flex items-center justify-center">
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`relative z-10 w-auto h-80 object-contain bg-transparent mx-auto`}
                  />
                </div>
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-96 object-contain bg-white ${shadowClass}`}
                />
              )}
            </div>
              
            {/* Full Description - Movido aquí arriba */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Descripción completa</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.fullDescription}
              </p>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(Producto profesional)</span>
              </div>

              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.categories.map(category => (
                  <span 
                    key={category}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {categoryNames[category as keyof typeof categoryNames] || category}
                  </span>
                ))}
              </div>

              {safetySheetUrl && (
                <div className="mb-6">
                  <a
                    href={safetySheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Ficha de seguridad
                  </a>
                </div>
              )}
            </div>

            {/* Presentations and Price */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Selecciona presentación</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {product.presentations.map((presentation, index) => {
                  const kg = getKg(presentation.size);
                  const pricePerKg = kg ? (presentation.price / kg) : null;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedPresentation(index)}
                      className={`p-4 border-2 rounded-lg text-left transition-colors ${
                        selectedPresentation === index
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900">{presentation.size}</div>
                      <div className="text-lg font-bold text-green-600">
                        €{presentation.price.toFixed(2)}
                      </div>
                      {pricePerKg && (
                        <div className="text-xs text-gray-500 mt-1">({pricePerKg.toFixed(2)} €/kg)</div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <label className="text-gray-700 font-medium">Cantidad:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-3xl font-bold text-green-600 mb-6">
                €{selectedPresentation !== null ? (product.presentations[selectedPresentation].price * quantity).toFixed(2) : '0.00'}
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all ${
                  canAddToCart
                    ? (addedToCart ? 'bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white')
                    : 'bg-gray-300 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!canAddToCart}
              >
                {addedToCart ? (
                  <span className="flex items-center justify-center">
                    <Check className="w-5 h-5 mr-2" />
                    Añadido al carrito
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Añadir al carrito
                  </span>
                )}
              </button>
            </div>

            {/* Features - Movido aquí abajo */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Características del producto</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Alta calidad industrial
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Fabricación propia
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Certificado ISO 9001
                </li>
                <li className="flex items-center text-gray-600">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Envío rápido 24-72h
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas asesoramiento?</h3>
              <p className="text-gray-600 mb-4">
                Nuestros expertos te ayudan a elegir la solución más adecuada para tus necesidades.
              </p>
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

export default ProductoDetalle; 
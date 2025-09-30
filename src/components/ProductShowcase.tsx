import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const ProductShowcase = () => {
  const featuredProducts = [
    {
      id: 'mkl-10',
      name: 'MKL-10',
      description: 'Limpiador desengrasante multifuncional de amplio espectro',
      price: 20.60,
      maxPrice: 96.70,
      image: '/productos/37.webp',
      featured: true
    },
   
    {
      id: 'gel-manos-deterin',
      name: 'GEL DE MANOS DETERIN',
      description: 'Jabón líquido de manos que limpia y acondiciona',
      price: 18.90,
      maxPrice: 87.50,
      image: '/productos/18.webp'
    },
    {
      id: 'graffiti-x',
      name: 'GRAFFITI X',
      description: 'Limpiador enérgico para grafitis, tintas y manchas difíciles',
      price: 18.05,
      maxPrice: 84.05,
      image: '/productos/2.webp'
    },
     {
      id: 'ambientador',
      name: 'AMBIENTADOR',
      description: 'Ambientador líquido concentrado con esencias de gran rendimiento',
      price: 22.75,
      maxPrice: 110.00,
      image: '/productos/47.webp',
    },
    {
      id: 'biomatic',
      name: 'BIOMATIC',
      description: 'Potenciador de lavado de ropa (disuelve-manchas) concentrado',
      price: 15.50,
      maxPrice: 71.40,
      image: '/productos/3.webp',
    }
  ];

  return (
    <div className="space-y-8">
      {/* Featured Product */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                Producto Destacado
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {featuredProducts[0].name}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {featuredProducts[0].description}
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-bold text-green-600">
                €{featuredProducts[0].price.toFixed(2)}
              </span>
              <span className="text-lg text-gray-500">
                - €{featuredProducts[0].maxPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex space-x-4">
              <Link 
                to={`/producto/${featuredProducts[0].id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Ver Detalles
              </Link>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Añadir al Carrito</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-[#019EE1] to-[#e0f7ff] rounded-xl shadow-lg flex items-center justify-center">
              <img 
                src={featuredProducts[0].image} 
                alt={featuredProducts[0].name}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
            <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              ¡Destacado!
            </div>
          </div>
        </div>
      </div>

      {/* Other Products */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Productos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(1).map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="w-full h-48 bg-gradient-to-br from-[#019EE1] to-[#e0f7ff] flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-gray-900 mb-2">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-green-600">
                    €{product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">
                    - €{product.maxPrice.toFixed(2)}
                  </span>
                </div>
                <Link 
                  to={`/producto/${product.id}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold transition-colors"
                >
                  Ver Opciones
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;

import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  selectedCategory?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode, selectedCategory }) => {
  const { addItem } = useCart();
  
  const minPrice = Math.min(...product.presentations.map(p => p.price));
  const maxPrice = Math.max(...product.presentations.map(p => p.price));

  // Sombra según categoría
  const categoryShadow: Record<string, string> = {
    automocion: 'shadow-[0_4px_24px_#019EE133]',
    hosteleria: 'shadow-[0_4px_24px_#34d39933]', // verde
    industria: 'shadow-[0_4px_24px_#f59e4233]', // naranja
    lavanderia: 'shadow-[0_4px_24px_#6366f133]', // violeta
    limpiadores: 'shadow-[0_4px_24px_#60a5fa33]', // azul claro
    desengrasantes: 'shadow-[0_4px_24px_#f43f5e33]', // rojo
    complementos: 'shadow-[0_4px_24px_#fde04733]', // amarillo
  };
  let mainCategory = product.categories[0];
  if (selectedCategory && selectedCategory !== 'all' && product.categories.includes(selectedCategory)) {
    mainCategory = selectedCategory;
  }
  const shadowClass = categoryShadow[mainCategory] || 'shadow-md';

  // Colores para degradado y etiquetas de categoría
  const categoryColors: Record<string, {bg: string, text: string, grad: string}> = {
    automocion: { bg: 'bg-[#019EE1]/20', text: 'text-[#019EE1]', grad: 'from-[#019EE1]/20' },
    hosteleria: { bg: 'bg-[#34d399]/20', text: 'text-[#34d399]', grad: 'from-[#34d399]/20' },
    industria: { bg: 'bg-[#f59e42]/20', text: 'text-[#f59e42]', grad: 'from-[#f59e42]/20' },
    lavanderia: { bg: 'bg-[#6366f1]/20', text: 'text-[#6366f1]', grad: 'from-[#6366f1]/20' },
    limpiadores: { bg: 'bg-[#60a5fa]/20', text: 'text-[#60a5fa]', grad: 'from-[#60a5fa]/20' },
    desengrasantes: { bg: 'bg-[#f43f5e]/20', text: 'text-[#f43f5e]', grad: 'from-[#f43f5e]/20' },
    complementos: { bg: 'bg-yellow-200', text: 'text-yellow-800', grad: 'from-yellow-100' },
  };
  const mainColor = categoryColors[mainCategory] || { bg: 'bg-gray-200', text: 'text-gray-700', grad: 'from-gray-200' };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const defaultPresentation = product.presentations[0];
    addItem({
      id: product.id,
      name: product.name,
      price: defaultPresentation.price,
      presentation: defaultPresentation.size,
      image: product.image
    });
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex">
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-48 h-32 object-cover ${shadowClass}`}
          />
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center space-x-2 mb-4">
                  {product.categories.slice(0, 3).map(category => (
                    <span 
                      key={category}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-right ml-6">
                <div className="text-2xl font-bold text-green-600 mb-2">
                  €{minPrice.toFixed(2)}
                  {maxPrice !== minPrice && (
                    <span className="text-lg text-gray-500"> - €{maxPrice.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <Link
                    to={`/producto/${product.id}`}
                    className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Ver</span>
                  </Link>
                  <button
                    onClick={handleAddToCart}
                    className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Añadir</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-48 object-contain bg-white group-hover:scale-100 transition-transform duration-300 ${shadowClass}`}
        />
        {/* Degradado de color de categoría */}
        <div className={`absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t ${mainColor.grad} to-transparent pointer-events-none`} />
        <div className="absolute top-4 right-4">
          <button
            onClick={handleAddToCart}
            className="bg-white/90 hover:bg-white text-green-600 p-2 rounded-full shadow-lg transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {product.categories.slice(0, 2).map(category => {
            const color = categoryColors[category] || { bg: 'bg-gray-200', text: 'text-gray-700' };
            return (
              <span 
                key={category}
                className={`px-2 py-1 ${color.bg} ${color.text} text-xs rounded-full`}
              >
                {category}
              </span>
            );
          })}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-green-600">
              €{minPrice.toFixed(2)}
            </span>
            {maxPrice !== minPrice && (
              <span className="text-sm text-gray-500 ml-1">
                - €{maxPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Link
            to={`/producto/${product.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Ver Opciones
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

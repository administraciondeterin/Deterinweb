import React from 'react';
import { Link } from 'react-router-dom';

interface SectorCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
}

const SectorCard: React.FC<SectorCardProps> = ({ title, subtitle, description, image, category }) => {
  // Sombra según categoría
  const categoryShadow: Record<string, string> = {
    automocion: 'shadow-[0_4px_32px_#019EE1cc]',
    hosteleria: 'shadow-[0_4px_32px_#34d399cc]', // verde
    industria: 'shadow-[0_4px_32px_#f59e42cc]', // naranja
    lavanderia: 'shadow-[0_4px_32px_#6366f1cc]', // violeta
    limpiadores: 'shadow-[0_4px_32px_#60a5facc]', // azul claro
    desengrasantes: 'shadow-[0_4px_32px_#f43f5ecc]', // rojo
    empresas: 'shadow-[0_4px_32px_#6366f1cc]', // violeta
    complementos: 'shadow-[0_4px_32px_#f59e42cc]', // naranja
  };
  const shadowClass = categoryShadow[category] || 'shadow-lg';

  const categoryBorder: Record<string, string> = {
    automocion: 'border-4 border-[#019EE1]',
    hosteleria: 'border-4 border-[#34d399]', // verde
    industria: 'border-4 border-[#f59e42]', // naranja
    lavanderia: 'border-4 border-[#6366f1]', // violeta
    limpiadores: 'border-4 border-[#60a5fa]', // azul claro
    desengrasantes: 'border-4 border-[#f43f5e]', // rojo
    empresas: 'border-4 border-[#6366f1]', // violeta
    complementos: 'border-4 border-[#f59e42]', // naranja
  };
  const borderClass = categoryBorder[category] || 'border-4 border-gray-300';

  return (
    <Link 
      to={`/tienda?categoria=${category}`}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${borderClass}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-blue-200">{subtitle}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 leading-relaxed">{description}</p>
        <div className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
          Ver productos →
        </div>
      </div>
    </Link>
  );
};

export default SectorCard;

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products, getAllCategories } from '../data/products';
import { Filter, Grid, List } from 'lucide-react';

const Tienda = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  const categories = getAllCategories();
  const categoryNames = {
    automocion: 'Automoción',
    hosteleria: 'Hostelería', 
    industria: 'Industria',
    lavanderia: 'Lavandería',
    limpiadores: 'Limpiadores',
    desengrasantes: 'Desengrasantes',
    empresas: 'Empresas',
    complementos: 'Celulosa y Complementos'
  };

  useEffect(() => {
    const categoria = searchParams.get('categoria');
    if (categoria) {
      setSelectedCategory(categoria);
    }
    setCurrentPage(1); // Reiniciar a la primera página al cambiar de categoría
  }, [searchParams]);

  const filteredProducts = products.filter(product => {
    const hasPrice = Array.isArray(product.presentations) && product.presentations.some(pr => Number(pr.price) > 0);
    const matchesCategory = selectedCategory === 'all' || product.categories.includes(selectedCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return hasPrice && matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredProducts.length, totalPages]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('categoria');
    } else {
      searchParams.set('categoria', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Productos
          </h1>
          <a
            href="/CATÁLOGO%202025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 bg-[#019EE1] hover:bg-[#017bb0] text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors text-lg"
          >
            Descargar Catálogo 2025 (PDF)
          </a>
          <p className="text-lg text-gray-600">
            Descubre nuestra amplia gama de productos de limpieza industrial
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 text-gray-600 hover:text-blue-600"
              >
                <Filter className="w-5 h-5" />
                <span>Filtros</span>
              </button>
              
              <div className="hidden lg:flex items-center space-x-2">
                <label className="text-gray-700 font-medium">Categoría:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">Todas las categorías</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {categoryNames[category as keyof typeof categoryNames] || category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
              <label className="block text-gray-700 font-medium mb-2">Categoría:</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todas las categorías</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {categoryNames[category as keyof typeof categoryNames] || category}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && (
              <span> en {categoryNames[selectedCategory as keyof typeof categoryNames] || selectedCategory}</span>
            )}
          </p>
        </div>

        {/* Products Grid/List */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {paginatedProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewMode={viewMode}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >Anterior</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >{i + 1}</button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >Siguiente</button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
                searchParams.delete('categoria');
                setSearchParams(searchParams);
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Tienda;

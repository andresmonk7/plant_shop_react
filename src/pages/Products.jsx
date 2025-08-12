import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiFilter, FiSearch, FiX } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  // Obtener categorías únicas
  const categories = ['Todas', ...new Set(products.map(product => product.category))];

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Obtener precios máximos y mínimos para el rango
  const minPrice = 0;
  const maxPrice = Math.max(...products.map(p => p.price), 500);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nuestro Catálogo</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explora nuestra selección de plantas y encuentra la compañera verde perfecta para tu hogar.
        </p>
      </div>

      {/* Barra de búsqueda y filtros */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar plantas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adidas-green focus:border-transparent"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors md:w-auto w-full"
          >
            <FiFilter className="h-5 w-5" />
            <span>Filtros</span>
          </button>
        </div>

        {/* Filtros desplegables */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Filtro por categoría */}
              <div>
                <h4 className="font-medium mb-3">Categorías</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm ${
                        selectedCategory === category
                          ? 'bg-adidas-green text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro por precio */}
              <div>
                <h4 className="font-medium mb-3">Rango de precios</h4>
                <div className="px-2">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contador de resultados */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Mostrando <span className="font-semibold">{filteredProducts.length}</span> productos
          {selectedCategory !== 'Todas' && ` en ${selectedCategory}`}
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Ordenar por:</span>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-adidas-green">
            <option>Más recientes</option>
            <option>Precio: menor a mayor</option>
            <option>Precio: mayor a menor</option>
            <option>Mejor valorados</option>
          </select>
        </div>
      </div>

      {/* Lista de productos */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isInCart={cartItems.some(item => item.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700 mb-2">No se encontraron productos</h3>
          <p className="text-gray-500 mb-6">Intenta con otros términos de búsqueda o ajusta los filtros.</p>
          <button 
            onClick={() => {
              setSelectedCategory('Todas');
              setSearchTerm('');
              setPriceRange([0, 500]);
            }}
            className="px-6 py-2 bg-adidas-green text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;

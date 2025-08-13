import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiHome, FiGrid, FiInfo } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Obtener el estado del carrito
  const { itemCount = 0 } = useSelector((state) => state.cart || {});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Debug: Mostrar el estado del carrito
  useEffect(() => {
    console.log('Header - Número de items en el carrito:', itemCount);
  }, [itemCount]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Menú móvil */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-gray-600 p-2"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-900">
              PLANTSHOP
            </Link>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Inicio</Link>
            <Link to="/categorias" className="text-gray-700 hover:text-gray-900 font-medium">Categorías</Link>
            <Link to="/productos" className="text-gray-700 hover:text-gray-900 font-medium">Productos</Link>
            <Link to="/nosotros" className="text-gray-700 hover:text-gray-900 font-medium">Nosotros</Link>
          </nav>

          {/* Iconos de usuario y carrito */}
          <div className="flex items-center space-x-4">
            <Link to="/cuenta" className="text-gray-700 hover:text-gray-900 p-2">
              <FiUser size={20} />
            </Link>
            <Link to="/carrito" className="text-gray-700 hover:text-gray-900 p-2 relative">
              <FiShoppingCart size={20} />
              {/* Contador de artículos en el carrito */}
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-b-lg">
            <Link 
              to="/" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiHome className="mr-2" /> Inicio
            </Link>
            <Link 
              to="/categorias" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiGrid className="mr-2" /> Categorías
            </Link>
            <Link 
              to="/productos" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link 
              to="/nosotros" 
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiInfo className="mr-2" /> Nosotros
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

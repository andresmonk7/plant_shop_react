import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiHome, FiGrid, FiInfo } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Categories from './pages/Categories';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import './App.css';

// Componente Header inspirado en Adidas
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black text-adidas-black">PLANT.</span>
          </Link>

          {/* Menú de navegación */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-gray-100">
              <FiHome className="w-4 h-4" />
              <span>Inicio</span>
            </Link>
            <Link to="/productos" className="nav-link flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-gray-100">
              <FiGrid className="w-4 h-4" />
              <span>Productos</span>
            </Link>
            <Link to="/categorias" className="nav-link flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-gray-100">
              <FiGrid className="w-4 h-4" />
              <span>Categorías</span>
            </Link>
            <Link to="/nosotros" className="nav-link flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-gray-100">
              <FiInfo className="w-4 h-4" />
              <span>Nosotros</span>
            </Link>
          </nav>

          {/* Iconos de usuario y carrito */}
          <div className="flex items-center space-x-4">
            <Link to="/cuenta" className="p-2 hover:text-adidas-green transition-colors">
              <FiUser className="w-5 h-5" />
            </Link>
            <Link to="/carrito" className="p-2 hover:text-adidas-green transition-colors relative">
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-adidas-green text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
            </Link>
            <button 
              className="md:hidden p-2 text-adidas-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 font-medium hover:text-adidas-green" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link to="/productos" className="px-4 py-2 font-medium hover:text-adidas-green" onClick={() => setIsMenuOpen(false)}>Productos</Link>
              <Link to="/categorias" className="px-4 py-2 font-medium hover:text-adidas-green" onClick={() => setIsMenuOpen(false)}>Categorías</Link>
              <Link to="/nosotros" className="px-4 py-2 font-medium hover:text-adidas-green" onClick={() => setIsMenuOpen(false)}>Nosotros</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Componente Footer inspirado en Adidas
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-bold mb-4">SOBRE NOSOTROS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Nuestra Historia</a></li>
              <li><a href="#" className="footer-link">Sostenibilidad</a></li>
              <li><a href="#" className="footer-link">Trabaja con Nosotros</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">ATENCIÓN AL CLIENTE</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Contacto</a></li>
              <li><a href="#" className="footer-link">Preguntas Frecuentes</a></li>
              <li><a href="#" className="footer-link">Envíos y Devoluciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">LEGAL</h4>
            <ul className="space-y-2">
              <li><a href="#" className="footer-link">Términos y Condiciones</a></li>
              <li><a href="#" className="footer-link">Política de Privacidad</a></li>
              <li><a href="#" className="footer-link">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-bold mb-4">SUSCRÍBETE</h4>
            <p className="text-adidas-gray mb-4">Recibe ofertas exclusivas y novedades</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="px-4 py-2 w-full text-adidas-dark-gray focus:outline-none"
              />
              <button className="bg-adidas-green text-white px-4 py-2 hover:bg-opacity-90 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-adidas-gray">
          <p>© {new Date().getFullYear()} PLANT. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inicio" element={<Navigate to="/" replace />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/categorias" element={<Categories />} />
              <Route path="/categorias/:category" element={<Products />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cuenta" element={<Account />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

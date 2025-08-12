import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
  const itemCount = useSelector((state) => state.cart.itemCount);

  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Tienda de Plantas
        </Link>
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:underline">Inicio</Link>
          <Link to="/productos" className="hover:underline">Productos</Link>
          <Link to="/carrito" className="relative">
            <FaShoppingCart className="text-2xl" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

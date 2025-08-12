import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingBag, FiTrash2, FiArrowLeft, FiTruck, FiShield, FiGift } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { clearCart } from '../store/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total, itemCount } = useSelector((state) => state.cart);

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
      dispatch(clearCart());
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 bg-adidas-green bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiShoppingBag className="h-10 w-10 text-adidas-green" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">
            Parece que aún no has añadido ningún producto a tu carrito. 
            ¡Explora nuestra selección y encuentra la planta perfecta para ti!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/productos"
              className="btn btn-primary flex items-center justify-center gap-2"
            >
              <FiShoppingBag className="w-5 h-5" />
              Ver productos
            </Link>
            <Link 
              to="/categorias"
              className="btn btn-outline border-adidas-black text-adidas-black hover:bg-adidas-black hover:text-white"
            >
              Explorar categorías
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calcular subtotal, envío y total
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 9.99) : 0;
  const orderTotal = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          to="/productos" 
          className="inline-flex items-center text-adidas-green hover:text-adidas-light-green font-medium mb-4"
        >
          <FiArrowLeft className="mr-2" />
          Seguir comprando
        </Link>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h1 className="text-3xl font-bold">Tu Carrito</h1>
          <span className="text-gray-500">{itemCount} {itemCount === 1 ? 'producto' : 'productos'}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista de productos */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <CartItem key={`${item.id}-${item.size}`} item={item} />
          ))}

          <div className="flex justify-end">
            <button
              onClick={handleClearCart}
              className="flex items-center text-red-500 hover:text-red-700 text-sm font-medium"
            >
              <FiTrash2 className="mr-2" />
              Vaciar carrito
            </button>
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 h-fit sticky top-6">
          <h2 className="text-xl font-bold mb-6 pb-4 border-b border-gray-100">Resumen del Pedido</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal ({itemCount} {itemCount === 1 ? 'artículo' : 'artículos'})</span>
              <span className="font-medium">${subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Envío</span>
              {shipping === 0 ? (
                <span className="text-adidas-green font-medium">¡Gratis!</span>
              ) : (
                <span>${shipping.toFixed(2)}</span>
              )}
            </div>
            
            {subtotal < 100 && (
              <div className="text-sm text-adidas-green bg-green-50 p-3 rounded-md -mx-2">
                <p>¡Gasta ${(100 - subtotal).toFixed(2)} más para obtener envío gratis!</p>
              </div>
            )}
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Impuestos incluidos</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/checkout"
              className="block w-full btn btn-primary text-center"
            >
              ← Seguir comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

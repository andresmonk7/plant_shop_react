import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{product.category}</p>
        <p className="text-gray-700 text-sm mt-2 line-clamp-2">{product.description}</p>
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`mt-4 w-full py-2 rounded-md ${
            isInCart 
              ? 'bg-gray-300 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isInCart ? 'Añadido al carrito' : 'Añadir al carrito'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

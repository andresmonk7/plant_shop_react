import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/slices/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center space-x-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)} c/u</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button 
            onClick={() => dispatch(decrementQuantity(item.id))}
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            onClick={() => dispatch(incrementQuantity(item.id))}
            className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
          >
            +
          </button>
        </div>
        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
        <button 
          onClick={() => dispatch(removeFromCart(item.id))}
          className="text-red-500 hover:text-red-700"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;

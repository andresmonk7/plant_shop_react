import { createSlice } from '@reduxjs/toolkit';

// Función para cargar el carrito desde localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem('cart');
    if (serializedCart === null) {
      return {
        items: [],
        total: 0,
        itemCount: 0,
      };
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    console.error('Error loading cart from localStorage', err);
    return {
      items: [],
      total: 0,
      itemCount: 0,
    };
  }
};

const initialState = loadCartFromLocalStorage();

// Función para guardar el carrito en localStorage
const saveCartToLocalStorage = (cart) => {
  try {
    const serializedCart = JSON.stringify(cart);
    localStorage.setItem('cart', serializedCart);
  } catch (err) {
    console.error('Error saving cart to localStorage', err);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('addToCart payload:', action.payload);
      
      // Crear una copia del estado actual
      const newState = { ...state };
      
      // Buscar si el producto ya está en el carrito
      const existingItemIndex = newState.items.findIndex(
        item => item.id === action.payload.id
      );
      
      if (existingItemIndex >= 0) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        const updatedItems = [...newState.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        newState.items = updatedItems;
      } else {
        // Si es un producto nuevo, agregarlo al carrito
        newState.items = [
          ...newState.items,
          { ...action.payload, quantity: 1 }
        ];
      }
      
      // Calcular el nuevo total y contador
      newState.total = parseFloat(
        (newState.total + parseFloat(action.payload.price)).toFixed(2)
      );
      newState.itemCount = newState.items.reduce(
        (total, item) => total + item.quantity, 0
      );
      
      console.log('Nuevo estado del carrito:', {
        items: newState.items,
        total: newState.total,
        itemCount: newState.itemCount,
      });
      
      // Actualizar el estado
      Object.assign(state, newState);
      
      // Guardar en localStorage
      saveCartToLocalStorage({
        items: newState.items,
        total: newState.total,
        itemCount: newState.itemCount,
      });
    },
    removeFromCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.total = parseFloat((state.total - (item.price * item.quantity)).toFixed(2));
        state.itemCount -= item.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
        
        // Guardar en localStorage después de actualizar el estado
        saveCartToLocalStorage({
          items: state.items,
          total: state.total,
          itemCount: state.itemCount,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.total = parseFloat((state.total + item.price).toFixed(2));
        state.itemCount += 1;
        
        // Guardar en localStorage después de actualizar el estado
        saveCartToLocalStorage({
          items: state.items,
          total: state.total,
          itemCount: state.itemCount,
        });
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total = parseFloat((state.total - item.price).toFixed(2));
        state.itemCount -= 1;
        
        // Guardar en localStorage después de actualizar el estado
        saveCartToLocalStorage({
          items: state.items,
          total: state.total,
          itemCount: state.itemCount,
        });
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

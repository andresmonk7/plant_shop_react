import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

// Debug: Mostrar el estado inicial
console.log('Estado inicial de Redux:', JSON.parse(JSON.stringify(store.getState())));

// Suscribirse a los cambios de estado
store.subscribe(() => {
  console.log('Estado actualizado:', JSON.parse(JSON.stringify(store.getState())));
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

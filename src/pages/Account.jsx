import { useState } from 'react';
import { FiUser, FiPackage, FiMapPin, FiHeart, FiSettings, FiLogOut, FiEdit2, FiCheck } from 'react-icons/fi';

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Ana García',
    email: 'ana.garcia@example.com',
    phone: '+52 55 1234 5678',
    joinDate: 'Enero 2023',
  });
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Casa',
      street: 'Calle Flores #123',
      city: 'Ciudad de México',
      state: 'CDMX',
      postalCode: '03100',
      isDefault: true,
    },
    {
      id: 2,
      name: 'Oficina',
      street: 'Paseo de la Reforma 505',
      city: 'Ciudad de México',
      state: 'CDMX',
      postalCode: '06500',
      isDefault: false,
    },
  ]);
  const [orders, setOrders] = useState([
    {
      id: 'ORD-12345',
      date: '15 Mar 2023',
      status: 'Entregado',
      total: 2499.00,
      items: [
        { id: 1, name: 'Monstera Deliciosa', price: 899.00, quantity: 1, image: 'https://images.unsplash.com/photo-1603210117120-1d049bca2b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
        { id: 2, name: 'Maceta de Cerámica', price: 400.00, quantity: 1, image: 'https://images.unsplash.com/photo-1594221709784-3215f9a5f1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
      ],
    },
    {
      id: 'ORD-12344',
      date: '28 Feb 2023',
      status: 'Entregado',
      total: 1299.00,
      items: [
        { id: 3, name: 'Sansevieria', price: 599.00, quantity: 1, image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80' },
      ],
    },
  ]);
  const [wishlist, setWishlist] = useState([
    { id: 4, name: 'Ficus Lyrata', price: 1299.00, image: 'https://images.unsplash.com/photo-1533050487297-09ca450cc4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 5, name: 'Pilea Peperomioides', price: 799.00, image: 'https://images.unsplash.com/photo-1517848568502-d03fa74e1964?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
  ]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Aquí iría la lógica para guardar en el backend
  };

  const handleMakeDefaultAddress = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id,
    })));
  };

  const handleRemoveAddress = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta dirección?')) {
      setAddresses(addresses.filter(addr => addr.id !== id));
    }
  };

  const renderProfileTab = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Mi perfil</h2>
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 text-sm font-medium text-adidas-green hover:text-adidas-dark-green"
          >
            <FiEdit2 className="w-4 h-4" />
            Editar perfil
          </button>
        ) : (
          <button 
            onClick={handleSaveProfile}
            className="flex items-center gap-2 text-sm font-medium text-white bg-adidas-green hover:bg-adidas-dark-green px-4 py-2 rounded-lg transition-colors"
          >
            <FiCheck className="w-4 h-4" />
            Guardar cambios
          </button>
        )}
      </div>

      {!isEditing ? (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-3xl font-bold text-adidas-green">
              {profile.name.charAt(0)}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{profile.name}</h3>
              <p className="text-gray-600">{profile.email}</p>
              <p className="text-gray-600">{profile.phone}</p>
              <p className="text-sm text-gray-500">Miembro desde {profile.joinDate}</p>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveProfile} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                required
              />
            </div>
          </div>
        </form>
      )}

      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Mis direcciones</h2>
          <button className="btn btn-primary">
            <FiMapPin className="mr-2" />
            Agregar dirección
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {addresses.map((address) => (
            <div key={address.id} className="bg-white rounded-xl shadow-sm p-6 relative">
              {address.isDefault && (
                <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Predeterminada
                </span>
              )}
              <h3 className="font-bold text-lg mb-2">{address.name}</h3>
              <p className="text-gray-600">{address.street}</p>
              <p className="text-gray-600">{address.city}, {address.state} {address.postalCode}</p>
              <div className="mt-4 flex gap-2">
                {!address.isDefault && (
                  <button 
                    onClick={() => handleMakeDefaultAddress(address.id)}
                    className="text-sm text-adidas-green hover:underline"
                  >
                    Hacer predeterminada
                  </button>
                )}
                <button 
                  onClick={() => handleRemoveAddress(address.id)}
                  className="text-sm text-red-500 hover:underline ml-2"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrdersTab = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6">Mis pedidos</h2>
      
      {orders.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <FiPackage className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Aún no has realizado pedidos</h3>
          <p className="mt-1 text-gray-500">Cuando realices un pedido, aparecerá aquí.</p>
          <div className="mt-6">
            <a href="/productos" className="btn btn-primary">
              Ver productos
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-medium">Pedido #{order.id}</h3>
                    <p className="text-sm text-gray-500">Realizado el {order.date}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Entregado' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-gray-600 text-sm">Cantidad: {item.quantity}</p>
                        <p className="text-gray-900 font-medium">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Total del pedido</p>
                    <p className="text-xl font-bold">${order.total.toFixed(2)}</p>
                  </div>
                  <div className="space-x-3">
                    <button className="btn btn-outline border-adidas-black text-adidas-black hover:bg-adidas-black hover:text-white">
                      Ver detalles
                    </button>
                    <button className="btn btn-primary">
                      Volver a pedir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderWishlistTab = () => (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Mi lista de deseos</h2>
        <p className="text-gray-600">{wishlist.length} {wishlist.length === 1 ? 'artículo' : 'artículos'}</p>
      </div>
      
      {wishlist.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm">
          <FiHeart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Tu lista de deseos está vacía</h3>
          <p className="mt-1 text-gray-500">Guarda los artículos que te gustan para verlos más tarde.</p>
          <div className="mt-6">
            <a href="/productos" className="btn btn-primary">
              Explorar productos
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-red-500 hover:bg-red-50">
                  <FiHeart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900 group-hover:text-adidas-green transition-colors">
                  {item.name}
                </h3>
                <p className="text-lg font-bold text-adidas-black mt-1">${item.price.toFixed(2)}</p>
                <div className="mt-4 flex gap-2">
                  <button className="btn btn-primary flex-1">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderSettingsTab = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6">Configuración</h2>
      
      <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Preferencias de correo electrónico</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="h-4 w-4 text-adidas-green focus:ring-adidas-green border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="newsletter" className="ml-3 text-sm font-medium text-gray-700">
                Recibir boletines y ofertas especiales
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="order-updates"
                name="order-updates"
                type="checkbox"
                className="h-4 w-4 text-adidas-green focus:ring-adidas-green border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="order-updates" className="ml-3 text-sm font-medium text-gray-700">
                Recibir actualizaciones de pedidos
              </label>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-medium mb-4">Preferencias de privacidad</h3>
          <p className="text-sm text-gray-500 mb-4">
            Controla cómo usamos tus datos personales. Para obtener más información, consulta nuestra 
            <a href="/privacidad" className="text-adidas-green hover:underline ml-1">
              Política de privacidad
            </a>.
          </p>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="data-sharing"
                name="data-sharing"
                type="checkbox"
                className="h-4 w-4 text-adidas-green focus:ring-adidas-green border-gray-300 rounded"
              />
              <label htmlFor="data-sharing" className="ml-3 text-sm font-medium text-gray-700">
                Compartir mis datos con socios de confianza
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="personalized-ads"
                name="personalized-ads"
                type="checkbox"
                className="h-4 w-4 text-adidas-green focus:ring-adidas-green border-gray-300 rounded"
                defaultChecked
              />
              <label htmlFor="personalized-ads" className="ml-3 text-sm font-medium text-gray-700">
                Publicidad personalizada
              </label>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-medium mb-4">Eliminar cuenta</h3>
          <p className="text-sm text-gray-500 mb-4">
            Al eliminar tu cuenta, se eliminarán todos tus datos personales, direcciones, historial de pedidos y lista de deseos.
            Esta acción no se puede deshacer.
          </p>
          <button className="text-sm font-medium text-red-600 hover:text-red-800">
            Eliminar mi cuenta permanentemente
          </button>
        </div>
        
        <div className="pt-6 border-t border-gray-100 flex justify-end">
          <button className="btn btn-primary">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mi cuenta</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-adidas-green text-white flex items-center justify-center text-xl font-bold">
                  {profile.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{profile.name}</p>
                  <p className="text-sm text-gray-500">Ver perfil</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-adidas-green bg-opacity-10 text-adidas-green'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FiUser className="w-5 h-5 mr-3" />
                  Mi perfil
                </button>
                
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'orders'
                      ? 'bg-adidas-green bg-opacity-10 text-adidas-green'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FiPackage className="w-5 h-5 mr-3" />
                  Mis pedidos
                  {orders.length > 0 && (
                    <span className="ml-auto bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {orders.length}
                    </span>
                  )}
                </button>
                
                <button
                  onClick={() => setActiveTab('wishlist')}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'wishlist'
                      ? 'bg-adidas-green bg-opacity-10 text-adidas-green'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FiHeart className="w-5 h-5 mr-3" />
                  Lista de deseos
                  {wishlist.length > 0 && (
                    <span className="ml-auto bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-adidas-green bg-opacity-10 text-adidas-green'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <FiSettings className="w-5 h-5 mr-3" />
                  Configuración
                </button>
                
                <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 mt-4">
                  <FiLogOut className="w-5 h-5 mr-3" />
                  Cerrar sesión
                </button>
              </nav>
            </div>
          </div>
          
          {/* Contenido principal */}
          <div className="flex-1">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'orders' && renderOrdersTab()}
            {activeTab === 'wishlist' && renderWishlistTab()}
            {activeTab === 'settings' && renderSettingsTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

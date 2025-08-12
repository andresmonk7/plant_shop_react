import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FiArrowLeft, FiCheckCircle, FiCreditCard, FiMapPin, FiTruck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'México',
    phone: '',
    saveInfo: true,
    shippingMethod: 'standard',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Procesar pago
      console.log('Procesando pago...', formData);
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
            No hay productos en tu carrito para proceder al pago.
          </p>
          <Link 
            to="/productos"
            className="btn btn-primary inline-flex items-center justify-center gap-2"
          >
            <FiShoppingBag className="w-5 h-5" />
            Ver productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Pasos */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10"></div>
            
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= stepNum ? 'bg-adidas-green text-white' : 'bg-gray-200 text-gray-600'} mb-2`}>
                  {step > stepNum ? <FiCheckCircle className="w-5 h-5" /> : stepNum}
                </div>
                <span className={`text-sm font-medium ${step >= stepNum ? 'text-adidas-black' : 'text-gray-500'}`}>
                  {stepNum === 1 ? 'Envío' : stepNum === 2 ? 'Pago' : 'Confirmación'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FiMapPin className="text-adidas-green" />
                    Información de envío
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                      placeholder="Calle y número"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent bg-white"
                        required
                      >
                        <option value="México">México</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="España">España</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Argentina">Argentina</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="h-4 w-4 text-adidas-green focus:ring-adidas-green border-gray-300 rounded"
                    />
                    <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
                      Guardar información para la próxima compra
                    </label>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FiTruck className="text-adidas-green" />
                    Método de envío
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        id: 'standard',
                        title: 'Envío Estándar',
                        price: subtotal > 100 ? 'Gratis' : '$9.99',
                        time: '3-5 días hábiles',
                        description: subtotal > 100 ? '¡Tu envío es gratis!' : 'Gastá $' + (100 - subtotal).toFixed(2) + ' más para envío gratis'
                      },
                      {
                        id: 'express',
                        title: 'Envío Express',
                        price: '$19.99',
                        time: '1-2 días hábiles',
                        description: 'Recibí tu pedido más rápido'
                      }
                    ].map((method) => (
                      <label 
                        key={method.id}
                        className={`flex items-start p-4 border rounded-lg cursor-pointer hover:border-adidas-green transition-colors ${formData.shippingMethod === method.id ? 'border-2 border-adidas-green bg-green-50' : 'border-gray-200'}`}
                      >
                        <input
                          type="radio"
                          name="shippingMethod"
                          value={method.id}
                          checked={formData.shippingMethod === method.id}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 text-adidas-green focus:ring-adidas-green border-gray-300"
                        />
                        <div className="ml-3 flex-1">
                          <div className="flex justify-between">
                            <span className="block font-medium">{method.title}</span>
                            <span className="font-semibold">{method.price}</span>
                          </div>
                          <p className="text-sm text-gray-600">{method.time}</p>
                          <p className="text-xs mt-1 text-green-600">{method.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Link 
                    to="/carrito" 
                    className="flex items-center text-gray-600 hover:text-adidas-green font-medium"
                  >
                    <FiArrowLeft className="mr-2" />
                    Volver al carrito
                  </Link>
                  <button 
                    type="submit" 
                    className="btn btn-primary px-8"
                  >
                    Continuar al pago
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <FiCreditCard className="text-adidas-green" />
                    Información de pago
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre en la tarjeta</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="Como aparece en la tarjeta"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de expiración</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/AA"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-adidas-green focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="flex items-center text-gray-600 hover:text-adidas-green font-medium"
                  >
                    <FiArrowLeft className="mr-2" />
                    Volver a envío
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary px-8"
                  >
                    Realizar pedido
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">¡Pedido realizado con éxito!</h2>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Gracias por tu compra. Hemos enviado un correo de confirmación a <span className="font-medium">{formData.email}</span> con los detalles de tu pedido.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/productos" 
                    className="btn btn-primary"
                  >
                    Seguir comprando
                  </Link>
                  <Link 
                    to="/cuenta/pedidos" 
                    className="btn btn-outline border-adidas-black text-adidas-black hover:bg-adidas-black hover:text-white"
                  >
                    Ver mis pedidos
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Resumen del pedido */}
          <div className="lg:sticky lg:top-6 h-fit">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Resumen del pedido</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</span>
                </div>
                {shipping === 0 && subtotal > 0 && (
                  <div className="text-sm text-green-600 bg-green-50 p-2 rounded-md">
                    ¡Felicidades! Tienes envío gratis
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {step === 1 && (
                <button 
                  type="submit" 
                  form="shipping-form"
                  className="w-full mt-6 btn btn-primary"
                >
                  Continuar al pago
                </button>
              )}
            </div>

            {step === 2 && (
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Pago seguro</h3>
                <p className="text-sm text-blue-700">
                  Tus datos de pago están encriptados y protegidos. No almacenamos la información de tu tarjeta.
                </p>
                <div className="flex justify-center gap-4 mt-3">
                  <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png" alt="PayPal" className="h-8" />
                  <img src="https://cdn.pixabay.com/photo/2021/12/10/23/43/visa-6861759_1280.png" alt="Visa" className="h-8" />
                  <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/master-card-784424_1280.png" alt="Mastercard" className="h-8" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

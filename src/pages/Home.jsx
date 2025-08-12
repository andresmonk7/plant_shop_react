import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen-90 min-h-screen-90 bg-adidas-gray flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <img 
            src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Plantas de interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              VIVE CON <span className="text-adidas-green">NATURALEZA</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Descubre nuestra exclusiva colección de plantas de interior que transformarán tu hogar en un oasis de tranquilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/productos"
                className="btn btn-primary flex items-center justify-center gap-2"
              >
                Ver colección <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/categorias"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-adidas-black"
              >
                Explorar categorías
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">COLECCIONES DESTACADAS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Plantas de Interior',
                image: 'https://images.unsplash.com/photo-1512428813834-c702c770272b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
                link: '/categorias/interior'
              },
              {
                title: 'Suculentas',
                image: 'https://images.unsplash.com/photo-1516727137709-7c3bfcc20b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
                link: '/categorias/suculentas'
              },
              {
                title: 'Jardín',
                image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
                link: '/categorias/jardin'
              }
            ].map((category, index) => (
              <Link 
                key={index} 
                to={category.link}
                className="group relative h-96 overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300 z-10"></div>
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                  <span className="text-white flex items-center gap-2 group-hover:underline">
                    Ver colección <FiArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Promocional */}
      <section className="py-20 bg-adidas-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">SUSCRÍBETE Y OBTÉN UN 15% DE DESCUENTO</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Únete a nuestra comunidad de amantes de las plantas y recibe ofertas exclusivas, consejos de cuidado y más directamente en tu bandeja de entrada.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="flex-grow px-4 py-3 text-adidas-dark-gray focus:outline-none"
            />
            <button className="bg-adidas-black text-white px-6 py-3 font-bold hover:bg-opacity-90 transition-colors">
              SUSCRIBIRME
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

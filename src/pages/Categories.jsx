import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const categories = [
  {
    id: 1,
    name: 'Plantas de Interior',
    slug: 'interior',
    description: 'Encuentra la planta perfecta para darle vida a tus espacios interiores',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c770272b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    count: 24
  },
  {
    id: 2,
    name: 'Suculentas',
    slug: 'suculentas',
    description: 'Perfectas para principiantes, requieren pocos cuidados',
    image: 'https://images.unsplash.com/photo-1516727137709-7c3bfcc20b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    count: 18
  },
  {
    id: 3,
    name: 'Plantas de Exterior',
    slug: 'exterior',
    description: 'Ideal para jardines, balcones y terrazas',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80',
    count: 32
  },
  {
    id: 4,
    name: 'Plantas de Sombra',
    slug: 'sombra',
    description: 'Perfectas para espacios con poca luz natural',
    image: 'https://images.unsplash.com/photo-1593480778366-0d624f3d3ea7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    count: 15
  },
  {
    id: 5,
    name: 'Plantas Aromáticas',
    slug: 'aromaticas',
    description: 'Aromas naturales para tu hogar y cocina',
    image: 'https://images.unsplash.com/photo-1601571621973-ee8c155653f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    count: 12
  },
  {
    id: 6,
    name: 'Plantas Grandes',
    slug: 'grandes',
    description: 'Para dar un toque de elegancia a espacios amplios',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1913&q=80',
    count: 8
  }
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Explora Nuestras Categorías</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra amplia selección de plantas organizadas por categorías para que encuentres exactamente lo que buscas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-adidas hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{category.count} productos</span>
                <Link 
                  to={`/categorias/${category.slug}`}
                  className="text-adidas-green hover:text-adidas-light-green font-medium flex items-center gap-1 group"
                >
                  Ver productos
                  <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-adidas-gray p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Explora nuestra tienda completa o contáctanos para ayudarte a encontrar la planta perfecta para ti.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/productos" 
            className="btn btn-primary"
          >
            Ver todos los productos
          </Link>
          <Link 
            to="/contacto" 
            className="btn btn-outline border-adidas-black text-adidas-black hover:bg-adidas-black hover:text-white"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

import { FiTruck, FiShield, FiHeart, FiCheckCircle } from 'react-icons/fi';

const features = [
  {
    icon: <FiCheckCircle className="w-8 h-8 text-adidas-green" />,
    title: 'Plantas de Calidad',
    description: 'Seleccionamos cuidadosamente cada planta para garantizar la mejor calidad y salud.'
  },
  {
    icon: <FiTruck className="w-8 h-8 text-adidas-green" />,
    title: 'Envío Rápido',
    description: 'Entregamos tus plantas de forma segura y en el menor tiempo posible.'
  },
  {
    icon: <FiShield className="w-8 h-8 text-adidas-green" />,
    title: 'Garantía',
    description: 'Todas nuestras plantas vienen con garantía de satisfacción.'
  },
  {
    icon: <FiHeart className="w-8 h-8 text-adidas-green" />,
    title: 'Hecho con Amor',
    description: 'Cada planta es cuidada con pasión por nuestro equipo de expertos.'
  }
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          En PLANT., creemos en el poder de la naturaleza para transformar espacios y vidas. 
          Nuestra misión es llevar un poco de verde a cada hogar.
        </p>
      </div>

      {/* Nuestra Historia */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Fundada en 2023, PLANT. nació de una simple idea: hacer que las plantas de interior 
              de alta calidad sean accesibles para todos. Lo que comenzó como un pequeño vivero local 
              se ha convertido en un destino en línea para los amantes de las plantas en todo el país.
            </p>
            <p>
              Nuestro equipo está formado por apasionados de la jardinería, diseñadores de interiores 
              y expertos en plantas que comparten un objetivo común: ayudarte a crear espacios más verdes 
              y saludables.
            </p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
            alt="Nuestro equipo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Nuestros Valores */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Equipo */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Conoce a Nuestro Equipo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'María García',
              role: 'Fundadora y Directora',
              image: 'https://randomuser.me/api/portraits/women/32.jpg',
              bio: 'Apasionada por las plantas desde niña, María fundó PLANT. con el sueño de compartir su amor por la naturaleza.'
            },
            {
              name: 'Carlos López',
              role: 'Experto en Plantas',
              image: 'https://randomuser.me/api/portraits/men/42.jpg',
              bio: 'Con más de 15 años de experiencia, Carlos asegura que cada planta cumple con nuestros altos estándares de calidad.'
            },
            {
              name: 'Ana Martínez',
              role: 'Diseñadora de Interiores',
              image: 'https://randomuser.me/api/portraits/women/68.jpg',
              bio: 'Ana ayuda a nuestros clientes a encontrar las plantas perfectas para cada espacio y estilo de vida.'
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-adidas-green font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-adidas-green text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para darle vida a tu espacio?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Explora nuestra colección y encuentra la planta perfecta para ti.
        </p>
        <a 
          href="/productos" 
          className="inline-block bg-white text-adidas-green font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors"
        >
          Ver Productos
        </a>
      </div>
    </div>
  );
};

export default About;

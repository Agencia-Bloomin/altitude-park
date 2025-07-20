import Image from 'next/image';
import { FloatingElements } from './FloatingElements';

const attractions = [
  { name: 'Free Jump', image: '/images/atracoes/freejump.jpg', description: 'Pule livremente em nossas camas elásticas' },
  { name: 'Ninja Course', image: '/images/atracoes/ninja.jpg', description: 'Desafie-se no percurso ninja' },
  { name: 'Cow Ball', image: '/images/atracoes/cowball.jpg', description: 'Divirta-se com a bola de vaca' },
  { name: 'Crazy Bubble', image: '/images/atracoes/crazy-bubble.jpg', description: 'Entre na bolha maluca' },
  { name: 'Lula', image: '/images/atracoes/lula.jpg', description: 'Experimente a atração lula' },
  { name: 'Twister', image: '/images/atracoes/twister.jpg', description: 'Gire no twister' },
];

export function AttractionsSection() {
  return (
    <section className="section-padding section-animate relative">
      <FloatingElements />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4">Nossas Atrações</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Diversão garantida com as melhores atrações para toda a família!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.name} className="card">
              <div className="card-image-container">
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  width={400}
                  height={300}
                  className="card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{attraction.name}</h3>
                <p className="text-gray-400">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
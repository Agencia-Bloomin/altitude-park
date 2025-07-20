import Image from 'next/image';
import { siteConfig } from '@/data/config';
import { FloatingElements } from './FloatingElements';

export function UnitsSection() {
  // Mapear nomes das unidades para nomes de arquivos
  const getImagePath = (name: string) => {
    const imageMap: { [key: string]: string } = {
      'Alphaville': 'alphaville.jpg',
      'Americana': 'americana.jpg',
      'Campinas': 'campinas.jpg',
      'Moema': 'moema.jpg',
      'Morumbi': 'morumbi.png',
      'São José dos Campos': 'sao-jose.png',
      'Tatuapé/Anália Franco': 'tatuape.jpg',
      'Shopping Vila Olímpia': 'vila-olimpia.jpg'
    };
    return imageMap[name] || 'alphaville.jpg';
  };

  return (
    <section className="section-padding section-animate relative">
      <FloatingElements />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4">Nossas Unidades</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Encontre a unidade mais próxima de você e venha se divertir!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {siteConfig.contact.addresses.map((address) => (
            <div key={address.name} className="card">
              <div className="card-image-container">
                <Image
                  src={`/images/unidades/${getImagePath(address.name)}`}
                  alt={address.name}
                  width={400}
                  height={300}
                  className="card-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{address.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{address.street}</p>
                <p className="text-gray-400 text-sm mb-4">{address.city} - {address.state}</p>
                <div className="text-xs text-gray-500">
                  <p>{address.workingHours.weekdays}</p>
                  <p>{address.workingHours.weekends}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
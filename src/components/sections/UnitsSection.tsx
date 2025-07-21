'use client';

import Image from 'next/image';
import { siteConfig } from '@/data/config';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { BackgroundElements } from '@/components/ui/BackgroundElements';

export function UnitsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Animação para o elemento verde (fade-right)
        const greenElement = sectionRef.current?.querySelector('.bg-element-green');
        if (greenElement) {
          gsap.fromTo(greenElement,
            { 
              x: -200
            },
            { 
              x: 0,
              duration: 2.5,
              delay: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Animação para o elemento rosa (fade-left)
        const pinkElement = sectionRef.current?.querySelector('.bg-element-pink');
        if (pinkElement) {
          gsap.fromTo(pinkElement,
            { 
              x: 200
            },
            { 
              x: 0,
              duration: 2.5,
              delay: 1.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Animação para os cards
        const cards = sectionRef.current?.querySelectorAll('.card');
        cards?.forEach((card, index) => {
          gsap.fromTo(card,
            { 
              opacity: 0,
              y: 50,
              scale: 0.9
            },
            { 
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              delay: 0.2 + (index * 0.3),
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }
    };

    loadGSAP();
  }, []);

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
    <section ref={sectionRef} className="section-padding section-animate relative overflow-hidden">
      {/* Background elements */}
      <BackgroundElements 
        firstElementPosition="top-left"
        secondElementPosition="bottom-right"
        firstElementColor="quinary-400"
        secondElementColor="tertiary-400"
        firstElementClass="bg-element-green"
        secondElementClass="bg-element-pink"
      />
      
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
                  title={address.name}
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

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="xl">
              Compre seu ingresso
            </Button>
            <Button variant="outline" size="xl">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 
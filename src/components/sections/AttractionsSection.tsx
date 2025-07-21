'use client';

import Image from 'next/image';
import { BackgroundElements } from '@/components/ui/BackgroundElements';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const attractions = [
  { 
    name: 'Free Jump', 
    image: '/images/atracoes/freejump.jpg', 
    description: 'Pule livremente em nossas camas elásticas profissionais. Ideal para todas as idades, oferece diversão segura e adrenalina pura!' 
  },
  { 
    name: 'Ninja Course', 
    image: '/images/atracoes/ninja.jpg', 
    description: 'Desafie-se no percurso ninja com obstáculos emocionantes. Teste sua agilidade, força e equilíbrio neste circuito desafiador!' 
  },
  { 
    name: 'Cow Ball', 
    image: '/images/atracoes/cowball.jpg', 
    description: 'Divirta-se com a bola de vaca gigante! Uma experiência única de rebatida que combina esporte e diversão para toda a família.' 
  },
  { 
    name: 'Crazy Bubble', 
    image: '/images/atracoes/crazy-bubble.jpg', 
    description: 'Entre na bolha maluca e flutue como nunca antes! Uma experiência surreal de levitação que vai te surpreender.' 
  },
  { 
    name: 'Lula', 
    image: '/images/atracoes/lula.jpg', 
    description: 'Experimente a atração lula com movimentos únicos e divertidos. Uma aventura aquática que vai te fazer girar e se divertir!' 
  },
  { 
    name: 'Twister', 
    image: '/images/atracoes/twister.jpg', 
    description: 'Gire no twister e sinta a adrenalina! Uma atração que combina velocidade e diversão em um giro emocionante.' 
  },
];

export function AttractionsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Animação para os cards de atrações
        const cards = sectionRef.current?.querySelectorAll('.attraction-card');
        cards?.forEach((card, index) => {
          gsap.fromTo(card,
            { 
              opacity: 0,
              y: 80,
              scale: 0.8,
              rotationY: -15
            },
            { 
              opacity: 1,
              y: 0,
              scale: 1,
              rotationY: 0,
              duration: 2.2,
              delay: 0.5 + (index * 0.3),
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

        // Animação para o título e descrição
        const title = sectionRef.current?.querySelector('.section-title');
        const description = sectionRef.current?.querySelector('.section-description');
        
        if (title) {
          gsap.fromTo(title,
            { 
              opacity: 0,
              y: -50
            },
            { 
              opacity: 1,
              y: 0,
              duration: 1.8,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        if (description) {
          gsap.fromTo(description,
            { 
              opacity: 0,
              y: -30
            },
            { 
              opacity: 1,
              y: 0,
              duration: 1.8,
              delay: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Animação para os botões
        const buttons = sectionRef.current?.querySelectorAll('.cta-buttons button');
        buttons?.forEach((button, index) => {
          gsap.fromTo(button,
            { 
              opacity: 0,
              scale: 0.8,
              y: 30
            },
            { 
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.5,
              delay: 2.5 + (index * 0.4),
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

  return (
    <section ref={sectionRef} className="section-padding section-animate relative overflow-hidden">
      <BackgroundElements 
        firstElementPosition="top-right"
        secondElementPosition="bottom-left"
        firstElementColor="primary-400"
        secondElementColor="secondary-400"
      />
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-2 text-white mb-4 section-title">Nossas Atrações</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto section-description">
            Diversão garantida com as melhores atrações para toda a família!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.name} className="card attraction-card">
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
                <h3 className="text-xl font-bold text-white mb-3">{attraction.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{attraction.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 cta-buttons">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="tertiary" size="xl">
              Compre seu ingresso
            </Button>
            <Button variant="outline" size="xl">
              Faça sua festa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 
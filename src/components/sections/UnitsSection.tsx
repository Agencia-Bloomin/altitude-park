'use client';

import Image from 'next/image';
import { siteConfig } from '@/data/config';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { BackgroundElements } from '@/components/ui/BackgroundElements';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';

export function UnitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<any>(null);

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
    <section ref={sectionRef} className="section-padding section-animate relative overflow-hidden bg-custom-background">
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
          <h2 className="heading-2 text-white mb-4">Unidades</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Escolha uma das nossas unidades para mais informações.
          </p>
        </div>

        {/* Carrossel Container */}
        <div className="relative">
          {/* Swiper */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="units-swiper"
          >
            {siteConfig.contact.addresses.map((address) => (
              <SwiperSlide key={address.name}>
                <a href="" className="block h-full">
                  <div className="card h-full" style={{ backgroundColor: siteConfig.theme.colors.primary }}>
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
                    <div className="p-6 flex items-center justify-center min-h-[80px]">
                      <h3 className="text-xl font-bold text-white text-center uppercase">
                        {address.name}
                      </h3>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controles de Navegação */}
          <div className="flex justify-center items-center gap-4 mt-8 lg:mt-0 lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:pointer-events-none">
            <button
              className="swiper-button-prev bg-primary hover:bg-primary/90 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200 lg:pointer-events-auto"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="swiper-button-next bg-primary hover:bg-primary/90 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200 lg:pointer-events-auto"
              onClick={() => swiperRef.current?.swiper.slideNext()}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="xl">
              Compre seu ingresso
            </Button>
            <Button variant="outline" size="xl">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .units-swiper {
          padding-bottom: 20px;
        }
        
        .units-swiper .swiper-slide {
          height: auto;
        }
        
        .card {
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .card-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
} 
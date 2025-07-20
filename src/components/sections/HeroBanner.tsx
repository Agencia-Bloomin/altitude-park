'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getWhatsAppLink } from '@/data';
// GSAP será carregado dinamicamente

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  {
    id: '1',
    title: 'Transforme sua presença digital',
    subtitle: 'Design e Desenvolvimento',
    description: 'Criamos sites modernos e responsivos que não apenas impressionam, mas também convertem visitantes em clientes reais.',
    image: '/images/banners/banner1.webp',
    mobileImage: '/images/banners/bannermob1.webp',
    buttonText: 'Solicitar Orçamento',
    buttonLink: getWhatsAppLink(),
    isExternal: true,
  },
  {
    id: '2',
    title: 'Resultados que impressionam',
    subtitle: 'Marketing Digital de Resultados',
    description: 'Aumente seu tráfego orgânico e converta mais visitantes em clientes com nossas estratégias de SEO e marketing digital.',
    image: '/images/banners/banner2.webp',
    mobileImage: '/images/banners/bannermob2.webp',
    buttonText: 'Conhecer Serviços',
    buttonLink: '/sobre',
    isExternal: false,
  },
  {
    id: '3',
    title: 'Design que converte',
    subtitle: 'Soluções Digitais Completas',
    description: 'Especialistas em SEO, design e desenvolvimento web. Transformamos sua presença online com estratégias inovadoras.',
    image: '/images/banners/banner3.webp',
    mobileImage: '/images/banners/bannermob3.webp',
    buttonText: 'Ver Portfólio',
    buttonLink: '/produtos',
    isExternal: false,
  },
];

export function HeroBanner() {
  const swiperRef = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animação do conteúdo do banner
  useEffect(() => {
    const animate = async () => {
      // Carregar GSAP dinamicamente
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);
      
      const content = contentRef.current;
      if (!content) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        content,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
        }
      );
    };

    animate();

    return () => {
      // Cleanup será feito automaticamente
    };
  }, []);

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
          type: 'bullets',
        }}
        className="h-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} className="h-full">
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                {/* Desktop Image */}
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover hidden md:block transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="100vw"
                  quality={90}
                />
                {/* Mobile Image */}
                <Image
                  src={banner.mobileImage || banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover md:hidden transition-transform duration-700 hover:scale-105"
                  priority
                  sizes="100vw"
                  quality={90}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center z-10">
                <div className="container-custom">
                  <div ref={contentRef} className="max-w-3xl text-white">
                    <div className="space-y-6">
                      <h1 className="heading-1 mb-4">
                        {banner.title}
                      </h1>
                      {banner.subtitle && (
                        <p className="text-xl md:text-2xl text-primary-300 mb-6 font-medium">
                          {banner.subtitle}
                        </p>
                      )}
                      <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                        {banner.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        {banner.isExternal ? (
                          <a
                            href={banner.buttonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-lg px-8 py-4"
                          >
                            {banner.buttonText}
                          </a>
                        ) : (
                          <Link
                            href={banner.buttonLink}
                            className="btn-primary text-lg px-8 py-4"
                          >
                            {banner.buttonText}
                          </Link>
                        )}
                        <button className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
                          <Play size={20} className="mr-2" />
                          Ver Vídeo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="swiper-pagination-custom" />
      </div>

      {/* Custom Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
} 
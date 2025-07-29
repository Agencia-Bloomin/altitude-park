'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Importar estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface HeroBannerProps {
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export function HeroBanner({
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: HeroBannerProps) {
  // Dados dos banners
  const banners = [
    {
      desktop: '/images/banners/banner1.webp',
      mobile: '/images/banners/bannermob1.webp',
      alt: 'Banner 1'
    },
    {
      desktop: '/images/banners/banner2.webp',
      mobile: '/images/banners/bannermob2.webp',
      alt: 'Banner 2'
    },
    {
      desktop: '/images/banners/banner3.webp',
      mobile: '/images/banners/bannermob3.webp',
      alt: 'Banner 3'
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Carrossel de Banners */}
      <div className="flex-1 relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="h-full"
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index} className="relative">
              {/* Banner Desktop */}
              <div className="hidden md:block">
                <Image
                  src={banner.desktop}
                  alt={banner.alt}
                  title={banner.alt}
                  width={1920}
                  height={1080}
                  priority={index === 0}
                  className="w-full h-screen object-cover"
                />
              </div>
              
              {/* Banner Mobile */}
              <div className="block md:hidden">
                <Image
                  src={banner.mobile}
                  alt={banner.alt}
                  title={banner.alt}
                  width={768}
                  height={1024}
                  priority={index === 0}
                  className="w-full h-screen object-cover"
                />
              </div>
              
              {/* Overlay escuro para melhor legibilidade */}
              <div className="absolute inset-0 bg-black/30"></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegação customizada */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 swiper-button-prev">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 swiper-button-next">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Botões centralizados abaixo do carrossel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button asChild size="xl" className="w-full sm:w-auto">
            <Link href={primaryButtonLink}>
              {primaryButtonText}
            </Link>
          </Button>
          <Button asChild variant="highlight-outline" size="xl" className="w-full sm:w-auto">
            <Link href={secondaryButtonLink}>
              {secondaryButtonText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 
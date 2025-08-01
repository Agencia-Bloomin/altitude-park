'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
      desktop: '/images/banners/desk-01.png',
      mobile: '/images/banners/bannermob1.webp',
      alt: 'Altitude Park - Diversão Garantida',
      title: 'Altitude Park - Diversão Garantida'
    },
    {
      desktop: '/images/banners/desk-02.png',
      mobile: '/images/banners/bannermob2.webp',
      alt: 'Melhor Parque de Trampolim do Brasil',
      title: 'Melhor Parque de Trampolim do Brasil'
    },
    {
      desktop: '/images/banners/desk-03.png',
      mobile: '/images/banners/bannermob3.webp',
      alt: 'Festa de Aniversário Inesquecível',
      title: 'Festa de Aniversário Inesquecível'
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col mt-[135px]">
      {/* Carrossel de Banners */}
      <div className="flex-1 relative">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
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
                  title={banner.title}
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
                  title={banner.title}
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
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-10 swiper-button-prev group">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-white/40">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-10 swiper-button-next group">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 border border-white/40">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Botões centralizados abaixo do carrossel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button asChild size="xl" className="w-full sm:w-auto">
            <Link href="#">
              {primaryButtonText}
            </Link>
          </Button>
          <Button asChild variant="highlight-outline" size="xl" className="w-full sm:w-auto">
            <Link href="#">
              {secondaryButtonText}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 
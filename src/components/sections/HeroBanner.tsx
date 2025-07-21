'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

export function HeroBanner({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: HeroBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const backgroundElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap');
        
        // Animação do elemento de background
        if (backgroundElementRef.current) {
          gsap.fromTo(backgroundElementRef.current,
            {
              scale: 0.5,
              opacity: 0,
              y: 50
            },
            {
              scale: 1,
              opacity: 0.3,
              y: 0,
              duration: 1.5,
              delay: 0.3,
              ease: "power2.out"
            }
          );

          // Animação contínua de flutuação
          gsap.to(backgroundElementRef.current, {
            y: -20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 1.8
          });
        }

        // Animação da primeira imagem (abaixo/à esquerda)
        if (image1Ref.current) {
          gsap.fromTo(image1Ref.current,
            {
              scale: 0,
              opacity: 0,
              x: -200,
              y: 100
            },
            {
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1.2,
              delay: 0.6,
              ease: "back.out(1.7)"
            }
          );

          // Animação contínua de flutuação
          gsap.to(image1Ref.current, {
            y: -15,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 1.8
          });
        }

        // Animação da segunda imagem (acima/à direita)
        if (image2Ref.current) {
          gsap.fromTo(image2Ref.current,
            {
              scale: 0,
              opacity: 0,
              x: 200,
              y: -100
            },
            {
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1.2,
              delay: 0.9,
              ease: "back.out(1.7)"
            }
          );

          // Animação contínua de flutuação
          gsap.to(image2Ref.current, {
            y: 15,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: 2.1
          });
        }
      }
    };

    loadGSAP();
  }, []);

  return (
    <section ref={bannerRef} className="relative min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] lg:min-h-screen flex items-center justify-center overflow-hidden pt-52 lg:pt-40 pb-20 lg:pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-tertiary-500/20"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 xl:gap-16">
          {/* Conteúdo de texto */}
          <div className="flex-1 max-w-2xl">
            <h1 className="heading-1 text-white mb-6 animate-bounce-altitude">
              {title}
            </h1>
            <p className="text-xl md:text-1xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild variant="highlight" size="xl">
                <Link href={primaryButtonLink}>
                  {primaryButtonText}
                </Link>
              </Button>
              <Button asChild variant="highlight-outline" size="xl">
                <Link href={secondaryButtonLink}>
                  {secondaryButtonText}
                </Link>
              </Button>
            </div>
          </div>

          {/* Container das imagens */}
          <div className="flex-1 relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px] sm:w-[430px] sm:h-[430px] md:w-[500px] md:h-[500px] lg:w-[450px] lg:h-[600px] xl:w-[600px] xl:h-[600px]">
              
              {/* Elemento de background */}
              <div 
                ref={backgroundElementRef}
                className="absolute -bottom-8 -right-8 lg:-bottom-8 lg:-right-16 flex items-center justify-center opacity-50"
              >
                <Image
                  src="/images/elements/radius.png"
                  alt="Elemento banner"
                  title="Elemento banner"
                  width={400}
                  height={400}
                  className="w-full h-48 md:h-52 lg:h-60 xl:h-80 object-contain"
                />
              </div>

              {/* Primeira imagem */}
              <div 
                ref={image1Ref}
                className="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96"
              >
                <Image
                  src="/images/unidades/alphaville.jpg"
                  alt="Banner Hero 1"
                  title="Banner Hero 1"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>

              {/* Segunda imagem */}
              <div 
                ref={image2Ref}
                className="absolute top-6 sm:top-8 md:top-10 right-0 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
              >
                <Image
                  src="/images/unidades/campinas.jpg"
                  alt="Banner Hero 2"
                  title="Banner Hero 2"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 
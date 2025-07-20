'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
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

  useEffect(() => {
    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap');
        
        // Animação do banner
        if (bannerRef.current) {
          gsap.fromTo(bannerRef.current, 
            { 
              scale: 0.8, 
              opacity: 0,
              y: 100
            },
            { 
              scale: 1, 
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power2.out"
            }
          );
        }
      }
    };

    loadGSAP();
  }, []);

  return (
    <section ref={bannerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-tertiary-500/20"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-custom relative z-10 text-center">
        <h1 className="heading-1 text-white mb-6 animate-bounce-altitude">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="btn-highlight text-lg px-8 py-4">
            <Link href={primaryButtonLink}>
              {primaryButtonText}
            </Link>
          </Button>
          <Button asChild className="btn-secondary text-lg px-8 py-4">
            <Link href={secondaryButtonLink}>
              {secondaryButtonText}
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
} 
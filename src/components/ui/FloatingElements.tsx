'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface FloatingElementsProps {
  className?: string;
}

export function FloatingElements({ className = '' }: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        try {
          const { gsap } = await import('gsap');
          const { ScrollTrigger } = await import('gsap/ScrollTrigger');
          
          gsap.registerPlugin(ScrollTrigger);

          const elements = containerRef.current?.querySelectorAll('.floating-element');
          
          elements?.forEach((element, index) => {
            gsap.fromTo(element,
              { 
                opacity: 0,
                scale: 0,
                rotation: 0,
                y: 50
              },
              { 
                opacity: 0.15,
                scale: 1,
                rotation: 360,
                y: 0,
                duration: 2,
                delay: index * 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  end: "bottom 10%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          });
        } catch (error) {
          console.warn('GSAP failed to load:', error);
        }
      }
    };

    loadGSAP();
  }, [isClient]);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Círculos coloridos */}
      <Image
        src="/images/elements/circle-pink.png"
        alt="Elemento decorativo rosa"
        title="Elemento decorativo rosa"
        width={120}
        height={120}
        className="floating-element absolute top-10 left-10 animate-float-1 image-auto-ratio"
      />
      <Image
        src="/images/elements/circle-blue.png"
        alt="Elemento decorativo azul"
        title="Elemento decorativo azul"
        width={100}
        height={100}
        className="floating-element absolute top-20 right-20 animate-float-2 image-auto-ratio"
      />
      <Image
        src="/images/elements/circle-green.png"
        alt="Elemento decorativo verde"
        title="Elemento decorativo verde"
        width={140}
        height={140}
        className="floating-element absolute bottom-20 left-20 animate-float-3 image-auto-ratio"
      />
      <Image
        src="/images/elements/circle-orange.png"
        alt="Elemento decorativo laranja"
        title="Elemento decorativo laranja"
        width={90}
        height={90}
        className="floating-element absolute top-1/3 left-1/4 animate-float-1 image-auto-ratio"
      />
      <Image
        src="/images/elements/circle-yellow.png"
        alt="Elemento decorativo amarelo"
        title="Elemento decorativo amarelo"
        width={110}
        height={110}
        className="floating-element absolute bottom-1/3 right-1/4 animate-float-2 image-auto-ratio"
      />

      {/* Linhas decorativas */}
      <Image
        src="/images/elements/line-pink.png"
        alt="Linha decorativa rosa"
        title="Linha decorativa rosa"
        width={200}
        height={20}
        className="floating-element absolute top-1/4 left-0 animate-float-3 opacity-10 image-auto-ratio"
      />
      <Image
        src="/images/elements/line-blue.png"
        alt="Linha decorativa azul"
        title="Linha decorativa azul"
        width={200}
        height={20}
        className="floating-element absolute bottom-1/4 right-0 animate-float-1 opacity-10 image-auto-ratio"
      />
      <Image
        src="/images/elements/line-green.png"
        alt="Linha decorativa verde"
        title="Linha decorativa verde"
        width={200}
        height={20}
        className="floating-element absolute top-1/2 left-0 animate-float-2 opacity-10 image-auto-ratio"
      />

      {/* Elementos de raio */}
      <Image
        src="/images/elements/radius-pink.png"
        alt="Elemento de raio rosa"
        title="Elemento de raio rosa"
        width={80}
        height={80}
        className="floating-element absolute top-10 right-1/3 animate-float-3 opacity-20 image-auto-ratio"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt="Elemento de raio azul"
        title="Elemento de raio azul"
        width={60}
        height={60}
        className="floating-element absolute bottom-10 left-1/3 animate-float-1 opacity-20 image-auto-ratio"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt="Elemento de raio verde"
        title="Elemento de raio verde"
        width={70}
        height={70}
        className="floating-element absolute top-1/2 right-10 animate-float-2 opacity-20 image-auto-ratio"
      />
    </div>
  );
} 
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface FloatingElementsProps {
  className?: string;
}

export function FloatingElements({ className = '' }: FloatingElementsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
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
      }
    };

    loadGSAP();
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Círculos coloridos */}
      <Image
        src="/images/elements/circle-pink.png"
        alt=""
        width={120}
        height={120}
        className="floating-element absolute top-10 left-10 animate-float-1"
      />
      <Image
        src="/images/elements/circle-blue.png"
        alt=""
        width={100}
        height={100}
        className="floating-element absolute top-20 right-20 animate-float-2"
      />
      <Image
        src="/images/elements/circle-green.png"
        alt=""
        width={140}
        height={140}
        className="floating-element absolute bottom-20 left-20 animate-float-3"
      />
      <Image
        src="/images/elements/circle-orange.png"
        alt=""
        width={90}
        height={90}
        className="floating-element absolute top-1/3 left-1/4 animate-float-1"
      />
      <Image
        src="/images/elements/circle-yellow.png"
        alt=""
        width={110}
        height={110}
        className="floating-element absolute bottom-1/3 right-1/4 animate-float-2"
      />

      {/* Linhas decorativas */}
      <Image
        src="/images/elements/line-pink.png"
        alt=""
        width={200}
        height={20}
        className="floating-element absolute top-1/4 left-0 animate-float-3 opacity-10"
      />
      <Image
        src="/images/elements/line-blue.png"
        alt=""
        width={200}
        height={20}
        className="floating-element absolute bottom-1/4 right-0 animate-float-1 opacity-10"
      />
      <Image
        src="/images/elements/line-green.png"
        alt=""
        width={200}
        height={20}
        className="floating-element absolute top-1/2 left-0 animate-float-2 opacity-10"
      />

      {/* Elementos de raio */}
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={80}
        height={80}
        className="floating-element absolute top-10 right-1/3 animate-float-3 opacity-20"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={60}
        height={60}
        className="floating-element absolute bottom-10 left-1/3 animate-float-1 opacity-20"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={70}
        height={70}
        className="floating-element absolute top-1/2 right-10 animate-float-2 opacity-20"
      />
    </div>
  );
} 
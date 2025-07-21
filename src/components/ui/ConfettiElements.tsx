'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ConfettiElementsProps {
  className?: string;
}

export function ConfettiElements({ className = '' }: ConfettiElementsProps) {
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

          const elements = containerRef.current?.querySelectorAll('.confetti-element');
          
          elements?.forEach((element, index) => {
            // Função para criar animação de confete individual
            const createConfettiAnimation = () => {
              // Posições aleatórias para cada confete
              const randomX = Math.random() * 100 - 50; // -50% a +50%
              const randomY = Math.random() * 100 - 50; // -50% a +50%
              
              // Timeline para cada confete
              const tl = gsap.timeline({
                repeat: -1, // Loop infinito
                repeatDelay: Math.random() * 3 + 1, // Delay aleatório entre repetições
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 90%",
                  end: "bottom 10%",
                  toggleActions: "play pause resume pause"
                }
              });

              // Animação de aparecimento
              tl.fromTo(element,
                { 
                  opacity: 0,
                  scale: 0,
                  rotation: 0,
                  y: -100,
                  x: randomX,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                },
                { 
                  opacity: 0.8,
                  scale: 1,
                  rotation: Math.random() * 720 - 360,
                  y: 0,
                  x: 0,
                  duration: 2 + Math.random() * 2,
                  ease: "back.out(1.7)"
                }
              );

              // Animação de desaparecimento
              tl.to(element, {
                opacity: 0,
                scale: 0,
                rotation: Math.random() * 360,
                y: 50,
                duration: 1,
                ease: "power2.in"
              }, "+=1"); // Delay de 1 segundo após aparecer

              return tl;
            };

            // Iniciar animação com delay escalonado
            gsap.delayedCall(index * 0.3, createConfettiAnimation);
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
      {/* Confetti - Elementos de raio coloridos */}
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={40}
        height={40}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={35}
        height={35}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={45}
        height={45}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={30}
        height={30}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={40}
        height={40}
        className="confetti-element absolute"
      />
      
      {/* Mais confetti espalhados */}
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={25}
        height={25}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={35}
        height={35}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={30}
        height={30}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={40}
        height={40}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={35}
        height={35}
        className="confetti-element absolute"
      />
      
      {/* Confetti adicionais para mais densidade */}
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={20}
        height={20}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={30}
        height={30}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={25}
        height={25}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={35}
        height={35}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={30}
        height={30}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Canto superior esquerdo */}
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={15}
        height={15}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={25}
        height={25}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={20}
        height={20}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Canto superior direito */}
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={18}
        height={18}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={22}
        height={22}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={16}
        height={16}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Canto inferior esquerdo */}
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={19}
        height={19}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={24}
        height={24}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={17}
        height={17}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Canto inferior direito */}
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={21}
        height={21}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={26}
        height={26}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={23}
        height={23}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Centro superior */}
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={28}
        height={28}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={14}
        height={14}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={32}
        height={32}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Centro inferior */}
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={27}
        height={27}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={13}
        height={13}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={31}
        height={31}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Centro esquerdo */}
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={29}
        height={29}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={12}
        height={12}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={33}
        height={33}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Centro direito */}
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={34}
        height={34}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={11}
        height={11}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={36}
        height={36}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Áreas intermediárias */}
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={18}
        height={18}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={24}
        height={24}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={20}
        height={20}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={26}
        height={26}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={22}
        height={22}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={28}
        height={28}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={16}
        height={16}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-blue.png"
        alt=""
        width={30}
        height={30}
        className="confetti-element absolute"
      />

      {/* Confetti extras - Pequenos detalhes */}
      <Image
        src="/images/elements/radius-green.png"
        alt=""
        width={10}
        height={10}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-orange.png"
        alt=""
        width={15}
        height={15}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-yellow.png"
        alt=""
        width={12}
        height={12}
        className="confetti-element absolute"
      />
      <Image
        src="/images/elements/radius-pink.png"
        alt=""
        width={14}
        height={14}
        className="confetti-element absolute"
      />
    </div>
  );
} 
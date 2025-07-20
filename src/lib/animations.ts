import { useEffect, useRef } from 'react';

// Importação dinâmica do GSAP para evitar problemas de SSR
let gsap: any = null;
let ScrollTrigger: any = null;

// Função para carregar GSAP dinamicamente
const loadGSAP = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    const gsapModule = await import('gsap');
    const scrollTriggerModule = await import('gsap/ScrollTrigger');
    
    gsap = gsapModule.gsap;
    ScrollTrigger = scrollTriggerModule.ScrollTrigger;
    
    // Registrar o plugin apenas uma vez
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
  } catch (error) {
    console.warn('GSAP failed to load:', error);
  }
};

// Hook para animação de fade in com scroll trigger
export const useFadeInAnimation = (delay: number = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const element = elementRef.current;
      if (!element || !gsap || !ScrollTrigger) return;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [delay]);

  return elementRef;
};

// Hook para animação de slide in da esquerda
export const useSlideInLeft = (delay: number = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const element = elementRef.current;
      if (!element || !gsap || !ScrollTrigger) return;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [delay]);

  return elementRef;
};

// Hook para animação de slide in da direita
export const useSlideInRight = (delay: number = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const element = elementRef.current;
      if (!element || !gsap || !ScrollTrigger) return;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [delay]);

  return elementRef;
};

// Hook para animação de scale in
export const useScaleIn = (delay: number = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const element = elementRef.current;
      if (!element || !gsap || !ScrollTrigger) return;

      gsap.fromTo(
        element,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [delay]);

  return elementRef;
};

// Hook para animação de stagger em elementos filhos
export const useStaggerAnimation = (delay: number = 0, stagger: number = 0.1) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const container = containerRef.current;
      if (!container || !gsap || !ScrollTrigger) return;

      const children = container.children;

      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [delay, stagger]);

  return containerRef;
};

// Hook para animação de texto (typewriter effect)
export const useTextAnimation = (delay: number = 0) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const element = elementRef.current;
      if (!element || !gsap || !ScrollTrigger) return;

      const text = element.textContent;
      if (!text) return;

      element.textContent = '';
      
      gsap.to(element, {
        duration: 0,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to(element, {
        duration: 2,
        delay,
        ease: 'none',
        onUpdate: function() {
          const progress = this.progress();
          const charCount = Math.floor(text.length * progress);
          element.textContent = text.substring(0, charCount);
        },
      });
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [delay]);

  return elementRef;
};

// Hook para animação de parallax
export const useParallax = (speed: number = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const element = elementRef.current;
      if (!element || !gsap || !ScrollTrigger) return;

      gsap.to(element, {
        yPercent: -50 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, [speed]);

  return elementRef;
};

// Função utilitária para animar elementos quando entram no viewport
export const animateOnScroll = async (
  elements: HTMLElement[],
  animation: 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn' = 'fadeIn',
  delay: number = 0,
  stagger: number = 0.1
) => {
  await loadGSAP();
  
  if (!gsap || !ScrollTrigger) return;

  const animations = {
    fadeIn: {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0 },
    },
    slideLeft: {
      from: { opacity: 0, x: -100 },
      to: { opacity: 1, x: 0 },
    },
    slideRight: {
      from: { opacity: 0, x: 100 },
      to: { opacity: 1, x: 0 },
    },
    scaleIn: {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
    },
  };

  const config = animations[animation];

  gsap.fromTo(
    elements,
    config.from,
    {
      ...config.to,
      duration: 1,
      delay,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

// Função para limpar todas as animações
export const clearAnimations = () => {
  if (ScrollTrigger) {
    ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
  }
  if (gsap) {
    gsap.killTweensOf('*');
  }
}; 
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

// Hook otimizado para animação de cards com melhor performance
export const useCardsAnimation = (delay: number = 0, stagger: number = 0.08) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const container = containerRef.current;
      if (!container || !gsap || !ScrollTrigger) return;

      const cards = container.querySelectorAll('[class*="card"]');

      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay,
            stagger,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.vars.trigger === containerRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [delay, stagger]);

  return containerRef;
};

// Hook específico para AddressesSection com animações otimizadas
export const useAddressesAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const animationRefs = useRef<any[]>([]);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const section = sectionRef.current;
      if (!section || !gsap || !ScrollTrigger) return;

      // Limpar animações anteriores
      animationRefs.current.forEach(ref => {
        if (ref && ref.kill) ref.kill();
      });
      animationRefs.current = [];

      // Animação para o título
      const title = section.querySelector('.section-title');
      if (title) {
        const titleAnim = gsap.fromTo(title,
          { 
            opacity: 0,
            y: -20
          },
          { 
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );
        animationRefs.current.push(titleAnim.scrollTrigger);
      }

      // Animação para a descrição
      const description = section.querySelector('.section-description');
      if (description) {
        const descAnim = gsap.fromTo(description,
          { 
            opacity: 0,
            y: -15
          },
          { 
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse"
            }
          }
        );
        animationRefs.current.push(descAnim.scrollTrigger);
      }

      // Animação para os cards de endereços com stagger suave
      const cards = section.querySelectorAll('.address-card');
      if (cards && cards.length > 0) {
        const cardsAnim = gsap.fromTo(cards,
          { 
            opacity: 0,
            y: 30,
            scale: 0.99
          },
          { 
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
        animationRefs.current.push(cardsAnim.scrollTrigger);
      }

      // Animação para os botões CTA
      const ctaButtons = section.querySelectorAll('.cta-buttons button');
      if (ctaButtons && ctaButtons.length > 0) {
        const buttonsAnim = gsap.fromTo(ctaButtons,
          { 
            opacity: 0,
            scale: 0.95,
            y: 10
          },
          { 
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
        animationRefs.current.push(buttonsAnim.scrollTrigger);
      }
    };

    animate();

    // Cleanup function mais robusta
    return () => {
      if (ScrollTrigger) {
        // Limpar animações específicas desta seção
        animationRefs.current.forEach(ref => {
          if (ref && ref.kill) ref.kill();
        });
        animationRefs.current = [];
        
        // Limpar todos os triggers que apontam para esta seção
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.vars.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, []);

  return sectionRef;
};

// Hook para animação de seção completa (título, descrição, cards, botões)
export const useSectionAnimation = (cardSelector: string = '[class*="card"]') => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animate = async () => {
      await loadGSAP();
      
      const section = sectionRef.current;
      if (!section || !gsap || !ScrollTrigger) return;

      // Animação para o título
      const title = section.querySelector('.section-title');
      if (title) {
        gsap.fromTo(title,
          { 
            opacity: 0,
            y: -30
          },
          { 
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animação para a descrição
      const description = section.querySelector('.section-description');
      if (description) {
        gsap.fromTo(description,
          { 
            opacity: 0,
            y: -20
          },
          { 
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animação para os cards (usando o seletor customizado)
      const cards = section.querySelectorAll(cardSelector);
      if (cards && cards.length > 0) {
        gsap.fromTo(cards,
          { 
            opacity: 0,
            y: 50,
            scale: 0.9,
            rotationY: -5
          },
          { 
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "back.out(1.3)",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animação para os botões CTA
      const ctaButtons = section.querySelectorAll('.cta-buttons button');
      if (ctaButtons && ctaButtons.length > 0) {
        gsap.fromTo(ctaButtons,
          { 
            opacity: 0,
            scale: 0.8,
            y: 20
          },
          { 
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    };

    animate();

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.vars.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [cardSelector]);

  return sectionRef;
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
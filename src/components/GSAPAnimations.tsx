'use client';

import { useEffect } from 'react';

export default function GSAPAnimations() {
  useEffect(() => {
    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Animações de scroll para seções
        gsap.utils.toArray('.section-animate').forEach((section: any) => {
          gsap.fromTo(section,
            { 
              opacity: 0,
              y: 50
            },
            { 
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        });
      }
    };

    loadGSAP();

    return () => {
      // Cleanup
      if (typeof window !== 'undefined') {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
        });
      }
    };
  }, []);

  return null; // Este componente não renderiza nada
} 
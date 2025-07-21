'use client';

import { useEffect, ReactNode } from 'react';

interface GSAPProviderProps {
  children: ReactNode;
}

export function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window === 'undefined') return;

      try {
        // Carregar GSAP dinamicamente
        const gsapModule = await import('gsap');
        const scrollTriggerModule = await import('gsap/ScrollTrigger');

        const gsapInstance = gsapModule.gsap;
        const scrollTriggerInstance = scrollTriggerModule.ScrollTrigger;

        // Verificar se os módulos foram carregados corretamente
        if (!gsapInstance || !scrollTriggerInstance) {
          throw new Error('GSAP modules not loaded properly');
        }

        // Registrar o plugin apenas se ambos existirem
        if (gsapInstance && scrollTriggerInstance) {
          gsapInstance.registerPlugin(scrollTriggerInstance);
        }
      } catch (error) {
        console.error('Failed to load GSAP:', error);
        // Fallback: tentar novamente após um delay
        setTimeout(() => {
          loadGSAP();
        }, 1000);
      }
    };

    loadGSAP();

    return () => {
      // Cleanup será feito pelos componentes individuais
    };
  }, []);

  return <>{children}</>;
} 
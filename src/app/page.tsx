'use client';

import { useEffect } from 'react';
import { 
  HeroBanner, 
  UnitsSection, 
  PricingSection, 
  AttractionsSection, 
  FAQSection, 
  PartySection 
} from '@/components';

export default function HomePage() {
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

  return (
    <div className="min-h-screen bg-gray-900">
      <HeroBanner
        title="Altitude Park"
        subtitle="O melhor parque de trampolim do Brasil! Diversão garantida para toda a família com as melhores atrações e segurança."
        primaryButtonText="Compre seu Ingresso"
        primaryButtonLink="/ingressos"
        secondaryButtonText="Faça sua Festa"
        secondaryButtonLink="/faca-sua-festa"
      />
      
      <UnitsSection />
      <PricingSection />
      <AttractionsSection />
      <FAQSection />
      <PartySection />
    </div>
  );
} 
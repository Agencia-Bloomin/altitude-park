'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, getEmailLink } from '@/data';
// GSAP será carregado dinamicamente

export function CTASection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Animações com scroll trigger
  useEffect(() => {
    const animate = async () => {
      // Carregar GSAP dinamicamente
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);
      
      const header = headerRef.current;
      const cards = cardsRef.current;
      const buttons = buttonsRef.current;

      if (!header || !cards || !buttons) return;

      // Timeline para animações sequenciais
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animação do header (fade in com scale)
      tl.fromTo(
        header,
        {
          opacity: 0,
          scale: 0.9,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
        }
      );

      // Animação dos cards (stagger com slide up)
      tl.fromTo(
        cards.children,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
        },
        '-=0.8'
      );

      // Animação dos botões (slide up)
      tl.fromTo(
        buttons,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.4'
      );
    };

    animate();

    return () => {
      // Cleanup será feito automaticamente
    };
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30px_30px,rgba(255,255,255,0.1)_2px,transparent_0)] bg-[length:60px_60px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center text-white">
          <div ref={headerRef}>
            <h2 className="heading-2 mb-6">
              Pronto para transformar sua <span className="text-quinary-300">presença digital</span>?
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Não perca mais tempo! Entre em contato conosco hoje mesmo e descubra como podemos 
              impulsionar seu negócio com soluções digitais que geram resultados reais.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80 mb-4">Resposta rápida e direta</p>
              <a
                href={getWhatsAppLink('Olá! Gostaria de solicitar um orçamento para transformar minha presença digital.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 w-full"
              >
                Enviar Mensagem
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-white/80 mb-4">Atendimento personalizado</p>
              <a
                href="tel:+5511999999999"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 w-full"
              >
                Ligar Agora
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/80 mb-4">Proposta detalhada</p>
              <a
                href={getEmailLink('Solicitação de Orçamento - Transformação Digital', 'Olá! Gostaria de solicitar um orçamento para transformar minha presença digital. Por favor, me envie uma proposta detalhada.')}
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 w-full"
              >
                Enviar Email
              </a>
            </div>
          </div>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="tertiary" size="lg" className="text-lg px-8 py-4">
              Solicitar Orçamento Gratuito
              <ArrowRight size={20} className="ml-2" />
            </Button>
            
            <Button variant="quinary" size="lg" className="text-lg px-8 py-4">
              Ver Portfólio
            </Button>
          </div>

          <div className="mt-8 text-white/70">
            <p className="text-sm">
              ⚡ Resposta em até 2 horas • 💰 Orçamento gratuito • 🎯 Proposta personalizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
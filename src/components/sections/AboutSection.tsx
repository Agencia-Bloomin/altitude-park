'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Users, Award, Target } from 'lucide-react';
// GSAP será carregado dinamicamente

const stats = [
  {
    icon: Users,
    number: '500+',
    label: 'Clientes Atendidos',
  },
  {
    icon: Award,
    number: '50+',
    label: 'Prêmios Conquistados',
  },
  {
    icon: Target,
    number: '95%',
    label: 'Taxa de Satisfação',
  },
];

const features = [
  'Mais de 10 anos de experiência',
  'Equipe especializada e certificada',
  'Resultados comprovados',
  'Atendimento personalizado',
  'Tecnologias modernas',
  'Suporte 24/7',
];

export function AboutSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animações com scroll trigger
  useEffect(() => {
    const animate = async () => {
      // Carregar GSAP dinamicamente
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');
      
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);
      
      const content = contentRef.current;
      const image = imageRef.current;
      const stats = statsRef.current;

      if (!content || !image || !stats) return;

      // Timeline para animações sequenciais
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animação do conteúdo (slide da esquerda)
      tl.fromTo(
        content,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
        }
      );

      // Animação da imagem (slide da direita)
      tl.fromTo(
        image,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.5'
      );

      // Animação dos stats (scale in)
      tl.fromTo(
        stats,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
        },
        '-=0.3'
      );
    };

    animate();

    return () => {
      // Cleanup será feito automaticamente
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div className="mb-6">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                Sobre Nós
              </span>
              <h2 className="heading-2 mt-2">
                Transformando negócios através do{' '}
                <span className="text-gradient">marketing digital</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Somos uma agência de marketing digital especializada em criar estratégias 
              inovadoras que geram resultados reais para nossos clientes. Com mais de 
              10 anos de experiência, ajudamos empresas de todos os portes a crescer 
              sua presença online e aumentar suas vendas.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é transformar ideias em resultados, utilizando as melhores 
              práticas de SEO, design e desenvolvimento web para criar experiências 
              digitais que convertem visitantes em clientes fiéis.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sobre" className="btn-primary">
                Conheça Nossa História
              </Link>
              <Link href="/contato" className="btn-outline">
                Fale Conosco
              </Link>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us.jpg"
                alt="Nossa equipe trabalhando"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Stats Cards */}
            <div ref={statsRef} className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon size={24} className="text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
'use client';

import { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Search, Palette, BarChart3, Smartphone, Globe } from 'lucide-react';
import Link from 'next/link';
// GSAP será carregado dinamicamente

const products = [
  {
    id: '1',
    title: 'Desenvolvimento Web',
    description: 'Sites modernos e responsivos com as melhores tecnologias do mercado.',
    icon: Code,
    features: ['React/Next.js', 'TypeScript', 'SEO Otimizado', 'Responsivo'],
    price: 'A partir de R$ 2.500',
    link: '/servicos/desenvolvimento-web',
  },
  {
    id: '2',
    title: 'SEO & Marketing Digital',
    description: 'Aumente seu tráfego orgânico e converta mais visitantes em clientes.',
    icon: Search,
    features: ['Otimização SEO', 'Google Ads', 'Analytics', 'Relatórios'],
    price: 'A partir de R$ 800/mês',
    link: '/servicos/seo-marketing',
  },
  {
    id: '3',
    title: 'Design Gráfico',
    description: 'Identidade visual profissional que fortalece sua marca no mercado.',
    icon: Palette,
    features: ['Logo Design', 'Branding', 'Social Media', 'Material Gráfico'],
    price: 'A partir de R$ 500',
    link: '/servicos/design-grafico',
  },
  {
    id: '4',
    title: 'Consultoria Digital',
    description: 'Estratégias personalizadas para transformar sua presença online.',
    icon: BarChart3,
    features: ['Análise de Mercado', 'Estratégia Digital', 'Planejamento', 'Mentoria'],
    price: 'A partir de R$ 1.200',
    link: '/servicos/consultoria',
  },
  {
    id: '5',
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android.',
    icon: Smartphone,
    features: ['React Native', 'iOS/Android', 'UI/UX Design', 'Manutenção'],
    price: 'A partir de R$ 8.000',
    link: '/servicos/apps-mobile',
  },
  {
    id: '6',
    title: 'E-commerce',
    description: 'Lojas virtuais completas para vender online com segurança.',
    icon: Globe,
    features: ['WooCommerce', 'Shopify', 'Pagamentos', 'Logística'],
    price: 'A partir de R$ 3.500',
    link: '/servicos/ecommerce',
  },
];

export function ProductsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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
      const cta = ctaRef.current;

      if (!header || !cards || !cta) return;

      // Timeline para animações sequenciais
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animação do header (fade in)
      tl.fromTo(
        header,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }
      );

      // Animação dos cards (stagger)
      tl.fromTo(
        cards.children,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        },
        '-=0.5'
      );

      // Animação do CTA (scale in)
      tl.fromTo(
        cta,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
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
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em marketing digital, design e desenvolvimento web 
            para impulsionar sua presença online e gerar resultados reais.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card key={product.id} className="card-hover group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                    <IconComponent size={32} className="text-primary-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg font-semibold text-primary-600 mb-3">
                      {product.price}
                    </p>
                    <Link href={product.link}>
                      <Button className="w-full group-hover:bg-primary-700 transition-colors duration-200">
                        Saiba Mais
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div ref={ctaRef} className="text-center mt-12">
          <Link href="/servicos">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Ver Todos os Serviços
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
// GSAP será carregado dinamicamente

const faqs = [
  {
    id: '1',
    question: 'Quanto tempo leva para desenvolver um site?',
    answer: 'O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Sites institucionais simples levam de 2 a 4 semanas, enquanto e-commerces mais complexos podem levar de 6 a 12 semanas. Sempre fornecemos um cronograma detalhado no início do projeto.',
  },
  {
    id: '2',
    question: 'Vocês fazem manutenção dos sites após o lançamento?',
    answer: 'Sim! Oferecemos planos de manutenção que incluem atualizações de segurança, backups, monitoramento de performance e suporte técnico. É fundamental manter seu site sempre atualizado e seguro.',
  },
  {
    id: '3',
    question: 'Como funciona o processo de SEO?',
    answer: 'Nosso processo de SEO inclui análise técnica do site, pesquisa de palavras-chave, otimização de conteúdo, link building e monitoramento contínuo dos resultados. Os primeiros resultados aparecem em 3-6 meses, dependendo da competitividade do mercado.',
  },
  {
    id: '4',
    question: 'Vocês trabalham com empresas de qualquer tamanho?',
    answer: 'Sim! Atendemos desde startups e pequenas empresas até grandes corporações. Adaptamos nossas soluções e metodologias para atender às necessidades específicas de cada cliente, independentemente do porte da empresa.',
  },
  {
    id: '5',
    question: 'Posso ver exemplos de trabalhos anteriores?',
    answer: 'Claro! Temos um portfólio completo com casos de sucesso e projetos realizados. Você pode conferir em nossa seção de portfólio ou solicitar uma apresentação personalizada durante nossa conversa inicial.',
  },
  {
    id: '6',
    question: 'Como funciona o pagamento dos projetos?',
    answer: 'Trabalhamos com parcelamento flexível. Geralmente, 50% na assinatura do contrato, 25% na aprovação do layout e 25% na entrega final. Para projetos de marketing digital, oferecemos planos mensais com diferentes pacotes de serviços.',
  },
  {
    id: '7',
    question: 'Vocês oferecem suporte após o projeto?',
    answer: 'Sim! Oferecemos suporte técnico por 30 dias após a entrega do projeto. Além disso, temos planos de manutenção contínua que incluem suporte prioritário, atualizações e monitoramento do site.',
  },
  {
    id: '8',
    question: 'Como posso começar um projeto com vocês?',
    answer: 'É simples! Entre em contato conosco através do WhatsApp, email ou formulário do site. Agendamos uma reunião para entender suas necessidades, apresentar nossas soluções e elaborar uma proposta personalizada para seu projeto.',
  },
];

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<string | null>('1');
  const headerRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
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
      const faqs = faqsRef.current;
      const cta = ctaRef.current;

      if (!header || !faqs || !cta) return;

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

      // Animação dos FAQs (stagger)
      tl.fromTo(
        faqs.children,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
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

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos. 
            Se não encontrar a resposta que procura, entre em contato conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={faqsRef} className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="font-semibold text-lg text-gray-900">
                    {faq.question}
                  </span>
                  {openFaq === faq.id ? (
                    <ChevronUp size={20} className="text-primary-600" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div ref={ctaRef} className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de tirar algumas dúvidas sobre os serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
} 
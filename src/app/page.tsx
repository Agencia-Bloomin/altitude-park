'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { Button } from '@/components/ui/button';
import { FloatingElements } from '@/components/sections/FloatingElements';

export default function HomePage() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Importar GSAP apenas no cliente
    const loadGSAP = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        gsap.registerPlugin(ScrollTrigger);

        // Animação do banner
        if (bannerRef.current) {
          gsap.fromTo(bannerRef.current, 
            { 
              scale: 0.8, 
              opacity: 0,
              y: 100
            },
            { 
              scale: 1, 
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power2.out"
            }
          );
        }

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

  const attractions = [
    { name: 'Free Jump', image: '/images/atracoes/freejump.jpg', description: 'Pule livremente em nossas camas elásticas' },
    { name: 'Ninja Course', image: '/images/atracoes/ninja.jpg', description: 'Desafie-se no percurso ninja' },
    { name: 'Cow Ball', image: '/images/atracoes/cowball.jpg', description: 'Divirta-se com a bola de vaca' },
    { name: 'Crazy Bubble', image: '/images/atracoes/crazy-bubble.jpg', description: 'Entre na bolha maluca' },
    { name: 'Lula', image: '/images/atracoes/lula.jpg', description: 'Experimente a atração lula' },
    { name: 'Twister', image: '/images/atracoes/twister.jpg', description: 'Gire no twister' },
  ];

  const faqItems = [
    {
      question: 'QUAIS AS IDADES PERMITIDAS NO JUMP?',
      answer: 'Pessoas de todas as idades são bem vindas no Altitude Park. Entretanto, crianças de até 4 anos pagam ingresso normalmente e só podem pular mediante apresentação de um documento, que comprove sua idade e devem, obrigatoriamente, estar acompanhadas de um adulto pagante. Crianças de 5 anos comprovado com um documento de identidade válido já podem entrar sozinhos. IMPORTANTE: O acesso às camas elásticas, para menores de 18 anos, é permitido somente mediante assinatura do Termo de Responsabilidade por uma pessoa maior de idade, responsável pelo menor.'
    },
    {
      question: 'COMO O PARQUE FUNCIONA?',
      answer: 'O Altitude Park é um parque de camas elásticas e espumas com diversas atrações distintas mas, todas elas baseiam-se neste cenário. O valor dos ingressos equivale a 01 hora dentro das dependências das camas elásticas. O acesso ao parque não é cobrado.'
    },
    {
      question: 'MEIAS ANTI-DERRAPANTES SÃO OBRIGATÓRIAS?',
      answer: 'Sim! Para a sua segurança, as meias antiderrapantes são de uso obrigatório nas dependências das camas elásticas. Caso não as possua, poderá adquirir (comprar) as suas nos caixas do Altitude Park ou em nosso site. O valor atual do par é de R$ 35,00 e temos todos os tamanhos disponíveis. Caso ja tenha adquirido, em uma visita anterior ou caso tenha meias com solado de borracha, poderá utilizá-las sem problemas.'
    },
    {
      question: 'AS CAMAS ELÁSTICAS SÃO SEGURAS?',
      answer: 'As camas elásticas do Altitude Park são projetadas para oferecer o máximo de segurança aos usuários. Todas elas dispõe de proteções e os materiais são de máxima segurança. Porém, por se tratar de uma atividade de movimento, é aconselhável, ao cliente, respeitar algumas regras de segurança, expostas no parque em diversos cartazes.'
    },
    {
      question: 'PETS podem entrar no Altitude Park?',
      answer: 'Sim, animais domésticos podem entrar nas áreas comuns. Durante todo o tempo, o pet precisa usar a guia e a coleira. Ainda, conforme a Lei Estadual n° 11.531/03 e Lei Municipal n° 13.131/01, é obrigatório o uso de focinheira para cães das raças Pit Bull, Rottweiller, Mastim Napolitano, American Staffordshire Terrier e raças mestiças.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Banner Hero */}
      <section ref={bannerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-blue-600/20"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="heading-1 text-white mb-6 animate-bounce-altitude">
            Altitude Park
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            O melhor parque de trampolim do Brasil! Diversão garantida para toda a família com as melhores atrações e segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-highlight text-lg px-8 py-4">
              <Link href="/ingressos">
                Compre seu Ingresso
              </Link>
            </Button>
            <Button asChild className="btn-secondary text-lg px-8 py-4">
              <Link href="/faca-sua-festa">
                Faça sua Festa
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Seção Unidades */}
      <section className="section-padding section-animate relative">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">Nossas Unidades</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Encontre a unidade mais próxima de você e venha se divertir!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {siteConfig.contact.addresses.map((address, index) => {
              // Mapear nomes das unidades para nomes de arquivos
              const getImagePath = (name: string) => {
                const imageMap: { [key: string]: string } = {
                  'Alphaville': 'alphaville.jpg',
                  'Americana': 'americana.jpg',
                  'Campinas': 'campinas.jpg',
                  'Moema': 'moema.jpg',
                  'Morumbi': 'morumbi.png',
                  'São José dos Campos': 'sao-jose.png',
                  'Tatuapé/Anália Franco': 'tatuape.jpg',
                  'Shopping Vila Olímpia': 'vila-olimpia.jpg'
                };
                return imageMap[name] || 'alphaville.jpg';
              };

              return (
                <div key={address.name} className="card">
                  <div className="card-image-container">
                    <Image
                      src={`/images/unidades/${getImagePath(address.name)}`}
                      alt={address.name}
                      width={400}
                      height={300}
                      className="card-image"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{address.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{address.street}</p>
                    <p className="text-gray-400 text-sm mb-4">{address.city} - {address.state}</p>
                    <div className="text-xs text-gray-500">
                      <p>{address.workingHours.weekdays}</p>
                      <p>{address.workingHours.weekends}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Valores */}
      <section className="section-padding section-animate bg-gray-800 relative">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Preços especiais para toda a família!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Valor Especial */}
            <div className="card-special relative pt-12">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  ESPECIAL
                </span>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">R$ 49,99</div>
                <div className="text-lg text-gray-300 mb-4">20 Primeiros Minutos</div>
                <div className="text-sm text-gray-400 mb-6">R$ 1,00 - Minuto Adicional</div>
                <div className="text-xs text-gray-500">Somente Unidades SÃO JOSÉ E VILA OLÍMPIA</div>
              </div>
            </div>

            {/* Valor Semana */}
            <div className="card">
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">R$ 79,99</div>
                <div className="text-lg text-gray-300 mb-4">por hora</div>
                <div className="text-sm text-gray-400">Segunda à Quinta-Feira</div>
              </div>
            </div>

            {/* Valor Fim de Semana */}
            <div className="card">
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">R$ 89,99</div>
                <div className="text-lg text-gray-300 mb-4">por hora</div>
                <div className="text-sm text-gray-400">Sexta à Domingo e Feriados</div>
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 text-center">
            <div className="bg-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">Informações Importantes</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong>MEIA ANTIDERRAPANTE:</strong> R$ 35,00</p>
                <p><strong>INGRESSO PROMOCIONAL</strong> para aniversariante, acompanhante de menor de 5 anos e pessoa com deficiência.</p>
                <p>O acompanhante da PCD é cortesia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Atrações */}
      <section className="section-padding section-animate relative">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">Nossas Atrações</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Diversão garantida com as melhores atrações para toda a família!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <div key={attraction.name} className="card">
                <div className="card-image-container">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    width={400}
                    height={300}
                    className="card-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{attraction.name}</h3>
                  <p className="text-gray-400">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção FAQ */}
      <section className="section-padding section-animate bg-gray-800 relative">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Tire suas dúvidas sobre o Altitude Park
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="card">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6 text-left">
                    <h3 className="text-lg font-bold text-white pr-4">{item.question}</h3>
                    <svg className="w-5 h-5 text-pink-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-400 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Faça sua Festa */}
      <section className="section-padding section-animate relative">
        <FloatingElements />
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">Faça sua Festa</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Celebre seu aniversário ou evento especial no Altitude Park!
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Festas Inesquecíveis
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Oferecemos pacotes completos para festas de aniversário, eventos corporativos e comemorações especiais. 
                Entre em contato conosco para solicitar um orçamento personalizado!
              </p>
              <Button asChild className="btn-highlight text-lg px-8 py-4">
                <Link href="/faca-sua-festa">
                  Solicitar Cotação
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
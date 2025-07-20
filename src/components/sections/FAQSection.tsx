'use client';

import { FloatingElements } from './FloatingElements';

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

export function FAQSection() {
  return (
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
                  <svg className="w-5 h-5 text-primary-400 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  );
} 